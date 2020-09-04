'use strict'

class Professor {
  get rules () {
    return {
      name: 'required',
      email: 'required',
      subjects: 'required'
    }
  }

  get messages() {
    return {
      'name.required': 'Você deve inserir o nome do professor.',
      'email.required': 'Você deve inserir o email do professor.',
      'subjects.required': 'Você deve inserir as matérias do professor.'
    }
  }
}

module.exports = Professor
