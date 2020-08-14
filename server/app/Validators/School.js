'use strict'

class School {
  get rules() {
    return {
      nomeEscola: 'required',
      descricao: 'required',
      periodoLetivo: 'required',
      iconEscola: 'required'
    }
  }

  get messages() {
    return {
      'nomeEscola.required': 'Você deve inserir o nome da escola.',
      'descricao.required': 'Você deve inserir uma descrição.',
      'periodoLetivo.required': 'Você deve inserir um periodo letivo.',
      'iconEscola.required': 'Você deve selecionar um ícone.'
    }
  }
}

module.exports = School
