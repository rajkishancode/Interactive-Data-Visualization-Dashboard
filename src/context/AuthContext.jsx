import { createContext, useContext, useReducer, useEffect } from "react";
import { authReducer } from "../reducer";
import { useNavigate } from "react-router-dom";
import { AUTH_ACTION_TYPES } from "../helper/constants";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { SET_LOGGED_IN_STATUS, SET_USER } = AUTH_ACTION_TYPES;

  const getInitialState = () => {
    const savedState = localStorage.getItem("authState");
    console.log({ savedState });
    return savedState
      ? JSON.parse(savedState)
      : {
          isUserLoggedIn: false,
          user: {},
        };
  };

  const initialState = getInitialState();
  console.log(initialState);
  const [state, dispatch] = useReducer(authReducer, initialState);

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("authState", JSON.stringify(state));
  }, [state]);

  const loginUser = async (userLoginData) => {
    //simulate API call with user login Data
    try {
      dispatch({ type: SET_LOGGED_IN_STATUS, payload: true });
      dispatch({ type: SET_USER, payload: userLoginData });

      // navigate(location?.state?.from?.pathname || "/");
      navigate("/dashboard");
    } catch (error) {
      dispatch({ type: SET_LOGGED_IN_STATUS, payload: false });

      console.error("Login Error:", error);
    }
  };

  const userSignup = async (signupData) => {
    //simulate API call with user signupData
    try {
      dispatch({ type: SET_LOGGED_IN_STATUS, payload: true });
      dispatch({ type: SET_USER, payload: signupData });
      // navigate(location?.state?.from?.pathname || "/");
      navigate("/dashboard");
    } catch (error) {
      dispatch({ type: SET_LOGGED_IN_STATUS, payload: false });

      console.error("Signup Error:", error);
    }
  };

  const userLogout = async () => {
    dispatch({ type: SET_LOGGED_IN_STATUS, payload: false });
    dispatch({ type: SET_USER, payload: {} });
    localStorage.removeItem("authState");

    navigate("/login");
    toast.success("Logout successful!");
  };

  return (
    <AuthContext.Provider
      value={{ ...state, loginUser, userSignup, userLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAuthContext = () => useContext(AuthContext);
