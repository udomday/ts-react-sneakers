export type User = {
  id: string | null;
  mail: string | null;
  role: Role | null;
  isAuth: boolean;
};

export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}
