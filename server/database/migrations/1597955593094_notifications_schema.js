'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NotificationsSchema extends Schema {
  up () {
    this.create('notifications', (table) => {
      table.increments()
      table.string('school_id', 15).notNullable()
        .references('id').inTable('schools')
        .onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('user_id').notNullable()
        .unsigned().references('id').inTable('users')
        .onDelete('CASCADE').onUpdate('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('notifications')
  }
}

module.exports = NotificationsSchema
