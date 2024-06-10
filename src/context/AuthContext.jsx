import { createContext, useContext, useReducer, useEffect } from "react";
import { authReducer } from "../reducer";
import { useNavigate, useLocation } from "react-router-dom";
import { AUTH_ACTION_TYPES } from "../helper/constants";
import { toast } from "react-toastify";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { SET_LOGGED_IN_STATUS, SET_USER } = AUTH_ACTION_TYPES;

  // Function to get the initial state from local storage
  const getInitialState = () => {
    const savedState = localStorage.getItem("authState");
    return savedState
      ? JSON.parse(savedState)
      : {
          isUserLoggedIn: false,
          user: {},
        };
  };

  const initialState = getInitialState();

  const navigate = useNavigate();
  const location = useLocation();

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Save the state to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("authState", JSON.stringify(state));
  }, [state]);

  const loginUser = async (userLoginData) => {
    //simulate API call with user login Data
    try {
      dispatch({ type: SET_LOGGED_IN_STATUS, payload: true });

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
      // navigate(location?.state?.from?.pathname || "/");
      navigate("/dashboard");
    } catch (error) {
      dispatch({ type: SET_LOGGED_IN_STATUS, payload: false });

      console.error("Signup Error:", error);
    }
  };

  const userLogout = async () => {
    dispatch({ type: SET_LOGGED_IN_STATUS, payload: false });
    dispatch({ type: SET_USER, user: {} });
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
