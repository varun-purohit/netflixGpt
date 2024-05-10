import userReducer from "./slice/userSlice";
import moviesReducer from "./slice/moviesSlice";
import { configureStore } from "@reduxjs/toolkit";

export const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});
