export class CustomResponse {
  /**
     *
     * @param {Number} code
     * @param {String} message
     * @param {any} data
     */
  constructor (code, message, data) {
    this.code = code
    this.message = message
    this.data = data
  }
}
