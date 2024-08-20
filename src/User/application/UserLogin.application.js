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

        try {

            const userToLogin = new UserToLogin({ email, password });

            const isThisEmailExist = this.#userRepository.isThisEmailExist(email);
            if (isThisEmailExist == false) return new CustomResponse(404, `The email [${email}] not exists`, null);

            return await this.#userRepository.login(userToLogin);

        } catch (error) {
            return new CustomResponse(400, error.message, null);
        }

    }

}