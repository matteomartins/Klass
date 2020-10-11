'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')}  **/
const User = use('App/Models/User');

class SessionController {
    async store({request, response, auth}) {
        const { email, password } = request.only(['email', 'password']);

        const { token } = await auth.attempt(email, password);

        const data = await User.query().where({email}).fetch();
        
        return { token, name: data.rows[0].$attributes.name }
    }
}

module.exports = SessionController
