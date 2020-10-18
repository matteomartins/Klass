'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SubjectProfessor extends Model {
  static get table() {
    return 'subject_professors';
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

  subjects(){
    return this.hasMany('App/Models/Subject')
  }

  professors(){
    return this.hasMany('App/Models/Professor')
  }
}

module.exports = SubjectProfessor
