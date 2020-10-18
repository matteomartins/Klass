'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SubjectGroup extends Model {
  static get table(){
    return "subject_groups";
  }
}

module.exports = SubjectGroup
