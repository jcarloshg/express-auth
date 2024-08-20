import { CustomResponse } from "../../../utils/domain/responses/CustomResponse.js";
import { EmailValueObject } from "../../../utils/domain/valuesObject/Email.ValueObject.js";
import { PasswordValueObject } from "../../../utils/domain/valuesObject/Password.ValueObject.js";

export class UserToLogin {

  /**
   *
   * @param {{email: String, password: Number}} param0
   * @returns {Promise<CustomResponse> | null}
   */
  static async isValid({ email, password }) {

    try {

      new EmailValueObject(email);
      PasswordValueObject(password);

    } catch (error) {

      return new CustomResponse(400, error.message, null)

    }

  }

}
