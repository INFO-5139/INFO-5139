import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userLoggedIn: false,
};

const userStateSlice = createSlice({
  name: 'userState',
  initialState,
  reducers: {
    setUserState(state, action) {
      state.userLoggedIn = action.payload;
    },
  },
});

export const { setUserState } = userStateSlice.actions;
export default userStateSlice.reducer;
