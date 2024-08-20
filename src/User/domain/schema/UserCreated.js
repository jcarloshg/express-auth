export class UserCreated {
  /**
       *
       * @param {string} id
       * @param {string} fullName
       * @param {number} age
       * @param {string} email
       */
  constructor (id, fullName, age, email) {
    this.id = id
    this.fullName = fullName
    this.age = age
    this.email = email
  }
}
