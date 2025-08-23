import React, { ReactNode } from "react";

type WhyUsCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

const WhyUsCard: React.FC<WhyUsCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center max-w-100">
      <img
        src={`icons/${icon}.svg`}
        alt={`Icon ${title}`}
        className="bg-gradient-to-br from-accent/50 to-accent/20 p-4 rounded-3xl w-22 h-22 md:w-25 md:h-25"
      />
      <h3 className="font-montserrat bg-gradient-to-b from-white/100 to-white/50 bg-clip-text text-transparent text-3xl font-bold mt-4 md:mt-5">
        {title}
      </h3>
      <p className="text-silver-dark max-w-[80%] mt-1 md:mt-2">{description}</p>
    </div>
  );
};

export default WhyUsCard;
