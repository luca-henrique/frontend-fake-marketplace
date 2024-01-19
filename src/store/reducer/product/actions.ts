import { Category } from '@/types/Category';
import { ProductType } from '@/types/Product';
import { createAction } from '@reduxjs/toolkit';

export const readProductsRequest = createAction('product/read-products-request');
export const readProductsSuccess = createAction<ProductType[]>('product/read-products-success');

export const readCategoriesRequest = createAction('product/read-categories-request');
export const readCategoriesSuccess = createAction<Category[]>('product/read-categories-success');


export const searchProductRequest = createAction<string>('product/search-product-request');
export const searchProductSuccess = createAction<ProductType[]>('product/search-product-success');

export const searchProductByCategoryRequest = createAction<string>('product/search-product-by-category-request');
export const searchProductByCategorySuccess = createAction<ProductType[]>('product/search-product-by-category-success');