import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";
import moviesReducer from "./moviesSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default appStore;
