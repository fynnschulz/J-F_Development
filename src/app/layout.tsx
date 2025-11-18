import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParallaxBackground from "@/components/ParallaxBackground";
import ScrollProgress from "@/components/ScrollProgress";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "J&F Development - Exzellenz in digitaler Handwerkskunst",
  description: "Wo klassische Eleganz auf moderne Innovation trifft. Maßgeschneiderte digitale Lösungen von höchster Qualität.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-slate-950 text-slate-100`}
        style={{ fontFamily: "var(--font-inter)" }}
      >
        <ParallaxBackground />
        <ScrollProgress />
        <Navigation />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
