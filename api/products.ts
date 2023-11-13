import {Express} from "express";
import {IProduct} from "../interfaces";

export default class ProductRoutes {
  app: Express;

  constructor(app: Express) {
    this.app = app

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

  getProductsList(): IProduct[] {
    const products = [];

    return products
  }

  getProduct(id: number): IProduct {
    if (id === 1) {
      return this.item1
    } else {
      return this.item2
    }
  }
}
