'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()
    this.addHook('beforeSave', async userInstance => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  projects () {
    return this.hasMany('App/Models/projects')
  }

  tasks () {
    return this.hasMany('App/Models/Task')
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }

  addresses () {
    return this.hasMany('App/Models/UserAddress')
  }
}

module.exports = User
