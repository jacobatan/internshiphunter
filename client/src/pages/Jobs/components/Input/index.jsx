import React from "react";
import "./index.css";

const Input = ({ selectedOption, onChange }) => {
  return (
    <div className="search">
      <input
        value={selectedOption}
        onChange={onChange}
        type="text"
        className="search__input"
        placeholder="Search for jobs"
      />
    </div>
  );
};

export default Input;
