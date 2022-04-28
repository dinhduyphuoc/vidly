import React from "react";

const Select = ({ name, label, options, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        onChange={onChange}
        className="form-control"
      >
        <option value="" />
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option["name"]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
