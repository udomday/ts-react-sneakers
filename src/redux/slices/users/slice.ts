import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "./types";

const initialState: User = {
  id: null,
  mail: null,
  role: null,
  isAuth: false,
};

export const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = UserSlice.actions;

export default UserSlice.reducer;
