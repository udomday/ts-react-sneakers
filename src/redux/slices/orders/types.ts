import { CartItemType } from "../cart/types";
import { Status } from "../sneakers/types";

export enum OrderStatus {
  IN_PROCESS = "в обработке",
  SUCCESS = "принят",
  REJECTION = "отказ",
}

export type OrderType = {
  id?: string;
  userId: string;
  sneakers: CartItemType[];
  date: string;
  status: OrderStatus;
  totalPrice: number;
};

export interface OrdersSliceState {
  items: OrderType[];
  status: Status;
}
