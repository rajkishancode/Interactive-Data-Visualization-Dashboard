import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context";
import FormTextInput from "./FormTextInput";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { loginUser } = useAuthContext();

  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
  });

  // Preset data for guest login
  const guestUserData = {
    email: "guest@gmail.com",
    password: "guest123",
  };

  // Retrieve login data from local storage on mount
  useEffect(() => {
    const savedUserData = localStorage.getItem("userData");
    if (savedUserData) {
      setUserData(JSON.parse(savedUserData));
    }
  }, []);

  // Handle change in input fields
  const handleChange = (e) => {
    const { id, value } = e.target;

    setUserData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle login form submission
  const loginHandler = (e) => {
    e.preventDefault();

    // Validate input fields
    if (!userData.email.trim() || !userData.password.trim()) {
      toast.warning("Please fill out all fields.");
      return;
    }

    // Validate email format (basic validation)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(userData.email)) {
      toast.warning("Please enter a valid email address.");
      return;
    }

    loginUser(userData);
    toast.success("Login successful!");
    // Save login data to local storage
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  // Handle login as guest user
  const loginAsGuest = (e) => {
    e.preventDefault();
    setUserData(guestUserData);
    loginUser(guestUserData);
    toast.success("Logged in as guest!");

    // Save guest login data to local storage
    localStorage.setItem("userData", JSON.stringify(guestUserData));
  };
  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <FormTextInput
                    fieldName={"Your email"}
                    placeholder={"name@company.com"}
                    type={"email"}
                    id={"email"}
                    value={userData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <FormTextInput
                    fieldName={"Password"}
                    placeholder={"••••••••"}
                    type={"password"}
                    id={"password"}
                    value={userData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        for="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <Link
                    to="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full border-2 border-green-300 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={loginHandler}
                >
                  Login
                </button>
                <button
                  type="submit"
                  className="w-full border-2 border-green-300 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={loginAsGuest}
                >
                  Login as Guest
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
