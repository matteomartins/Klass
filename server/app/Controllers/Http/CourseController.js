'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Course = use('App/Models/Course');
const Module = use('App/Models/Module');
const Database = use('Database')

class CourseController {
    async create({ request, response, auth }) {
        const courseName = request.only(['name']);
        const level = request.only(['level']);

        const school_id = request.params.id_school;

        await Database.table('courses').insert({ school_id: school_id, name: courseName.name });

        const course = await Database.select('id').from('courses').where({ school_id: school_id });
        const course_id = course[0].id


        level.level.map(level => {
            Module.create({ course_id, level })
        })

        return response.status(200).send({ message: "Curso criado com sucesso" })
    }

    async delete({ request, response, auth }) {
        const idSchool = request.params.id_school;
        const idCourse = request.params.id_course;


        await Database.table('modules').where('course_id', idCourse).delete();
        await Database.table('courses').where('school_id', idSchool).delete();

        return response.status(200).send({ message: "Curso apagado com sucesso" })
    }

    async index({ request }) {
        const idCourse = request.params.id_course;

        const course = await Course.query().where('id', idCourse).fetch();
        const modules = await Module.query().where('course_id', idCourse).fetch();

        return { course, modules }
    }

    async update({ request, response }) {
        const course_id = request.params.id_course;

        const courseName = request.only(['name']);
        const newModules = request.only(['modules']);

        const oldModules = await Module.query().where({ course_id }).fetch();

        const addedModules = newModules.modules.filter(({ id }) => id === -1);

        addedModules.map(async ({ name, id }) => {
            await Module.create({ course_id, level: name });
            // const removeModule = oldModules.rows.find(({ $attributes }) => $attributes.id === id);
            // const index = oldModules.rows.indexOf(removeModule);
            // oldModules.rows.splice(index, 1);
        });

        newModules.modules.map(async ({ id, name }) => {
            const comparedModule = oldModules.rows.find(({ $attributes }) => $attributes.id === id);

            const index = oldModules.rows.indexOf(comparedModule);
            oldModules.rows.splice(index, 1);

            if (comparedModule.$attributes.level !== name) {
                await Module.query().where({ id }).update({ level: name });
            }
        });

        // deletar
        oldModules.rows.map(async ({ $attributes }) => {
            await Module.query().where({ id: $attributes.id }).delete();
        })

        await Course.query().where({ id: course_id }).update({ name: courseName });

        return response.status(200).send({ message: "Curso atualizado com sucesso" });
    }
}

module.exports = CourseController
