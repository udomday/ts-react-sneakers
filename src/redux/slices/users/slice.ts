import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import { User } from "./types";
import { $host } from "../../../utils/http";
import { getUserFomLs } from "../../../utils/getFromLS";

export const registration = createAsyncThunk(
  "registration",
  async (user: { mail: string; password: string }) => {
    const { data } = await $host.post<{ token: string }>(
      `api/user/registration`,
      {
        mail: user.mail,
        password: user.password,
      }
    );

    localStorage.setItem("token", data.token);

    return jwtDecode(data.token) as User;
  }
);

export const login = createAsyncThunk(
  "login",
  async (user: { mail: string; password: string }) => {
    const { data } = await $host.post<{ token: string }>(`api/user/login`, {
      mail: user.mail,
      password: user.password,
    });

    localStorage.setItem("token", data.token);

    return jwtDecode(data.token) as User;
  }
);

const { id, mail, role, isAuth } = getUserFomLs() as User;

const initialState: User = {
  id,
  mail,
  role,
  isAuth,
};

export const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    exit: (state) => {
      state.id = null;
      state.mail = null;
      state.role = null;
      state.isAuth = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    //registration
    builder.addCase(registration.pending, (state) => {
      state.id = null;
      state.mail = null;
      state.role = null;
      state.isAuth = false;
    });
    builder.addCase(registration.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.mail = action.payload.mail;
      state.role = action.payload.role;
      state.isAuth = true;
    });
    builder.addCase(registration.rejected, (state) => {
      state.id = null;
      state.mail = null;
      state.role = null;
      state.isAuth = false;
    });

    //login
    builder.addCase(login.pending, (state) => {
      state.id = null;
      state.mail = null;
      state.role = null;
      state.isAuth = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      console.log(action);
      state.id = action.payload.id;
      state.mail = action.payload.mail;
      state.role = action.payload.role;
      state.isAuth = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.id = null;
      state.mail = null;
      state.role = null;
      state.isAuth = false;
    });
  },
});

export const { exit } = UserSlice.actions;

export default UserSlice.reducer;
