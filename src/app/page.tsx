'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const services = [
    {
      title: 'Web Development',
      description: 'Hochmoderne Web-Anwendungen mit Next.js, React und modernsten Technologien',
      icon: '🚀',
      color: 'from-cyan-500 to-blue-600',
      borderColor: 'hover:border-cyan-400'
    },
    {
      title: 'Mobile Apps',
      description: 'Native Apps für iOS & Android mit React Native und Flutter',
      icon: '📱',
      color: 'from-purple-500 to-pink-600',
      borderColor: 'hover:border-purple-400'
    },
    {
      title: 'UI/UX Design',
      description: 'Benutzerfreundliche Interfaces die konvertieren und begeistern',
      icon: '🎨',
      color: 'from-orange-500 to-red-600',
      borderColor: 'hover:border-orange-400'
    },
    {
      title: 'Cloud Solutions',
      description: 'Skalierbare Cloud-Infrastruktur mit AWS, Azure und Google Cloud',
      icon: '☁️',
      color: 'from-emerald-500 to-teal-600',
      borderColor: 'hover:border-emerald-400'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background Gradient */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3), transparent 50%)`
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrollY > 50 ? 'bg-black/90 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src="/logo1.png"
                alt="J&F Logo"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              J&F Development
            </h1>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 font-medium">Services</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 font-medium">Über uns</button>
            <button onClick={() => scrollToSection('contact')} className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-105">
              Kontakt
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_0%,_transparent_70%)]" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm font-semibold text-blue-400 animate-pulse-glow">
                ✨ Ihre digitale Vision, unser Code
              </div>
              <h2 className="text-7xl lg:text-8xl font-black leading-none tracking-tight">
                <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                  BUILD
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                  THE FUTURE
                </span>
              </h2>
            </div>
            <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
              Wir entwickeln maßgeschneiderte Softwarelösungen, die Ihre Geschäftsprozesse revolutionieren. 
              Von der Idee bis zum Launch – <span className="text-white font-semibold">alles aus einer Hand</span>.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('contact')} 
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Projekt starten
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="px-8 py-4 border-2 border-white/20 rounded-full font-bold text-lg hover:bg-white/5 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
              >
                Mehr erfahren
              </button>
            </div>
          </div>

          <div className="relative lg:h-[600px] h-[400px] animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-3xl opacity-20 animate-pulse-slow" />
            <div className="relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover opacity-60"
              >
                <source src="/hero-background.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16">
                      <Image
                        src="/logo1.png"
                        alt="Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Powered by</p>
                      <p className="text-lg font-bold">J&F Development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(6,182,212,0.1)_0%,_transparent_70%)]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h3 className="text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
              UNSERE SERVICES
            </h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Modernste Technologien für Ihre digitalen Ambitionen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                className={`group relative p-8 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-3xl border-2 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(59,130,246,0.3)] ${service.borderColor} ${hoveredService === index ? 'border-opacity-100' : 'border-white/10'}`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300 ${hoveredService === index ? 'animate-bounce-slow' : ''}`}>
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {service.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                  <div className={`mt-6 h-1 bg-gradient-to-r ${service.color} w-0 group-hover:w-full transition-all duration-500 rounded-full`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(139,92,246,0.1)_0%,_transparent_70%)]" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 p-12 lg:p-16 shadow-2xl">
            <h3 className="text-5xl lg:text-6xl font-black mb-8 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              ÜBER UNS
            </h3>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Wir sind <span className="text-white font-semibold">J&F Development</span> – ein innovatives Team von Entwicklern, 
                Designern und Strategen, die eine Leidenschaft für herausragende digitale Lösungen teilen.
              </p>
              <p>
                Mit modernster Technologie und einem tiefen Verständnis für Geschäftsprozesse entwickeln wir 
                <span className="text-blue-400 font-semibold"> maßgeschneiderte Software</span>, die echten Mehrwert schafft.
              </p>
              <p>
                Ob Startup, Mittelstand oder Enterprise – wir unterstützen Unternehmen jeder Größe dabei, 
                ihre <span className="text-cyan-400 font-semibold">digitale Vision</span> Wirklichkeit werden zu lassen.
              </p>
              <div className="pt-6 border-t border-white/10 mt-8">
                <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  "Innovation trifft Exzellenz"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: '50+', label: 'Projekte realisiert' },
              { number: '100%', label: 'Kundenzufriedenheit' },
              { number: '24/7', label: 'Support verfügbar' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-8 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                <div className="text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.2)_0%,_transparent_70%)]" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 p-12 lg:p-16 shadow-2xl">
            <h3 className="text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Bereit durchzustarten?
            </h3>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Lassen Sie uns gemeinsam Ihre digitale Vision verwirklichen. 
              Kontaktieren Sie uns noch heute für ein unverbindliches Erstgespräch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:helpjfdevelopment@gmail.com" 
                className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-bold text-lg hover:shadow-[0_0_50px_rgba(59,130,246,0.6)] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>📧</span>
                E-Mail senden
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a 
                href="tel:+491234567890" 
                className="px-10 py-5 border-2 border-white/20 rounded-full font-bold text-lg hover:bg-white/5 hover:border-white/40 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
              >
                <span>📞</span>
                Anrufen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
