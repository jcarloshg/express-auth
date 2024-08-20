export class AbstractMethodError extends Error {
  /**
     *
     * @param {string} methodName
     * @param {string} className
     */
  constructor (methodName, className) {
    super(`This method [${methodName}] is from the class abstract [${className}]`)
    this.name = 'AbstractMethodError'
  }
}
