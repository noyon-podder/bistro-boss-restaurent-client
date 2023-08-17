import React, { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;

        const googleUserInfo = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
        };

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(googleUserInfo),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex items-center gap-x-8">
      <button
        className="btn btn-circle btn-outline"
        onClick={handleGoogleLogin}
      >
        <FaGoogle className="text-xl " />
      </button>
      <button className="btn btn-circle btn-outline">
        <FaGithub className="text-xl " />
      </button>
    </div>
  );
};

export default SocialLogin;
