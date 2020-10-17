'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Class extends Model {
  static get table(){
    return 'classes';
  }

  group(){
    return this.belongsTo('App/Models/Group');
  }

  subject(){
    return this.belongsTo('App/Models/Subject');
  }

  professors(){
    return this.belongsTo('App/Models/Professor').pivotModel('App/Models/ClassProfessor');
  }

  schedules(){
    return this.belongsTo('App/Models/Schedule').pivotTable('class_schedules');
  }

  class_schedule(){
    return this.hasMany('App/Models/ClassSchedule');
  }

  static get createdAtColumn() {
    return null;
  }
  static get updatedAtColumn() {
    return null;
  }
}

module.exports = Class
