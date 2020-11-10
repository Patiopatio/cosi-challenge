import React from "react";

export default ({
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  className = null,
  register = null, // used for registering validation rules
}) => {
  return (
    <>
      <input
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline ${className}`}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        ref={register}
      />
    </>
  );
};
