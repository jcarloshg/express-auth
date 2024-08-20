export class PropertyValueError extends Error {
  /**
   *
   * @param {any} value
   */
  constructor (value) {
    super(`The value [${value}] is invalid`)
    this.name = 'PropertyValueError'
  }
}
