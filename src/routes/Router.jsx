import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/order/order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layout/dashboardLayout/DashboardLayout";

import AllUser from "../pages/Dashboard/AdminPages/AllUser/AllUser";
import UserHome from "../pages/Dashboard/NoramalUserPages/UserHome/UserHome";
import Reservation from "../pages/Dashboard/NoramalUserPages/Reservation/Reservation";
import PaymentHistory from "../pages/Dashboard/NoramalUserPages/PaymentHistory/PaymentHistory";
import AddReview from "../pages/Dashboard/NoramalUserPages/AddReview/AddReview";
import AddBooking from "../pages/Dashboard/NoramalUserPages/AddBooking/AddBooking";
import AddItems from "../pages/Dashboard/AdminPages/AddItems/AddItems";
import ManageItems from "../pages/Dashboard/AdminPages/ManageItems/ManageItems";
import ManageBookings from "../pages/Dashboard/AdminPages/ManageBookings/ManageBookings";
import AdminHome from "../pages/Dashboard/AdminPages/AdminHome/AdminHome";
import MyCart from "../pages/Dashboard/NoramalUserPages/MyCart/MyCart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/create-user",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />,
      </PrivateRoute>
    ),
    children: [
      //normal user route
      {
        path: "user",
        element: <UserHome />,
      },
      {
        path: "reservation",
        element: <Reservation />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
      {
        path: "add-review",
        element: <AddReview />,
      },
      {
        path: "add-booking",
        element: <AddBooking />,
      },
      {
        path: "my-cart",
        element: <MyCart />,
      },
      // Admin route
      {
        path: "all-users",
        element: <AllUser />,
      },
      {
        path: "add-item",
        element: <AddItems />,
      },
      {
        path: "items",
        element: <ManageItems />,
      },
      {
        path: "bookings",
        element: <ManageBookings />,
      },
      {
        path: "admin",
        element: <AdminHome />,
      },
    ],
  },
]);
