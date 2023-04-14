import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  item: 'All',
};

export const selectedItemSlice = createSlice({
  name: 'selectedItem',
  initialState,
  reducers: {
    setSelectedItem: (state, action) => {
      state.item = action.payload;
    },
  },
});

export const { setSelectedItem } = selectedItemSlice.actions;
export default selectedItemSlice.reducer;
