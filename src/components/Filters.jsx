import React from "react";
import { AGES, GENDERS } from "../helper/constants";
import { DropDown } from "./DropDown";
import Datepicker from "react-tailwindcss-datepicker";
import { useDashboardContext } from "../context/DashboardContextProvider";
import ShareURLButton from "./ShareURLButton/ShareURLButton";

export const Filters = () => {
  const { state, dispatch } = useDashboardContext();
  return (
    <div className="flex flex-col w-64 p-4 my-4 h-full border border-slate-500 ">
      <h2 className="mb-4 text-center text-xl font-bold">Filters</h2>
      <div className="flex-grow">
        <DropDown
          label="Age"
          options={AGES}
          selectedOption={state.filters.age}
          setSelectedOption={(e) =>
            dispatch({ type: "FILTER_BY_AGE", payload: e.target.value })
          }
        />

        <DropDown
          label="Gender"
          options={GENDERS}
          selectedOption={state.filters.gender}
          setSelectedOption={(e) =>
            dispatch({ type: "FILTER_BY_GENDER", payload: e.target.value })
          }
        />

        <Datepicker
          primaryColor={"blue"}
          className="cursor-pointer my-4"
          value={state.filters.dateRange}
          onChange={(value) =>
            dispatch({ type: "FILTER_BY_DATE_RANGE", payload: value })
          }
        />
        <button
          className="w-full my-2 bg-[#1E293B] rounded-lg py-2 text-center text-[#D2C4AF]"
          onClick={() => dispatch({ type: "RESET_FILTERS" })}
        >
          Reset
        </button>
        <ShareURLButton />
      </div>
    </div>
  );
};
