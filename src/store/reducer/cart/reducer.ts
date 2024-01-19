import { createReducer } from "@reduxjs/toolkit";
import { addProductCart, clearCart, removeProductCart } from "./actions";

import { initialState } from "./initialState";

export const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(clearCart, (state) => {
      state.data = [];
    })
    .addCase(addProductCart, (state, action) => {
      const cart = [...state.data];
      const { id } = action.payload;
      const product = cart.find((p) => p.id === id);
      if (product) {
        product.countProduct++;
        cart.filter((p) => p.id !== id).push(product);
      } else {
        cart.push({ ...action.payload, countProduct: 1 });
      }
      state.data = cart;
      state.total = cart
        ?.map((product) => product.price * product.countProduct)
        ?.reduce((acc, curr) => acc + curr);
      state.count = cart
        ?.map((product) => product.countProduct)
        ?.reduce((acc, curr) => acc + curr);
    })
    .addCase(removeProductCart, (state, action) => {
      const { id, type } = action.payload;
      const cart = [...state.data];
      const product = cart.find((p) => p.id === id);
      if (!product) return;
      const index = cart.indexOf(product);
      if (type === "+") product.countProduct++;
      else product.countProduct--;
      if (product.countProduct > 0) cart[index] = product;
      else cart?.splice(index, 1);
      state.data = cart || [];
      state.total =
        cart?.length > 0
          ? cart
              ?.map((product) => product.price * product.countProduct)
              ?.reduce((acc, curr) => acc + curr)
          : 0;
      state.count =
        cart?.length > 0
          ? cart
              ?.map((product) => product.countProduct)
              ?.reduce((acc, curr) => acc + curr)
          : 0;
    });
});
