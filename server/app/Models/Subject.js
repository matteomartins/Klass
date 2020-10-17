'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Subject extends Model {
static get createdAtColumn() {
      return null;
  }
  static get updatedAtColumn() {
      return null;
  }

  professors(){
    return this.belongsToMany('App/Models/Professor','subject_id', 'professor_id', null, null)
    .pivotTable('subject_professors');
  }

  classes(){
    return this.hasMany('App/Models/Class');
  }
}

module.exports = Subject
