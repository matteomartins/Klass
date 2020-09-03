'use strict'

class Subject {
  get rules () {
    return {
      name: 'required',
      abbreviation: 'required',
      modules: 'required'
    }
  }

  get messages() {
    return {
      'name.required': 'Você deve inserir o nome da matéria.',
      'abbreviation.required': 'Você deve inserir a abreviação do nome.',
      'intervals.required': 'Você deve inserir o(s) módulo(s) que terão essa matéria e a quantidade de aulas de cada módulo.'
    }
  }
}

module.exports = Subject
