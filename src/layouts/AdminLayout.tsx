import React from "react";
import { Outlet } from "react-router-dom";
import { AdminBar } from "../components";

const AdminLayout: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="admin_root">
          <AdminBar />
          <div className="admin_root__page">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
