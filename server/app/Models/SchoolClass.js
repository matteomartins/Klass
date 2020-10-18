'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SchoolClass extends Model {
  static get table(){
    return "school_classes";
  }
}

module.exports = SchoolClass
