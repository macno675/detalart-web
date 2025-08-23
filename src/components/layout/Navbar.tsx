"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center w-full fixed top-0 left-0 justify-between h-16 bg-[#000]/20 text-white py-4 px-6 z-50 md:h-20 md:px-16 md:py-5 md:justify-start md:gap-12 backdrop-blur-2xl">
        <img src="/images/logo.png" alt="Logo DetalArt" className="h-full" />

        {/* Burger menu */}
        <div className="md:hidden z-60">
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col justify-center items-center w-8 h-8"
            aria-label="Otwórz menu"
          >
            <span
              className={`block w-6 h-0.5 bg-silver-dark rounded-full mb-1.5 transition-all ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-silver-dark rounded-full mb-1.5 transition-all ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-silver-dark rounded-full transition-all ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-10 h-full items-center text-silver text-lg">
          <Link href="/">Strona główna</Link>
          <Link href="/services">Usługi</Link>
          <Link href="/prices">Cennik</Link>
          <Link href="/gallery">Galeria</Link>
          <Link href="/contact">Kontakt</Link>
        </div>
      </nav>

      {/* Mobile menu (poza <nav>) */}
      {open && (
        <div className="fixed top-0 left-0 w-full h-screen bg-[#000] flex flex-col justify-center items-center text-2xl font-bold gap-10 py-8 md:hidden z-40">
          <Link href="/" onClick={() => setOpen(false)}>
            Strona główna
          </Link>
          <Link href="/services" onClick={() => setOpen(false)}>
            Usługi
          </Link>
          <Link href="/prices" onClick={() => setOpen(false)}>
            Cennik
          </Link>
          <Link href="/gallery" onClick={() => setOpen(false)}>
            Galeria
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Kontakt
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
