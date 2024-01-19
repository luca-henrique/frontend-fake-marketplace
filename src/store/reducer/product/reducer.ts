import { createReducer } from '@reduxjs/toolkit';
import {
  readProductsRequest, readProductsSuccess, searchProductSuccess, searchProductByCategorySuccess
} from './actions';

import { initialState } from './initialState';

export const productReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(readProductsRequest, (state) => {
      state.loading = true
    })
    .addCase(readProductsSuccess, (state, action) => {
      state.data = action.payload
      
      const items = action.payload.filter(
        (produto, index, array) => array.findIndex(p => p.category.name === produto.category.name) === index
      );
      
      const categories = items.map((item) => item.category)
      
      state.categories = categories
      state.loading = false
    })
    .addCase(searchProductSuccess, (state, action) => {
      state.data = action.payload
    })
    .addCase(searchProductByCategorySuccess, (state, action) => {
      state.data = action.payload
    })
});