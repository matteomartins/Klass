'use strict'

class User {

  get rules() {
    return {
      email: 'required|email|unique:users',
      password: 'required',
      name: 'required',
    }
  }

  get messages() {
    return {
      'email.required': 'Você deve inserir um email.',
      'email.email': 'Você precisa inserir um email válido.',
      'email.unique': 'Este email já está cadastrado.',
      'password.required': 'Você deve inserir uma senha.',
      'name.required': 'Você deve inserir o nome de usuário.'

    }
  }

  get sanitizationRules() {
    return {
      email: 'normalize_email',
    }
  }

}

module.exports = User
