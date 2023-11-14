import {Express} from "express";
import {TProduct, TProductExpanded} from "../interfaces";
import DbService from "../services/db.service";

export default class ProductController {
  app: Express;
  database: DbService

  constructor(app: Express) {
    this.app = app
    this.database = new DbService()

    this.generateRoutes()
  }


  generateRoutes() {
    this.app.get('/items', (req, res) => {
      const list =  this.getProductsList()

      return res.send(JSON.stringify(list))
    })

    this.app.get('/item/:id', (req, res) => {
      const product =  this.getProduct(Number(req.params.id))

      return res.send(JSON.stringify(product))
    })
  }

  getProductsList(): TProduct[] {
    return this.database.getProductsList()
  }

  getProduct(id: number): TProductExpanded {
    return this.database.findProductById(id)
  }
}
