import React from "react";

const DropDown = ({ label, options, selectedOption, setSelectedOption }) => {
  return (
    <div className=" flex w-full border bg-[#2D3748] text-[#D2C4AF] rounded-lg justify-center py-2 my-2 ">
      <label>{label}:</label>
      <select
        className="bg-[#2D3748]"
        value={selectedOption}
        onChange={setSelectedOption}
      >
        {options?.map(({ id, value }) => (
          <option key={id} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export { DropDown };
