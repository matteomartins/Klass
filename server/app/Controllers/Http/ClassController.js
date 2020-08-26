'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Class = use('App/Models/Class');
const Turn = use('App/Models/Turn');
const Module = use('App/Models/Module');
const Database = use('Database')

class ClassController {
    async create({ request, response }) {
        const { name, module_id, turn_id } = request.all();
        const classObject = {
            "turn_id": turn_id,
            "module_id": module_id,
            "name": name
        }

        await Class.create(classObject);

        return response.status(200).send({ message: "Classe criada com sucesso" })
    }

    async delete({ request, response }) {
        const idClass = request.params.id_class;

        await Class.query().where('id', idClass).delete();

        return response.status(201).send({ message: "Classe excluida com sucesso!" })
    }

    async index({ request, response }) {
        const idClass = request.params.id_class;

        const classObject = await Class.query().where('id', idClass).fetch();

        return { classObject }
    }

    async update({ request, response }) {
        const idClass = request.params.id_class;
        const { name, module_id, turn_id } = request.all();
        const classObject = {
            "turn_id": turn_id,
            "module_id": module_id,
            "name": name
        }

        await Class.query().where('id', idClass).update(classObject);

        return response.status(201).send({ message: "Classe atualizada com sucesso" })
    }
}

module.exports = ClassController
