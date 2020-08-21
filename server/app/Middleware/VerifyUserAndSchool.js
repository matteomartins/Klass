'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const User = use('App/Models/User');
const School = use('App/Models/School');
const Adm = use('App/Models/Administrator');

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

const Database = use('Database');


class VerifyUserAndSchool {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ request, response, auth }, next) {

    const user = await auth.getUser();
    const user_id = user.$attributes.id;
    const idSchool = request.params.id;


    const hasSchoolId = await Database.from('administrador').where('user_id', user_id).where('school_id', idSchool)

    if (hasSchoolId[0] == null) {
      return response.status(401).send({ message: "Você não tem acesso nesta escola" })
    } else {
      await next()
    }
  }
}

module.exports = VerifyUserAndSchool
