'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DashboardSchema extends Schema {
  up () {
    this.raw(`CREATE  OR REPLACE VIEW dashboard AS
      select t.school_id as school_id, count(t.id) as turns, (select count(id) from subjects where school_id = t.school_id) as subjects,
      (select count(id) from professors where school_id = t.school_id) as professors,
      (select count(group_id) from school_groups where school_id = t.school_id) as groups,
      (select count(id) from reports where school_id = t.school_id) as reports,
      (select count(id) from notifications where school_id = t.school_id) as notifications,
      (select qtd_students(t.school_id)) as students from turns t
      group by school_id;`)
  }

  down () {
    this.drop('DROP VIEW IF EXISTS dashboard')
  }
}

module.exports = DashboardSchema
