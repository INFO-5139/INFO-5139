import { createSelector } from "@reduxjs/toolkit";

export const selectCart = (state) => state.cart;

export const selectIsActive = createSelector(
  [selectCart],
  (cart) => cart.isActive
);
