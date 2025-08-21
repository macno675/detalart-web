import React, { ReactNode } from 'react';

type ServiceCategoryProps = {
  color: string;
  title: string;
  children: ReactNode;
};

const ServiceCategory: React.FC<ServiceCategoryProps> = ({ color, title, children }) => {
  return (
    <section>
        <div>
            <div className={`border-[${color}] border-2 bg-[${color}]`}></div>
            <h2>{title}</h2>
        </div>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {children} 
        </div>
    </section>
  );
};

export default ServiceCategory;
