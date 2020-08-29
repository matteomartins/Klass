'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Turn = use('App/Models/Turn')
const Schedule = use('App/Models/Schedule')
const Database = use('Database')

const {Schedules} = require('../../Utils/createSchedules.js')

class TurnController {
  async create({request, response, auth}){

    const {name, period, start, end, class_duration, intervals, week_days} = request.all();
    //pegar id da escola
    const school_id = request.params.id_school;

    //definir os dias
    const days = ["flg_sunday","flg_monday","flg_tuesday","flg_wednesday","flg_thursday","flg_friday","flg_saturday"];
    const teste = days.map((day,index)=>{
      if(week_days.includes(index))
        return 1
      else
        return 0
    })
    //objeto com todos os valores
    const turno={
      "name": name,
      "period": period,
      "school_id": school_id,
      "flg_sunday": teste[0],
      "flg_monday": teste[1],
      "flg_tuesday": teste[2],
      "flg_wednesday": teste[3],
      "flg_thursday": teste[4],
      "flg_friday": teste[5],
      "flg_saturday": teste[6]
    }

    //criar turno
    const{id} = await Turn.create(turno);

    week_days.map((day)=>{
      const days_of_week = Schedules(start, end, class_duration, intervals);
      days_of_week.map(async ({start, end})=>{
        const horario = {
          "turn_id": id,
          "day": day,
          "start": start.toString(),
          "end": end.toString()
        }

        await Schedule.create(horario);
      })
    })

    return response.status(200).send({ message: "Turno criado com sucesso" });
  }

  async delete({request, response}){
    const idSchool = request.params.id_school;
    const idturn = request.params.id_turn;

    await Database.table('schedules').where('turn_id', idturn).delete();
    await Database.table('turns').where('school_id', idSchool).delete();

    return response.status(200).send({ message: "Turno apagado com sucesso" })
  }

  async update({request, response}){
    const turn_id = request.params.id_turn;

    var schedules = [];

    const {name, period, start, end, class_duration, intervals, week_days} = request.all();

    const oldSchedules = await Schedule.query().where({turn_id}).fetch();
    const newSchedules = oldSchedules.toJSON();

    const qtdOldSchedules = oldSchedules.rows.length;

    week_days.map((day)=>{
      const days_of_week = Schedules(start, end, class_duration, intervals);
      days_of_week.map(({start, end})=>{
        const horario = {
          "turn_id": turn_id,
          "day": day,
          "start": start.toString(),
          "end": end.toString()
        }
        schedules.push(horario);
      })
    })

    const addedSchedules = schedules.filter((value, index)=>{
      return index > qtdOldSchedules - 1;
    })

    addedSchedules.map(async (value)=>{
      schedules.pop();
      await Schedule.create(value);
    })

    schedules.map(async ({day, start, end}, index)=>{
      const {id} = newSchedules[index];
      oldSchedules.rows.shift();
      await Schedule.query().where({id}).update({ day: day, start: start, end: end });
    })

    oldSchedules.rows.map(async ({$attributes})=>{
      await Schedule.query().where({ id: $attributes.id }).delete();
    })

    await Turn.query().where('id', turn_id).update({ name: name, period: period});

    return response.status(200).send({ message: "Turno atualizado com sucesso" });
  }

  async index({ request }) {
    const turn_id = request.params.id_turn;

    const turn = await Turn.query().where('id', turn_id).fetch();
    const schedules = await Schedule.query().where({turn_id}).fetch();

    return { turn, schedules }
}
}

module.exports = TurnController