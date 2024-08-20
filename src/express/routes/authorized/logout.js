import { Router } from 'express'

export const logoutRouter = Router()

logoutRouter.post('/', async (req, res) => {
  res.clearCookie('access_token').json({ message: 'logout successfully' })
})
