'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReportsSchema extends Schema {
  up () {
    this.create('reports', (table) => {
      table.increments()
      table.integer('school_id').notNullable()
        .unsigned().references('id').inTable('schools')
        .onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('user_id').notNullable()
        .unsigned().references('id').inTable('users')
        .onDelete('CASCADE').onUpdate('CASCADE')
      table.string('type', 45).notNullable()
      table.string('content').notNullable()
      table.date('emission').notNullable()
    })
  }

  down () {
    this.drop('reports')
  }
}

module.exports = ReportsSchema
