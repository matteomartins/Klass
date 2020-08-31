'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const School = use('App/Models/School');
const Adm = use('App/Models/Administrator');
const User = use('App/Models/User');
const Database = use('Database')
const {CreateIdHash} = require('../../Utils/createIdHash.js');

class SchoolController {
    async create({ request, response, auth }) {

        const {name,description,type,icon} = request.all();

        const id = CreateIdHash();

        const school = {
          'id': id,
          'name': name,
          'description': description,
          'type': type,
          'icon': icon
        }

        await School.create(school);

        const user = await auth.getUser();
        const user_id = user.$attributes.id;

        await Database.table('administrators').insert({ school_id: id, user_id: user_id })

        return response.status(201).send({ message: "Escola criada com sucesso" })
    }

    async delete({ request, response, auth }) {
        const idSchool = request.params.id_school;

        await auth.getUser();


        await Database.table('administrators').where('school_id', idSchool).delete();
        await Database.table('schools').where('id', idSchool).delete();


        return response.status(200).send({ message: "Escola apagada com sucesso" })
    }
    async index({ request }) {
        const idSchool = request.params.id_school;
        const school = await School.query().where('id', idSchool).fetch();
        return { school }
    }
    async update({ request, response }) {
        const idSchool = request.params.id_school;
        const newSchoolData = request.all();

        await School.query().where('id', idSchool).update(newSchoolData)
        return response.status(200).send({ message: "Escola atualizada com sucesso" })
    }

    async generalIndex({ request, response, auth }) {
        const user = await auth.getUser();
        const user_id = user.$attributes.id;


        const oldUserSchools = await Database.table('schools').innerJoin('administrators', 'schools.id', 'administrators.school_id').where('administrators.user_id', user_id)

        var userSchools = []

        console.log(oldUserSchools);

        oldUserSchools.map(({ school_id, name, description, type, icon }) => {
            const valores = {
                'id': school_id,
                'name': name,
                'description': description,
                'type': type,
                'icon': icon
            }
            userSchools.push(valores)
        })

        return { userSchools }
    }
}

module.exports = SchoolController
