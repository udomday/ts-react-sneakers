import { RootState } from "../../store";

export const selectUser = (state: RootState) => state.user;

export const selectUserId = (state: RootState) => state.user.id;

export const selectRole = (state: RootState) => state.user.role;

export const selectIsAuth = (state: RootState) => state.user.isAuth;
