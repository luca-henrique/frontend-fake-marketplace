import { Category } from '@/types/Category';
import { ProductType } from '@/types/Product';
export type IProductState = {
  data: ProductType[];
  categories:Category[]
  loading:boolean,
  loadingCategories:boolean
};