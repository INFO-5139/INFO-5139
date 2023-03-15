import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart/cart.reducer';
import themeSlice from './theme/themeSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    theme: themeSlice,
  },
});
