"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ClassicalOrnament from "@/components/ClassicalOrnament";

export default function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      latin: "Tela Artis",
      description: "Meisterhafte Web-Applikationen, die Performance und Ästhetik vereinen.",
      features: [
        "Next.js & React Mastery",
        "Responsive & Adaptive Design",
        "Performance-Optimierung auf höchstem Niveau",
        "SEO-Exzellenz",
      ],
      icon: "🌐",
    },
    {
      title: "Mobile Excellence",
      latin: "Mobile Praestantia",
      description: "Native Perfektion für iOS und Android - in jeder Hand ein Meisterwerk.",
      features: [
        "React Native & Native Development",
        "Plattformübergreifende Harmonie",
        "App Store Optimierung",
        "Intuitive User Experience",
      ],
      icon: "📱",
    },
    {
      title: "Backend Architecture",
      latin: "Fundamentum Fortis",
      description: "Robuste Systeme, die wie römische Fundamente Jahrtausende überdauern.",
      features: [
        "Skalierbare Cloud-Architekturen",
        "RESTful & GraphQL APIs",
        "Microservices & Serverless",
        "Datenbank-Meisterschaft",
      ],
      icon: "⚙️",
    },
    {
      title: "UI/UX Mastery",
      latin: "Ars Interfaciei",
      description: "Interfaces, die mit der Eleganz antiker Kunstwerke begeistern.",
      features: [
        "User-Centered Design",
        "Moderne Design Systems",
        "Barrierefreiheit & Inklusivität",
        "Motion Design & Animationen",
      ],
      icon: "🎨",
    },
    {
      title: "E-Commerce Solutions",
      latin: "Mercatus Digitalis",
      description: "Digitale Marktplätze, die Kunden begeistern und Umsätze maximieren.",
      features: [
        "Maßgeschneiderte Shop-Systeme",
        "Payment Integration",
        "Warenwirtschaft & Logistik",
        "Marketing Automation",
      ],
      icon: "🛍️",
    },
    {
      title: "Strategic Consulting",
      latin: "Consilium Sapiens",
      description: "Weise Beratung für Ihre digitale Transformation.",
      features: [
        "Technology Stack Selection",
        "Architektur-Beratung",
        "Code Reviews & Audits",
        "Digital Strategy & Roadmapping",
      ],
      icon: "💡",
    },
  ];

  return (
    <div className="relative min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative px-6 py-32 lg:px-8 overflow-hidden">
        <ClassicalOrnament position="top-left" />
        <ClassicalOrnament position="top-right" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-4xl text-center relative z-10"
        >
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-600" />
            <span className="text-amber-400 text-sm tracking-[0.3em] uppercase font-light">
              Portfolio Nostrum
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-600" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 bg-gradient-to-b from-amber-200 to-amber-600 bg-clip-text text-transparent">
            Unsere Meisterdisziplinen
          </h1>
          
          <p className="text-xl text-slate-300 font-light leading-relaxed">
            Jede Leistung eine Kunst, jedes Projekt ein Opus
          </p>
          
          <div className="flex justify-center mt-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="relative px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative h-full p-8 bg-gradient-to-b from-slate-900/60 to-slate-900/30 backdrop-blur-sm border border-amber-900/20 rounded-sm hover:border-amber-600/50 transition-all duration-500 overflow-hidden">
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-amber-600/0 to-amber-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="text-5xl mb-6 filter grayscale group-hover:grayscale-0 transition-all duration-500">
                      {service.icon}
                    </div>
                    
                    <h3 className="text-2xl font-serif font-bold text-amber-400 mb-2 group-hover:text-amber-300 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-xs text-amber-600/70 italic mb-4">
                      {service.latin}
                    </p>
                    
                    <div className="w-16 h-px bg-gradient-to-r from-amber-600 to-transparent mb-6" />
                    
                    <p className="text-slate-300 font-light mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-400">
                          <span className="text-amber-600 mr-2 mt-1">›</span>
                          <span className="font-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path d="M 100 100 L 100 50 Q 100 0 50 0 L 0 0" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-amber-600" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative px-6 py-32 lg:px-8 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent overflow-hidden">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-serif font-bold mb-6 bg-gradient-to-b from-amber-200 to-amber-600 bg-clip-text text-transparent">
              Unser Prozess
            </h2>
            <div className="flex justify-center mb-6">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent" />
            </div>
            <p className="text-xl text-slate-400 font-light italic">
              "Dum spiro, spero" - Solange ich atme, hoffe ich
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "I", title: "Konsultation", description: "Tiefes Verständnis Ihrer Vision" },
              { step: "II", title: "Konzeption", description: "Strategische Planung & Design" },
              { step: "III", title: "Kreation", description: "Meisterhafte Umsetzung" },
              { step: "IV", title: "Kultivierung", description: "Kontinuierliche Optimierung" },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-4">
                  <div className="absolute inset-0 bg-amber-600/20 blur-xl" />
                  <div className="relative w-full h-full border-2 border-amber-600/50 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-serif text-amber-400">{phase.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-serif font-bold text-amber-400 mb-2">
                  {phase.title}
                </h3>
                <p className="text-sm text-slate-400 font-light">
                  {phase.description}
                </p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-amber-600/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-32 lg:px-8 overflow-hidden">
        <ClassicalOrnament position="bottom-left" />
        <ClassicalOrnament position="bottom-right" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 bg-gradient-to-b from-amber-200 to-amber-600 bg-clip-text text-transparent">
            Bereit für Perfektion?
          </h2>
          
          <p className="text-xl text-slate-300 font-light mb-12 leading-relaxed">
            Lassen Sie uns gemeinsam etwas Außergewöhnliches erschaffen.
            <br />
            Ihre Vision verdient exzellente Umsetzung.
          </p>
          
          <Link
            href="/contact"
            className="inline-block px-12 py-5 bg-gradient-to-r from-amber-600 to-amber-500 text-slate-900 font-bold text-lg rounded-sm hover:shadow-2xl hover:shadow-amber-600/50 transition-all duration-300 hover:scale-105"
          >
            Projekt besprechen
          </Link>
          
          <div className="flex justify-center mt-8">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent" />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
