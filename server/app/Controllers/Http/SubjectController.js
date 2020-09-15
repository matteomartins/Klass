"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Subject = use("App/Models/Subject");
const SetOfDiscipline = use("App/Models/SetOfDiscipline");

class SubjectController {
  async store({ request, response }) {
    const { name, abbreviation, modules } = request.all();
    const school_id = request.params.id_school;

    const subject = {
      school_id: school_id,
      name: name,
      abbreviation: abbreviation,
    };

    const { id } = await Subject.create(subject);

    modules.map(async ({ module_id, total_classes }) => {
      const setOfDisciplines = {
        subject_id: id,
        module_id: module_id,
        total_classes: total_classes,
      };

      await SetOfDiscipline.create(setOfDisciplines);
    });

    return response
      .status(200)
      .send({ message: "Matéria criada com sucesso", id });
  }

  async show({ request }) {
    const subject_id = request.params.id;

    const subjects = await Subject.query().where("id", subject_id).fetch();
    const { name, abbreviation } = subjects.rows[0];
    const setOfDisciplines = await SetOfDiscipline.query()
      .where({ subject_id })
      .fetch();

    let modules = [];

    setOfDisciplines.rows.map(({ module_id, total_classes }) => {
      const module = {
        module_id: module_id,
        total_classes: total_classes,
      };
      modules.push(module);
    });

    const subject = {
      name: name,
      abbreviation: abbreviation,
      modules: modules,
    };

    return { subject };
  }

  async index({ request }) {
    const idSchool = request.params.id_school;
    const listSubjects = await Subject.query()
      .where("school_id", idSchool)
      .fetch();

    let subjects = [];

    await Promise.all(
      listSubjects.rows.map(async ({ id, name, abbreviation }) => {
        const subject_id = id;
        const setOfDisciplines = await SetOfDiscipline.query()
          .where({ subject_id })
          .fetch();

        let modules = [];

        setOfDisciplines.rows.map(({ module_id, total_classes }) => {
          const module = {
            module_id: module_id,
            total_classes: total_classes,
          };
          modules.push(module);
        });

        const subject = {
          name: name,
          abbreviation: abbreviation,
          modules: modules,
        };
        subjects.push(subject);
      })
    );

    return { subjects };
  }

  async destroy({ request, response }) {
    const school_id = request.params.id_school;
    const subject_id = request.params.id;

    await SetOfDiscipline.query().where({ subject_id }).delete();
    await Subject.query().where({ school_id }).delete();

    return response
      .status(200)
      .send({ message: "Matéria apagada com sucesso" });
  }

  async update({ request, response }) {
    const { name, abbreviation, modules } = request.all();
    const subject_id = request.params.id;

    const oldSetOfDisciplines = await SetOfDiscipline.query()
      .where({ subject_id })
      .fetch();
    const moduleIDS = oldSetOfDisciplines.rows.map(({ $attributes }) => {
      return $attributes.module_id;
    });

    const addedSetOfDisciplines = modules.filter(({ module_id }, index) => {
      if (!moduleIDS.includes(module_id)) {
        return modules[index];
      }
    });

    addedSetOfDisciplines.map(async ({ module_id, total_classes }) => {
      const setOfDisciplines = {
        subject_id: subject_id,
        module_id: module_id,
        total_classes: total_classes,
      };

      const moduleID = module_id;
      const module = modules.filter(({ module_id }) => {
        return module_id === moduleID;
      });
      const index = modules.indexOf(module[0]);
      modules.splice(index, 1);

      await SetOfDiscipline.create(setOfDisciplines);
    });

    modules.map(async ({ module_id, total_classes }) => {
      const comparedModule = oldSetOfDisciplines.rows.find(
        ({ $attributes }) => $attributes.module_id === module_id
      );

      const index = oldSetOfDisciplines.rows.indexOf(comparedModule);
      oldSetOfDisciplines.rows.splice(index, 1);

      await SetOfDiscipline.query()
        .where({ subject_id, module_id })
        .update({ total_classes });
    });

    oldSetOfDisciplines.rows.map(async ({ $attributes }) => {
      await SetOfDiscipline.query()
        .where({ subject_id: subject_id, module_id: $attributes.module_id })
        .delete();
    });

    await Subject.query()
      .where("id", subject_id)
      .update({ name, abbreviation });

    return response
      .status(200)
      .send({ message: "Matéria atualizada com sucesso" });
  }
}

module.exports = SubjectController;
