'use strict'

class InviteProfessor {
  get rules () {
    return {
      school_id: 'required'
    }
  }

  get messages() {
    return {
      'school_id.required': 'Não há ID da escola.'
    }
  }
}

module.exports = InviteProfessor
