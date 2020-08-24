'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SetOfDisciplinesSchema extends Schema {
  up () {
    this.create('set_of_disciplines', (table) => {
      table.integer('subject_id').notNullable()
        .unsigned().references('id').inTable('subjects')
        .onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('module_id').notNullable()
        .unsigned().references('id').inTable('modules')
        .onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('total_classes').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('set_of_disciplines')
  }
}

module.exports = SetOfDisciplinesSchema
