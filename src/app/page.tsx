'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const services = [
    {
      title: 'Web Development',
      description: 'Moderne, responsive Websites mit den neuesten Technologien. Von Design bis Deployment kümmern wir uns um alles.',
      gradient: "from-blue-500 to-blue-600",
      frameColor: "border-blue-400",
      glowColor: "shadow-blue-500/50",
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    },
    {
      title: 'Mobile Apps',
      description: 'Native Performance für iOS und Android aus einer Codebase mit React Native.',
      gradient: "from-purple-500 to-purple-600",
      frameColor: "border-purple-400",
      glowColor: "shadow-purple-500/50",
      icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    },
    {
      title: 'Backend Systems',
      description: 'Robuste Backend-Systeme für maximale Skalierbarkeit mit Cloud-Architekturen.',
      gradient: "from-slate-500 to-slate-600",
      frameColor: "border-slate-400",
      glowColor: "shadow-slate-500/50",
      icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
    },
    {
      title: 'UI/UX Design',
      description: 'Interfaces die begeistern und konvertieren mit User-Centered Design.',
      gradient: "from-pink-500 to-pink-600",
      frameColor: "border-pink-400",
      glowColor: "shadow-pink-500/50",
      icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
    },
    {
      title: 'Cloud & DevOps',
      description: 'Cloud-Infrastruktur und DevOps für moderne Anwendungen mit CI/CD Pipelines.',
      gradient: "from-teal-500 to-teal-600",
      frameColor: "border-teal-400",
      glowColor: "shadow-teal-500/50",
      icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
    }
  ];

  const handleCardClick = () => {
    setActiveCardIndex((prev) => (prev + 1) % services.length);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-slate-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-slate-600 bg-clip-text text-transparent">
            J&F Development
          </h1>
          <div className="flex gap-8 items-center">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors duration-300 bg-transparent border-none cursor-pointer">Leistungen</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors duration-300 bg-transparent border-none cursor-pointer">Über uns</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors duration-300 bg-transparent border-none cursor-pointer">Kontakt</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <h2 className="text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-slate-500 to-blue-600 bg-clip-text text-transparent animate-gradient">
                NEXT-LEVEL
              </span>
              <br />
              <span className="text-gray-800">DEVELOPMENT</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Wir entwickeln maßgeschneiderte Softwaresysteme, die Unternehmensprozesse präziser, schneller und effizienter machen.
            </p>
            <div className="flex gap-4">
              <button onClick={() => scrollToSection('contact')} className="px-8 py-4 bg-gradient-to-r from-blue-600 to-slate-600 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Projekt anfragen
              </button>
              <button onClick={() => scrollToSection('services')} className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300">
                Mehr lesen
              </button>
            </div>
          </div>
          <div className="relative">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-96 object-cover rounded-3xl animate-float shadow-2xl drop-shadow-[0_25px_50px_rgba(0,0,0,0.35)]"
            >
              <source src="/hero-background.mp4" type="video/mp4" />
            </video>
            <div className="absolute -bottom-6 -right-6 w-80 bg-white/[0.78] rounded-3xl animate-float-delayed shadow-2xl p-6 border-2 border-gradient-to-br from-blue-400 to-slate-400 drop-shadow-[0_25px_50px_rgba(0,0,0,0.35)]">
              <div className="relative w-full h-full">
                <Image
                  src="/logo1.png"
                  alt="J&F Development Logo"
                  width={200}
                  height={200}
                  className="object-contain mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-white/50 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-slate-200/30 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-5 w-24 h-24 bg-blue-200/30 rounded-full blur-2xl animate-pulse"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <h3 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-slate-600 bg-clip-text text-transparent">
            UNSERE EXPERTISE
          </h3>
          
          <div className="relative">
            <div className={`absolute -top-8 -left-8 w-16 h-16 border-t-4 border-l-4 ${services[activeCardIndex].frameColor} rounded-tl-3xl transition-colors duration-500`}></div>
            <div className={`absolute -top-8 -right-8 w-16 h-16 border-t-4 border-r-4 ${services[activeCardIndex].frameColor} rounded-tr-3xl transition-colors duration-500`}></div>
            <div className={`absolute -bottom-8 -left-8 w-16 h-16 border-b-4 border-l-4 ${services[activeCardIndex].frameColor} rounded-bl-3xl transition-colors duration-500`}></div>
            <div className={`absolute -bottom-8 -right-8 w-16 h-16 border-b-4 border-r-4 ${services[activeCardIndex].frameColor} rounded-br-3xl transition-colors duration-500`}></div>
            
            <div className="flex justify-center items-center min-h-[580px]">
              <div 
                className="relative w-[500px] h-[550px] cursor-pointer"
                onClick={handleCardClick}
              >
              {services.map((service, index) => {
                const position = (index - activeCardIndex + services.length) % services.length;
                const isActive = position === 0;
                
                return (
                  <div
                    key={index}
                    className={`absolute top-1/2 left-1/2 w-full p-10 bg-white rounded-3xl transition-all duration-500 ease-in-out ${isActive ? `shadow-2xl ${services[activeCardIndex].glowColor}` : 'shadow-xl'}`}
                    style={{
                      transform: `translate(-50%, -50%) translateX(${position * 15}px) translateY(${position * 15}px) rotate(${position * 2}deg) scale(${1 - position * 0.03})`,
                      zIndex: services.length - position,
                      opacity: position < 3 ? 1 - position * 0.15 : 0,
                      pointerEvents: position === 0 ? 'auto' : 'none'
                    }}
                  >
                    <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 flex items-center justify-center transition-transform duration-300`}>
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                      </svg>
                    </div>
                    <h4 className="text-3xl font-bold mb-5 text-gray-800">{service.title}</h4>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
            </div>
          </div>
          <p className="text-center mt-6 text-gray-500 text-sm">Klicken Sie, um den nächsten Service zu sehen</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-slate-600 bg-clip-text text-transparent">
            ÜBER UNS
          </h3>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Wir entwickeln maßgeschneiderte Softwaresysteme, die Unternehmensprozesse präziser, schneller und effizienter machen.
              Mit moderner Technologie, sauberer Architektur und einem hohen Qualitätsanspruch schaffen wir digitale Lösungen, die echten geschäftlichen Mehrwert liefern.
            </p>
            <p>
              Ob Industrie, Produktion, Handwerk, Dienstleistungen, Logistik, Einzelhandel, Gastronomie, Immobilien, Gesundheitswesen, Finanzen oder Startups – wir unterstützen Unternehmen jeder Branche dabei, Abläufe zu optimieren, Ressourcen besser zu nutzen und nachhaltige Effizienzsteigerungen zu erzielen.
            </p>
            <p className="text-xl font-semibold text-blue-600">
              "Ihre Innovation, unser Service"
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-12 px-6 bg-gradient-to-r from-blue-600 via-slate-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-5xl font-bold mb-6">Bereit für Ihr nächstes Projekt?</h3>
          <p className="text-xl mb-8 opacity-90">
            Let's talk! Kontaktieren Sie uns noch heute.
          </p>
          <a href="mailto:helpjfdevelopment@gmail.com" className="inline-block px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Kontakt aufnehmen
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-slate-400 bg-clip-text text-transparent">
            J&F Development
          </h4>
          <p className="text-gray-400 mb-6">Exzellenz in digitaler Handwerkskunst seit 2025</p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="/impressum" className="text-gray-400 hover:text-white transition-colors">Impressum</a>
            <span className="text-gray-600">•</span>
            <a href="/datenschutz" className="text-gray-400 hover:text-white transition-colors">Datenschutz</a>
            <span className="text-gray-600">•</span>
            <a href="mailto:helpjfdevelopment@gmail.com" className="text-gray-400 hover:text-white transition-colors">Kontakt</a>
          </div>
          <p className="text-sm text-gray-500">© 2025 J&F Development. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}
