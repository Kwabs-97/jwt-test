import React from "react";

function Input({
  type,
  value,
  className,
  placeholder,
  name,
  id,
  register,
  validation,
}) {
  return (
    <input
      type={type}
      value={value}
      id={id}
      className={`${className} focus:border-burgendy w-full rounded-lg border border-solid border-gray-300 px-4 py-2 text-rose-950 focus:border-[2px] focus:outline-none`}
      placeholder={placeholder}
      name={name}
      validation={validation}
      {...register(name, validation)}
    />
  );
}

export default Input;
