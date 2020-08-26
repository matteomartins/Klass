'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TurnsSchema extends Schema {
  up () {
    this.create('turns', (table) => {
      table.increments()
      table.string('school_id', 15).notNullable()
        .references('id').inTable('schools')
        .onDelete('CASCADE').onUpdate('CASCADE')
      table.string('name', 45).notNullable()
      table.string('period', 45).notNullable()
      table.boolean('flg_sunday').notNullable()
      table.boolean('flg_monday').notNullable()
      table.boolean('flg_tuesday').notNullable()
      table.boolean('flg_wednesday').notNullable()
      table.boolean('flg_thursday').notNullable()
      table.boolean('flg_friday').notNullable()
      table.boolean('flg_saturday').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('turns')
  }
}

module.exports = TurnsSchema
