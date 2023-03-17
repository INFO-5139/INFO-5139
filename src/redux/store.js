import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cart.reducer";
import frontPageCollectionSlice from "./frontPageCollection/frontPageCollectionSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    frontPageCollection: frontPageCollectionSlice,
  },
});
