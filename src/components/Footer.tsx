"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: sectionId === "home" ? 0 : offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navigation = [
    { name: "Home", href: "home" },
    { name: "Über uns", href: "about" },
    { name: "Leistungen", href: "services" },
    { name: "Kontakt", href: "contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black border-t border-cyan-500/30">
      {/* Glow line at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-12 h-12 overflow-hidden border-2 border-cyan-500/30">
                <Image
                  src="/logo1.png"
                  alt="J&F Development Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  J&F
                </h3>
                <span className="text-xs text-cyan-400 font-mono uppercase tracking-wider">
                  Development
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 font-light leading-relaxed mb-4">
              Exzellenz in digitaler Handwerkskunst
            </p>
            <p className="text-xs text-cyan-400 font-mono uppercase tracking-wider">
              [INNOVATION • EXCELLENCE]
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold text-cyan-400 mb-4 tracking-wider uppercase">
              NAVIGATION
            </h4>
            <div className="h-[2px] w-12 bg-gradient-to-r from-cyan-400 to-transparent mb-4" />
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors font-light hover:translate-x-1 inline-block duration-300"
                  >
                    <span className="text-cyan-400 mr-2">▸</span>
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-cyan-400 mb-4 tracking-wider uppercase">
              KONTAKT
            </h4>
            <div className="h-[2px] w-12 bg-gradient-to-r from-cyan-400 to-transparent mb-4" />
            <ul className="space-y-2 text-sm text-gray-400 font-light">
              <li className="hover:text-cyan-400 transition-colors">helpjfdevelopemnt@gmail.com</li>
              <li className="hover:text-cyan-400 transition-colors">+49 (0) 123 456789</li>
              <li className="pt-2 text-xs text-gray-500 font-mono">
                &gt; Mo-Fr: 9:00 - 18:00 Uhr
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cyan-500/20">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
            <Link href="/impressum" passHref legacyBehavior>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-slate-600 text-white font-semibold rounded-sm shadow hover:scale-105 transition-all duration-300">
                Impressum
              </button>
            </Link>
            <Link href="/datenschutz" passHref legacyBehavior>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-slate-600 text-white font-semibold rounded-sm shadow hover:scale-105 transition-all duration-300">
                Datenschutz
              </button>
            </Link>
          </div>
          <p className="text-center text-xs text-gray-500 font-light">
            © {new Date().getFullYear()} J&F Development. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>

      {/* Corner Accents */}
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400/30" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-600/30" />
    </footer>
  );
}
