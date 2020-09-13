'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SchoolGroupsSchema extends Schema{
  async up () {
    this.raw(`CREATE OR REPLACE VIEW school_groups AS
      select s.id 'school_id', g.id 'group_id' from groups g
      inner join modules m on m.id = g.module_id
      inner join courses c on c.id = m.course_id
      inner join schools s on s.id = c.school_id;`)
  }

  async down () {
    this.raw('DROP VIEW IF EXISTS school_groups;')
  }
}

module.exports = SchoolGroupsSchema
