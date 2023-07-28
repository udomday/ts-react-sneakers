import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import SneakerReducer from "./slices/sneakers/slice";

export const store = configureStore({
  reducer: {
    sneaker: SneakerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
