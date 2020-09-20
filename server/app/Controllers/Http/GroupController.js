"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Group = use("App/Models/Group");
const Module = use("App/Models/Module");
const Database = use("Database");
const { CreateIdHash } = require("../../Utils/createIdHash.js");

class GroupController {
  async store({ request, response }) {
    const { name, module_id, turn_id } = request.all();
    const id = CreateIdHash();
    const groupObject = {
      id: id,
      turn_id: turn_id,
      module_id: module_id,
      name: name,
    };
    try {
      await Group.create(groupObject);
    }
    catch {
      return response
      .status(500)
      .send({ message: "Impossível inserir no banco" });
    }
    
    return response
      .status(200)
      .send({ message: "Classe criada com sucesso", id });
  }

  async destroy({ request, response }) {
    const idGroup = request.params.id;

    await Group.query().where("id", idGroup).delete();

    return response
      .status(201)
      .send({ message: "Classe excluida com sucesso!" });
  }

  async show({ request, response }) {
    const idGroup = request.params.id;

    const groupObject = await Group.query().where("id", idGroup).fetch();

    return { groupObject };
  }

  async index({ request }) {
    const idSchool = request.params.id_school;
    
    const oldGroups = await Database.table("turns")
      .innerJoin("groups", "turns.id", "groups.turn_id")
      .where("school_id", idSchool);

    var groups = [];

    oldGroups.map(({ id, name, school_id, period, turn_id, module_id }) => {
      const valores = {
        school_id: school_id,
        group_id: id,
        module_id: module_id,
        name: name,
        period: period,
        turn_id: turn_id,
      };
      groups.push(valores);
    });
    return { groups };
  }

  async update({ request, response }) {
    const idGroup = request.params.id;
    const { name, module_id, turn_id } = request.all();
    const groupObject = {
      turn_id: turn_id,
      module_id: module_id,
      name: name,
    };

    await Group.query().where("id", idGroup).update(groupObject);

    return response
      .status(201)
      .send({ message: "Classe atualizada com sucesso" });
  }
}

module.exports = GroupController;
