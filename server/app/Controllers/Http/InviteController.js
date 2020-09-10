'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Professor = use('App/Models/Professor');
const Student = use('App/Models/Student');
const UserProfessor = use('App/Models/UserProfessor');

class InviteController {
  async createProfessor({request, response, auth}){
    const user = await auth.getUser();

    const {school_id} = request.only(['school_id']);
    try{
      const {rows:[{$attributes:{id: professor_id}}]} = await Professor.query().where({school_id, email: user.$attributes.email}).fetch();

      const verify = await UserProfessor.query().where({professor_id, user_id: user.$attributes.id}).fetch();
      if(verify.rows.length == 0)
        await UserProfessor.create({user_id:user.$attributes.id, professor_id});

      return response.status(201).send({ message: "Inserido com sucesso"});
    }
    catch{
      return response.status(201).send({ message: "Você não é professor desta escola"});
    }
  }

  async createGroup({request, response, auth}){
    const user = await auth.getUser();

    const {group_id} = request.only(['group_id']);

    const verify = await Student.query().where({group_id, user_id: user.$attributes.id}).fetch();
    if(verify.rows.length == 0)
      await Student.create({group_id, user_id:user.$attributes.id});

    return response.status(201).send({ message: "Inserido com sucesso"});
  }
}

module.exports = InviteController
