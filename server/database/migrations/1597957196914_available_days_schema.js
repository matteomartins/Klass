'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AvailableDaysSchema extends Schema {
  up () {
    this.create('available_days', (table) => {
      table.increments()
      table.integer('professor_id').notNullable()
        .unsigned().references('id').inTable('professors')
        .onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('day', 1).notNullable()
    })
  }

  down () {
    this.drop('available_days')
  }
}

module.exports = AvailableDaysSchema
