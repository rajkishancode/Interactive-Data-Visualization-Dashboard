import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import { Filters } from "../components/Filters";
import { useDashboardContext } from "../context/DashboardContextProvider";
import { getFilteredGraphData } from "../helper/filters";
import {
  parseFiltersFromURL,
  convertFiltersToURLParams,
} from "../helper/urlFilters";

const Dashboard = () => {
  const {
    state: { data, filters },
    dispatch,
  } = useDashboardContext();

  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const barLabels = data[0]?.Features?.map((label) => label);
  //first object removed from array as it consist of labels.
  const fetchedData = data.slice(1, data.length - 1);
  const filteredData = getFilteredGraphData(fetchedData, filters);
  const [selectedIndex, setSelectedIndex] = useState(null);

  //create a ref for the LineChart component
  const lineChartRef = useRef(null);

  useEffect(() => {
    // Parse filters from URL and update state on initial load

    const parsedFilters = parseFiltersFromURL(searchParams);

    if (parsedFilters) {
      dispatch({ type: "SET_FILTERS", payload: parsedFilters });
    }
  }, [searchParams, dispatch]);

  useEffect(() => {
    // Update URL when filters change

    const filterParams = convertFiltersToURLParams(filters);

    setSearchParams(filterParams);
  }, [filters, setSearchParams]);

  const handleBarClick = (index) => {
    setSelectedIndex(index);

    //scroll to the lineChart when bar is clicked
    setTimeout(() => {
      lineChartRef.current.scrollIntoView({ behavior: "smooth" });
    }, 100); //delay to ensure state update is complete
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className="flex min-h-screen overflow-hidden">
      <Filters
        isVisible={isFilterVisible}
        toggleVisibility={toggleFilterVisibility}
      />

      <div className="flex-grow ml-0 p-4 md:ml-64">
        <button
          className="md:hidden bg-gray-600 text-white py-2 px-4 rounded mb-4"
          onClick={toggleFilterVisibility}
        >
          {isFilterVisible ? "Hide Filters" : "Show Filters"}
        </button>

        <div className="border  border-[#D8D8D8] w-full h-96 overflow-hidden m-4">
          <p className="text-center text-sm text-gray-500 mt-2">
            Click on a bar to view detailed data in the line chart.
          </p>
          <BarChart
            barChartData={filteredData}
            onBarClick={handleBarClick}
            barLabels={barLabels}
          />
        </div>

        <div
          className="border   border-[#D8D8D8]  w-full h-96 overflow-hidden m-4"
          ref={lineChartRef} //attach ref to LineChart
        >
          {selectedIndex !== null && (
            <LineChart
              lineChartdata={filteredData}
              selectedIndex={selectedIndex}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
