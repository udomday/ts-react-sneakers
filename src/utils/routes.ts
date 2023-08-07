import { Account, Admin, Favorite, Home } from "../pages";
import { Auth } from "../pages/Auth";
import {
  ACCOUNT_ROUTE,
  ADMIN_ROUTE,
  FAVORITE_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  NOTFOUNDACCOUNT_ROUTE,
  REGISTRATION_ROUTE,
} from "./consts";

export type RouteType = {
  path: string;
  Component: React.FC;
};

export const adminRoutes: RouteType[] = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
];

export const authRoutes: RouteType[] = [];

export const publicRoutes: RouteType[] = [
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: HOME_ROUTE,
    Component: Home,
  },
  {
    path: FAVORITE_ROUTE + "/:id",
    Component: Favorite,
  },
  {
    path: ACCOUNT_ROUTE + "/:id",
    Component: Account,
  },
];
