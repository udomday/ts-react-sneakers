export type CartItemType = {
  id: string;
  imgurl: string;
  price: number;
  title: string;
  count: number;
};

export interface cartSliceState {
  items: CartItemType[];
  totalPrice: number;
  isOpen: boolean;
}
