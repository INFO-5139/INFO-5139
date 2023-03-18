import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart/cart.reducer';
import themeSlice from './theme/themeSlice';
import frontPageCollectionSlice from './frontPageCollection/frontPageCollectionSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    theme: themeSlice,
    frontPageCollection: frontPageCollectionSlice,
  },
});
