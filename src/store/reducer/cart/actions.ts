import { createAction } from '@reduxjs/toolkit';
import { ProductCart } from './types';
import { AddProductProps } from '@/pages/Checkout/Checkout';

export const addProductCart = createAction<ProductCart>('cart/add-product-cart');
export const removeProductCart = createAction<AddProductProps>('cart/remove-product-cart');
