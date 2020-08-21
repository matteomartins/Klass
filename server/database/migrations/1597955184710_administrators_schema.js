'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdministratorsSchema extends Schema {
  up () {
    this.create('administrators', (table) => {
      table.increments()
      table.integer('school_id').notNullable()
        .unsigned().references('id').inTable('schools')
        .onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('user_id').notNullable()
        .unsigned().references('id').inTable('users')
        .onDelete('CASCADE').onUpdate('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('administrators')
  }
}

module.exports = AdministratorsSchema
