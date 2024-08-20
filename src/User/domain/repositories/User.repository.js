// eslint-disable-next-line no-unused-vars
import { UserToLogin } from '../schema/UserToLogin.js'

import { AbstractMethodError } from '../../../utils/domain/errors/AbstractMethodError.js'

export class UserRepository {
  /**
     *
     * @param {string} fullName
     * @param {number} age
     * @param {string} email
     */
  static create (fullName, age, email) {
    throw new AbstractMethodError('create', 'UserRepository')
  }

  /**
   *
   * @param {UserToLogin} userToLogin
   */
  static login (userToLogin) {
    throw new AbstractMethodError('login', 'UserRepository')
  }
}
