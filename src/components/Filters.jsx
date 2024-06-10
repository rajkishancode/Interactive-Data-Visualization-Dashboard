import React from "react";
import { AGES, GENDERS } from "../helper/constants";
import { DropDown } from "./DropDown";
import Datepicker from "react-tailwindcss-datepicker";
import { useDashboardContext } from "../context/DashboardContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useAuthContext } from "../context";

export const Filters = () => {
  const { userLogout } = useAuthContext();
  const { state, dispatch } = useDashboardContext();
  return (
    <div className="flex w-full justify-evenly gap-2 p-2">
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
        className="cursor-pointer"
        value={state.filters.dateRange}
        onChange={(value) =>
          dispatch({ type: "FILTER_BY_DATE_RANGE", payload: value })
        }
      />
      <button
        className="flex w-full bg-[#1E293B] rounded-lg text-[#D2C4AF] justify-center items-center "
        onClick={() => dispatch({ type: "RESET_FILTERS" })}
      >
        Reset
      </button>
    </div>
  );
};
