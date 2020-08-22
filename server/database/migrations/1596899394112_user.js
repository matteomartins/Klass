'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', table => {
      table.increments()
      table.string('name', 80).notNullable()
      table.date('birth_date').notNullable()
      table.string('email', 70).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('icon', 150)
      table.integer('is_premium', 1).defaultTo('0')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
