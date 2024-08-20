import { Router } from 'express'
import jwt from 'jsonwebtoken'

import { JWT_SECRET_WORD } from '../../../config.js'
import { CustomResponse } from '../../../utils/domain/responses/CustomResponse.js'

export const protectedRouter = Router()

protectedRouter.get('/', (req, res) => {
  // check the token
  const accessToken = req.cookies.access_token
  if (!accessToken) return res.status(404).send('Access not authorized')

  // valid the token
  const data = jwt.verify(accessToken, JWT_SECRET_WORD)
  if (!data && !data.userLogged) return res.status(404).send('Access not authorized')

  const custom = CustomResponse.create({ code: 200, message: 'You are authorized', data: { userLogged: data.userLogged } })

  return res.status(custom.code).send(custom)
})
