'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AvailableDay extends Model {
  static get table() {
    return 'available_days';
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
}

module.exports = AvailableDay
