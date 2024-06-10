import React, { useState } from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
// import {useFilter} from "../hooks/useFilter";
import { Filters } from "../components/Filters";
import { useDashboardContext } from "../context/DashboardContextProvider";
import { getFilteredGraphData } from "../helper/filters";

const Dashboard = () => {
  const {
    state: { data, filters },
  } = useDashboardContext();

  const barLabels = data[0]?.Features?.map((label) => label);

  //first object removed from array as it consist of labels.
  const fetchedData = data.slice(1, data.length - 1);

  const filteredData = getFilteredGraphData(fetchedData, filters);

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleBarClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <div className="shadow-xl mx-2 p-2">
        <Filters />
      </div>
      <div className="flex gap-1">
        <div className="border border-[#D8D8D8] w-full h-full ">
          <BarChart
            barChartData={filteredData}
            onBarClick={handleBarClick}
            barLabels={barLabels}
          />
        </div>
        <div className="border-[#D8D8D8] border w-full h-full ">
          {selectedIndex !== null && (
            <LineChart
              lineChartdata={filteredData}
              selectedIndex={selectedIndex}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
