import { ProductType } from '@/types/Product';
export type ICartState = {
  data: ProductType[];
  total:number,
  count:number
};