import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Auth";
import LoginReducer from "./login";
const store = configureStore({
  reducer: { token: LoginReducer, auth: AuthReducer },
});

export default store;
