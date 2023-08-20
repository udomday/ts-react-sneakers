import React from "react";
import { Route, Routes } from "react-router-dom";
import { selectUser } from "../../redux/slices/users/selectors";
import { useSelector } from "react-redux";
import { adminRoutes, authRoutes, publicRoutes } from "../../utils/routes";
import { Home } from "../../pages";
import MainLayout from "../../layouts/MainLayout";
import { ADMIN_ROUTE, HOME_ROUTE } from "../../utils/consts";
import AdminLayout from "../../layouts/AdminLayout";

// adminRoutes.map(({ path, Component }) => (
//   <Route key={path} path={path} element={<Component />} />
// ))

export const AppRouter: React.FC = () => {
  const { role, isAuth } = useSelector(selectUser);

  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<MainLayout />}>
        {role === "ADMIN" && (
          <Route path={ADMIN_ROUTE} element={<AdminLayout />}>
            <Route path="changesneakers" element={<div>change</div>} />
            <Route path="addsneakers" element={<div>add</div>} />
          </Route>
        )}
        {isAuth === true &&
          authRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
