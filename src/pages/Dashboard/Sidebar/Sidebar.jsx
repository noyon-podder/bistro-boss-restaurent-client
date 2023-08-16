import React, { useEffect, useState } from "react";
import "../../../layout/dashboardLayout/DashboardLayout.css";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { DiTechcrunch } from "react-icons/di";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  useEffect(() => {
    const isMobileDevice =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (isMobileDevice) {
      setIsOpen(false); // Set to false for mobile devices
    }
  }, []);
  const menuItem = [
    {
      path: "/dashboard/service",
      name: "Manage Service",
      icon: <FaRegChartBar />,
    },
    {
      path: "/dashboard/user",
      name: "Manage User",
      icon: <FaTh />,
    },
    {
      path: "/dashboard/technology",
      name: "Technology & Courses",
      icon: <DiTechcrunch />,
    },
    {
      path: "/dashboard/video-upload",
      name: "Manage Videos",
      icon: <FaCommentAlt />,
    },
    {
      path: "/dashboard/orders",
      name: "Manage Order",
      icon: <FaShoppingBag />,
    },

    {
      path: "/",
      name: "Home Page",
      icon: <FaThList />,
    },
    {
      path: "/profile",
      name: "Profile",
      icon: <FaUserAlt />,
    },
    {
      path: "/logout",
      name: "Logout",
      icon: <FaShoppingBag />,
    },
  ];
  return (
    <div>
      <div className="container-dashboard">
        <div style={{ width: isOpen ? "260px" : "70px" }} className="sidebar">
          <div className="top_section">
            <h2
              className="text-xl text-gray-900 font-bold"
              style={{ display: isOpen ? "block" : "none" }}
            >
              Big Boss
            </h2>

            <div
              style={{ marginLeft: isOpen ? "50px" : "0px" }}
              className="bars"
            >
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="mt-3">
            {menuItem.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className="dashboard-link hover:text-[#506fd9]"
                activeclassName="active"
              >
                <div className="icon">{item.icon}</div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  {item.name}
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
