import React from "react";
import Image from "next/image";

type CompanyBoxProps = {
  name: string;
  logo: string;
  className?: string;
};

const CompanyBox: React.FC<CompanyBoxProps> = ({ name, logo, className }) => {
  return (
    <div
      className={`flex items-center space-x-4 bg-gray rounded-3xl p-3.5 md:p-4.5 ${className}`}
    >
      <div className="w-12 h-12 relative">
        <Image
          src={`/companies/${logo}`}
          alt={name}
          fill
          className="object-contain filter grayscale"
        />
      </div>
      <span className="font-medium text-2xl text-silver-dark tracking-wide">
        {name}
      </span>
    </div>
  );
};

export default CompanyBox;
