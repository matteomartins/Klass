'use strict'

class Turn {
  get rules () {
    return {
      name: 'required',
      start: 'required',
      end: 'required',
      class_duration: 'required',
      intervals: 'required'
    }
  }

  get messages() {
    return {
      'name.required': 'Você deve inserir o nome do turno.',
      'start.required': 'Você deve inserir o horário de início.',
      'end.required': 'Você deve inserir o horário de início.',
      'class_duration.required': 'Você deve inserir a duração da aula',
      'intervals.required': 'Você deve inserir os horários de início e fim do(s) intervalo(s).'
    }
  }
}

module.exports = Turn
