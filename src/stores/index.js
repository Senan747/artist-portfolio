import { configureStore } from "@reduxjs/toolkit";
import art from "./art";

const store = configureStore({
  reducer: {
    art,
  },
});

export default store;
