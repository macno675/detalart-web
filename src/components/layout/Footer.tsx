import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div>
               <Image src="/images/logo.png" alt="Logo DetalArt" fill/>
                <nav>
                    <Link href="/">Strona główna</Link>
                    <Link href="/services">Usługi</Link>
                    <Link href="/prices">Cennik</Link>
                    <Link href="/gallery">Galeria</Link>
                    <Link href="/contact">Kontakt</Link>
                </nav>
                <div>
                    <img src="" alt="Instagram" />
                    <img src="" alt="WhatsApp" />
                    <img src="" alt="Facebook" />
                </div> 
            </div>
            
            <div>
                <div>
                    <a href='tel:+48533441860'>+48 533 441 860</a>
                    <a href='mailto:kontakt@studiodetalart.com'>kontakt@studiodetalart.com</a>
                    <a href='https://maps.app.goo.gl/S4BqQ92QF1quyJ8a7' target="_blank" rel="noopener noreferrer">Polska, 16-500 Sejny</a>
                </div>
                <Link href="/privacy">Zasady przechowywania danych osobowych</Link>
                <a href="tel:+48794090501">Autor Maciej Bobrowski</a>
            </div>
        </footer>
    );
}

export default Footer;
