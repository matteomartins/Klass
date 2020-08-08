'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')}  **/
const User = use('App/Models/User');

class UserController {
    async create({request, auth}) {
        const userData = request.all();
        
        const { idUsuario } = await User.create(userData);

        let user = await User.find(idUsuario);
        user.$attributes.id = user.$attributes.idUsuario;

        const { token } = await auth.generate(user);

        return { token };
    }
    
    async update({request, response, auth}) {
        const newUserData = request.all();

        const user = await auth.getUser()
        const user_id = user.$attributes.idUsuario;

        await User.query().where('idUsuario', user_id).update(newUserData)

        return response.status(204).send()
    }
}

module.exports = UserController
