"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const School = use("App/Models/School");
const Adm = use("App/Models/Administrator");
const User = use("App/Models/User");
const Database = use("Database");
const { CreateIdHash } = require("../../Utils/createIdHash.js");

class SchoolController {
  async store({ request, response, auth }) {
    try {
      const { name, description, type, icon } = request.all();

      const id = CreateIdHash();

      const user = await auth.getUser();
      const user_id = user.$attributes.id;

      const school = {
        id: id,
        name: name,
        description: description,
        type: type,
        icon: icon,
      };

      const adm = {
        school_id: id,
        user_id: user_id,
      };

      await School.create(school);
      await Adm.create(adm);

      return response
        .status(201)
        .send({ message: "Escola criada com sucesso", school_id: id });
    } catch (error) {
      return response
        .status(404)
        .send({ message: "Erro na criação da escola", error: error.message });
    }
  }

  async destroy({ request, response, auth }) {
    try {
      const idSchool = request.params.id;

      await auth.getUser();

      await Adm.query().where("school_id", idSchool).delete();
      await School.query().where("id", idSchool).delete();

      return response
        .status(200)
        .send({ message: "Escola apagada com sucesso" });
    } catch (error) {
      return response
        .status(404)
        .send({ message: "Erro ao deletar a escola", error: error.message });
    }
  }

  async show({ request }) {
    try {
      const idSchool = request.params.id;
      const school = await School.query().where("id", idSchool).fetch();
      return { school };
    } catch (error) {
      return response
        .status(404)
        .send({ message: "Erro ao exibir a escola", error: error.message });
    }
  }
  async update({ request, response }) {
    try {
      const idSchool = request.params.id_school;
      const newSchoolData = request.all();

      await School.query().where("id", idSchool).update(newSchoolData);
      return response
        .status(200)
        .send({ message: "Escola atualizada com sucesso" });
    } catch (error) {
      return response
        .status(404)
        .send({ message: "Erro ao atualizar a escola", error: error.message });
    }
  }

  async index({ response, auth }) {
    try {
      const user = await auth.getUser();
      const user_id = user.$attributes.id;

      const oldUserSchools = await Database.table("schools")
        .innerJoin("administrators", "schools.id", "administrators.school_id")
        .where("administrators.user_id", user_id);

      var userSchools = [];

      oldUserSchools.map(({ school_id, name, description, type, icon }) => {
        const valores = {
          id: school_id,
          name: name,
          description: description,
          type: type,
          icon: icon,
        };
        userSchools.push(valores);
      });

      return { userSchools };
    } catch (error) {
      return response
        .status(404)
        .send({ message: "Erro ao exibir as escolas", error: error.message });
    }
  }
}

module.exports = SchoolController;
