import React from "react";

const InputType = ({
  placeholder,
  labelText,
  labelFor,
  inputType,
  value,
  onChange,
  name,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={labelFor} className="form-label">
        {labelText}
      </label>
      <input
        type={inputType}
        className="form-control"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputType;
