"use strict";
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Database = use("Database");
const School = use("App/Models/School");
const Group = use("App/Models/Group");
const Turn = use("App/Models/Turn");
const Schedule = use("App/Models/Schedule");
const {
  convertHourToMinutes,
  convertMinutesToHour,
} = require("../../Utils/convertHourToMinutes.js");

class DashboardController {
  async index({ request, response }) {
    const id_school = request.params.id_school;

    const [
      { turns, subjects, professors, groups, reports, notifications, students },
    ] = await Database.table("dashboard").where("school_id", id_school);
    const {
      rows: [
        {
          $attributes: { name: school_name },
        },
      ],
    } = await School.query().where("id", id_school).fetch();
    const group_ids = await Database.table("school_groups").where(
      "school_id",
      id_school
    );

    const group_hours = await Promise.all(
      group_ids.map(async ({ group_id }) => {
        const {
          rows: [
            {
              $attributes: { turn_id },
            },
          ],
        } = await Group.query().where("id", group_id).fetch();
        const {
          rows: [
            {
              $attributes: {
                flg_sunday,
                flg_monday,
                flg_tuesday,
                flg_wednesday,
                flg_thursday,
                flg_friday,
                flg_saturday,
              },
            },
          ],
        } = await Turn.query().where("id", turn_id).fetch();
        const days = [
          flg_sunday,
          flg_monday,
          flg_tuesday,
          flg_wednesday,
          flg_thursday,
          flg_friday,
          flg_saturday,
        ];
        let week_days = days.map((value, index) => {
          if (value == 1) return index;
        });
        week_days = week_days.filter((value) => {
          return value != undefined;
        });
        const {
          rows: [
            {
              $attributes: { start: schedule1 },
            },
          ],
        } = await Schedule.query()
          .where({ turn_id, day: week_days[0] })
          .orderBy("id")
          .limit(1)
          .fetch();
        const {
          rows: [
            {
              $attributes: { end: schedule2 },
            },
          ],
        } = await Schedule.query()
          .where({ turn_id, day: week_days[0] })
          .orderBy("id", "desc")
          .limit(1)
          .fetch();
        const totalInWeek =
          (convertHourToMinutes(schedule2) - convertHourToMinutes(schedule1)) *
          5;

        return { group_id: group_id, minutes: totalInWeek };
      })
    );

    const sumTurnMinutes = group_hours.reduce(function (preVal, elem) {
      return preVal + elem.minutes;
    }, 0);

    let semanal_hours = Math.floor(sumTurnMinutes / 60);
    let minutes = sumTurnMinutes % 60;
    if (minutes != 0) semanal_hours = semanal_hours.toString() + ":" + minutes;

    const dashboard = {
      school_name: school_name,
      semanal_hours: semanal_hours,
      professors_number: professors,
      classes_number: groups,
      students_number: students,
      subjects_number: subjects,
      turns_number: turns,
      notifications_number: notifications,
      reports_number: reports,
    };

    return response.status(200).send({ dashboard });
  }
}

module.exports = DashboardController;
