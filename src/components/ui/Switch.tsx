"use client";

import React, { useState } from "react";

const categories = ["Osobowy", "SUV", "Bus"];

const Switch: React.FC = () => {
  const [active, setActive] = useState("Osobowy");

  return (
    <div className="flex fixed top-6 md:top-8 text-accent font-light bg-accent/20 rounded-full bg-clip-padding backdrop-blur-lg border-1 border-silver-dark">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`px-5 py-3 md:px-6 rounded-full transition-all duration-200
            ${
              active === cat
                ? "bg-accent text-black shadow-lg"
                : "bg-transparent text-accent hover:text-accent/50"
            }
          `}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Switch;
