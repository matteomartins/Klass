'use strict'

const Administrator = require('../Models/Administrator');



/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')}  **/
const User = use('App/Models/User');
const School = use('App/Models/School');
const Adm = use('App/Models/Administrator');

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

const Database = use('Database');


class VerifyPremiumAndSchool {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ request, auth, response }, next) {
    // call next to advance the request
    const user = await auth.getUser();
    const user_id = user.$attributes.id;

    // const premiumValue = await Database.select('isPremium').from('usuario').where('idUsuario', user_id);
    const premiumValue = await User.query().where('id', user_id).fetch('is_premium')
    const admValues = await Adm.query().where('user_id', user_id).fetch('id')

    if (premiumValue.rows[0].$attributes.is_premium == 0) {
      if (admValues.rows == 0) {
        await next()
      } else {
        return response.status(401).send({ message: "Somente assinantes Premium podem criar mais de uma escola" })
      }
    } else {

      await next()
    }

  }
}

module.exports = VerifyPremiumAndSchool
