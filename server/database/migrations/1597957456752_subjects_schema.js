'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SubjectsSchema extends Schema {
  up () {
    this.create('subjects', (table) => {
      table.increments()
      table.integer('school_id').notNullable()
        .unsigned().references('id').inTable('schools')
        .onDelete('CASCADE').onUpdate('CASCADE')
      table.string('name', 45).notNullable()
      table.string('abbreviation', 10).notNullable()
    })
  }

  down () {
    this.drop('subjects')
  }
}

module.exports = SubjectsSchema
