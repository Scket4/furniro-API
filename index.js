import express from 'express'
import cors from 'cors'
import {generateRandomProduct} from './generateProducts.js'
import item from './item.json' assert { type: "json" };
import item2 from './item2.json' assert { type: "json" };



const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  console.log('Получили запрос на localhost:3000')
  res.send(JSON.stringify('Hello World!'))
})

app.get('/items', (req, res) => {
  const products = [];

  for (let i = 1; i <= 40; i++) {
    products.push(generateRandomProduct(i, i % 2 === 0));
  }
  res.send(products)
})

app.get('/item/1', (req, res) => {
  res.send(JSON.stringify(item))
})
app.get('/item/2', (req, res) => {
  res.send(JSON.stringify(item2))
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
