"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ClassicalOrnament from "@/components/ClassicalOrnament";

// Service Item Component
function ServiceItem({ service, index }: { service: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1]
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="group text-center"
    >
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-blue-400 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-sm text-zinc-500 font-mono tracking-wider">
          {service.tech}
        </p>
        <p className="text-zinc-400 font-light text-sm leading-relaxed">
          {service.description}
        </p>
        <ul className="space-y-2 pt-2">
          {service.features.map((feature: string, idx: number) => (
            <li key={idx} className="text-xs text-zinc-500 font-light tracking-wide">
              <span className="text-blue-400/60 mr-2">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

  // Force videos to autoplay (especially for Safari)
  useEffect(() => {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      // Ensure muted attribute is set for Safari
      video.muted = true;
      video.setAttribute('muted', '');
      video.setAttribute('playsinline', '');
      
      // Try to play immediately
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          console.log('Video autoplay was prevented, trying again:', err);
          // Safari workaround: try again after a short delay
          setTimeout(() => {
            video.muted = true;
            video.play().catch(e => console.log('Second attempt failed:', e));
          }, 100);
        });
      }
    });

    // Additional Safari workaround: play on any user interaction
    const handleInteraction = () => {
      videos.forEach(video => {
        if (video.paused) {
          video.muted = true;
          video.play().catch(err => console.log('Play on interaction failed:', err));
        }
      });
    };

    // Listen for various interaction events
    document.addEventListener('click', handleInteraction, { once: true });
    document.addEventListener('touchstart', handleInteraction, { once: true });
    document.addEventListener('scroll', handleInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative bg-black">
      {/* Subtle Grid Background */}
      <div className="fixed inset-0 subtle-grid opacity-20" />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            webkit-playsinline="true"
            x-webkit-airplay="allow"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectFit: 'cover' }}
          >
            <source src="/hero-background.mp4" type="video/mp4" />
          </video>
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent" />

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center"
          style={{ y: y1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-12"
          >
            <div className="inline-block">
              <div className="flex items-center space-x-4 mb-8">
                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-blue-500" />
                <span className="text-blue-400 text-xs tracking-[0.3em] uppercase font-medium">
                  FUTURE STARTS NOW
                </span>
                <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-blue-500" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-12"
          >
            <div className="relative inline-block">
              <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] mx-auto">
                <Image
                  src="/logo1.png"
                  alt="J&F Development Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              NEXT-LEVEL
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-400">
                DEVELOPMENT
              </span>
            </h1>
            <div className="h-[1px] w-24 bg-gradient-to-r from-blue-500 to-slate-600 mx-auto mb-6" />
            <p className="text-lg text-gray-400 font-light">
              Wo Innovation auf Perfektion trifft
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col items-center justify-center gap-6"
          >
            <Link
              href="#contact"
              className="group relative px-10 py-4 bg-gradient-to-r from-blue-500 to-slate-600 font-bold text-sm uppercase tracking-wider overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 rounded-sm"
            >
              <span className="relative z-10 text-white">Projekt anfragen</span>
            </Link>
            <Link
              href="#services"
              className="group px-10 py-4 border border-blue-500 text-blue-400 font-bold text-sm uppercase tracking-wider hover:bg-blue-500/10 transition-all duration-300 relative overflow-hidden rounded-sm"
            >
              <span className="relative z-10">Mehr lesen</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-slate-400/30 to-transparent" />

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8"
          style={{ y: y2 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              UNSERE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-400">PRINZIPIEN</span>
            </h2>
            <div className="h-[1px] w-32 bg-gradient-to-r from-blue-500 via-slate-600 to-blue-500 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "PRÄZISION",
                subtitle: "Perfekte Ausführung",
                description:
                  "Fehlerfreie Systeme mit höchster Genauigkeit entwickelt.",
              },
              {
                title: "PERFORMANCE",
                subtitle: "Blitzschnell",
                description:
                  "Jede Millisekunde zählt. Wir optimieren bis ins letzte Detail.",
              },
              {
                title: "SICHERHEIT",
                subtitle: "Maximaler Schutz",
                description:
                  "Höchste Sicherheitsstandards für alle unsere Anwendungen.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.08,
                  ease: [0.4, 0, 0.2, 1]
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative p-8 bg-gradient-to-b from-gray-900 to-black transition-all duration-700 overflow-hidden text-center rounded-sm shadow-xl hover:shadow-2xl"
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-xs text-blue-400 font-medium mb-4 tracking-wider transition-all duration-500 group-hover:tracking-widest">
                    {item.subtitle}
                  </p>
                  <div className="h-[1px] w-12 bg-gradient-to-r from-blue-400 to-transparent mb-6 mx-auto group-hover:w-20 transition-all duration-500" />
                  <p className="text-gray-400 font-light leading-relaxed text-sm group-hover:text-gray-300 transition-colors duration-500">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section id="services" className="relative py-32">
        {/* Background */}
        <div className="absolute inset-0 bg-black" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              UNSERE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-400">EXPERTISE</span>
            </h2>
            <div className="h-[1px] w-32 bg-gradient-to-r from-blue-500 via-slate-600 to-blue-500 mx-auto mb-6" />
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Modernste Technologien für maximale Performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
            {[
              {
                title: "WEB DEVELOPMENT",
                tech: "React • Next.js",
                subtitle: "Next-Gen Web",
                description: "Hochperformante Web-Applikationen mit modernsten Frameworks.",
                features: ["Next.js & React", "Responsive Design", "Performance-Optimierung", "SEO-Exzellenz"],
              },
              {
                title: "MOBILE APPS",
                tech: "React Native • iOS/Android",
                subtitle: "Cross-Platform",
                description: "Native Performance für iOS und Android aus einer Codebase.",
                features: ["React Native", "Plattformübergreifend", "App Store Optimierung", "Intuitive UX"],
              },
              {
                title: "BACKEND SYSTEMS",
                tech: "Node.js • Python • Go",
                subtitle: "Scalable Infrastructure",
                description: "Robuste Backend-Systeme für maximale Skalierbarkeit.",
                features: ["Cloud-Architekturen", "REST & GraphQL APIs", "Microservices", "Datenbank-Design"],
              },
              {
                title: "UI/UX DESIGN",
                tech: "Figma • Adobe XD",
                subtitle: "User-Centric",
                description: "Interfaces die begeistern und konvertieren.",
                features: ["User-Centered Design", "Design Systems", "Barrierefreiheit", "Motion Design"],
              },
              {
                title: "E-COMMERCE",
                tech: "Shopify • Custom",
                subtitle: "Sales Optimization",
                description: "Digitale Shops die verkaufen.",
                features: ["Shop-Systeme", "Payment Integration", "Warenwirtschaft", "Marketing Automation"],
              },
              {
                title: "CLOUD & DEVOPS",
                tech: "AWS • Azure • Docker",
                subtitle: "Tech Strategy",
                description: "Cloud-Infrastruktur und DevOps für moderne Anwendungen.",
                features: ["Cloud Deployment", "CI/CD Pipelines", "Container Orchestration", "Monitoring & Logging"],
              },
            ].map((service, index) => (
              <ServiceItem key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - About */}
      <section id="about" className="relative py-32 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            webkit-playsinline="true"
            x-webkit-airplay="allow"
            className="w-full h-full object-cover opacity-70"
            style={{ objectFit: 'cover' }}
          >
            <source src="/mission.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30" />
        </div>
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-slate-400/30 to-transparent" />
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative z-10 max-w-5xl mx-auto px-6"
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              ÜBER <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-400">UNS</span>
            </h2>
            <div className="h-[1px] w-32 bg-gradient-to-r from-blue-500 via-slate-600 to-blue-500 mx-auto" />
          </div>

          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
              className="relative text-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Unsere Mission
              </h3>
              
              <div className="space-y-6 text-gray-300 font-light leading-relaxed max-w-4xl mx-auto">
                <p className="text-lg">
                  Wir entwickeln maßgeschneiderte Softwaresysteme, die Unternehmensprozesse präziser, schneller und effizienter machen.
                  Mit moderner Technologie, sauberer Architektur und einem hohen Qualitätsanspruch schaffen wir digitale Lösungen, die echten geschäftlichen Mehrwert liefern.
                </p>
                
                <p>
                  Ob Industrie, Produktion, Handwerk, Dienstleistungen, Logistik, Einzelhandel, Gastronomie, Immobilien, Gesundheitswesen, Finanzen oder Startups – wir unterstützen Unternehmen jeder Branche dabei, Abläufe zu optimieren, Ressourcen besser zu nutzen und nachhaltige Effizienzsteigerungen zu erzielen.
                </p>
                
                <p className="text-lg font-medium text-blue-400">
                  Unser Ziel ist es, Unternehmen durch intelligente Software stärker, skalierbarer und zukunftsfähig zu machen.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <blockquote className="text-xl md:text-2xl font-bold text-white leading-relaxed mb-6">
              "Ihre Innovation, unser Service"
            </blockquote>
            <div className="h-[1px] w-24 bg-gradient-to-r from-blue-500 via-slate-600 to-blue-500 mx-auto mb-4" />
            <p className="text-sm text-blue-400 font-mono uppercase tracking-wider">
              BUILT FOR THE FUTURE
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="relative py-32">
        {/* Background */}
        <div className="absolute inset-0 bg-black" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Process */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold mb-6 text-white">
              UNSER <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-400">PROZESS</span>
            </h3>
            <div className="h-[1px] w-24 bg-gradient-to-r from-blue-500 via-slate-600 to-blue-500 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: "01", title: "ANALYSE", description: "Deep-Dive in Ihre Requirements" },
              { step: "02", title: "KONZEPT", description: "Strategische Planung & Architektur" },
              { step: "03", title: "ENTWICKLUNG", description: "Agile Implementation" },
              { step: "04", title: "OPTIMIERUNG", description: "Continuous Improvement" },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1, 
                  ease: [0.4, 0, 0.2, 1]
                }}
                viewport={{ once: true }}
                className="relative text-center group"
              >
                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-4">
                  <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-b from-gray-900 to-black transition-all duration-500 rounded-sm shadow-lg group-hover:shadow-xl">
                    <span className="text-xl font-bold text-blue-400 group-hover:scale-110 transition-transform duration-500">{phase.step}</span>
                  </div>
                </div>
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-500">
                  {phase.title}
                </h4>
                <p className="text-xs text-gray-500 font-light group-hover:text-gray-400 transition-colors duration-500">
                  {phase.description}
                </p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-[1px] bg-gradient-to-r from-blue-500/50 to-transparent group-hover:from-blue-500 transition-all duration-500" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-slate-400/30 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              KONTAKT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-400">AUFNEHMEN</span>
            </h2>
            <div className="h-[1px] w-32 bg-gradient-to-r from-blue-500 via-slate-600 to-blue-500 mx-auto mb-6" />
            <p className="text-lg text-gray-400">
              Bereit für Ihr nächstes Projekt? Let's talk!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <ContactInfo />
            
            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true }}
      className="lg:col-span-2 space-y-6"
    >
      <div>
        <h3 className="text-2xl font-bold mb-4 text-white">
          LET'S BUILD SOMETHING <span className="text-blue-400">AMAZING</span>
        </h3>
        <p className="text-gray-400 font-light leading-relaxed mb-6">
          Ob ambitioniertes Startup oder Enterprise-Projekt - wir entwickeln Ihre Vision zur Realität.
        </p>
      </div>

      <div className="space-y-4">
        {[
          {
            icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
            title: "EMAIL",
            value: "info@jf-development.de"
          },
          {
            icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
            title: "PHONE",
            value: "+49 (0) 123 456789"
          },
          {
            icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
            title: "VERFÜGBAR",
            value: "Mo-Fr: 9:00 - 18:00 Uhr"
          }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ x: 5, scale: 1.02 }}
            transition={{ 
              duration: 0.4, 
              delay: idx * 0.1,
              ease: [0.4, 0, 0.2, 1]
            }}
            viewport={{ once: true }}
            className="group flex items-start space-x-4 p-4 bg-gradient-to-r from-gray-900 to-black transition-all duration-500 rounded-sm shadow-lg hover:shadow-xl"
          >
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center bg-gradient-to-r from-blue-500 to-slate-600 group-hover:scale-110 transition-all duration-500 rounded-sm">
                <svg className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold text-blue-400 mb-1 tracking-wider uppercase group-hover:tracking-widest transition-all duration-500">{item.title}</h4>
              <p className="text-sm text-white font-light group-hover:text-blue-100 transition-colors duration-500">{item.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setSubmitMessage("✓ Nachricht empfangen. Wir melden uns innerhalb von 24h.");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", company: "", message: "" });
      setTimeout(() => setSubmitMessage(""), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
      viewport={{ once: true }}
      className="lg:col-span-3"
    >
      <div className="relative p-8 bg-gradient-to-b from-gray-900 to-black rounded-sm shadow-xl hover:shadow-2xl transition-all duration-500">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-200/20 to-transparent" />
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-blue-400 mb-2 tracking-wider uppercase">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="block w-full border border-gray-700 bg-black px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-blue-500 focus:outline-none transition-all duration-300 rounded-sm hover:border-gray-600 focus:scale-[1.01]"
                placeholder="Ihr Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold text-blue-400 mb-2 tracking-wider uppercase">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="block w-full border border-gray-700 bg-black px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-blue-500 focus:outline-none transition-all duration-300 rounded-sm hover:border-gray-600 focus:scale-[1.01]"
                placeholder="ihre.email@beispiel.de"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-xs font-bold text-blue-400 mb-2 tracking-wider uppercase">
              Unternehmen
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="block w-full border border-gray-700 bg-black px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-blue-500 focus:outline-none transition-all duration-300 rounded-sm hover:border-gray-600 focus:scale-[1.01]"
              placeholder="Ihr Unternehmen (optional)"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-bold text-blue-400 mb-2 tracking-wider uppercase">
              Nachricht *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="block w-full border border-gray-700 bg-black px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-blue-500 focus:outline-none transition-all duration-300 resize-none rounded-sm hover:border-gray-600 focus:scale-[1.01]"
              placeholder="Erzählen Sie uns von Ihrem Projekt..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-slate-600 text-white font-bold text-sm uppercase tracking-wider overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed rounded-sm"
          >
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>{isSubmitting ? "WIRD GESENDET..." : "NACHRICHT SENDEN"}</span>
              {!isSubmitting && (
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              )}
            </span>
          </button>

          {submitMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-blue-500 bg-blue-500/10 p-3 text-sm text-blue-400 font-mono rounded-sm"
            >
              {submitMessage}
            </motion.div>
          )}
        </form>
      </div>
    </motion.div>
  );
}
