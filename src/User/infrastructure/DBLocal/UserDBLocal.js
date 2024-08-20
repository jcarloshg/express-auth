import crypto from 'node:crypto'
import bcryp from 'bcrypt'

import { SALT_ROUNDS } from '../../../config.js'

// domain
import { UserRepository } from '../../domain/repositories/User.repository.js'
import { UserCreated } from '../../domain/schema/UserCreated.js'
import { CustomResponse } from '../../../utils/domain/responses/CustomResponse.js'
// infrastructure
import { UserPersistenceApi } from './configure.js'

export class UserDBLocal extends UserRepository {
  /**
     *
     * @param {string} fullName
     * @param {number} age
     * @param {string} email
     * @param {string} password
     * @returns {CustomResponse}
     */
  create(fullName, age, email, password) {

    // create the id
    const id = crypto.randomUUID() // Generate a class to get the ID
    const hashPassword = bcryp.hashSync(password, SALT_ROUNDS);
    const data = {
      _id: id,
      fullName,
      age,
      email,
      password: hashPassword
    }

    // add to data base
    UserPersistenceApi.create(data).save()

    const customResponse = new CustomResponse(
      200, 'user created correctly',
      {
        user: new UserCreated(id, fullName, age, email)
      }
    )

    return customResponse;

  }

  /**
   *
   * @param {UserToLogin} userToLogin
   */
  login(userToLogin) {

  }


  /**
   *
   * @param {string} email
   * @returns {boolean}
   */
  isThisEmailExist(email) {
    const userFound = UserPersistenceApi.findOne({ email })
    return userFound ? true : false;
  }

}
