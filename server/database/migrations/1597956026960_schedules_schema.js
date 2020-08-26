'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SchedulesSchema extends Schema {
  up () {
    this.create('schedules', (table) => {
      table.increments()
      table.integer('turn_id').notNullable()
        .unsigned().references('id').inTable('turns')
        .onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('day', 1).notNullable()
      table.time('start').notNullable()
      table.time('end').notNullable()
    })
  }

  down () {
    this.drop('schedules')
  }
}

module.exports = SchedulesSchema
