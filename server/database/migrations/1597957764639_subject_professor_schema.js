'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SubjectProfessorSchema extends Schema {
  up () {
    this.create('subject_professors', (table) => {
      table.increments()
      table.integer('subject_id').notNullable()
        .unsigned().references('id').inTable('subjects')
        .onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('professor_id').notNullable()
        .unsigned().references('id').inTable('professors')
        .onDelete('CASCADE').onUpdate('CASCADE')
    })
  }

  down () {
    this.drop('subject_professors')
  }
}

module.exports = SubjectProfessorSchema
