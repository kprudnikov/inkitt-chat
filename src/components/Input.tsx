import React, { FormEvent } from "react";
import "./Input.css";

interface PropTypes {
  onChange: (event: FormEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
}

const Input = ({ onChange, value, placeholder }: PropTypes) => {
  return (
    <input
      type="text"
      className="input"
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
