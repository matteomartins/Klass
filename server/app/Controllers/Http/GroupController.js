'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Group = use('App/Models/Group');

class GroupController {
    async create({ request, response }) {
        const { name, module_id, turn_id } = request.all();
        const groupObject = {
            "turn_id": turn_id,
            "module_id": module_id,
            "name": name
        }

        await Group.create(groupObject);

        return response.status(200).send({ message: "Classe criada com sucesso" })
    }

    async delete({ request, response }) {
        const idGroup = request.params.id_group;

        await Group.query().where('id', idGroup).delete();

        return response.status(201).send({ message: "Classe excluida com sucesso!" })
    }

    async index({ request, response }) {
        const idGroup = request.params.id_group;

        const groupObject = await Group.query().where('id', idGroup).fetch();

        return { groupObject }
    }

    async update({ request, response }) {
        const idGroup = request.params.id_group;
        const { name, module_id, turn_id } = request.all();
        const groupObject = {
            "turn_id": turn_id,
            "module_id": module_id,
            "name": name
        }

        await Group.query().where('id', idGroup).update(groupObject);

        return response.status(201).send({ message: "Classe atualizada com sucesso" })
    }
}

module.exports = GroupController
