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

  /**
   *
   * @param {{code:Number, message:String, data:any}} param0
   * @returns {CustomResponse}
   */
  static create ({ code, message, data }) {
    return new CustomResponse(code, message, data)
  }
}
