import express from 'express'
import { PORT } from './config.js'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello word')
})

app.post('/login', (req, res) => {})
app.post('/register', () => {})
app.post('/logout', () => {})
app.get('/protected', () => {})

app.listen(PORT, () => {
  console.log(`App is running but the port: ${PORT}`)
})
