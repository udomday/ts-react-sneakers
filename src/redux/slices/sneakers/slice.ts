import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SneakerItem, SneakerSliceState, Status } from "./types";
import { getFavoriteFromLS } from "../../../utils/getFromLS";

const { favorites } = getFavoriteFromLS();

export const fetchSneakers = createAsyncThunk("fetchSneakers", async () => {
  const { data } = await axios.get<SneakerItem[]>(
    `https://649c2ac904807571923799d3.mockapi.io/sneakers`
  );
  return data;
});

const initialState: SneakerSliceState = {
  items: [],
  item: {},
  favorites,
  status: Status.LOADING,
};

export const SneakerSlice = createSlice({
  name: "sneaker",
  initialState,
  reducers: {
    addOrRemoveFavorite: (state, action: PayloadAction<SneakerItem>) => {
      const findItem = state.favorites.find(
        (obj) => obj.id === action.payload.id
      );

      if (findItem) {
        state.favorites = state.favorites.filter(
          (obj) => obj.id !== action.payload.id
        );
      } else {
        state.favorites.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    //fetchSneakers
    builder.addCase(fetchSneakers.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchSneakers.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchSneakers.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { addOrRemoveFavorite } = SneakerSlice.actions;

export default SneakerSlice.reducer;
