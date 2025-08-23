import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full px-6 py-14 flex flex-col items-center justify-center bg-[#000] gap-16 lg:px-16 lg:py-16 lg:gap-12">
      <div className="flex flex-col justify-center items-center gap-12 lg:flex-row lg:justify-between w-full">
        <Image
          src="/images/logo.png"
          alt="Logo DetalArt"
          width={100}
          height={100}
          className="w-30 h-auto"
        />
        <nav className="flex gap-6 flex-col items-center text-center text-xl lg:flex-row lg:gap-10">
          <Link href="/">Strona główna</Link>
          <Link href="/services" className="hidden lg:block">
            Usługi
          </Link>
          <Link href="/prices">Cennik</Link>
          <Link href="/gallery">Galeria</Link>
          <Link href="/contact">Kontakt</Link>
        </nav>
        <div className="flex gap-6">
          <img src="/icons/Instagram.svg" alt="Instagram" />
          <img src="/icons/WhatsApp.svg" alt="WhatsApp" />
          <img src="/icons/Facebook.svg" alt="Facebook" />
        </div>
      </div>

      <div className="flex flex-col w-full items-center gap-6 text-center lg:flex-row lg:justify-between">
        <div className="text-accent flex flex-col gap-2 text-lg lg:flex-row lg:gap-8">
          <a href="tel:+48533441860">+48 533 441 860</a>
          <a href="mailto:kontakt@studiodetalart.com">
            kontakt@studiodetalart.com
          </a>
          <a
            href="https://maps.app.goo.gl/S4BqQ92QF1quyJ8a7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Polska, 16-500 Sejny
          </a>
        </div>
        <Link href="/privacy" className="text-silver text-sm">
          Zasady przechowywania danych osobowych
        </Link>
        <a href="tel:+48794090501" className="font-bold text-silver underline">
          Autor Maciej Bobrowski
        </a>
      </div>
    </footer>
  );
};

export default Footer;
