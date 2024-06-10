import { useState } from "react";
import { useAuthContext } from "../context";
import { Link, useNavigate } from "react-router-dom";
import FormTextInput from "./FormTextInput";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const { userSignup } = useAuthContext();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [id]: value }));
  };
  const signUpHandler = (e) => {
    e.preventDefault();

    // Destructure userDetails object
    const { firstName, lastName, email, password, confirmPassword } =
      userDetails;

    // Check if any required field is empty
    const anyFieldEmpty =
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim();

    // Check if passwords match
    const passwordsMatch = password === confirmPassword;

    if (anyFieldEmpty) {
      toast.warning("All fields are required.");
      return; // Exit the function early if any field is empty
    }

    if (!passwordsMatch) {
      toast.warning("Passwords do not match!");
      return; // Exit the function early if passwords don't match
    }

    // If all conditions pass, call userSignup function
    userSignup(userDetails);
    toast.success("Signup successful!");
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-4 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6  sm:p-8 ">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={signUpHandler}>
              <FormTextInput
                fieldName={"First name"}
                placeholder={"First name"}
                type={"text"}
                id={"firstName"}
                value={userDetails.firstName}
                onChange={handleChange}
              />

              <FormTextInput
                fieldName={"Last name"}
                placeholder={"Last name"}
                type={"text"}
                id={"lastName"}
                value={userDetails.lastName}
                onChange={handleChange}
              />

              <FormTextInput
                fieldName={"Your email"}
                placeholder={"name@company.com"}
                type={"email"}
                id={"email"}
                value={userDetails.email}
                onChange={handleChange}
              />

              <FormTextInput
                fieldName={"Password"}
                placeholder={"••••••••"}
                type={"password"}
                id={"password"}
                value={userDetails.password}
                onChange={handleChange}
              />

              <FormTextInput
                fieldName={"Confirm password"}
                placeholder={"••••••••"}
                type={"password"}
                id={"confirmPassword"}
                value={userDetails.confirmPassword}
                onChange={handleChange}
              />

              <div className="flex items-start"></div>
              <button
                type="submit"
                className="w-full border-2 py-2 border-green-300 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5  text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={signUpHandler}
              >
                Create an account
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
