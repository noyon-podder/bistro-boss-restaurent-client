import React from "react";

import { Outlet } from "react-router-dom";
import Sidebar from "../../pages/Dashboard/Sidebar/Sidebar";
import DashboardNavbar from "../../pages/Dashboard/DashboradNavar/DashboardNavbar";

const DashboardLayout = () => {
  return (
    <div className="dashboard-margin">
      <div className="container-dashboard ">
        <div className="">
          <Sidebar />
        </div>

        <div className="main-dashboard">
          <DashboardNavbar />
          <div className="main-dashboard-container">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
