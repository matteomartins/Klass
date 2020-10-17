'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClassScheduleSchema extends Schema {
  up () {
    this.create('class_schedules', (table) => {
      table.increments()
      table.integer('class_id').notNullable()
        .unsigned().references('id').inTable('classes')
        .onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('schedule_id').notNullable()
        .unsigned().references('id').inTable('schedules')
        .onDelete('CASCADE').onUpdate('CASCADE')
    })
  }

  down () {
    this.drop('class_schedules')
  }
}

module.exports = ClassScheduleSchema
