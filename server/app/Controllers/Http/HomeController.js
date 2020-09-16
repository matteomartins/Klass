"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const Database = use("Database");

class HomeController {
  async index({ request, response, auth }) {
    const user_id = await auth.getUser().then((user) => {
      return user.$attributes.id;
    });

    const oldUserSchools = await Database.table("schools")
      .innerJoin("administrators", "schools.id", "administrators.school_id")
      .where("administrators.user_id", user_id);

    const user_schools = [];
    const allInnerJoin = [];

    const oldAllInnerJoin = await Database.table("schools")
      .innerJoin("administrators", "schools.id", "administrators.school_id")
      .innerJoin("courses", "schools.id", "courses.school_id")
      .innerJoin("modules", "courses.id", "modules.course_id")
      .innerJoin("groups", "modules.id", "groups.module_id")
      .where("administrators.user_id", user_id);

    oldAllInnerJoin.map(({ name, id, school_id }) => {
      const valores = {
        id: id,
        name: name,
        school_id: school_id,
      };
      allInnerJoin.push(valores);
    });

    oldUserSchools.map(({ school_id, name }) => {
      const filtrado = allInnerJoin.filter(function (school) {
        return school.school_id == school_id;
      });

      const valores = {
        school_id: school_id,
        name: name,
        groups: filtrado,
      };
      user_schools.push(valores);
    });

    return response.status(200).send({ home: user_schools });
  }
}

module.exports = HomeController;
