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
      "school_id": "escola",
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

    week_days.map(async (day)=>{
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
  }

  async update({request, response}){

  }
}

module.exports = TurnController
