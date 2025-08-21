import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between h-16 bg-black text-white p-4'>
      <img src="/images/logo.png" alt="Logo DetalArt" className='h-full'/>
      <div>
        {/* Burger menu */}
      </div>
      <div className='hidden md:flex'>
        <Link href="/">Strona główna</Link>
        <Link href="/services">Usługi</Link>
        <Link href="/prices">Cennik</Link>
        <Link href="/gallery">Galeria</Link>
        <Link href="/contact">Kontakt</Link>
      </div>
    </nav>
  );
};

export default Navbar;
