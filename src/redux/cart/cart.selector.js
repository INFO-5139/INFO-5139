import { createSelector } from "@reduxjs/toolkit";

export const selectCart = (state) => state.cart;

export const selectAmount = createSelector([selectCart], (cart) => cart.amount);
