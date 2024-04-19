import React from "react";
import { AGES, GENDERS } from "../helper/constants";
import { DropDown } from "./DropDown";
import Datepicker from "react-tailwindcss-datepicker";

export const Filters = ({
  age,
  setAge,
  gender,
  setGender,
  dateRange,
  handleDateChange,
}) => {
  return (
    <div className="flex w-full justify-evenly gap-2 p-2">
      <DropDown
        label="Age"
        options={AGES}
        selectedOption={age}
        setSelectedOption={setAge}
      />
      <DropDown
        label="Gender"
        options={GENDERS}
        selectedOption={gender}
        setSelectedOption={setGender}
      />
      <Datepicker
        primaryColor={"blue"}
        className="cursor-pointer"
        value={dateRange}
        onChange={handleDateChange}
      />
    </div>
  );
};
