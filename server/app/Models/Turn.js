'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Turn extends Model {
  schedules(){
    return this.hasMany('App/Models/Schedule');
  }

  school(){
    return this.belongsTo('App/Models/School');
  }

  groups(){
    return this.hasMany('App/Models/Group');
  }
}

module.exports = Turn;
