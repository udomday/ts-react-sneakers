import React from "react";
import { Route, Routes } from "react-router-dom";
import { selectUser } from "../../redux/slices/users/selectors";
import { useSelector } from "react-redux";
import { adminRoutes, authRoutes, publicRoutes } from "../../utils/routes";

export const AppRouter: React.FC = () => {
  const { role, isAuth } = useSelector(selectUser);

  return (
    <Routes>
      {role === "ADMIN" &&
        adminRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      {isAuth === true &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};
