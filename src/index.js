import express from 'express'
import { PORT } from './config.js'
import { CreateUserApplication } from './User/domain/application/CreateUser.application.js'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello word')
})

app.post('/login', (req, res) => {
  res.send('<h2>login</h2>')
})

app.post('/register', (req, res) => {
  let data = {}

  try {
    data = req.body
  } catch (error) {
    res.status(400).send('bad request')
  }

  const response = CreateUserApplication.run(data.fullName, data.age, data.email, data.password)

  res.status(response.code).send(response)
})

app.post('/logout', () => { })
app.get('/protected', () => { })

app.listen(PORT, () => {
  console.log(`App is running but the port: ${PORT}`)
})
