import { PropertyValueError } from "../errors/PropertyValueError.js";

export class PasswordValueObject {

    value

    /**
     *
     * @param {String} value
     */
    constructor(value) {

        this.value = value

        const RULES_STRING = "The PASSWORD must be greater than 8 characters.";
        const MESSAGE_TO_ERROR = `${RULES_STRING} The value [${value}] is invalid.`

        if (typeof value !== "string") throw new PropertyValueError(MESSAGE_TO_ERROR)
        if (value.length < 8) throw new PropertyValueError(MESSAGE_TO_ERROR)

    }
}