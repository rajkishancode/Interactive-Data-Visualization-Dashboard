import React from "react";
import data from "../data";
import BarChart from "./BarChart";
// import LineChart from "./LineChart";

const Dashboard = () => {
  return (
    <div>
      <div>
        <BarChart data={data} />
      </div>
      <div>
        <LineChart data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
