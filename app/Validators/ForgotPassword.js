'use strict'

const Antl = use('Antl')
class ForgotPassword {
  get validateAll () {
    // faz com que todos campos sejam validados ao mesmo tempo
    return true
  }
  get rules () {
    return {
      email: 'required|email',
      redirect_url: 'required|url'
    }
  }
  get messages () {
    return Antl.list('validation')
  }
}

module.exports = ForgotPassword
