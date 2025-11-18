"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ClassicalOrnament from "@/components/ClassicalOrnament";

export default function ContactPage() {
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
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage("Ihre Nachricht wurde empfangen. Wir melden uns zeitnah bei Ihnen.");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", company: "", message: "" });
      
      // Clear message after 5 seconds
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
              Contactus
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-600" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 bg-gradient-to-b from-amber-200 to-amber-600 bg-clip-text text-transparent">
            Beginnen wir das Gespräch
          </h1>
          
          <p className="text-xl text-slate-300 font-light leading-relaxed">
            Jedes Meisterwerk beginnt mit einem ersten Schritt
          </p>
          
          <div className="flex justify-center mt-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="relative px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6 text-amber-400">
                  Wir sind für Sie da
                </h2>
                <p className="text-lg text-slate-300 font-light leading-relaxed mb-8">
                  Ob ambitioniertes Projekt oder strategische Beratung - wir freuen uns darauf, 
                  von Ihrer Vision zu erfahren und gemeinsam Außergewöhnliches zu schaffen.
                </p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="group flex items-start space-x-4 p-6 bg-gradient-to-br from-slate-900/60 to-slate-900/30 backdrop-blur-sm border border-amber-900/20 rounded-sm hover:border-amber-600/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-amber-600/20 group-hover:bg-amber-600/30 transition-all">
                      <svg
                        className="h-6 w-6 text-amber-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-amber-400 mb-1 tracking-wide uppercase">Email</h3>
                    <p className="text-slate-300 font-light">info@jf-development.de</p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="group flex items-start space-x-4 p-6 bg-gradient-to-br from-slate-900/60 to-slate-900/30 backdrop-blur-sm border border-amber-900/20 rounded-sm hover:border-amber-600/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-amber-600/20 group-hover:bg-amber-600/30 transition-all">
                      <svg
                        className="h-6 w-6 text-amber-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-amber-400 mb-1 tracking-wide uppercase">Telefon</h3>
                    <p className="text-slate-300 font-light">+49 (0) 123 456789</p>
                  </div>
                </motion.div>

                {/* Office Hours */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="group flex items-start space-x-4 p-6 bg-gradient-to-br from-slate-900/60 to-slate-900/30 backdrop-blur-sm border border-amber-900/20 rounded-sm hover:border-amber-600/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-amber-600/20 group-hover:bg-amber-600/30 transition-all">
                      <svg
                        className="h-6 w-6 text-amber-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-amber-400 mb-1 tracking-wide uppercase">Verfügbarkeit</h3>
                    <p className="text-slate-300 font-light">Mo-Fr: 9:00 - 18:00 Uhr</p>
                  </div>
                </motion.div>
              </div>

              <div className="pt-8">
                <div className="p-6 bg-gradient-to-br from-amber-950/30 to-slate-900/30 backdrop-blur-sm border border-amber-900/30 rounded-sm">
                  <p className="text-slate-400 italic font-light text-sm leading-relaxed">
                    "Audentes fortuna iuvat"
                    <br />
                    <span className="text-amber-600/80 text-xs">Das Glück begünstigt die Mutigen</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <div className="relative p-8 lg:p-12 bg-gradient-to-br from-slate-900/60 to-slate-900/30 backdrop-blur-sm border border-amber-900/20 rounded-sm">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent" />
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-amber-400 mb-2 tracking-wide">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="block w-full rounded-sm border border-amber-900/30 bg-slate-950/50 px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 focus:outline-none transition-all"
                        placeholder="Ihr Name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-amber-400 mb-2 tracking-wide">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full rounded-sm border border-amber-900/30 bg-slate-950/50 px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 focus:outline-none transition-all"
                        placeholder="ihre.email@beispiel.de"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-amber-400 mb-2 tracking-wide">
                      Unternehmen
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="block w-full rounded-sm border border-amber-900/30 bg-slate-950/50 px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 focus:outline-none transition-all"
                      placeholder="Ihr Unternehmen (optional)"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-amber-400 mb-2 tracking-wide">
                      Ihre Nachricht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full rounded-sm border border-amber-900/30 bg-slate-950/50 px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 focus:outline-none transition-all resize-none"
                      placeholder="Erzählen Sie uns von Ihrem Projekt..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-slate-900 font-bold rounded-sm overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-amber-600/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <span>{isSubmitting ? "Wird gesendet..." : "Nachricht senden"}</span>
                      {!isSubmitting && (
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>

                  {submitMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-sm bg-amber-950/50 border border-amber-600/50 p-4 text-sm text-amber-300"
                    >
                      {submitMessage}
                    </motion.div>
                  )}
                </form>

                <ClassicalOrnament position="bottom-right" delay={0.5} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative px-6 py-32 lg:px-8 overflow-hidden">
        <ClassicalOrnament position="bottom-left" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="text-6xl text-amber-600/30 mb-4">"</div>
          <p className="text-2xl md:text-3xl font-serif text-slate-200 italic mb-8 leading-relaxed">
            Per aspera ad astra
          </p>
          <p className="text-lg text-amber-400 font-light">
            Durch Mühsal zu den Sternen
          </p>
          <div className="flex justify-center mt-8">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent" />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
