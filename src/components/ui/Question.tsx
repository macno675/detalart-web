'use client';

import React, { useState } from 'react';

type QuestionProps = {
  question: string;
  answer: string;
};

const Question: React.FC<QuestionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between w-full items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-left font-medium">{question}</span>

        {/* Ikona + / - */}
        <div className="relative w-6 h-6 flex-shrink-0">
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${
              isOpen ? 'rotate-45 translate-y-2.5' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-300 absolute top-1/2 left-0 -translate-y-1/2 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 absolute top-1/2 left-0 -translate-y-1/2 ${
              isOpen ? '-rotate-45 -translate-y-2.5' : ''
            }`}
          />
        </div>
      </button>

      {/* Odpowiedź */}
      {isOpen && <p className="mt-3 text-gray-700">{answer}</p>}
    </div>
  );
};

export default Question;
