'use strict'

class School {
  get rules() {
    return {
      name: 'required',
      description: 'required',
      type: 'required',
      icon: 'required'
    }
  }

  get messages() {
    return {
      'name.required': 'Você deve inserir o nome da escola.',
      'description.required': 'Você deve inserir uma descrição.',
      'type.required': 'Você deve inserir um tipo de escola.',
      'icon.required': 'Você deve selecionar um ícone.'
    }
  }
}

module.exports = School
