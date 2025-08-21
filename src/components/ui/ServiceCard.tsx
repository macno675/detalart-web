import React, { ReactNode } from 'react';

type ServiceCardProps = {
  icon: ReactNode; 
  title: string;
  price: string;
  color: string;
  description: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, price, description, color }) => {
  return (
    <div className={`bg-[${color}]`}>
        <div className=''>
            <div className="">{icon}</div>
            <h3 className="">{title}</h3>
            <p className="">{price}</p>
        </div>
        <p className="">{description}</p>
    </div>
  );
};

export default ServiceCard;
