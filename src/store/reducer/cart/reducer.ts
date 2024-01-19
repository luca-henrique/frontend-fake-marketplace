import { createReducer } from "@reduxjs/toolkit";
import { addProductCart, removeProductCart } from "./actions";

import { initialState } from "./initialState";

export const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addProductCart, (state, action) => {
      const cart = [...state.data];
      let total = state.total;
      total += action.payload.price;
      cart.push({ ...action.payload, countProduct: 1 });
      state.data = cart;
      state.count += 1;
      state.total = total;
    })
    .addCase(removeProductCart, (state, action) => {
      const { id, type } = action.payload;
      const cart = [...state.data];
      const product = cart.find((p) => p.id === id);
      if (!product) return;
      const cartWithout = cart.filter((p) => p.id !== id);
      if (type === "+") product.countProduct++;
      else product.countProduct--;
      state.data = [
        ...cartWithout,
        ...(product && product?.countProduct > 0 ? [product] : []),
      ];
    });
});
