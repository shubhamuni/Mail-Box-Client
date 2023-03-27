import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");
const loginSlice = createSlice({
  name: "login",
  initialState: {
    token: token,
  },
  reducers: {
    saveToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", state.token);
    },
    removeToken: (state, action) => {
      state.token = action.payload;
      localStorage.removeItem("token");
    },
  },
});

export const loginAction = loginSlice.actions;

export default loginSlice.reducer;
