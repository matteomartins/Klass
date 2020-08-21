'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const School = use('App/Models/School');
const Adm = use('App/Models/Administrator');
const User = use('App/Models/User');
const Database = use('Database')

class SchoolController {
    async create({ request, response, auth }) {

        const schoolData = request.all();

        const { id} = await School.create(schoolData);
        let school = await School.find(id);

        const user = await auth.getUser();
        const user_id = user.$attributes.id;

        await Database.table('administrators').insert({ school_id: id, user_id: user_id })


        return { idEscola }

    }
    async delete({ request, response, auth }) {
        const idSchool = request.params.id;

        await auth.getUser();


        await Database.table('administrators').where('school_id', idSchool).delete();
        await Database.table('schools').where('id', idSchool).delete();


        return response.status(200).send({ message: "Escola apagada com sucesso" })
    }
    async index({ request }) {
        const idSchool = request.params.id;
        const school = await School.query().where('id', idSchool).fetch();
        return { school }
    }
    async update({ request, response }) {
        const idSchool = request.params.id;
        const newSchoolData = request.all();

        await School.query().where('id', idSchool).update(newSchoolData)
        return response.status(200).send({ message: "Escola atualizada com sucesso" })
    }

}

module.exports = SchoolController
