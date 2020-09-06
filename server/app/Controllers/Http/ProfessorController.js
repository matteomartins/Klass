'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Professor = use('App/Models/Professor');
const SubjectProfessor = use('App/Models/SubjectProfessor');
const AvailableDay = use('App/Models/AvailableDay');
const AvailableSchedule = use('App/Models/AvailableSchedule');

const Database = use('Database');

class ProfessorController {
  async create({request, response}){
    const {name, email, subjects} = request.all();
    const school_id = request.params.id_school;

    const {id} = await Professor.create({school_id, name, email});

    //registrar as matérias do professor
    subjects.map(async (value)=>{
      await SubjectProfessor.create({professor_id: id, subject_id: value})
    });

    return response.status(201).send({ message: "Professor criado com sucesso" });
  }

  async index({request}){
    const professor_id = request.params.id_professor;
    const professor = await Professor.query().where('id', professor_id).fetch();
    const {name, email, titulation, priority} = professor.rows[0];

    //selecionar as matérias
    const {rows:[{$attributes:{subject_id: subjects}}]} = await SubjectProfessor.query().where({professor_id}).fetch();
    /*const subjects = allSubjects.map(({subject_id})=>{
      return subject_id
    });*/

    //selecionar os dias e horários
    const allDays = await Database.table('available_days').where({professor_id});

    const days = await Promise.all(allDays.map(async({id, day})=>{
      const allSchedules = await Database.table('available_schedules').where('available_days_id', id);
      const schedules = await Promise.all(allSchedules.map(({start, end})=>{
        return {start, end}
      }));
      return {day, schedules}
    }));

    return {name, email, subjects, titulation, priority, days};
  }

  async generalIndex({request}){
    const school_id = request.params.id_school;
    const listProfessors = await Professor.query().where({school_id}).fetch();

    const professors = await Promise.all(listProfessors.rows.map(async ({id, name, email, titulation, priority})=>{
      //selecionar as matérias
      const allSubjects = await Database.table('subject_professors').where({professor_id: id});
      const subjects = allSubjects.map(({subject_id})=>{
        return subject_id
      });

      //selecionar os dias e horários
      const allDays = await Database.table('available_days').where({professor_id: id});

      const days = await Promise.all(allDays.map(async({id, day})=>{
        const allSchedules = await Database.table('available_schedules').where('available_days_id', id);
        const schedules = await Promise.all(allSchedules.map(({start, end})=>{
          return {start, end}
        }));
        return {day, schedules}
      }));

      return {name, email, subjects, titulation, priority, days}
    }));

    return professors;
  }

  async delete({request, response}){
    const idProfessor = request.params.id_professor;

    await Professor.query().where('id', idProfessor).delete();

    return response.status(200).send({ message: "Professor apagado com sucesso" });
  }

  async schoolUpdate({request, response}){
    const professor_id = request.params.id_professor;
    const {name, email, subjects, priority} = request.all();

    //mudar as matérias
    const oldSubjects = await SubjectProfessor.query().where({professor_id}).fetch();
    const subjectIDS = oldSubjects.rows.map(({$attributes})=>{return $attributes.subject_id});

    const addedSubjects = subjects.filter((value)=>{
      if(!subjectIDS.includes(value))
        return value
    });

    addedSubjects.map(async (value)=>{
      await SubjectProfessor.create({professor_id, subject_id: value})
    });

    subjects.map(async (value)=>{
      const index = subjectIDS.indexOf(value);
      subjectIDS.splice(index,1);
    });

    subjectIDS.map(async(value)=>{
      await SubjectProfessor.query().where({subject_id: value, professor_id}).delete();
    });

    await Professor.query().where('id', professor_id).update({name, email, priority});

    return response.status(200).send({ message: "Professor atualizado com sucesso" });
  }

  async userUpdate({request, response}){
    const professor_id = request.params.id_professor;
    const {titulation, days} = request.all();
    const allAvailableDays = await AvailableDay.query().where({professor_id}).fetch();
    const oldDays = allAvailableDays.rows.map(({$attributes:{day}})=>{return day})

    const addedDays = days.filter(({day}, index)=>{
      if(!oldDays.includes(day))
        return days[index]
    });

    addedDays.map(async({day, schedules})=>{
      const thisDay = day;
      const removeDay = days.find(({day})=>{return day === thisDay});
      const index = days.indexOf(removeDay);
      days.splice(index, 1);
      const {id: available_days_id} = await AvailableDay.create({professor_id, day});
      schedules.map(async({start, end})=>{
        await AvailableSchedule.create({available_days_id, start, end});
      });
    });

    await Promise.all(days.map(async({day, schedules})=>{
      const [{$attributes: {id: available_days_id}}] = allAvailableDays.rows.filter(({$attributes})=>$attributes.day === day);
      const allSchedules = await AvailableSchedule.query().where({available_days_id}).fetch();
      const upSchedules = allSchedules.toJSON();
      const qtdSchedules = allSchedules.rows.length;
      const addedSchedules = schedules.filter((value, index)=>{return index > qtdSchedules - 1;});

      addedSchedules.map(async ({start, end})=>{
        schedules.pop();
        await AvailableSchedule.create({available_days_id, start, end});
      });

      schedules.map(async ({start, end}, index)=>{
        const {id} = upSchedules[index];
        allSchedules.rows.shift();
        await AvailableSchedule.query().where({id}).update({start, end});
      });

      allSchedules.rows.map(async({$attributes})=>{
        await AvailableSchedule.query().where({id: $attributes.id}).delete();
      })

      const removeDay = allAvailableDays.rows.find(({$attributes})=>{return $attributes.id === available_days_id});
      const index = allAvailableDays.rows.indexOf(removeDay);
      allAvailableDays.rows.splice(index, 1);
      await AvailableDay.query().where({id: available_days_id}).update({day});
    }));

    allAvailableDays.rows.map(async($attributes)=>{
      await AvailableDay.query().where({id: $attributes.id}).delete();
    })

    await Professor.query().where('id', professor_id).update({titulation});

    return response.status(200).send({ message: "Professor atualizado com sucesso" });
  }
}

module.exports = ProfessorController
