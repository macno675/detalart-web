import React, { ReactNode } from 'react';

type WhyUsCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

const WhyUsCard: React.FC<WhyUsCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default WhyUsCard;
