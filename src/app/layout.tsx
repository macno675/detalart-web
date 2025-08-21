// src/app/layout.tsx
import type { ReactNode } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css'; // <-- podpięcie globalnego CSS

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata = {
  title: 'DetalArt',
  description: 'Profesjonalna strona DetalArt',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pl">
      <body className="min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Główna treść */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
