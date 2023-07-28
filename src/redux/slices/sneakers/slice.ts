import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SneakerItem, SneakerSliceState, Status } from "./types";

export const fetchSneakers = createAsyncThunk("fetchSneakers", async () => {
  const { data } = await axios.get<SneakerItem[]>(
    `https://649c2ac904807571923799d3.mockapi.io/sneakers`
  );
  return data;
});

const initialState: SneakerSliceState = {
  items: [],
  item: {},
  status: Status.LOADING,
};

export const SneakerSlice = createSlice({
  name: "sneaker",
  initialState,
  reducers: {},
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

export default SneakerSlice.reducer;
