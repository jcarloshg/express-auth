export class PropertyValueError extends Error {
  /**
   *
   * @param {any} message
   */
  constructor(message) {
    super(message)
    this.name = 'PropertyValueError'
  }
}
