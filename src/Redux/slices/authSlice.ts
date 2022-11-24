import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
  },
  reducers: {
    setToken: (state, { payload }: { payload: string }) => {
      state.token = payload;
    },
  },
});
export default loginSlice.reducer;

export const { setToken } = loginSlice.actions;
