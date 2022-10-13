import { createSlice } from '@reduxjs/toolkit';

const authInitialState = {
  accessToken: '',
};

const auth = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    loginSuccess(state, { payload }) {
      state.accessToken = payload.accessToken;
    },
    signOut(state) {
      state.accessToken = authInitialState.accessToken;
    },
  },
});

export const { loginSuccess, signOut } = auth.actions;

export default auth.reducer;
