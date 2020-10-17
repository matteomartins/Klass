'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SchoolGroup extends Model {
  static get table(){
    return "school_groups";
  }
}

module.exports = SchoolGroup
