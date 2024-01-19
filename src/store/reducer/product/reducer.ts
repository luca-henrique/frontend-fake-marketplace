import { createReducer } from '@reduxjs/toolkit';
import {
  readProductsRequest, readProductsSuccess, readCategoriesRequest, readCategoriesSuccess, searchProductSuccess
} from './actions';

import { initialState } from './initialState';

export const productReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(readProductsRequest, (state) => {
      state.loading = true
    })
    .addCase(readProductsSuccess, (state, action) => {
      state.data = action.payload
      state.loading = false
    })
    .addCase(readCategoriesRequest, (state) => {
      state.loadingCategories = true
    })
    .addCase(readCategoriesSuccess, (state, action) => {
      state.categories = action.payload
      state.loadingCategories = false
    })
    .addCase(searchProductSuccess, (state, action) => {
      state.data = action.payload
    })
});