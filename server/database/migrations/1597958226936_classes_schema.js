'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClassesSchema extends Schema {
  up () {
    this.create('classes', (table) => {
      table.increments()
      table.string('group_id', 25).notNullable()
        .references('id').inTable('groups')
        .onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('subject_id').notNullable()
        .unsigned().references('id').inTable('subjects')
        .onDelete('CASCADE').onUpdate('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('classes')
  }
}

module.exports = ClassesSchema
