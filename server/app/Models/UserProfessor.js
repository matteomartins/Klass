'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UserProfessor extends Model {
  static get table() {
    return 'user_professors';
  }
  static get primaryKey() {
      return null;
  }
  static get createdAtColumn() {
      return null;
  }
  static get updatedAtColumn() {
      return null;
  }
}

module.exports = UserProfessor
