import Link from 'next/link';
import React, { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, className, href }) => {
  return (
    <Link href={href} className={`${className}`}>
        {children}
    </Link>
  );
};

export default Button;
