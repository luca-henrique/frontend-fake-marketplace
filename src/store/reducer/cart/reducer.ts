import { createReducer } from '@reduxjs/toolkit';
import {
  addProductCart
} from './actions';

import { initialState } from './initialState';

export const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addProductCart, (state, action) => {
      const cart = [...state.data]
      let total = state.total
      total += action.payload.price
      cart.push(action.payload)
      state.data = cart;
      state.count += 1
      state.total = total
    })
});