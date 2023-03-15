/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentTheme: 'light',
  backgroundColor: 'gray',
  backdropColor: '#c2edbf',
  solidButtonColor: '#388b37',
  solidButtonColorText: '#fff',
  emptyButtonColor: '#fff',
  emptyButtonColorText: '#388b37',
  storeIconColor: '#388b37',
  textColor: '#333',
  textHighlight: '#388b37',
  tagColor: '#c2edbf',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: (state, action) => {
      state.currentTheme = action.payload;

      if (state.currentTheme === 'light') {
        state.backgroundColor = '#fff';
        state.backdropColor = '#c2edbf';
        state.solidButtonColor = '#388b37';
        state.solidButtonColorText = '#fff';
        state.emptyButtonColor = '#fff';
        state.emptyButtonColorText = '#388b37';
        state.storeIconColor = '#388b37';
        state.textColor = '#333';
        state.textHighlight = '#388b37';
        state.tagColor = '#c2edbf';
        return;
      }
      state.backgroundColor = 'black';
      state.backdropColor = 'black';
      state.solidButtonColor = 'black';
      state.solidButtonColorText = 'black';
      state.emptyButtonColor = 'black';
      state.emptyButtonColorText = 'black';
      state.storeIconColor = 'black';
      state.textColor = 'black';
      state.textHighlight = 'black';
      state.tagColor = 'black';
      return;
    },
  },
});

export const { switchTheme } = themeSlice.actions;
export default themeSlice.reducer;
