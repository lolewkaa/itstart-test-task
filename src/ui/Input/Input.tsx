import React, { ChangeEvent } from "react";

type PropsInput = {
  value: string;
  // eslint-disable-next-line no-unused-vars
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputStyle?: string;
  labelStyle?: string;
  label?: string;
  type: string;
  name: string;
};

const Input: React.FC<PropsInput> = ({
  label,
  value,
  handleChange,
  inputStyle,
  labelStyle,
  name,
  type
}) => {
  return (
    <label className={labelStyle}>
      {label}
      <input
        className={inputStyle}
        maxLength={200}
        value={value}
        onChange={handleChange}
        name={name}
        type={type}
        required
      />
    </label>
  );
};

export default Input;
