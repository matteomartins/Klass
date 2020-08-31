'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Group = use('App/Models/Group');
const Module = use('App/Models/Module');
const Database = use('Database')
const {CreateIdHash} = require('../../Utils/createIdHash.js')

class GroupController {
    async create({ request, response }) {
      const { name, module_id, turn_id } = request.all();
      const groupObject = {
          "id": CreateIdHash(),
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

    async generalIndex({ request }) {
        const idSchool = request.params.id_school;
        const oldGroups = await Database.table('turns').innerJoin('groups', 'turns.id', 'groups.turn_id').where('school_id', idSchool)

        var groups = []

        oldGroups.map(({ id, name, school_id, period, turn_id, module_id }) => {

            const valores = {
                'school_id': school_id,
                'group_id': id,
                'module_id': module_id,
                'name': name,
                'period': period,
                'turn_id': turn_id,
            }
            groups.push(valores)
        })
        return { groups }
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
