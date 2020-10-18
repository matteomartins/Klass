'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ScheduleGridSchema extends Schema {
  up () {
    this.raw(`CREATE VIEW schedule_grid AS
      select sg.school_id, g.id 'group_id', g.name, sc.day 'day', time_format(sc.start, "%H:%i") 'start', time_format(sc.end, "%H:%i") 'end',
      sb.name 'subject', p.name 'professor' from groups g
        inner join classes c on c.group_id = g.id
        inner join subjects sb on sb.id = c.subject_id
        inner join class_schedules cs on cs.class_id = c.id
        inner join class_professors cp on cp.class_id = c.id
        inner join professors p on p.id = cp.professor_id
        inner join schedules sc on sc.id = cs.schedule_id
        inner join school_groups sg on sg.group_id = g.id
        order by g.name, sc.id;`);
  }

  down () {
    this.raw('DROP VIEW IF EXISTS schedule_grid');
  }
}

module.exports = ScheduleGridSchema
