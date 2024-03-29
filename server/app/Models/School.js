"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class School extends Model {
  static get table() {
    return "schools";
  }
  static get primaryKey() {
    return "id";
  }
  static get createdAtColumn() {
    return null;
  }
  static get updatedAtColumn() {
    return null;
  }

  turns(){
    return this.hasMany('App/Models/Turn');
  }

  users(){

  }

  reports(){
    return this.hasMany('App/Models/Report');
  }
}

module.exports = School;
