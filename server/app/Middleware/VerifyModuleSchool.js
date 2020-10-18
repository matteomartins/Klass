'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Course = use('App/Models/Course');
const Module = use('App/Models/Module');
const Database = use('Database');

class VerifyModuleSchool {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request,response }, next) { 

    const idSchool = request.params.id_school;

    if (idSchool == null)
      idSchool = request.params.id;

    const courseQuery = await Course.query().where('school_id', idSchool).fetch(); 

    const {modules:[{module_id}]} = request.only(['modules'])

    const moduleData = await Module.query().where('id',module_id).fetch();
    if(moduleData.rows[0] == null){
      return response.status(500).send({ message: "Erro ao buscar o Módulo"})
    }else{
      const courseId = moduleData.rows[0].$attributes.course_id;

      const courseData = await Course.query().where('id',courseId).where('school_id', idSchool).fetch();
      if(courseData.rows[0] == null){
        return response.status(401).send({ message: "Você não tem autorização neste módulo"})
      }else{
        await next();
      }
    }
  }
}

module.exports = VerifyModuleSchool
