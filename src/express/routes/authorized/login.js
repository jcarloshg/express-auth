import { Router } from 'express'

import { NODE_ENV } from '../../../config.js'

// architecture
import { UserRepositoryBDLocal } from '../../../User/infrastructure/DBLocal/UserRepository.BDLocal.js'
import { UserLoginApplication } from '../../../User/application/UserLogin.application.js'

export const loginRouter = Router()

loginRouter.post('/', async (req, res) => {
  const userDBLocal = new UserRepositoryBDLocal()
  const userLoginApplication = new UserLoginApplication(userDBLocal)
  const response = await userLoginApplication.run({ ...req.body })

  if (response.code === 200) {
    res
      .cookie(
        'access_token',
        response.data.token,
        {
          // httpOnly: true, solo se puede acceder desde el server
          httpOnly: true,
          // si el ambiente es producirán se puede acceder al token
          secure: NODE_ENV === 'production',
          // solo se puede acceder del mismo sitio
          sameSite: 'strict',
          // 1 hour
          maxAge: 1000 * 60 * 60 * 60 // solo una hora es valido
        }
      )
      .status(response.code)
      .send(response)

    return
  }

  res.status(response.code).send(response)
})
