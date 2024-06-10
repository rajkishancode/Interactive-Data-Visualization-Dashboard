import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../context";

export const RequiresAuth = ({ children }) => {
  const location = useLocation();

  const { isUserLoggedIn } = useAuthContext();

  return isUserLoggedIn ? (
    children
  ) : (
    <Navigate to="/home" state={{ from: location }} />
  );
};
