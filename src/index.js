import express from 'express'
import { PORT } from './config.js'
import cookieParser from 'cookie-parser'

// express
import { corsMiddleware } from './express/middlewares/cors.js'
import { authorizedRouter } from './express/routes/authorized/authorized.js'
import { usersRouter } from './express/routes/users/users.js'

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(corsMiddleware())

app.use('/auth', authorizedRouter)
app.use('/users', usersRouter)

app.listen(PORT, () => {
  console.log(`App is running but the port: ${PORT}`)
})
