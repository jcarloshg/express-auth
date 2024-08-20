// eslint-disable-next-line no-unused-vars
import { UserToLogin } from '../schema/UserToLogin.js'

import { AbstractMethodError } from '../../../utils/domain/errors/AbstractMethodError.js'
import { CustomResponse } from '../../../utils/domain/responses/CustomResponse.js'

export class UserRepository {
  /**
     *
     * @param {string} fullName
     * @param {number} age
     * @param {string} email
     * @returns {Promise<CustomResponse>}
     */
  async create(fullName, age, email) {
    throw new AbstractMethodError('create', 'UserRepository')
  }

  /**
   *
   * @param {UserToLogin} userToLogin
   * @returns {Promise<CustomResponse>}
   */
  async login(userToLogin) {
    throw new AbstractMethodError('login', 'UserRepository')
  }

  /**
   *
   * @param {string} email
   * @returns {boolean}
   */
  isThisEmailExist(email) {
    throw new AbstractMethodError('isThisEmailExist', 'UserRepository')
  }

}
