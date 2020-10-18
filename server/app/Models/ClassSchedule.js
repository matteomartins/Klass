'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ClassSchedule extends Model {
  static get table(){
    return "class_schedules";
  }

  class(){
    return this.hasOne('App/Models/Class');
  }

  schedule(){
    return this.hasOne('App/Models/Schedule');
  }

  static get createdAtColumn() {
    return null;
  }
  static get updatedAtColumn() {
    return null;
  }

}

module.exports = ClassSchedule
