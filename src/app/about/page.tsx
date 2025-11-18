"use client";

import { motion } from "framer-motion";
import ClassicalOrnament from "@/components/ClassicalOrnament";

export default function AboutPage() {
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
              Unsere Geschichte
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-600" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 bg-gradient-to-b from-amber-200 to-amber-600 bg-clip-text text-transparent">
            Über J&F Development
          </h1>
          
          <p className="text-xl text-slate-300 font-light leading-relaxed">
            Wo zeitlose Prinzipien auf moderne Innovation treffen
          </p>
          
          <div className="flex justify-center mt-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="relative px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="relative p-8 bg-gradient-to-br from-slate-900/50 to-slate-900/30 backdrop-blur-sm border border-amber-900/20 rounded-sm">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-600 to-transparent" />
                <h2 className="text-3xl font-serif font-bold text-amber-400 mb-6">
                  Unsere Genesis
                </h2>
                <p className="text-lg text-slate-300 font-light leading-relaxed">
                  Geboren aus der Vision, digitale Exzellenz mit klassischer Eleganz zu vereinen. 
                  J&F Development steht für Handwerkskunst in ihrer reinsten Form - jedes Projekt 
                  ein Meisterwerk, jede Zeile Code eine Symphonie der Perfektion.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="relative p-8 bg-gradient-to-br from-slate-900/50 to-slate-900/30 backdrop-blur-sm border border-amber-900/20 rounded-sm">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-600 to-transparent" />
                <h2 className="text-3xl font-serif font-bold text-amber-400 mb-6">
                  Unsere Mission
                </h2>
                <p className="text-lg text-slate-300 font-light leading-relaxed">
                  Wir erschaffen nicht nur Software - wir schmieden digitale Denkmäler. 
                  Mit den Prinzipien der Antike und den Werkzeugen der Moderne schaffen wir 
                  Lösungen, die Jahrhunderte überdauern würden, wären sie aus Marmor gemeißelt.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative px-6 py-32 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/10 via-transparent to-amber-950/10" />
        
        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-serif font-bold mb-6 bg-gradient-to-b from-amber-200 to-amber-600 bg-clip-text text-transparent">
              Die Säulen unserer Philosophie
            </h2>
            <div className="flex justify-center mb-6">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent" />
            </div>
            <p className="text-xl text-slate-400 font-light italic">
              "Virtus in Arduis" - Tugend in Schwierigkeiten
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Exzellenz",
                latin: "Excellentia",
                icon: "👑",
                description: "Höchste Standards in jedem Detail. Perfektion ist kein Ziel, sondern unser Standard.",
              },
              {
                title: "Innovation",
                latin: "Novatio",
                icon: "⚡",
                description: "Modernste Technologien, angewendet mit der Weisheit der Jahrhunderte.",
              },
              {
                title: "Integrität",
                latin: "Integritas",
                icon: "⚖️",
                description: "Unerschütterliche ethische Prinzipien in allen unseren Handlungen.",
              },
              {
                title: "Beständigkeit",
                latin: "Perpetuitas",
                icon: "🏛️",
                description: "Lösungen, die Zeit und Wandel überdauern wie römische Aquädukte.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative h-full p-8 bg-gradient-to-b from-slate-900/60 to-slate-900/40 backdrop-blur-sm border border-amber-900/20 rounded-sm hover:border-amber-600/50 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-b from-amber-600/0 to-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm" />
                  
                  <div className="relative z-10 text-center">
                    <div className="text-5xl mb-6 filter grayscale group-hover:grayscale-0 transition-all duration-500">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-amber-400 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-amber-600/80 italic mb-6">
                      {value.latin}
                    </p>
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-6" />
                    <p className="text-slate-300 font-light text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="relative px-6 py-32 lg:px-8">
        <ClassicalOrnament position="bottom-left" />
        <ClassicalOrnament position="bottom-right" />
        
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 bg-gradient-to-b from-amber-200 to-amber-600 bg-clip-text text-transparent">
              Unser Versprechen
            </h2>
            
            <div className="relative p-12 bg-gradient-to-b from-slate-900/60 to-slate-900/40 backdrop-blur-sm border border-amber-900/30 rounded-sm">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent" />
              
              <blockquote className="text-2xl md:text-3xl font-light text-slate-200 italic leading-relaxed mb-8">
                "Wir erschaffen nicht für heute oder morgen - 
                <br />
                wir erschaffen für die Ewigkeit."
              </blockquote>
              
              <div className="flex justify-center mb-6">
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent" />
              </div>
              
              <p className="text-lg text-slate-400 font-light leading-relaxed">
                Jedes Projekt ist eine Gelegenheit, etwas Außergewöhnliches zu schaffen. 
                Mit der Präzision römischer Ingenieure, der Eleganz britischer Handwerkskunst 
                und der Kraft moderner Technologie verwandeln wir Ihre Vision in digitale Realität.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative px-6 py-24 lg:px-8 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="text-6xl text-amber-600/30 mb-4">"</div>
          <p className="text-2xl md:text-3xl font-serif text-slate-200 italic mb-8">
            Ars longa, vita brevis
          </p>
          <p className="text-lg text-amber-400 font-light">
            Die Kunst ist lang, das Leben kurz
          </p>
          <div className="flex justify-center mt-8">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent" />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
