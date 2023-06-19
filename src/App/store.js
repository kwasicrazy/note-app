import { configureStore } from "@reduxjs/toolkit";
import expenceReducer from "../fetures/expenceSlice";

export const store = configureStore({
  reducer: {
    expenses: expenceReducer,
  },
});
