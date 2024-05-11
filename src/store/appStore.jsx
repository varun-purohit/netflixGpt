import userReducer from "./slice/userSlice";
import moviesReducer from "./slice/moviesSlice";
import gptReducer from "./slice/gptSlice";
import { configureStore } from "@reduxjs/toolkit";

export const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
  },
});
