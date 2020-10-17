'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const School = use("App/Models/School");
const Group = use("App/Models/Group");
const SubjectGroup = use("App/Models/SubjectGroup");
const SchoolGroup = use("App/Models/SchoolGroup");
const Professor = use("App/Models/Professor");
const SchoolClass = use("App/Models/SchoolClass");
const Class = use("App/Models/Class");
const ScheduleGrid = use("App/Models/ScheduleGrid");
const Report = use("App/Models/Report");

const {WeekDaysInArray} = require('../../Utils/functionsInTurn.js');
const {convertHourToMinutes} = require('../../Utils/convertHourToMinutes.js');
const {QtdClasses} = require('../../Utils/qtdClasses.js');
const {FormatReport, FormatProfessor} = require('../../Utils/formatReport');

class ReportController {
  async store({request, response}){
    const school_id = request.params.id_school;
    const {rows: classes_in_school} = await SchoolClass.query().where({school_id}).fetch();

    await Promise.all(classes_in_school.map(async ({class_id})=>{
      await Class.query().where({id: class_id}).delete();
    }));

    const groups = await SchoolGroup.query().where({school_id}).fetch();

    const global_groups = await Promise.all(groups.rows.map(async ({group_id})=>{
      const group = await Group.find(group_id);
      const subjects = await SubjectGroup.pair('subject_id','total_classes');
      const turn = await group.turn().fetch();
      const days_of_week = WeekDaysInArray(turn.flg_sunday, turn.flg_monday, turn.flg_tuesday, turn.flg_wednesday, turn.flg_thursday, turn.flg_friday, turn.flg_saturday);

      const days = await Promise.all(days_of_week.map(async (value, index)=>{
        let classes_obj = {};
        const schedules = await turn.schedules().where({day: days_of_week[index]}).fetch();
        schedules.rows.map(({id, start, end}, index)=>{
          start = convertHourToMinutes(start),
          end = convertHourToMinutes(end),
          classes_obj["class"+(index+1)] = {
            schedule_id: id,
            start,
            end,
            available: true
          };
        });
        const classes = Object.entries(classes_obj).map((e) => ( { [e[0]]: e[1] } ));

        return {day: value, classes};
      }));

      return {group_id, name: group.name, subjects, days};
    }));

    const professors = await Professor.query().where({school_id}).orderBy('prority').fetch();

    const global_professors = await Promise.all(professors.rows.map(async (professor)=>{
      const subjects = await professor.subjects().fetch();

      const subject_ids = subjects.rows.map(({$attributes:{id}})=>{
      return id;
      });

      const allDays = await professor.days().fetch();
      const days = await Promise.all(allDays.rows.map(async (day)=>{
      const allSchedules = await day.schedules().fetch();
      const schedules = allSchedules.rows.map(({start, end})=>{
          start = convertHourToMinutes(start);
          end = convertHourToMinutes(end);
          const total = end - start;

          return {start, end, total};
      });

      let unavailables = [];

      return {day: day.day, schedules, unavailables};
      }));

      return {professor_id: professor.id, name: professor.name, subjects: subject_ids, days};
    }));


    //Loop para selecionar professor por professor
    for(const professor of global_professors){
      console.log(professor)
      //Loop para selecionar matéria por matéria do professor
      for(const subject of professor.subjects){
        //Loop para selecionar dia por dia do professor
        for (const day of professor.days){
          //Loop para selecionar turma por turma
          for (const group of global_groups){
            //constante com o total de aulas da matéria selecionada
            const classes = group.subjects[subject];
            //verificar se ainda tem aulas disponíveis desta matéria
            if(classes > 0){
              const this_professor = await Professor.find(professor.professor_id);
              const this_group = await Group.find(group.group_id);
              const class_exists = await this_group.classes().where({subject_id: subject}).fetch();
              let created_class = null;

              if(class_exists.rows[0] == null){
                created_class = await this_group.classes().create({subject_id: subject});
              }
              else{
                created_class = class_exists.rows[0];
              }
              //index do dia
              const index = group.days.map((g_day)=>{return g_day.day}).indexOf(day.day);
              //armazena todas as aulas de uma turma
              const all_classes = group.days[index].classes;
              //filtra as aulas que ainda estão disponiveis
              const all_available_classes = all_classes.filter((this_class, i)=>{
                if(this_class["class"+(i+1)].available)
                  return this_class
              })
              //verifica se ainda tem aulas disponiveis
              if(all_available_classes.length > 0){
                //Loop para selecionar horário por horário de um dia
                for(const schedule of day.schedules){
                  //verifica se nesse horário ainda tem tempo restante
                  if(schedule.total > 0){
                    //filtra as aulas que se encaixam com esse horário
                    const partial_available_classes = all_available_classes.filter((this_class, i)=>{
                      const class_number = Object.keys(all_available_classes[i])[0];
                      return (this_class[class_number].start >= schedule.start && this_class[class_number].end <= schedule.end);
                    })
                    //filtra as aulas que o professor que está disponível
                    const available_classes = partial_available_classes.filter((this_class, i)=>{
                        const class_number = Object.keys(partial_available_classes[i])[0];
                        if(day.unavailables.length > 0){
                          for(let this_schedule of day.unavailables){
                            if(!(this_class[class_number].start >= this_schedule.start && this_class[class_number].start <= this_schedule.end))
                              return this_class
                          }
                        }
                        else{
                          return this_class
                        }
                    })
                    //verifica se ainda tem aulas disponiveis
                    if(available_classes.length > 0){
                      //armazena a quantidade de aula que esrá lecionada nesse dia
                      const qtd_classes = QtdClasses(classes, available_classes.length)
                      //armazena a quantidade de horários preenchidos com aulas
                      const qtd_oldUnvailablesSchedules = day.unavailables.length;
                      //Loop para alterar algumas configurações
                      for(let i = 0; i < qtd_classes; i++){
                        const class_number = Object.keys(available_classes[i])[0]
                        const num = class_number.replace("class","")
                        //indisponibiliza essa aula
                        group.days[index].classes[num-1][class_number].available = false;
                        //subtrai a quantidade de aulas de uma matéria
                        group.subjects[subject]--;
                        //começo e fim dessa aula
                        const class_start = group.days[index].classes[num-1][class_number].start;
                        const class_end = group.days[index].classes[num-1][class_number].end;
                        //subtrai o tempo da aula do tempo restante do professor
                        schedule.total -= (class_end - class_start);
                        //atribui a aula como horário indisponível do professor
                        if(day.unavailables.length == qtd_oldUnvailablesSchedules){
                          day.unavailables.push({start: class_start, end: class_end})
                        }
                        else{
                          day.unavailables[qtd_oldUnvailablesSchedules]["end"] = class_end;
                        }
                        const schedule_id = group.days[index].classes[num-1][class_number].schedule_id;
                        await created_class.class_schedule().create({schedule_id: schedule_id});
                      }
                      const class_professor_exists = await this_professor.class_professor().where({class_id: created_class.id}).fetch();
                      if(class_professor_exists.rows[0] == null)
                        await this_professor.class_professor().create({class_id: created_class.id});
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    const schedule_grid_rows = await ScheduleGrid.query().where({school_id}).fetch();
    const schedule_grid = schedule_grid_rows.toJSON();

    const school = await School.find(school_id);
    const now_date = new Date();
    const emission = now_date.getFullYear() + "/" + (now_date.getMonth()+1) + "/" + now_date.getDate();
    const content = FormatReport(schedule_grid);
    const {content: report} = await school.reports().create({content: JSON.stringify(content), emission});

    return response.status(201).send(report)
  }

  async index({request, response}){
    try{
      const school = await School.find(request.params.id_school);
      const report_rows = school.reports().fetch();
      if(report_rows.rows > 0)
        return response.status(200).send(report_rows.toJSON());
      else
        return response.status(200).send({message: "Não há relatórios"});
    }
    catch{
      return response.status(500).send({message: "Falha na listagem dos relatórios"});
    }
  }

  async show({request, response}){
    try{
      const report = await Report.find(request.params.id);
      return response.status(200).send(report.content);
    }
    catch{
      return response.status(404).send({message: "Relatório não encontrado"});
    }
  }

  /* async showProfessor({request, response}){
    try{
      const school_id = request.params.id_school;
      const schedule_grid_rows = await ScheduleGrid.query().where({school_id}).fetch();
      const schedule_grid = schedule_grid_rows.toJSON();
      const content = FormatProfessor(schedule_grid);

      return response.status(201).send(content)
    }
    catch{
      return response.status(404).send("Relatório não encontrado");
    }
  } */
}

module.exports = ReportController
