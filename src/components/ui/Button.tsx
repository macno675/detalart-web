import Link from 'next/link';
import React, { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, className, href }) => {
  return (
    <Link href={href} className={`px-6 py-3.5 bg-ewhite text-black text-center rounded-full tracking-wide md:px-8 md:py-3.5 lg:text-lg hover:bg-ewhite-dark duration-150 ease-out ${className}`}>
        {children}
    </Link>
  );
};

export default Button;
