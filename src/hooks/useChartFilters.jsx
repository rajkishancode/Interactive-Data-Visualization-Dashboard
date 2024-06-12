import { useLocation } from "react-router-dom";

const useChartFilters = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const filters = {
    age: searchParams.get("age") || "",
    gender: searchParams.get("gender") || "",
    dateRange: {
      startDate: searchParams.get("startDate") || "",
      endDate: searchParams.get("endDate") || "",
    },
  };

  return filters;
};

export default useChartFilters;
