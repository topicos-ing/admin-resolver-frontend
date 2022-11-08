/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    loggedIn: false,
    user: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.loggedIn = true;
      state.user = payload;
    },
  },
});
export default loginSlice.reducer;

export const { login: loginActionCreator } = loginSlice.actions;
