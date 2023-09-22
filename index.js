import express from 'express'
import cors from 'cors'
import items from './items.json' assert { type: "json" };
import item from './item.json' assert { type: "json" };


const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  console.log('Получили запрос на localhost:3000')
  res.send(JSON.stringify('Hello World!'))
})

app.get('/items', (req, res) => {
  res.send(JSON.stringify(items))
})

app.get('/item/1', (req, res) => {
  res.send(JSON.stringify(item))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
