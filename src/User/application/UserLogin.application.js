import { CustomResponse } from "../../utils/domain/responses/CustomResponse.js";
import { UserRepository } from "../domain/repositories/User.repository.js";
import { UserToLogin } from "../domain/schema/UserToLogin.js";

export class UserLoginApplication {

    #userRepository

    /**
     *
     * @param {UserRepository} userRepository
     */
    constructor(userRepository) {
        this.#userRepository = userRepository;
    }


    /**
     *
     * @param {{email: String, password: Number}} param0
     * @returns {Promise<CustomResponse>}
     */
    async run({ email, password }) {

        const error = await UserToLogin.isValid({ email, password });
        if (error) return error;

        const isThisEmailExist = this.#userRepository.isThisEmailExist(email);

        return new CustomResponse(400, "NOTHING", null);

    }

}