export class User {
    /**
     *
     * @param {{ id:String, fullName:String, age:Number, email:String, password:String }} param0
     */
    constructor({ id, fullName, age, email, password }) {
        this.id = id
        this.fullName = fullName
        this.age = age
        this.email = email
        this.password = password
    }
}