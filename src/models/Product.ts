import {
  IProduct,
  review,
  TAdditionalInformation,
  TLinks,
  TStatus,
  TProduct,
  TProductExpanded,
} from "../interfaces";
import getRandomInt from "../utils/getRandomInt";
import {names, tags, colors, sizes, categories, links, kinds, images, reviews} from '../constants'

export default class Product implements IProduct {
  readonly id: number;
  private readonly name: string;
  private readonly kind: string;
  private readonly image: string;
  private readonly price: number
  private readonly oldPrice?: number;
  private readonly status?: TStatus;
  private readonly bio: string = "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.";
  private readonly description: string = "Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.";
  private readonly rating: number;
  private readonly size: string[];
  private readonly color: string[];
  private readonly SKU: string = 'SS001';
  private readonly category: string;
  private readonly tags: string[];
  private readonly links: TLinks;
  private readonly additionalInformation: TAdditionalInformation;
  private readonly reviews: review[];

  constructor(productIndex: number, productData?: TProductExpanded) {
    const showStatus = this.getIsShowStatus(productIndex);

    this.id = productData?.id || productIndex;
    this.name = productData?.name || names[getRandomInt(0, names.length - 1)] + ` ${productIndex}`;
    this.kind = productData?.kind || kinds[getRandomInt(0, kinds.length - 1)] + ` ${getRandomInt(1, 10)}`;
    this.image = productData?.image || images[getRandomInt(0, images.length - 1)];
    this.price = productData?.price || getRandomInt(500, 2000);
    this.rating = productData?.rating || getRandomInt(1, 5)
    this.size = productData?.size || sizes.slice(0, getRandomInt(2, sizes.length - 1));
    this.color = productData?.color || colors.slice(0, getRandomInt(2, colors.length - 1));
    this.category = productData?.category || categories[getRandomInt(0, categories.length - 1)];
    this.tags = productData?.tags || tags.slice(0, getRandomInt(2, tags.length - 1));
    this.links = productData?.links || links;
    this.reviews = productData?.reviews ||  reviews;
    this.additionalInformation = productData?.additionalInformation || {
      weight: getRandomInt(1, 10),
      dimensions: "W 110 x H 150 x D 70 mm",
      materials: "Metal, Plastic",
      manufacturer: "Marshall",
      country: "United Kingdom"
    }

    if (showStatus) {
      this.oldPrice =  productData?.oldPrice || this.price + getRandomInt(50, this.price - 1);
      this.status = productData?.status || {
        type: "sale",
        quantity: getRandomInt(10, 90),
      }
    }
  }

  public getProductForList(): TProduct {
    return {
      id: this.id,
      name: this.name,
      kind: this.kind,
      image: this.image,
      price: this.price,
      oldPrice: this.oldPrice,
      status: this.status
    }
  }

  public getExpandedProduct(): TProductExpanded {
    return  {
      ...this.getProductForList(),
      bio: this.bio,
      description: this.description,
      rating: this.rating,
      size: this.size,
      color: this.color,
      category: this.category,
      SKU: this.SKU,
      tags: this.tags,
      links: this.links,
      reviews: this.reviews,
      additionalInformation: this.additionalInformation
    }
  }

  private getIsShowStatus(id: number) {
    return id % 3 === 0
  }
}
