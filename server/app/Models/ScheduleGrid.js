'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ScheduleGrid extends Model {
  static get table(){
    return "schedule_grid";
  }
}

module.exports = ScheduleGrid
