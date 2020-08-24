'use strict'

class Course {
  get rules() {
    return {
      name: 'required',
      modules: 'required'
    }
  }

  get messages() {
    return {
      'name.required': 'Você deve inserir o nome do curso.',
      'modules.required': 'Você deve inserir o nível do módulo.'
    }
  }
}

module.exports = Course
