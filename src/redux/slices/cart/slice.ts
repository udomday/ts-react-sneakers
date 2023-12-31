import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItemType, cartSliceState } from "./types";
import { calcTotalPrice } from "../../../utils/calcTotalPrice";
import { getCartFromLS } from "../../../utils/getFromLS";

const { items, totalPrice } = getCartFromLS();

const initialState: cartSliceState = {
  items,
  totalPrice,
  isOpen: false,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCloseCart: (state) => {
      state.isOpen = !state.isOpen;
    },

    addItem: (state, action: PayloadAction<CartItemType>) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        action.payload.count = 1;
        state.items.push(action.payload);
      }

      state.totalPrice = calcTotalPrice(state.items);
    },

    removeItem: (state, action: PayloadAction<String>) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload);

      state.totalPrice = calcTotalPrice(state.items);
    },

    removeAllItem: (state) => {
      state.items = [];

      state.totalPrice = 0;
    },
  },
});

export const { openCloseCart, addItem, removeItem, removeAllItem } =
  CartSlice.actions;

export default CartSlice.reducer;
