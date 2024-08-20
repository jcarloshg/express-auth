
// Domain
import { UserToCreate } from '../schema/UserDataToCreate.js';
import { CustomResponse } from '../../../utils/domain/responses/CustomResponse.js'
import { UserRepository } from '../repositories/User.repository.js';


export class CreateUserApplication {

  /**
   *
   * @param {UserRepository} userRepository
   */
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  /**
       *
       * @param {string} fullName
       * @param {number} age
       * @param {string} email
       * @param {string} password
     * @returns {CustomResponse}
       */
  run(fullName, age, email, password) {

    // ============================================================
    // valid data
    // ============================================================
    try {
      const userToCreate = new UserToCreate(fullName, age, email, password)
    } catch (error) {
      const customResponse = new CustomResponse(400, error.message, null)
      return customResponse
    }


    // ============================================================
    // check that the email not exists
    // ============================================================
    const isThisEmailExist = this.userRepository.isThisEmailExist(email);
    if (isThisEmailExist) {
      const customResponse = new CustomResponse(400, `The email [${email}] already exists`, null)
      return customResponse
    }


    // ============================================================
    // save user
    // ============================================================
    const response = this.userRepository.create(fullName, age, email, password)

    return response;
  }
}
