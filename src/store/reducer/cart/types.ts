import { ProductType } from '@/types/Product';

export interface ProductCart extends ProductType {
  countProduct:number
}

export type ICartState = {
  data: ProductCart[];
  total:number,
  count:number
};