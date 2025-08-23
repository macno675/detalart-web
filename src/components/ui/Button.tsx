import Link from "next/link";
import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, href, className = "" }) => {
  return (
    <Link
      href={href}
      className={`px-6 py-3.5 rounded-full text-center tracking-wide 
        bg-ewhite text-black 
        md:px-8 md:py-3.5 lg:text-lg 
        hover:bg-accent transition-all
        duration-150 ease-out ${className}`}
    >
      {children}
    </Link>
  );
};

export default Button;
