import {TProduct, TProductExpanded} from "../interfaces";
import Product from "../models/Product";
import fs from "fs";

export default class DbService {
  private readonly products: Product[] = [];
  private readonly databaseDir: string = './src/db'
  private readonly databaseFile: string = '/data.json'

  constructor() {
    const localData = this._getLocalData()

    if (localData?.length) {
      localData.forEach((product: TProductExpanded) => {
        this.products.push(new Product(product.id, product))
      })
      return
    }

    for (let i = 1; i < 100; i++) {
      this.products.push(new Product(i))
    }

    this._setLocalData()
  }

  private _getLocalData() {
    try {
      const data = fs.readFileSync(this.databaseDir + this.databaseFile, 'utf8')
      return JSON.parse(data) || [];
    } catch {
      console.log('Ошибка при чтении файлы')
    }
  }

  private _setLocalData() {
    try {
      const data = JSON.stringify(this.products);

      const dir = './src/db';

      if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
      }

      fs.writeFileSync('./src/db/data.json', data);
    } catch (e) {
      console.error(e)
    }
  }

  public findProductById(id: number): TProductExpanded {
    const product  = this.products.find(product => product.id === id)

    if (!product) {
      throw new Error(`Product with id ${id} not found`)
    }

    return product.getExpandedProduct()
  }

  public getProductsList(): TProduct[] {
    return this.products.map(product => product.getProductForList())
  }
}
