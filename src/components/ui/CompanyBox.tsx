import React from 'react';
import Image from 'next/image';

type CompanyBoxProps = {
  name: string;
  logo: string;
  className?: string;
};

const CompanyBox: React.FC<CompanyBoxProps> = ({ name, logo, className }) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="w-12 h-12 relative">
        <Image
          src={logo}
          alt={name}
          fill
          className="object-contain filter grayscale"
        />
      </div>
      <span className="font-medium text-gray-800">{name}</span>
    </div>
  );
};

export default CompanyBox;
