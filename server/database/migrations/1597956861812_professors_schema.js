'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfessorsSchema extends Schema {
  up () {
    this.create('professors', (table) => {
      table.increments()
      table.string('school_id', 15).notNullable()
        .references('id').inTable('schools')
        .onDelete('CASCADE').onUpdate('CASCADE')
      table.string('name', 45).notNullable()
      table.string('email', 70).notNullable()
      table.date('hiring_date').notNullable()
      table.string('titulation', 30)
      table.integer('prority')
      table.timestamps()
    })
  }

  down () {
    this.drop('professors')
  }
}

module.exports = ProfessorsSchema
