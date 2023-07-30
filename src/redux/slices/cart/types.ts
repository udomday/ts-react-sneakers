export type CartItemType = {
  id: string;
  imgURL: string;
  price: number;
  title: string;
  count: number;
};

export interface cartSliceState {
  items: CartItemType[];
  totalPrice: number;
  isOpen: boolean;
}
