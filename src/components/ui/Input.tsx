import React, { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={`border-2 border-silver-dark bg-white text-silver-dark rounded-3xl px-4.5 py-3 w-[80%] max-w-100 min-w-60 md:px-6 md:py-3.5 md:rounded-4xl ${className}`}
      {...props}
    />
  );
};

export default Input;
