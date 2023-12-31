export type SneakerItem = {
  id: string;
  title: string;
  price: number;
  imgurl: string;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface SneakerSliceState {
  items: SneakerItem[];
  item: SneakerItem | {};
  favorites: SneakerItem[];
  status: Status;
}
