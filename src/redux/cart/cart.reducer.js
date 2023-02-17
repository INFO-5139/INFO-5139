import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActive: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateIsActive: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateIsActive } = cartSlice.actions;

export default cartSlice.reducer;
