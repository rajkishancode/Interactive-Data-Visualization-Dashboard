import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faSignInAlt,
  faUserPlus,
  faChartBar,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  const { isUserLoggedIn, userLogout } = useAuthContext();

  return (
    <nav className="flex justify-between items-center bg-[#333] text-[white] p-4">
      <Link to="/" className="navbar-link font-bold ">
        VizDash
      </Link>

      <h1 className="flex-1 text-3xl text-center font-bold  ">
        Data Visualization Dashboard
      </h1>
      <div className="">
        <Link to="/">
          <FontAwesomeIcon icon={faHome} /> Home
        </Link>
        {isUserLoggedIn ? (
          <>
            <Link to="/dashboard" className="navbar-link">
              <FontAwesomeIcon icon={faChartBar} /> Dashboard
            </Link>
            <button onClick={userLogout} className="navbar-link">
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="navbar-link">
              <FontAwesomeIcon icon={faSignInAlt} /> Login
            </Link>
            <Link to="/signup" className="navbar-link">
              <FontAwesomeIcon icon={faUserPlus} /> Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
