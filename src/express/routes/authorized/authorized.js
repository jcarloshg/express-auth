import { Router } from 'express'

// routes
import { loginRouter } from './login.js'
import { logoutRouter } from './logout.js'
import { protectedRouter } from './protected.js'

export const authorizedRouter = Router()

authorizedRouter.get('/', (req, res) => res.status(200).json({ message: '/auth' }))
authorizedRouter.use('/login', loginRouter)
authorizedRouter.use('/logout', logoutRouter)
authorizedRouter.use('/protected', protectedRouter)
