'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Schedule extends Model {
  static get table(){
    return 'schedules';
  }
  static get primaryKey(){
    return 'id';
  }
  static get createdAtColumn() {
    return null;
  }
  static get updatedAtColumn() {
      return null;
  }
}

module.exports = Schedule
