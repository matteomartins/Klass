'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Schedule extends Model {
  static get createdAtColumn() {
    return null;
  }
  static get updatedAtColumn() {
      return null;
  }

  turn(){
    return this.belongsTo('App/Models/Turn');
  }
}

module.exports = Schedule;
