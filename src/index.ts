import cors from 'cors'
import express, { Express, Request, Response } from 'express';
import ProductController from "./api/products";

const app: Express = express()
const port = 3000

app.use(cors())

new ProductController(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
