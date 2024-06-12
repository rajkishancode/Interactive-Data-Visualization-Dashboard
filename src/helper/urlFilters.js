// Convert URLSearchParams to filters object
export const parseFiltersFromURL = (searchParams) => {
  const age = searchParams.get("age") || "15-25";
  const gender = searchParams.get("gender") || "Male";
  const startDate = searchParams.get("startDate") || "2022-10-01";
  const endDate = searchParams.get("endDate") || "2022-10-31";

  return {
    age,
    gender,
    dateRange: {
      startDate,
      endDate,
    },
  };
};

// Convert filters object to URLSearchParams
export const convertFiltersToURLParams = (filters) => {
  const { age, gender, dateRange } = filters;
  return new URLSearchParams({
    age,
    gender,
    startDate: dateRange.startDate,
    endDate: dateRange.endDate,
  });
};
