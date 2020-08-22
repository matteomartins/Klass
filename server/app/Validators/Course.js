'use strict'

class Course {
  get rules() {
    return {
      name: 'required',
      level: 'required'
    }
  }

  get messages() {
    return {
      'name.required': 'Você deve inserir o nome do curso.',
      'level.required': 'Você deve inserir o nível do módulo.'
    }
  }
}

module.exports = Course
