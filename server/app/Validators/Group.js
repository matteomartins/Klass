'use strict'

class Group {
  get rules() {
    return {
      name: 'required',
      module_id: 'required',
      turn_id: 'required'
    }
  }

  get messages() {
    return {
      'name.required': 'Você deve inserir o nome do curso.',
      'module_id.required': 'Você deve inserir o ID do módulo.',
      'turn_id.required': 'Você deve inserir o ID do turno.'
    }
  }
}

module.exports = Group
