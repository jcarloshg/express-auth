import DBLocal from 'db-local'
const { Schema } = new DBLocal({ path: './db' })

const UserPersistenceApi = Schema('user', {
  _id: { type: String, required: true },
  fullName: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
})

export {
  UserPersistenceApi
}
