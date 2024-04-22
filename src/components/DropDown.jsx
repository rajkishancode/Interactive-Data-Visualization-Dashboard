import React from "react";

const DropDown = ({ label, options, selectedOption, setSelectedOption }) => {
  return (
    <div className=" flex w-full border bg-[#1E293B] rounded-lg text-[#D2C4AF] justify-center items-center ">
      <label>
        {label}:
        <select
          className="bg-[#1E293B]"
          value={selectedOption}
          onChange={setSelectedOption}
        >
          {options?.map(({ id, value }) => (
            <option key={id} value={value}>
              {value}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export { DropDown };
