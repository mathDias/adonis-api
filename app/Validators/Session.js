'use strict'

const Antl = use('Antl')
class Session {
  get validateAll () {
    // faz com que todos campos sejam validados ao mesmo tempo
    return true
  }
  get rules () {
    return {
      email: 'required|email',
      password: 'required'
    }
  }
  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Session
