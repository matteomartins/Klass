'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class School extends Model {
    static get table() {
        return 'escola';
    }
    static get primaryKey() {
        return 'idEscola';
    }
    static get createdAtColumn() {
        return null;
    }
    static get updatedAtColumn() {
        return null;
    }
}

module.exports = School
