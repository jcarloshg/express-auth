import { Router } from 'express'

import { registerRouter } from './register.js'

export const usersRouter = Router()

usersRouter.get('/', (req, res) => res.status(200).json({ message: '/users' }))
usersRouter.use('/register', registerRouter)
