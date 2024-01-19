import { createAction } from '@reduxjs/toolkit';
import { ProductCart } from './types';
import { ProductType } from '@/types/Product';

export const addProductCart = createAction<ProductCart | ProductType>('cart/add-product-cart');
