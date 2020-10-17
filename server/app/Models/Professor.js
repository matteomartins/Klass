"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Professor extends Model {
  static get createdAtColumn() {
    return null;
  }
  static get updatedAtColumn() {
    return null;
  }

  subjects(){
    return this.belongsToMany('App/Models/Subject', 'professor_id', 'subject_id', null, null)
               .pivotTable('subject_professors');
  }

  days(){
    return this.hasMany('App/Models/AvailableDay');
  }

  class_professor(){
    return this.hasMany('App/Models/ClassProfessor');
  }

  class(){
    return this.belongsTo('App/Models/Class').pivotModel('App/Models/ClassProfessor');
  }

}

module.exports = Professor;
