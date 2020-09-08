'use strict'

class UserProfessor {
  get rules () {
    return {
      titulation: 'required',
      days: 'required'
    }
  }

  get messages() {
    return {
      'titulation.required': 'Você deve inserir sua titulação.',
      'days.required': 'Você deve inserir seus dias e horários disponíveis.'
    }
  }
}

module.exports = UserProfessor
