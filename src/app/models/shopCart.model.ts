import { Product } from "./product.model"

export class ShopCart {
  id: string = ''
  amount: number = 0
  cardStatus: string = ''
  userId: string = ''
  productId: string = ''
}
export interface ShopCartInterface {
  id:         string;
  amount:     number;
  cardStatus: string;
  createdAt:  Date;
  updatedAt:  Date;
  userId:     string;
  productId:  string;
  product: Product
}
