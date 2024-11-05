import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import Script from 'next/script';

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

const lato = Lato({ 
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: '--font-lato'
});

export const metadata: Metadata = {
  title: "La Cabine d'Argent | Une Expérience Culinaire Unique",
  description: "Découvrez une expérience culinaire unique au cœur de Paris",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <Script 
          src="https://kit.fontawesome.com/c343de5fc7.js" 
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${playfair.variable} ${lato.variable}`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
