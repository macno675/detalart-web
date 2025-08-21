import React from 'react';

const Switch: React.FC = () => {
  return (
    <div className="flex gap-2">
      <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Osobowy</button>
      <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">SUV</button>
      <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Bus</button>
    </div>
  );
};

export default Switch;
