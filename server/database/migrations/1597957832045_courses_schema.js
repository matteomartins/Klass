'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CoursesSchema extends Schema {
  up () {
    this.create('courses', (table) => {
      table.increments()
      table.string('school_id', 15).notNullable()
        .references('id').inTable('schools')
        .onDelete('CASCADE').onUpdate('CASCADE')
      table.string('name').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('courses')
  }
}

module.exports = CoursesSchema
