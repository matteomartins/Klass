'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SetOfDiscipline extends Model {
  static get table() {
    return 'set_of_disciplines';
  }
}

module.exports = SetOfDiscipline
