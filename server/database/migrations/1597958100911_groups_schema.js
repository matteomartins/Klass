'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GroupsSchema extends Schema {
  up () {
    this.create('groups', (table) => {
      table.increments()
      table.integer('turn_id').notNullable()
        .unsigned().references('id').inTable('turns')
        .onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('module_id').notNullable()
        .unsigned().references('id').inTable('modules')
        .onDelete('CASCADE').onUpdate('CASCADE')
      table.string('name').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('groups')
  }
}

module.exports = GroupsSchema
