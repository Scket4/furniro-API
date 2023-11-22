import cors from 'cors'
import express, { Express, Request, Response } from 'express';
import ProductController from "./api/products";

require('dotenv').config()

const app: Express = express()
const port = process.env.PORT

app.use(cors())

new ProductController(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
