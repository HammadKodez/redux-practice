// store/index.js
"use client"; // Keep this as it relies on window.__REDUX_DEVTOOLS_EXTENSION__
import { combineReducers, createStore } from "redux";
import productsReducer from "./productsReducer";
import cartReducer, {
  addCartItem,
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
} from "./cartReducer";
import wishListReducer, {
  addWishListItem,
  removeWishListItem,
} from "./wishListReducer";

const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
});

export const store = createStore(
  reducer,
  typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__?.() // Safely access window
);

console.log("Redux store initialized:", store); // This will show in the browser console
