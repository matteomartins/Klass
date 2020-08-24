'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ModulesSchema extends Schema {
  up () {
    this.create('modules', (table) => {
      table.increments()
      table.integer('course_id').notNullable()
        .unsigned().references('id').inTable('courses')
        .onDelete('CASCADE').onUpdate('CASCADE')
      table.string('level', 10).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('modules')
  }
}

module.exports = ModulesSchema
