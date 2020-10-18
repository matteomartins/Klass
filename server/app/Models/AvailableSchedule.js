'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AvailableSchedule extends Model {
  static get table() {
    return 'available_schedules';
  }
  static get primaryKey() {
      return 'id';
  }
  static get createdAtColumn() {
      return null;
  }
  static get updatedAtColumn() {
      return null;
  }

  days(){
    return this.belongsTo('App/Models/AvailableDay')
  }
}

module.exports = AvailableSchedule
