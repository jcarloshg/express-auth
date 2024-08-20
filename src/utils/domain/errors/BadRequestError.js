export class BadRequestError extends Error {
  constructor (value) {
    super('Bad request')
    this.name = 'BadRequestError'
  }
}
