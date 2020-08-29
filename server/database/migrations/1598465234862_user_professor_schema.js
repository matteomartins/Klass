'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserProfessorSchema extends Schema {
  up () {
    this.create('user_professors', (table) => {
      table.integer('user_id').notNullable().unsigned()
        .references('id').inTable('users')
        .onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('professor_id').notNullable().unsigned()
        .references('id').inTable('professors')
        .onDelete('CASCADE').onUpdate('CASCADE')
    })
  }

  down () {
    this.drop('user_professors')
  }
}

module.exports = UserProfessorSchema
