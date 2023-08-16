import React, { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import profileImage from "../../../assets/others/profile.png";
import { AuthContext } from "../../../Provider/AuthProvider";
const DashboardNavbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="dashboard-navbar">
      <div className="flex justify-between">
        <div className="search-bar me-auto">
          <input type="text" name="" placeholder="search" id="" />
          <span className="search-icon">
            <BsSearch />
          </span>
        </div>
        <div className="profile-bar flex items-center gap-x-2 ">
          <div className="notification-icon">
            <IoMdNotificationsOutline className="notification" />
          </div>
          <div className="dashboard-profile-image ">
            {user ? (
              <>
                <div className="">
                  <img
                    src={user?.photoURL}
                    className="w-11 h-11 rounded-full object-cover cursor-pointer"
                    alt=""
                  />
                </div>
              </>
            ) : (
              <>
                <img src={profileImage} alt="" className="profile-image" />
              </>
            )}
            <span className="active-sign"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
