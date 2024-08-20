import { Router } from 'express'

import { UserRepositoryBDLocal } from '../../../User/infrastructure/DBLocal/UserRepository.BDLocal.js'
import { CreateUserApplication } from '../../../User/application/CreateUser.application.js'

export const registerRouter = Router()

registerRouter.post('/', async (req, res) => {
  let data = {}

  try {
    data = req.body
  } catch (error) {
    res.status(400).send('bad request')
  }

  const userDBLocal = new UserRepositoryBDLocal()
  const createUserApplication = new CreateUserApplication(userDBLocal)
  const response = await createUserApplication.run(data.fullName, data.age, data.email, data.password)

  res.status(response.code).send(response)
})
