'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const School = use('App/Models/School');
const Adm = use('App/Models/Administrator');
const User = use('App/Models/User');
const Database = use('Database')

class SchoolController {
    async create({ request, response, auth }) {

        const schoolData = request.all();

        const { idEscola } = await School.create(schoolData);
        let school = await School.find(idEscola);
        school.$attributes.id = school.$attributes.idEscola;

        const user = await auth.getUser();
        const user_id = user.$attributes.idUsuario;

        const administrator = await Database.table('administrador').insert({ idEscola: idEscola, idUsuario: user_id })


        return { idEscola }

    }
    async delete({ request, response, auth }) {
        const idSchool = request.params.id;

        const user = await auth.getUser();
        const user_id = user.$attributes.idUsuario;

        //const idSchool = School.query().where('idUsuario', user_id).fetch('idEscola');

        const deleteAdm = await Database.table('administrador').where('idEscola', idSchool).delete();
        const deleteSchool = await Database.table('escola').where('idEscola', idSchool).delete();


        return response.status(200).send({ message: "Escola apagada com sucesso" })
    }
}

module.exports = SchoolController
