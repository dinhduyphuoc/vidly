import React from "react";

const Select = ({ name, value, label, options }) => {
  return (
    <div className="form-group">
      <label htmlFor="">{label}</label>
      <select name={name} id={name} className="form-control">
        <option value="" />
        {options.map((option) => (
          <option key={option._id} id={option._id} value={value}>
            {option["name"]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
