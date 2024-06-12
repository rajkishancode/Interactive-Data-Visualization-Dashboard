import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { useAuthContext } from "../../context/AuthContext";
const Home = () => {
  const { isUserLoggedIn } = useAuthContext();

  return (
    <div className="text-center mt-20">
      {isUserLoggedIn ? (
        <>
          <h1 className="text-[3rem]">Welcome back to VizDash</h1>
          <p className="text-[1.5rem] mb-8">
            Explore your data visualizations and insights!
          </p>
          <p>
            Go to your{" "}
            <Link
              to="/dashboard"
              className="bg-slate-500 p-2 hover:brightness-125"
            >
              Dashboard
            </Link>
          </p>
        </>
      ) : (
        <>
          <h1 className="text-[3rem]">Welcome to VizDash</h1>
          <p className="text-[1.5rem] mb-8">
            Explore data visualizations and share your data insights!
          </p>
          <p>
            Please{" "}
            <Link to="/login" className="bg-slate-500 p-2 hover:brightness-125">
              Login
            </Link>{" "}
            or{" "}
            <Link
              to="/signup"
              className="bg-slate-500 p-2 hover:brightness-125"
            >
              Signup
            </Link>{" "}
            to access your dashboard.
          </p>
        </>
      )}
    </div>
  );
};

export default Home;
