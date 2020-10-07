"use strict";
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const User = use("App/Models/User");

class VerifyToken {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ request, response, auth }, next) {
    try {
      await auth.getUser();
      await next();
    }
    catch (error) {
      return response.status(401).send({ message: "Erro de autenticação", error: error.message });
    }
  }
}

module.exports = VerifyToken;
