export class CreationErrors extends Error {
  /**
   *
   * @param {string} message
   */
  constructor (message) {
    super(message)
    this.name = 'CreationErrors'
  }
}
