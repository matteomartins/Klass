'use strict'

/*
|--------------------------------------------------------------------------
| TurnSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Chance = use('chance').Chance();

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const School = use("App/Models/School");

const { Schedules } = require('../../app/Utils/createSchedules.js');
const {WeekDaysInArray} = require('../../app/Utils/functionsInTurn');

class TurnSeeder {
  async run () {
    const schoolIds = await School.ids();
    const index = Chance.natural({min:0, max:schoolIds.length - 1});

    const turns = await Factory.model('App/Models/Turn').createMany(2,{school_id: schoolIds[index]});
    turns.map((turn)=>{
      const week_days = WeekDaysInArray(turn.flg_sunday, turn.flg_monday, turn.flg_tuesday, turn.flg_wednesday, turn.flg_thursday, turn.flg_friday, turn.flg_saturday);

      const minutes = ["00","05","10","15","20","25","30","35","40","45","50","55"];
      const random = Math.floor(Math.random() * minutes.length);
      const schedules = {
        start: Chance.natural({min:6, max:8}) + ":" + minutes[random],
        end: Chance.natural({min:14, max:16}) + ":" + minutes[random],
        class_duration: Chance.natural({min: 40, max:60}),
        intervals: [{
          start: "12:00",
          end: "13:00"
        }]
      }
      week_days.map((day) => {
        const day_of_week = Schedules(schedules.start, schedules.end, schedules.class_duration, schedules.intervals);
        day_of_week.map(async ({ start, end }) => {
          const schedule = { turn_id: turn.id, day, start, end };
          await turn.schedules().create(schedule);
        });
      });
    })
  }
}

module.exports = TurnSeeder
