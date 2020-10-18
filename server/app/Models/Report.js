'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Report extends Model {
  school(){
    return this.belongsTo('App/Models/School');
  }
  static get createdAtColumn() {
    return null;
  }
  static get updatedAtColumn() {
      return null;
  }
}

module.exports = Report
