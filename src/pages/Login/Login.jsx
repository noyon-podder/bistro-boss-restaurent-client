import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../assets/others/login.png";
import Swal from "sweetalert2";
import SocialLogin from "../shared/SocialLogin/SocialLogin";

const Login = () => {
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  console.log("Location", location, "from : ", from);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const userCaptchaValue = form.captcha.value;

    if (validateCaptcha(userCaptchaValue)) {
      userLogin(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          navigate(from, { replace: true });
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Captcha doesn't match",
      });
      form.captcha.reset();
    }
  };
  return (
    <div>
      <section className="md:py-20 md:px-10">
        <div className="container px-6 py-24 mx-auto lg:py-32 bg-[#f3f3f3] shadow-2xl">
          <div className="lg:flex">
            <div className="lg:w-1/2 flex items-center justify-center">
              <img className="w-3/4 " src={loginImage} alt="" />
            </div>

            <div className="mt-8 lg:w-1/2 lg:mt-0 lg:flex lg:justify-center lg:items-center flex-col border px-3 py-5">
              <h2 className="text-black font-bold text-4xl mb-10">Login</h2>
              <form onSubmit={handleSubmit} className="w-full lg:max-w-xl">
                <div className="relative flex items-center">
                  <span className="absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-3 text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>

                  <input
                    name="email"
                    type="email"
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:border-orange-400  focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Email address"
                  />
                </div>

                <div className="relative flex items-center mt-4">
                  <span className="absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-3 text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </span>

                  <input
                    name="password"
                    type="password"
                    className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg  focus:border-orange-400  focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Password"
                  />
                </div>

                <div className="mt-3">
                  <LoadCanvasTemplate />
                </div>

                <div className="relative flex items-center mt-4">
                  <span className="absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-3 text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </span>

                  <input
                    type="text"
                    name="captcha"
                    // onBlur={handleInputChange}
                    className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg  focus:border-orange-400  focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="type the captcha"
                  />
                </div>

                <div className="mt-8 md:flex md:items-center">
                  <input
                    type="submit"
                    value="SignIn"
                    className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-500 rounded-lg md:w-1/2 hover:bg-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-50"
                  />

                  <a
                    href="#"
                    className="inline-block mt-4 text-center text-orange-500 md:mt-0 md:mx-6 hover:underline dark:text-orange-400"
                  >
                    Forgot your password?
                  </a>
                </div>
                <p className="text-orange-600 text-lg text-center text-semibold mt-4">
                  <small>New here? </small>
                  <Link to="/create-user" className=" hover:text-orange-700">
                    create a new account
                  </Link>
                </p>
              </form>
              <div className="divider text-gray-600 font-semibold">OR</div>
              <SocialLogin />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
