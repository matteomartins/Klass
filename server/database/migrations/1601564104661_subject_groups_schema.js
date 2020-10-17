'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SubjectGroupsSchema extends Schema {
  up () {
    this.raw(`CREATE VIEW subject_groups AS
      SELECT g.id 'group_id', sb.id 'subject_id', sd.total_classes 'total_classes' FROM groups g
      INNER JOIN modules md on md.id = g.module_id
      INNER JOIN set_of_disciplines sd on sd.module_id = md.id
      INNER JOIN subjects sb on sb.id= sd.subject_id
      ORDER BY g.id;`)
  }

  down () {
    this.drop('subject_groups')
  }
}

module.exports = SubjectGroupsSchema
