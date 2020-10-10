"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Course = use("App/Models/Course");
const Module = use("App/Models/Module");
const Database = use("Database");

class CourseController {
  async store({ request, response, auth }) {
    try {
      const courseName = request.only(["name"]);
      const modules = request.only(["modules"]);

      const school_id = request.params.id_school;

      const courseData = {
        school_id: school_id,
        name: courseName.name,
      };

      const course_data = await Course.create(courseData);

      const course_id = course_data.$attributes.id;
      
      modules.modules.map((modules) => {
        Module.create({ course_id, level: modules });
      });

      return response.status(200).send({ message: "Curso criado com sucesso", course_id });
    } catch (error) {
      return response
        .status(404)
        .send({ message: "Erro ao criar o curso", error: error.message });
    }
  }

  async destroy({ request, response, auth }) {
    try {
      const idSchool = request.params.id_school;
      const idCourse = request.params.id;

      await Module.query().where("course_id", idCourse).delete();
      await Course.query().where("school_id", idSchool).delete();

      return response
        .status(200)
        .send({ message: "Curso apagado com sucesso" });
    } catch (error) {
      return response
        .status(404)
        .send({ message: "Erro ao deletar o curso", error: error.message });
    }
  }

  async index({ request, response }) {
    try {
      const idCourse = request.params.id;

      const course = await Course.query().where("id", idCourse).fetch();
      const modules = await Module.query().where("course_id", idCourse).fetch();

      return { course, modules };
    } catch (error) {
      return response
        .status(404)
        .send({ message: "Erro ao exibir o curso", error: error.message });
    }
  }

  async show({ request, response, auth }) {
    try {
      const idSchool = request.params.id_school;
      const oldModuleCourse = await Database.table("courses")
        .innerJoin("modules", "courses.id", "modules.course_id")
        .where("school_id", idSchool);

      var ModuleCourse = [];

      oldModuleCourse.map(({ id, name, course_id, school_id, level }) => {
        const valores = {
          course_id: course_id,
          name: name,
          module_id: id,
          module: level,
          school_id: school_id,
        };
        ModuleCourse.push(valores);
      });
      return { ModuleCourse };
    } catch (error) {
      return response
        .status(404)
        .send({ message: "Erro ao exibir os cursos", error: error.message });
    }
  }

  async update({ request, response }) {
    try {
      const course_id = request.params.id;

      const courseName = request.only(["name"]);
      const newModules = request.only(["modules"]);

      const oldModules = await Module.query().where({ course_id }).fetch();

      const addedModules = newModules.modules.filter(({ id }) => id === -1);

      addedModules.map(async ({ name, id }) => {
        await Module.create({ course_id, level: name });
        // const removeModule = oldModules.rows.find(({ $attributes }) => $attributes.id === id);
        // const index = oldModules.rows.indexOf(removeModule);
        // oldModules.rows.splice(index, 1);
      });

      newModules.modules.map(async ({ id, name }) => {
        const comparedModule = oldModules.rows.find(
          ({ $attributes }) => $attributes.id === id
        );

        const index = oldModules.rows.indexOf(comparedModule);
        oldModules.rows.splice(index, 1);

        if (comparedModule.$attributes.level !== name) {
          await Module.query().where({ id }).update({ level: name });
        }
      });

      // deletar
      oldModules.rows.map(async ({ $attributes }) => {
        await Module.query().where({ id: $attributes.id }).delete();
      });

      await Course.query()
        .where({ id: course_id })
        .update({ name: courseName });

      return response
        .status(200)
        .send({ message: "Curso atualizado com sucesso" });
    } catch (error) {
      return response
        .status(404)
        .send({ message: "Erro ao atualizar o curso", error: error.message });
    }
  }
}

module.exports = CourseController;
