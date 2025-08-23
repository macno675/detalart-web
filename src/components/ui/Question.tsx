'use client';

import React, { useState } from 'react';

type QuestionProps = {
  question: string;
  answer: string;
};

const Question: React.FC<QuestionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className="relative flex flex-col bg-accent p-4 rounded-xl w-full text-black max-w-240 md:p-6">      
  <button
    className="flex justify-between w-full items-center focus:outline-none cursor-pointer"
    onClick={() => setIsOpen(!isOpen)}
  >
    <h3 className="text-left font-bold max-w-[85%] md:text-xl">{question}</h3>

    {/* Ikona + / - */}
    <div className="absolute top-3.5 right-3.5 md:top-5 md:right-4 w-7 h-7 md:w-8 md:h-8 flex items-center justify-center">
      {/* Pozioma kreska */}
      <span
        className={`block w-7 h-1 bg-black rounded-full transition-all duration-150 ${
          isOpen ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Pionowa kreska */}
      <span
        className={`absolute block w-7 h-1 bg-black rounded-full transition-all duration-300 ${
          isOpen ? 'rotate-0' : 'rotate-90'
        }`}
      />
    </div>
  </button>

  {/* Odpowiedź */}
  <p
    className={`overflow-hidden bg-accent text-black md:text-lg max-w-[90%] transition-all duration-300 ${
      isOpen ? 'max-h-[999px] opacity-100 mt-3 md:mt-4.5' : 'max-h-0 opacity-0 mt-0'
    }`}
  >
    {answer}
  </p>
</div>

  );
};

export default Question;
