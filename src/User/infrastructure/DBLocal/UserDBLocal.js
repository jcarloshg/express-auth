import crypto from 'node:crypto'

// domain
import { UserRepository } from '../../domain/repositories/User.repository'
import { UserCreated } from '../../domain/schema/UserCreated'
import { UserToCreate } from '../../domain/schema/UserDataToCreate'
// infrastructure
import { UserPersistenceApi } from './configure'

export class UserDBLocal extends UserRepository {
  /**
     *
     * @param {string} fullName
     * @param {number} age
     * @param {string} email
     * @param {string} password
     */
  static create (fullName, age, email, password) {
    console.log({ fullName, age, email, password })

    try {
      const userToCreate = new UserToCreate(fullName, age, email, password)
    } catch (error) {
      return error.name
    }

    const userFound = UserPersistenceApi.findOne({ email })
    if (userFound) throw new Error(`the email ${email} already exists`)

    // create the id

    const id = crypto.randomUUID()

    const data = {
      _id: id,
      fullName,
      age,
      email,
      password
    }

    // add to data base
    UserPersistenceApi.create(data).save()

    const userCreated = new UserCreated(id, fullName, age, email)
    return userCreated
  }

  /**
   *
   * @param {UserToLogin} userToLogin
   */
  static login (userToLogin) {

  }
}
