import React, { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Input: React.FC<InputProps> = ({ label, className, ...props }) => {
  return (
    <div className="flex flex-col mb-4">
      {label && <label className="mb-1 text-sm font-medium">{label}</label>}
      <input
        className={`${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
