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

  classes(){
    return this.belongsTo('App/Models/Class').pivotTable('class_schedules');
  }

  class_schedule(){
    return this.hasMany('App/Models/ClassSchedule');
  }
}

module.exports = Schedule;
