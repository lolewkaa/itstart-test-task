import { configureStore } from "@reduxjs/toolkit";
import seminarsReducer from "./slices/seminarsSlice";

export const store = configureStore({
  reducer: {
    seminars: seminarsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
