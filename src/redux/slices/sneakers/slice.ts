import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SneakerItem, SneakerSliceState, Status } from './types';
import { getFavoriteFromLS } from '../../../utils/getFromLS';
import { $authHost, $host } from '../../../utils/http';

const { favorites } = getFavoriteFromLS();

export const createSneaker = createAsyncThunk('createSneaker', async (sneaker: FormData) => {
  const { data } = await $authHost.post<FormData>(`/api/sneakers`, sneaker);

  return data;
});

export const fetchSneakers = createAsyncThunk('fetchSneakers', async () => {
  const { data } = await $host.get<SneakerItem[]>(`api/sneakers`);

  return data;
});

export const fetchOneSneaker = createAsyncThunk('fetchOneSneaker', async (id: string) => {
  const { data } = await $host.get<SneakerItem[]>(`api/sneakers/` + id);

  return data;
});

const initialState: SneakerSliceState = {
  items: [],
  item: {},
  favorites,
  status: Status.LOADING,
};

export const SneakerSlice = createSlice({
  name: 'sneaker',
  initialState,
  reducers: {
    addOrRemoveFavorite: (state, action: PayloadAction<SneakerItem>) => {
      const findItem = state.favorites.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        state.favorites = state.favorites.filter((obj) => obj.id !== action.payload.id);
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

    builder.addCase(fetchOneSneaker.pending, (state) => {
      state.status = Status.LOADING;
      state.item = {};
    });
    builder.addCase(fetchOneSneaker.fulfilled, (state, action) => {
      state.item = action.payload[0];
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchOneSneaker.rejected, (state) => {
      state.status = Status.ERROR;
      state.item = {};
    });
  },
});

export const { addOrRemoveFavorite } = SneakerSlice.actions;

export default SneakerSlice.reducer;
