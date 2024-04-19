import React, { useState } from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import {useFilter} from "../hooks/useFilter";
import {Filters} from "../components/Filters";
import { useFetchData } from "../hooks/useFetchData";


const Dashboard = () => {
   
  const [selectedIndex, setSelectedIndex] = useState(null);
  const {
    age,
    setAge,
    gender,
    setGender,
    dateRange,
    handleDateChange,
    filteredData,
    barLabels,
  } = useFilter();

  const handleBarClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <div className="shadow-xl mx-2 p-2">
        <h1 className="text-3xl text-center font-bold underline">
          Data Visualization Dashboard
        </h1>
        <Filters
          age={age}
          setAge={setAge}
          gender={gender}
          setGender={setGender}
          dateRange={dateRange}
          handleDateChange={handleDateChange}
        />
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


