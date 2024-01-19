import { createAction } from '@reduxjs/toolkit';
import { ProductCart } from './types';

export const addProductCart = createAction<ProductCart>('cart/add-product-cart');
