import { ProductType } from '@/types/Product';
import { createAction } from '@reduxjs/toolkit';

export const addProductCart = createAction<ProductType>('cart/add-product-cart');
