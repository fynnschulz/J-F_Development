'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [language, setLanguage] = useState<'de' | 'en'>('de');

  const translations = {
    de: {
      nav: {
        services: 'Dienstleistungen',
        about: 'Über uns',
        contact: 'Kontakt'
      },
      hero: {
        title1: 'Heben Sie Ihre Marke',
        title2: 'Mit Kreativer Exzellenz',
        description: 'Wir erwecken Ihre Vision zum Leben mit atemberaubenden Websites, auffälligen Flyern und professionellen Marketingmaterialien, die Ihr Unternehmen hervorheben.',
        getStarted: 'Jetzt starten',
        ourServices: 'Unsere Dienstleistungen'
      },
      pricing: {
        title: 'Unsere Preise',
        basic: 'Basic',
        pro: 'Pro',
        premium: 'Premium',
        custom: 'INDIVIDUELL',
        allServices: 'Alle Dienstleistungen'
      },
      services: {
        title: 'Unsere Dienstleistungen',
        clickHint: 'Klicken Sie, um den nächsten Service zu sehen',
        website: {
          title: 'Websites All-Inclusive',
          description: 'Moderne, responsive Websites mit den neuesten Technologien. Von Design bis Deployment kümmern wir uns um alles.'
        },
        flyer: {
          title: 'Flyer-Design',
          description: 'Auffällige Flyer, die Aufmerksamkeit erregen und Ihre Botschaft effektiv an Ihre Zielgruppe kommunizieren.'
        },
        businessCards: {
          title: 'Visitenkarten',
          description: 'Professionelle Visitenkarten, die einen bleibenden ersten Eindruck hinterlassen und Ihre Marke perfekt repräsentieren.'
        },
        marketing: {
          title: 'Marketingmaterialien',
          description: 'Komplette Marketinglösungen einschließlich Broschüren, Poster und mehr.'
        },
        branding: {
          title: 'Branding & Identität',
          description: 'Erstellen Sie eine kohärente Markenidentität, die bei Ihrem Publikum Anklang findet und Sie von der Konkurrenz abhebt.'
        }
      },
      cta: {
        title: 'Bereit, Ihre Marke zu verbessern?',
        description: 'Lassen Sie uns zusammenarbeiten, um etwas Großartiges zu schaffen. Kontaktieren Sie uns noch heute!',
        button: 'Kontaktieren Sie uns'
      },
      footer: {
        tagline: 'Außergewöhnliche digitale Erlebnisse seit 2025',
        privacy: 'Datenschutz',
        terms: 'Nutzungsbedingungen',
        contact: 'Kontakt',
        copyright: '© 2025 Fylu Marketing & Design. Alle Rechte vorbehalten.'
      }
    },
    en: {
      nav: {
        services: 'Services',
        about: 'About',
        contact: 'Contact'
      },
      hero: {
        title1: 'Elevate Your Brand',
        title2: 'With Creative Excellence',
        description: 'We bring your vision to life with stunning websites, eye-catching flyers, and professional marketing materials that make your business stand out.',
        getStarted: 'Get Started',
        ourServices: 'Our Services'
      },
      pricing: {
        title: 'Our Pricing',
        basic: 'Basic',
        pro: 'Pro',
        premium: 'Premium',
        custom: 'CUSTOM',
        allServices: 'All Services'
      },
      services: {
        title: 'Our Services',
        clickHint: 'Click to see next service',
        website: {
          title: 'Websites All-Inclusive',
          description: 'Modern, responsive websites built with the latest technologies. From design to deployment, we handle everything.'
        },
        flyer: {
          title: 'Flyer Design',
          description: 'Eye-catching flyers that grab attention and communicate your message effectively to your target audience.'
        },
        businessCards: {
          title: 'Business Cards',
          description: 'Professional business cards that make a lasting first impression and represent your brand perfectly.'
        },
        marketing: {
          title: 'Marketing Materials',
          description: 'Complete marketing solutions including brochures, posters, and more.'
        },
        branding: {
          title: 'Branding & Identity',
          description: 'Build a cohesive brand identity that resonates with your audience and sets you apart from competitors.'
        }
      },
      cta: {
        title: 'Ready to Elevate Your Brand?',
        description: "Let's work together to create something amazing. Get in touch with us today!",
        button: 'Contact Us'
      },
      footer: {
        tagline: 'Creating exceptional digital experiences since 2025',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        contact: 'Contact',
        copyright: '© 2025 Fylu Marketing & Design. All rights reserved.'
      }
    }
  };

  const t = translations[language];

  const services = [
    {
      title: t.services.website.title,
      description: t.services.website.description,
      gradient: "from-purple-500 to-purple-600",
      frameColor: "border-purple-400",
      glowColor: "shadow-purple-500/50",
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    },
    {
      title: t.services.flyer.title,
      description: t.services.flyer.description,
      gradient: "from-pink-500 to-pink-600",
      frameColor: "border-pink-400",
      glowColor: "shadow-pink-500/50",
      icon: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
    },
    {
      title: t.services.businessCards.title,
      description: t.services.businessCards.description,
      gradient: "from-blue-500 to-blue-600",
      frameColor: "border-blue-400",
      glowColor: "shadow-blue-500/50",
      icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
    },
    {
      title: t.services.marketing.title,
      description: t.services.marketing.description,
      gradient: "from-yellow-500 to-orange-500",
      frameColor: "border-orange-400",
      glowColor: "shadow-orange-500/50",
      icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
    },
    {
      title: t.services.branding.title,
      description: t.services.branding.description,
      gradient: "from-green-500 to-teal-500",
      frameColor: "border-teal-400",
      glowColor: "shadow-teal-500/50",
      icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
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
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-blue-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Fylu Marketing & Design
          </h1>
          <div className="flex gap-8 items-center">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-purple-600 transition-colors duration-300 bg-transparent border-none cursor-pointer">{t.nav.services}</button>
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">{t.nav.about}</a>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-purple-600 transition-colors duration-300 bg-transparent border-none cursor-pointer">{t.nav.contact}</button>
            <button 
              onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
              className="ml-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm"
            >
              {language === 'de' ? 'DE' : 'EN'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <h2 className="text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent animate-gradient">
                {t.hero.title1}
              </span>
              <br />
              <span className="text-gray-800">{t.hero.title2}</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                {t.hero.getStarted}
              </a>
              <button onClick={() => scrollToSection('services')} className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300">
                {t.hero.ourServices}
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
              ref={(video) => {
                if (video) {
                  video.playbackRate = 2.5;
                }
              }}
            >
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute -bottom-6 -right-6 w-80 bg-white/[0.78] rounded-3xl animate-float-delayed shadow-2xl p-6 border-2 border-gradient-to-br from-yellow-400 to-orange-400 drop-shadow-[0_25px_50px_rgba(0,0,0,0.35)]">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {t.pricing.title}
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl">
                  <span className="font-semibold text-gray-800">{t.pricing.basic}</span>
                  <span className="text-sm font-semibold text-gray-600">€400</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl">
                  <span className="font-semibold text-gray-800">{t.pricing.pro}</span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent hover:from-purple-500 hover:via-pink-400 hover:to-blue-500 hover:scale-110 transition-all duration-300 cursor-pointer brightness-110">€550</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl">
                  <span className="font-semibold text-gray-800">{t.pricing.premium}</span>
                  <span className="text-sm font-semibold text-gray-600">{t.pricing.custom}</span>
                </div>
              </div>
              <button onClick={() => scrollToSection('services')} className="block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                {t.pricing.allServices}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-white/50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-5 w-24 h-24 bg-pink-200/30 rounded-full blur-2xl animate-pulse"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <h3 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {t.services.title}
          </h3>
          
          {/* Decorative Frame */}
          <div className="relative">
            {/* Corner Decorations - Dynamic Color */}
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
          <p className="text-center mt-6 text-gray-500 text-sm">{t.services.clickHint}</p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-12 px-6 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-5xl font-bold mb-6">{t.cta.title}</h3>
          <p className="text-xl mb-8 opacity-90">
            {t.cta.description}
          </p>
          <a href="mailto:hello@fylu.com" className="inline-block px-10 py-5 bg-white text-purple-600 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            {t.cta.button}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Fylu Marketing & Design
          </h4>
          <p className="text-gray-400 mb-6">{t.footer.tagline}</p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">{t.footer.privacy}</a>
            <span className="text-gray-600">•</span>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">{t.footer.terms}</a>
            <span className="text-gray-600">•</span>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">{t.footer.contact}</a>
          </div>
          <p className="text-sm text-gray-500">{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
