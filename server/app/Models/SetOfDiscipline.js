'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SetOfDiscipline extends Model {
  static get table() {
    return 'set_of_disciplines';
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

module.exports = SetOfDiscipline
