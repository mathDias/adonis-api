'use strict'

const Antl = use('Antl')
class ResetPassword {
  get validateAll () {
    // faz com que todos campos sejam validados ao mesmo tempo
    return true
  }
  get rules () {
    return {
      token: 'required',
      password: 'required|confirmed'
    }
  }
  get messages () {
    return Antl.list('validation')
  }
}

module.exports = ResetPassword
