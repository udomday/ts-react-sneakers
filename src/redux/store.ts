import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import SneakerReducer from "./slices/sneakers/slice";
import CartReducer from "./slices/cart/slice";
import OrderReducer from "./slices/orders/slice";
import UserReducer from "./slices/users/slice";

export const store = configureStore({
  reducer: {
    sneaker: SneakerReducer,
    cart: CartReducer,
    order: OrderReducer,
    user: UserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
