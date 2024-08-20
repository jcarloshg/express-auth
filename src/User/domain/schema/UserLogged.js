export class UserLogged {
    /**
     *
     * @param {{ id:String, fullName:String, age:Number, email:String }} param0
     */
    constructor({ id, fullName, age, email }) {
        this.id = id
        this.fullName = fullName
        this.age = age
        this.email = email
    }
}