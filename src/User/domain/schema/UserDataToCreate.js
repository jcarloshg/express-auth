export class UserToCreate {
  /**
     *
     * @param {string} fullName
     * @param {number} age
     * @param {string} email
     */
  constructor (fullName, age, email) {
    this.fullName = fullName
    this.age = age
    this.email = email
  }
}
