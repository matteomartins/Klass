'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const UserProfessor = use('App/Models/UserProfessor');

class VerifyUserAndProfessor {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response, auth }, next) {
    const user = await auth.getUser();
    const user_id = user.$attributes.id;
    const professor_id = request.params.id_professor;

    const isProfessor = await UserProfessor.query().where({user_id, professor_id}).fetch();

    if (isProfessor.rows[0] == null)
      return response.status(401).send({ message: "Você não tem acesso a este professor" });
    else
      await next();
  }
}

module.exports = VerifyUserAndProfessor
