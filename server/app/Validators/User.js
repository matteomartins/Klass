'use strict'

class User {

  get rules() {
    return {
      email: 'required|email|unique:usuario',
      password: 'required',
      nomeUsuario: 'required',
      isPremium: 'required'
    }
  }

  get messages() {
    return {
      'email.required': 'You must provide a email address.',
      'email.email': 'You must provide a valid email address.',
      'email.unique': 'This email is already registered.',
      'password.required': 'You must provide a password.',
      'nomeUsuario.required': 'You must provide a username.'
    }
  }

  get sanitizationRules() {
    return {
      email: 'normalize_email',
    }
  }

}

module.exports = User
