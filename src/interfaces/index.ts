export type TLinks = {
  ig: string,
  facebook: string,
  twitter: string
}

export type TStatus = {
  type: string,
  quantity: number
}

export type TAdditionalInformation = {
  weight: number,
  dimensions: string,
  materials: string,
  manufacturer: string,
  country: string
}

export type review = {
  name: string,
  date: string,
  rating: number,
  comment: string
}

export type TProduct = {
  id: number,
  name: string,
  kind: string,
  image: string,
  price: number,
  oldPrice?: number,
  status?: TStatus
}

export type TProductAdditional  = {
  bio: string,
  description: string,
  rating: number,
  size: string[],
  color: string[],
  SKU: string,
  category: string,
  tags: string[],
  links: TLinks,
  additionalInformation: TAdditionalInformation,
  reviews: review[]
}

export type TProductExpanded = TProduct & TProductAdditional

export interface IProduct {
  getProductForList(): TProduct,
  getExpandedProduct(): TProductAdditional
}
