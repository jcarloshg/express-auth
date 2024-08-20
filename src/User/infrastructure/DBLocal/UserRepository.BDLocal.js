import crypto from 'node:crypto'

import bcryp from 'bcrypt'
import jwt from 'jsonwebtoken'

import { JWT_SECRET_WORD, SALT_ROUNDS } from '../../../config.js'

// domain
import { UserRepository } from '../../domain/repositories/User.repository.js'
import { UserCreated } from '../../domain/schema/UserCreated.js'
import { CustomResponse } from '../../../utils/domain/responses/CustomResponse.js'
// eslint-disable-next-line no-unused-vars
import { UserToLogin } from '../../domain/schema/UserToLogin.js'
import { UserLogged } from '../../domain/schema/UserLogged.js'
// infrastructure
import { UserPersistenceApi } from './configure.js'

export class UserRepositoryBDLocal extends UserRepository {
  /**
     *
     * @param {string} fullName
     * @param {number} age
     * @param {string} email
     * @param {string} password
     * @returns {CustomResponse}
     */
  async create (fullName, age, email, password) {
    // create the id
    const id = crypto.randomUUID() // Generate a class to get the ID
    const hashPassword = await bcryp.hash(password, SALT_ROUNDS)
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

    return customResponse
  }

  /**
   *
   * @param {UserToLogin} userToLogin
   * @returns {Promise<CustomResponse>}
   */
  async login (userToLogin) {
    const MESSAGE_PASSWORD_INVALID = 'The password is invalid.'
    const MASSAGE_CREDENTIALS_VALID = 'The credential are valid.'

    const userOnDataBase = UserPersistenceApi.findOne({
      email: userToLogin.object.email
    })

    const isValid = await bcryp.compare(userToLogin.object.password, userOnDataBase.password)
    if (isValid === false) return new CustomResponse(400, MESSAGE_PASSWORD_INVALID)

    // const userLogged = new UserLogged({
    //   id: userOnDataBase._id,
    //   fullName: userOnDataBase.fullName,
    //   age: userOnDataBase.age,
    //   email: userOnDataBase.email,
    // })

    const userLogged = new UserLogged({ id: userOnDataBase._id, ...userOnDataBase })
    const token = jwt.sign(
      {
        userLogged
      },
      JWT_SECRET_WORD,
      {
        expiresIn: '1000h'
      }
    )

    return new CustomResponse(
      200,
      MASSAGE_CREDENTIALS_VALID,
      {
        userLogged,
        token
      }
    )
  }

  /**
   *
   * @param {string} email
   * @returns {boolean}
   */
  isThisEmailExist (email) {
    const userFound = UserPersistenceApi.findOne({ email })
    return !!userFound
  }
}
