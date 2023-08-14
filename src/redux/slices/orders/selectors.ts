import { RootState } from "../../store";

export const selectOrders = (state: RootState) => state.order.items;

export const selectStatusOrders = (state: RootState) => state.order.status;
