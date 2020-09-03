'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SchoolsSchema extends Schema {
  up () {
    this.create('schools', (table) => {
      table.string('id', 25).primary().notNullable()
      table.string('name', 70).notNullable()
      table.string('description').notNullable()
      table.string('type').notNullable()
      table.string('icon', 150)
      table.timestamps()
    })
  }

  down () {
    this.drop('schools')
  }
}

module.exports = SchoolsSchema
