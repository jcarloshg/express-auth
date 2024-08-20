// import dbLocal = require("db-local");

import DBLocal from 'db-local'
const { Schema } = new DBLocal({ path: './db' })

export const UserPersistenceApi = Schema('user', {
  _id: { type: String, required: true },
  fullName: { type: String, required: true },
  age: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
})
