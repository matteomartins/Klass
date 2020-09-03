'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AvailableSchedulesSchema extends Schema {
  up () {
    this.create('available_schedules', (table) => {
      table.increments()
      table.integer('available_days_id').notNullable()
        .unsigned().references('id').inTable('available_days')
        .onDelete('CASCADE').onUpdate('CASCADE')
      table.time('start').notNullable()
      table.time('end').notNullable()
    })
  }

  down () {
    this.drop('available_schedules')
  }
}

module.exports = AvailableSchedulesSchema
