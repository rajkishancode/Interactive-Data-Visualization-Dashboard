import { getFormattedDate, getFormattedDateRange } from "./utils";

// const filters = {
//   age: "15-25",
//   gender: "Male",
//   dateRange: {
//     startDate: "2022-10-01",
//     endDate: "2022-10-31",
//   },
// };

const filterByAge = (graphData, filters) => {
  return filters.age
    ? graphData.filter((data) => data.Age === filters.age)
    : graphData;
};
const filterByGender = (graphData, filters) => {
  return filters.gender
    ? graphData.filter((data) => data.Gender === filters.gender)
    : graphData;
};
const filterByDateRange = (graphData, filters) => {
  return filters.dateRange
    ? graphData.filter(({ Day }) => {
        const date = getFormattedDate(Day);
        const initialDate = getFormattedDateRange(filters.dateRange.startDate);
        const finalDate = getFormattedDateRange(filters.dateRange.endDate);
        return date >= initialDate && date <= finalDate;
      })
    : graphData;
};

export const getFilteredGraphData = (graphData, filters) => {
  const filterFunctions = [
    filterByAge,
    filterByGender,
    filterByDateRange,
  ];

  // This will make sure that the graph array passes through all the filter functions
  return filterFunctions.reduce((acc, func) => func(acc, filters), graphData);
};

