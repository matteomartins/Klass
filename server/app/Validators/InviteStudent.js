'use strict'

class InviteStudent {
  get rules () {
    return {
      group_id: 'required'
    }
  }

  get messages() {
    return {
      'group_id.required': 'Não há ID da turma.'
    }
  }
}

module.exports = InviteStudent
