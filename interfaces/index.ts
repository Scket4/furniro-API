type TSizes = ["S", "M", "L", "XL"];
type TColors = ["black", "white", "blue"]
type TTags = ["Sofa", "Asgaard", "Outdoor", "Bar", "Table", "Stool"]

type TLinks = {
  ig: string,
  facebook: string,
  twitter: string
}

type TAdditionalInformation = {
  weight: string,
  dimensions: string,
  materials: string,
  manufacturer: string,
  country: string
}

type review = {
  name: string,
  date: string,
  rating: number,
  comment: string
}

export interface IProduct  {
  name: string,
  kind: string,
  image: string,
  price: number,
  bio: string,
  description: string,
  oldPrice?: number,
  rating: number,
  size: TSizes,
  color: TColors,
  id: number,
  SKU: string,
  category: string,
  tags: TTags,
  links: TLinks,
  additionalInformation: TAdditionalInformation,
  reviews: review[]
}
