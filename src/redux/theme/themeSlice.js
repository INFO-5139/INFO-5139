/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentTheme: 'light',
  cartBackgroundColor: '#fff',
  backdropColor: '#c2edbf',
  solidButtonColor: '#388b37',
  solidButtonColorText: '#fff',
  emptyButtonColor: '#fff',
  emptyButtonColorText: '#388b37',
  storeIconColor: '#388b37',
  cartIconColor: '#000',
  textColor: '#333',
  overlayColor: '#000',
  textHighlight: '#388b37',
  tagColor: '#c2edbf',
  productItemBackground: '#f9f9f9',
  passwordVisibilityToggle: '#000',
  themeToggleIconColor: '#060613',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: (state, action) => {
      state.currentTheme = action.payload;

      if (state.currentTheme === 'light') {
        state.cartBackgroundColor = '#fff';
        state.backdropColor = '#c2edbf';
        state.solidButtonColor = '#388b37';
        state.solidButtonColorText = '#fff';
        state.emptyButtonColor = '#fff';
        state.emptyButtonColorText = '#388b37';
        state.storeIconColor = '#388b37';
        state.cartIconColor = '#000';
        state.textColor = '#333';
        state.overlayColor = '#000';
        state.textHighlight = '#388b37';
        state.tagColor = '#c2edbf';
        state.productItemBackground = '#f9f9f9';
        state.passwordVisibilityToggle = '#000';
        state.themeToggleIconColor = '#060613';
        return;
      }
      state.cartBackgroundColor = '#0a0a0f';
      state.backdropColor = '#141f14';
      state.solidButtonColor = '#466d46';
      state.solidButtonColorText = '#fff';
      state.emptyButtonColor = '#466d46';
      state.emptyButtonColorText = '#466d46';
      // state.storeIconColor = 'black';
      state.cartIconColor = '#fff';
      state.textColor = '#e6e6e6';
      state.overlayColor = 'black';
      state.textHighlight = '#466d46';
      state.tagColor = '#5a8c5a';
      state.productItemBackground = '#14141f';
      state.passwordVisibilityToggle = '#fff;';
      state.themeToggleIconColor = '#d2d22d';
      return;
    },
  },
});

export const { switchTheme } = themeSlice.actions;
export default themeSlice.reducer;
