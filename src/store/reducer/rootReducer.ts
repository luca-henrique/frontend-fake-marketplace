import { combineReducers } from 'redux';
import { cartReducer } from "./cart/reducer"
import { productReducer } from './product/reducer';

export const rootReducer = combineReducers({
  cart: cartReducer,
  product:productReducer
});

export type RootState = ReturnType<typeof rootReducer>;