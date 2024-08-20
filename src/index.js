import express from 'express'
import { PORT } from './config.js'

// application
import { CreateUserApplication } from './User/application/CreateUser.application.js'
import { UserLoginApplication } from './User/application/UserLogin.application.js'
// infrastructure
import { UserRepositoryBDLocal } from './User/infrastructure/DBLocal/UserRepository.BDLocal.js'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello word')
})

app.post('/login', async (req, res) => {

  const userDBLocal = new UserRepositoryBDLocal();
  const userLoginApplication = new UserLoginApplication(userDBLocal);
  const response = await userLoginApplication.run({ ...req.body });

  res.status(response.code).send(response);

})

app.post('/register', async (req, res) => {

  let data = {}

  try {
    data = req.body
  } catch (error) {
    res.status(400).send("bad request")
  }

  const userDBLocal = new UserRepositoryBDLocal();
  const createUserApplication = new CreateUserApplication(userDBLocal);
  const response = await createUserApplication.run(data.fullName, data.age, data.email, data.password)

  res.status(response.code).send(response)

})

app.post('/logout', () => { })
app.get('/protected', () => { })

app.listen(PORT, () => {
  console.log(`App is running but the port: ${PORT}`)
})
