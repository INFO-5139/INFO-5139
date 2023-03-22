import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userLoggedIn: false,
  displayName: false,
};

const userStateSlice = createSlice({
  name: 'userState',
  initialState,
  reducers: {
    setUserState(state, action) {
      state.userLoggedIn = action.payload;
    },
    setDisplayName(state, action) {
      state.displayName = action.payload;
    },
  },
});

// console.log(initialState.displayName);

export const { setUserState, setDisplayName } =
  userStateSlice.actions;
export default userStateSlice.reducer;
