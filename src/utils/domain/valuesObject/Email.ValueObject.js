import { PropertyValueError } from "../errors/PropertyValueError.js";

export class EmailValueObject {

    #rulesString = "The email must have '@' and numbers numbers.";

    /**
     *
     * @param {String} value
     */
    constructor(value) {
        this.value = value
        this.isValid(value);
    }

    getValue() { this.value }

    /**
     *
     * @param {String} value
     */
    isValid(value) {
        if (typeof value !== "string") throw new PropertyValueError(this.#getMessageError());
        if (value.includes('@') == false) throw new PropertyValueError(this.#getMessageError());
    }

    #getMessageError() {
        return `${this.#rulesString} The value [${this.value}] is invalid`
    }

}