'use strict'

const Antl = use('Antl')
class Project {
  get validateAll () {
    // faz com que todos campos sejam validados ao mesmo tempo
    return true
  }
  get rules () {
    return {
      title: 'required',
      description: 'required'
    }
  }
  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Project
