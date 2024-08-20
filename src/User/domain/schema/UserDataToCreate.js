import { PropertyValueError } from '../../../utils/domain/errors/PropertyValueError.js'

export class UserToCreate {
  /**
     *
     * @param {string} fullName
     * @param {number} age
     * @param {string} email
     * @param {string} password
     */
  constructor (fullName, age, email, password) {
    this.validFullName(fullName)
    this.validAge(age)
    this.validEmail(email)

    this.fullName = fullName
    this.age = age
    this.email = email
    this.password = password
  }

  /**
   *
   * @param {string} fullName
   * @returns {boolean}
   */
  validFullName (fullName) {
    if (fullName === '') {
      throw new PropertyValueError(fullName)
    }
    return true
  }

  /**
   *
   * @param {number} age
   * @returns {boolean}
   */
  validAge (age) {
    if (age < 18) {
      throw new PropertyValueError(age)
    }
    return true
  }

  /**
   *
   * @param {string} email
   * @returns {boolean}
   */
  validEmail (email) {
    if (email === '') {
      throw new PropertyValueError(email)
    }
    return true
  }
}
