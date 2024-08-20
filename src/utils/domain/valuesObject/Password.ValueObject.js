import { PropertyValueError } from "../errors/PropertyValueError.js";

/**
 *
 * @param {String} value
 */
export const PasswordValueObject = (value) => {

    const RULES_STRING = "The PASSWORD must be greater than 8 characters.";
    const MESSAGE_TO_ERROR = `${RULES_STRING} The value [${value}] is invalid.`

    if (typeof value !== "string") throw new PropertyValueError(MESSAGE_TO_ERROR)
    if (value.length < 8) throw new PropertyValueError(MESSAGE_TO_ERROR)

}


