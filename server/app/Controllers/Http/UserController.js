"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')}  **/
const User = use("App/Models/User");

const Hash = use("Hash");

class UserController {
  async store({ request, auth }) {
    const userData = request.all();

    const { id, name } = await User.create(userData);

    let user = await User.find(id);

    const { token } = await auth.generate(user);

    return { token, name };
  }

  async update({ request, response, auth }) {
    const newUserData = request.all();

    const user = await auth.getUser();
    const user_id = user.$attributes.id;
    if (newUserData.password)
      newUserData.password = await Hash.make(newUserData.password);
    await User.query().where("id", user_id).update(newUserData);

    return response.status(204).send();
  }

  async show({ auth }) {
    const user = await auth.getUser();

    delete user.$attributes.password;

    return { user };
  }
}

module.exports = UserController;
