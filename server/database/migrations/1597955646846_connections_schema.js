'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConnectionsSchema extends Schema {
  up () {
    this.create('connections', (table) => {
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
    this.drop('connections')
  }
}

module.exports = ConnectionsSchema
