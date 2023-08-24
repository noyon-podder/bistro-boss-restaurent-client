import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
  const { user, userLogout } = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  console.log(cart);

  const handleLogout = () => {
    userLogout()
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `Logout successfully`,
        });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  const navOptions = (
    <>
      <li>
        <Link className="uppercase text-white hover:text-orange-600" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="uppercase text-white hover:text-orange-600" to="/menu">
          Our Menu
        </Link>
      </li>
      <li>
        <Link
          className="uppercase text-white hover:text-orange-600"
          to="/order/salads"
        >
          Order Food
        </Link>
      </li>

      {user ? (
        <>
          {isAdmin ? (
            <>
              <li>
                <Link
                  className="uppercase text-white hover:text-orange-600"
                  to="/dashboard/admin"
                >
                  Dashboard
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  className="uppercase text-white hover:text-orange-600"
                  to="/dashboard/user"
                >
                  Dashboard
                </Link>
              </li>
            </>
          )}
          <li onClick={handleLogout}>
            <Link className="uppercase text-white hover:text-orange-600">
              sign out
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link
              className="uppercase text-white hover:text-orange-600"
              to="/login"
            >
              Sign in
            </Link>
          </li>
        </>
      )}

      {/* <li>
        <Link to="/create-user">SignUP</Link>
      </li> */}
    </>
  );

  return (
    <>
      <div className="navbar fixed bg-black bg-opacity-30 z-10 max-w-screen-xl text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Big Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/dashboard/my-cart" className="pr-5">
            <button className=" relative">
              <FaShoppingCart className="w-9 h-9 " />
              <div className="badge badge-secondary absolute top-5 -right-3 w-4 h-4 p-3 text-center">
                +{cart?.length || 0}
              </div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
