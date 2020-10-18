'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ClassProfessor extends Model {
  static get table(){
    return "class_professors";
  }

  professor(){
    return this.hasOne('App/Models/Professor');
  }

  class(){
    return this.hasOne('App/Models/Class');
  }

  static get createdAtColumn() {
    return null;
  }
  static get updatedAtColumn() {
    return null;
  }
}

module.exports = ClassProfessor
