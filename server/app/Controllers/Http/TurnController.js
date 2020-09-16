"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Turn = use("App/Models/Turn");
const Schedule = use("App/Models/Schedule");
const Database = use("Database");

const { Schedules, Intervals } = require('../../Utils/createSchedules.js');
const {WeekDaysInArray, WeekDaysInBinary} = require('../../Utils/functionsInTurn.js')

class TurnController {
  async store({ request, response, auth }) {
    //objetos da requisição
    const { name, period, start, end, class_duration, intervals, week_days } = request.all();
    //pegar id da escola
    const school_id = request.params.id_school;
    try{
      console.log(week_days)
      //colocar os dias em binário
      const flg_days = WeekDaysInBinary(week_days);

      const {flg_sunday,flg_monday,flg_tuesday,flg_wednesday,flg_thursday,flg_friday,flg_saturday} = flg_days;
      console.log(flg_friday)
      //criar turno e resgatar id
      const { id: turn_id } = await Turn.create({name, period, school_id,flg_sunday,flg_monday,flg_tuesday,flg_wednesday,flg_thursday,flg_friday,flg_saturday});

      //loop para criar os horários do turno
      week_days.map((day) => {
        //array com todos os horários
        const days_of_week = Schedules(start, end, class_duration, intervals);
        //registrando no banco os horários
        days_of_week.map(async ({ start, end }) => {
          await Schedule.create({turn_id, day, start, end});
        })
      })

      return response.status(201).send({ id:turn_id, message: "Turno criado com sucesso" });
    }
    catch{
      return response.status(500).send({ message: "Falha na criação do turno" });
    }
  }

  async destroy({ request, response }) {
    const id = request.params.id;

    try{
      await Turn.query().where({id}).delete();
      return response.status(200).send({ message: "Turno apagado com sucesso" })
    }
    catch{
      return response.status(404).send({ message: "Turno não encontrado" })
    }
  }

  async update({ request, response }) {
    const turn_id = request.params.id;

    const { name, period, start, end, class_duration, intervals, week_days } = request.all();
    try{
      //seleção de todos horários do turno
      const allSchedules = await Schedule.query().where({ turn_id }).fetch();

      //constante que armaneza todos horários da requisição
      let schedules = [];
      week_days.map((day) => {
        const days_of_week = Schedules(start, end, class_duration, intervals);
        days_of_week.map(({ start, end }) => {
          const horario = { turn_id, day, start, end };
          schedules.push(horario);
        });
      });

      //constante que armazena novos horários adicionados
      const addedSchedules = schedules.filter((value, index) => {
        return index > allSchedules.rows.length - 1;
      });

      //registro desses novos horários
      addedSchedules.map(async (value) => {
        schedules.pop();
        try{
          await Schedule.create(value);
        }
        catch{
          return response.status(500).send({ message: "Erro inesperado"});
        }
      });

      //atualização dos dados dos horários
      schedules.map(async ({ day, start, end }, index) => {
        const { id } = allSchedules.rows[0];
        allSchedules.rows.shift();
        await Schedule.query().where({ id }).update({ day, start, end});
      });

      //apagar horários já não existentes
      allSchedules.rows.map(async ({ $attributes: {id} }) => {
        await Schedule.query().where({id}).delete();
      });

      //colocar os dias em binário
      const flg_days = WeekDaysInBinary(week_days);

      const {flg_sunday,flg_monday,flg_tuesday,flg_wednesday,flg_thursday,flg_friday,flg_saturday} = flg_days;

      await Turn.query().where({id: turn_id}).update({name, period, flg_sunday,flg_monday,flg_tuesday,flg_wednesday,flg_thursday,flg_friday,flg_saturday});

      return response.status(200).send({ message: "Turno atualizado com sucesso" });
    }
    catch{
      return response.status(404).send({message: "Turno não encontrado"});
    }
  }

  async show({ request, response }) {
    //id do turn
    const turn_id = request.params.id;

    try{
      //objetos da requisição
      const {rows:[{$attributes:{name, period, flg_sunday, flg_monday, flg_tuesday, flg_wednesday, flg_thursday, flg_friday, flg_saturday}}]} = await Turn.query().where('id', turn_id).fetch();
      //array dos dias da semana em numeros
      const week_days = WeekDaysInArray(flg_sunday, flg_monday, flg_tuesday, flg_wednesday, flg_thursday, flg_friday, flg_saturday);
      //seleção todos horários de um dia
      const schedules = await Schedule.query().where({ turn_id, day: week_days[0]}).fetch();
      //definir os intervalos, inicio e fim do dia e duração da aula
      const { intervals, d_start, d_end, class_duration } = Intervals(schedules.rows);

      return response.status(200).send({name, period, start: d_start, end: d_end, class_duration, intervals, week_days});
    }
    catch{
      return response.status(404).send({message: "Turno não encontrado"})
    }
  }

  async index({ request, response }) {
    //id da escola
    const school_id = request.params.id_school;
    try{
      //todos turnos da escola
      const listTurns = await Turn.query().where({school_id}).fetch();
      //loop para selecionar os horários de cada turno
      const turns = await Promise.all(listTurns.rows.map(async ({ id: turn_id, name, period, flg_sunday, flg_monday, flg_tuesday, flg_wednesday, flg_thursday, flg_friday, flg_saturday }, index) => {
        //array dos dias da semana em numeros
        const week_days = WeekDaysInArray(flg_sunday, flg_monday, flg_tuesday, flg_wednesday, flg_thursday, flg_friday, flg_saturday);
        //seleção todos horários de um dia
        const schedules = await Schedule.query().where({ turn_id, day: week_days[0] }).fetch();
        //definir os intervalos, inicio e fim do dia e duração da aula
        const { intervals, d_start, d_end, class_duration } = Intervals(schedules.rows);

        return {name, period, start: d_start, end: d_end, class_duration, intervals, week_days};
      }))

      return response.status(200).send({turns});
    }
    catch{
      return response.status(500).send({message: "Falha na seleção dos turnos"});
    }
  }
}

module.exports = TurnController;
