"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Group extends Model {
  static get createdAtColumn() {
    return null;
  }
  static get updatedAtColumn() {
    return null;
  }

  turn(){
    return this.belongsTo('App/Models/Turn');
  }

  classes(){
    return this.hasMany('App/Models/Class');
  }
}

module.exports = Group;
