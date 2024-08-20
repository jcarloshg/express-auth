// CreateUser.application.js

import { UserDBLocal } from '../../infrastructure/DBLocal/UserDBLocal.js'
import { CustomResponse } from '../../../utils/domain/responses/CustomResponse.js'

export class CreateUserApplication {
  /**
       *
       * @param {string} fullName
       * @param {number} age
       * @param {string} email
       * @param {string} password
     * @returns {CustomResponse}
       */
  static run(fullName, age, email, password) {
    return UserDBLocal.create(fullName, age, email, password)
  }
}
