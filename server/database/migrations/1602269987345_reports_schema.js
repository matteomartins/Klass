'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReportsSchema extends Schema {
  up () {
    this.create('reports', (table) => {
      table.increments()
      table.string('school_id', 25).notNullable()
        .references('id').inTable('schools')
        .onDelete('CASCADE').onUpdate('CASCADE')
      table.json('content').notNullable()
      table.date('emission').notNullable()
    })
  }

  down () {
    this.drop('reports')
  }
}

module.exports = ReportsSchema
