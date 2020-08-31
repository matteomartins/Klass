'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Subject extends Model {
  static get table() {
    return 'subjects';
}
static get primaryKey() {
    return 'id';
}
static get createdAtColumn() {
    return null;
}
static get updatedAtColumn() {
    return null;
}
}

module.exports = Subject
