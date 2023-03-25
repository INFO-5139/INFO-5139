import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart/cart.reducer';
import themeSlice from './theme/themeSlice';
import userStateSlice from './userState/userStateSlice';
import frontPageCollectionSlice from './frontPageCollection/frontPageCollectionSlice';
import salesCollectionSlice from './SalesCollection/salesCollectionSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    theme: themeSlice,
    frontPageCollection: frontPageCollectionSlice,
    salesCollection: salesCollectionSlice,
    userState: userStateSlice,
  },
});
