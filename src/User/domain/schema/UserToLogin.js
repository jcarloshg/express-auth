import { CustomResponse } from "../../../utils/domain/responses/CustomResponse.js";
import { EmailValueObject } from "../../../utils/domain/valuesObject/Email.ValueObject.js";
import { PasswordValueObject } from "../../../utils/domain/valuesObject/Password.ValueObject.js";

export class UserToLogin {


  #emailValueObject
  #passwordValueObject


  /**
   *
   * @param {{email: String, password: Number}} param0
   */
  constructor({ email, password }) {
    this.#emailValueObject = new EmailValueObject(email);
    this.#passwordValueObject = new PasswordValueObject(password);
  }

  /**
   *
   * @returns {{email: String, password: Number}}
   */
  get object() {
    return {
      email: this.#emailValueObject.value,
      password: this.#passwordValueObject.value,
    }
  }

}
