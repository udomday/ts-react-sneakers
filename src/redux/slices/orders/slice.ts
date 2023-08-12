import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { OrderType, OrdersSliceState } from "./types";
import { $host } from "../../../utils/http";
import { Status } from "../sneakers/types";

export const addOrder = createAsyncThunk(
  "addOrder",
  async (order: OrderType) => {
    await $host.post<OrderType>(`api/orders/`, {
      userId: order.userId,
      sneakers: order.sneakers,
      date: order.date,
      totalPrice: order.totalPrice,
      status: order.status,
    });
  }
);

export const fetchOrders = createAsyncThunk(
  "fetchOrder",
  async (userId: string) => {
    //@ts-ignore
    const { data } = await $host.get(`api/orders?userId=${userId}`);

    return data;
  }
);

const initialState: OrdersSliceState = {
  items: [],
  status: Status.LOADING,
};

export const OrdersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    createOrder: (state, action: PayloadAction<OrderType>) => {
      state.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    //fethOrders
    builder.addCase(fetchOrders.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchOrders.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { createOrder } = OrdersSlice.actions;

export default OrdersSlice.reducer;
