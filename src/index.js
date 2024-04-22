import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import DashboardContextProvider from "./context/DashboardContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DashboardContextProvider>
      <App />
    </DashboardContextProvider>
  </React.StrictMode>
);
