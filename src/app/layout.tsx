import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

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
  title: "Restaurant Name | Fine Dining Experience",
  description: "Experience exceptional cuisine and ambiance at Restaurant Name",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
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
