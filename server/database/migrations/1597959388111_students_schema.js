'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StudentsSchema extends Schema {
  up () {
    this.create('students', (table) => {
      table.string('group_id', 25).notNullable()
        .references('id').inTable('groups')
        .onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('user_id').notNullable()
        .unsigned().references('id').inTable('users')
        .onDelete('CASCADE').onUpdate('CASCADE')
    })
  }

  down () {
    this.drop('students')
  }
}

module.exports = StudentsSchema
