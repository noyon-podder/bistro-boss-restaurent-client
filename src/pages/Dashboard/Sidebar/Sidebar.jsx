import React, { useEffect, useState } from "react";
import "../../../layout/dashboardLayout/DashboardLayout.css";
import {
  FaCalendarAlt,
  FaBars,
  FaEnvelope,
  FaShoppingBag,
  FaHome,
  FaShoppingCart,
} from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { MdReviews } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { AiOutlineMenuFold } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const [cart] = useCart();
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
      path: "/",
      name: "User Home",
      icon: <FaHome />,
    },
    {
      path: "reservation",
      name: "Reservation",
      icon: <FaCalendarAlt />,
    },
    {
      path: "payment-history",
      name: "Payment History",
      icon: <GiWallet />,
    },
    {
      path: "my-cart",
      name: "Add to Cart",
      icon: <FaShoppingCart />,
    },
    {
      path: "review",
      name: "Add Review",
      icon: <MdReviews />,
    },
    {
      path: "booking",
      name: "Add Booking",
      icon: <TbBrandBooking />,
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
          <div className="my-3">
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
          <hr />
          <div className="mt-4">
            <div className="flex items-center pl-4 mb-4">
              <div>
                {" "}
                <FaHome />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                <Link to="/" className="ml-4">
                  Home
                </Link>
              </div>
            </div>
            <div className="flex items-center pl-4 mb-4">
              <div>
                {" "}
                <AiOutlineMenuFold />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                <Link to="/menu" className="ml-4">
                  Menu
                </Link>
              </div>
            </div>
            <div className="flex items-center pl-4 mb-4">
              <div>
                {" "}
                <FaShoppingBag />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                <Link to="/order" className="ml-4">
                  Shop
                </Link>
              </div>
            </div>
            <div className="flex items-center pl-4 mb-4">
              <div>
                {" "}
                <FaEnvelope />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                <Link to="/contact" className="ml-4">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
