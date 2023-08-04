import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { OrderType, OrdersSliceState } from "./types";
import { getOrdersFromLS } from "../../../utils/getFromLS";

const { items } = getOrdersFromLS();

const initialState: OrdersSliceState = {
  items,
};

export const OrdersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    createOrder: (state, action: PayloadAction<OrderType>) => {
      state.items.push(action.payload);
    },
  },
});

export const { createOrder } = OrdersSlice.actions;

export default OrdersSlice.reducer;
