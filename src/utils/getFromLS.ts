import { CartItemType } from "../redux/slices/cart/types";
import { OrderType } from "../redux/slices/orders/types";
import { SneakerItem } from "../redux/slices/sneakers/types";
import { calcTotalPrice } from "./calcTotalPrice";

export const getCartFromLS = () => {
  const data = localStorage.getItem("cart");
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items);

  return {
    items: items as CartItemType[],
    totalPrice,
  };
};

export const getFavoriteFromLS = () => {
  const data = localStorage.getItem("favorite");
  const items = data ? JSON.parse(data) : [];

  return {
    favorites: items as SneakerItem[],
  };
};

export const getOrdersFromLS = () => {
  const data = localStorage.getItem("orders");
  const items = data ? JSON.parse(data) : [];

  return {
    items: items as OrderType[],
  };
};
