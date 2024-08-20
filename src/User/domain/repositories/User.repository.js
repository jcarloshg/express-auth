// eslint-disable-next-line no-unused-vars
import { UserToCreate } from '../schema/UserDataToCreate'
// eslint-disable-next-line no-unused-vars
import { UserToLogin } from '../schema/UserToLogin'

import { AbstractMethodError } from '../../../utils/domain/erros/AbstractMethodError'

export class UserRepository {
  /**
    *
    * @param {UserToCreate} userDataToCreate
    */
  static create (userDataToCreate) {
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
