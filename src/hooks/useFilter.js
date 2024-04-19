import React, { useState ,useEffect} from "react";
import { useFetchData } from "../hooks/useFetchData";
import {getFormattedDate, getFormattedDateRange} from "../helper/utils";

const useFilter = () => {
  const [age, setAge] = useState("15-25");
  const [gender, setGender] = useState("Male");
  const [dateRange, setDateRange] = useState({
    startDate: "2022-10-01",
    endDate: "2022-10-31",
  });

  const { data, filteredData, setFilteredData } = useFetchData();
  const barLabels = data[0]?.Features?.map((label) => label);

  const handleDateChange = (value) => {
    console.log({value})
    setDateRange(value);
  };

  const { startDate, endDate } = dateRange;

  const fetchedData = data.slice(1, data.length - 1);

  const filterByAge = fetchedData.filter(({ Age }) => Age === age);

  const filterByGender = filterByAge.filter(({ Gender }) => Gender === gender);

  const filterByDateRange = filterByGender.filter(({Day}) => {
    const date = getFormattedDate(Day);
    const initialDate = getFormattedDateRange(startDate)
    const finalDate = getFormattedDateRange(endDate);
    return date >= initialDate && date <= finalDate;
  });

  useEffect(() => {
    if (JSON.stringify(filterByDateRange) !== JSON.stringify(filteredData)) {
      setFilteredData(filterByDateRange);
    }
  }, [filterByDateRange, filteredData]);

  return {
    age,
    setAge,
    gender,
    setGender,
    dateRange,
    handleDateChange,
    filteredData,
    barLabels,
  };

};

export { useFilter };
