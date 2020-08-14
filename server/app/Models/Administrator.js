'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Administrator extends Model {
    static get table() {
        return 'administrador';
    }
    static get primaryKey() {
        return 'idAdministrador';
    }
    static get createdAtColumn() {
        return null;
    }
    static get updatedAtColumn() {
        return null;
    }
}


module.exports = Administrator
