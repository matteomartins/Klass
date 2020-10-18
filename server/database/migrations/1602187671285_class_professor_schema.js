'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClassProfessorSchema extends Schema {
  up () {
    this.create('class_professors', (table) => {
      table.increments()
      table.integer('class_id').notNullable()
        .unsigned().references('id').inTable('classes')
        .onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('professor_id').notNullable()
        .unsigned().references('id').inTable('professors')
        .onDelete('CASCADE').onUpdate('CASCADE')
    })
  }

  down () {
    this.drop('class_professors')
  }
}

module.exports = ClassProfessorSchema
