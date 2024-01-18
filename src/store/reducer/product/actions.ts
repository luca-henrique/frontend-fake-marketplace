import { Category } from '@/types/Category';
import { ProductType } from '@/types/Product';
import { createAction } from '@reduxjs/toolkit';

export const readProductsRequest = createAction('product/read-products-request');
export const readProductsSuccess = createAction<ProductType[]>('product/read-products-success');

export const readCategoriesRequest = createAction('product/read-categories-request');
export const readCategoriesSuccess = createAction<Category[]>('product/read-categories-success');
