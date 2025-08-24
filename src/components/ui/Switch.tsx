"use client";

import React from "react";

type SwitchProps = {
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

const Switch: React.FC<SwitchProps> = ({ options, value, onChange }) => {
  return (
    <div className="flex fixed top-20 left-1/2 -translate-x-1/2 md:top-24 text-accent font-light bg-accent/20 rounded-full bg-clip-padding backdrop-blur-lg border border-silver-dark z-10">
      {options.map((opt) => {
        const isActive = value === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            aria-pressed={isActive}
            className={`px-5 py-3 md:px-6 rounded-full cursor-pointer transition-all duration-200 ${
              isActive
                ? "bg-accent text-black shadow-lg"
                : "bg-transparent text-accent hover:text-accent/50"
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
};

export default Switch;
