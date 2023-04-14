import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isActive: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateIsActive: (state, action) => {
      state.isActive = action.payload;
    },
    updateCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateIsActive, updateCartItems } = cartSlice.actions;

export default cartSlice.reducer;
