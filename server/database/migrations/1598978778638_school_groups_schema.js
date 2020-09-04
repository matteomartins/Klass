'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */

const Database = use('Database')
const Schema = use('Schema')

class SchoolGroupsSchema extends Schema{
  async up () {
    this.raw(`CREATE VIEW IF NOT EXISTS school_groups AS
      select s.id 'school_id', g.id 'group_id' from klass.groups g
      inner join klass.modules m on m.id = g.module_id
      inner join klass.courses c on c.id = m.course_id
      inner join klass.schools s on s.id = c.school_id;`)
  }

  async down () {
    this.raw('DROP VIEW IF EXISTS school_groups;')
  }
}

module.exports = SchoolGroupsSchema
