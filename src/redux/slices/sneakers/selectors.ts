import { RootState } from "../../store";

export const selectSneakers = (state: RootState) => state.sneaker;

export const selectFavItemById = (id: string) => (state: RootState) =>
  state.sneaker.favorites.find((obj) => obj.id === id);

export const selectFavorites = (state: RootState) => state.sneaker.favorites;
