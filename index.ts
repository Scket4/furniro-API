import cors from 'cors'
import express, { Express, Request, Response } from 'express';

const app: Express = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  console.log('Получили запрос на localhost:3000')
  res.send(JSON.stringify('Hello World!'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
