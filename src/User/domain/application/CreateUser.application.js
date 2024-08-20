// CreateUser.application.js

import { UserDBLocal } from '../../infrastructure/DBLocal/UserDBLocal.js'

export class CreateUserApplication {
  /**
       *
       * @param {string} fullName
       * @param {number} age
       * @param {string} email
       * @param {string} password
       * @returns {string} id
       */
  static run (fullName, age, email, password) {
    const userCreated = UserDBLocal.create(fullName, age, email, password)
    return { id: userCreated.id }
  }
}
