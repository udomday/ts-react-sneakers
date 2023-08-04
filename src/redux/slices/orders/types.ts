import { CartItemType } from "../cart/types";

export enum OrderStatus {
  IN_PROCESS = "в обработке",
  SUCCESS = "принят",
  REJECTION = "отказ",
}

export type OrderType = {
  sneakers: CartItemType[];
  date: string;
  status: OrderStatus;
};

export interface OrdersSliceState {
  items: OrderType[];
}
