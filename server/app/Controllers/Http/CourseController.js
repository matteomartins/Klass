'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const School = use('App/Models/School');
const Course = use('App/Models/Course');
const Module = use('App/Models/Module');
const Adm = use('App/Models/Administrator');
const User = use('App/Models/User');
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
        const idCourse = request.params.id_course;

        const courseName = request.only(['name']);
        const level = request.only(['level']);

        const moduleLevels = await Database.select().from('modules').where({ course_id: idCourse });

        const requestLength = level.level.length;
        const moduleLength = moduleLevels.length;

        if (requestLength == moduleLength) {
            for (let i = 0; i < requestLength; i++) {
                await Database.table('modules').where('id', moduleLevels[i].id).update('level', level.level[i])
            }
        } else if (moduleLength < requestLength) {
            for (let i = 0; i < moduleLength; i++) {
                await Database.table('modules').where('id', moduleLevels[i].id).update('level', level.level[i])
            }
            for (let i = moduleLength; i < requestLength; i++) {
                await Database.table('modules').insert({ course_id: idCourse, level: level.level[i] })
            }
        }

        // console.log(level.level[0])
        // console.log(moduleLevels[0].id);
        // console.log(moduleLevels.findIndex((user, index, array) => user.level === '2 Ano'));
        // console.log(moduleLevels.filter((user, index, array) => user.level === '2 Ano'));
        // console.log(moduleLevels.find((user, index, array) => user.level === '2 Ano'));

        level.level.map(level => {

        });

        //await Course.query().where('id', idCourse).update(courseName);



        return response.status(200).send({ message: "Curso atualizado com sucesso" })
    }
}

module.exports = CourseController
