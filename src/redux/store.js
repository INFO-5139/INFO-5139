import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cart.reducer";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
