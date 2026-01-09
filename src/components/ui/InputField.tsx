"use client";

import React from "react";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder = "",
  required = false,
  disabled = false,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-md font-medium text-gray-700 mb-3"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="w-full px-4 py-2 border border-mainColor rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
    </div>
  );
};

export default InputField;
