import crypto from 'node:crypto'

// domain
import { UserRepository } from '../../domain/repositories/User.repository.js'
import { UserCreated } from '../../domain/schema/UserCreated.js'
import { UserToCreate } from '../../domain/schema/UserDataToCreate.js'
// infrastructure
import { UserPersistenceApi } from './configure.js'
import { CustomResponse } from '../../../utils/domain/responses/CustomResponse.js'

export class UserDBLocal extends UserRepository {
  /**
     *
     * @param {string} fullName
     * @param {number} age
     * @param {string} email
     * @param {string} password
     * @returns {CustomResponse}
     */
  static create(fullName, age, email, password) {

    try {
      const userToCreate = new UserToCreate(fullName, age, email, password)
    } catch (error) {
      const customResponse = new CustomResponse(400, error.message, null)
      return customResponse
    }

    const userFound = UserPersistenceApi.findOne({ email })
    if (userFound) return new CustomResponse(400, `The email [${email}] already exists`, null)

    // create the id && add to data base
    const id = crypto.randomUUID()
    const data = {
      _id: id,
      fullName,
      age,
      email,
      password
    }
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
  static login(userToLogin) {

  }
}
