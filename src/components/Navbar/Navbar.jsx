import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faSignInAlt,
  faUserPlus,
  faChartBar,
  faHome,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  const { isUserLoggedIn, userLogout } = useAuthContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center bg-[#333] text-[white] p-4">
      <div className="flex items-center">
        <Link to="/" className="navbar-link font-bold text-xl">
          VizDash
        </Link>
        <h1 className="text-xl font-bold ml-4 hidden md:block">
          Data Visualization Dashboard
        </h1>
      </div>

      <button onClick={toggleMenu} className="text-2xl md:hidden">
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </button>

      <div
        className={`flex-col items-center md:flex md:flex-row ${
          isMenuOpen ? "flex" : "hidden"
        }`}
      >
        <Link to="/" className="navbar-link">
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
