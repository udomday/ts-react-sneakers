import { Account, Favorite, Home } from '../pages';
import { Auth } from '../pages/Auth';
import {
  ACCOUNT_ROUTE,
  ADMIN_ROUTE,
  FAVORITE_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  NOTFOUNDACCOUNT_ROUTE,
  REGISTRATION_ROUTE,
} from './consts';

export type RouteType = {
  path: string;
  Component: React.FC;
};

export const adminRoutes: RouteType[] = [];

export const authRoutes: RouteType[] = [
  {
    path: ACCOUNT_ROUTE,
    Component: Account,
  },
];

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
    path: FAVORITE_ROUTE,
    Component: Favorite,
  },
];
