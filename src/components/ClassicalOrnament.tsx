"use client";

import { motion } from "framer-motion";

interface OrnamentProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  delay?: number;
}

export default function ClassicalOrnament({ position, delay = 0 }: OrnamentProps) {
  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0 rotate-90",
    "bottom-left": "bottom-0 left-0 -rotate-90",
    "bottom-right": "bottom-0 right-0 rotate-180",
  };

  return (
    <motion.div
      className={`absolute ${positionClasses[position]} w-32 h-32 opacity-10 pointer-events-none`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 0.1, scale: 1 }}
      transition={{ duration: 1, delay }}
      viewport={{ once: true }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path
          d="M 0 0 Q 25 0 50 25 Q 75 50 100 50 Q 75 50 50 75 Q 25 100 0 100 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.3"
          className="text-amber-700"
        />
        <path
          d="M 10 10 Q 30 10 45 30 Q 60 45 75 45 Q 60 45 45 60 Q 30 75 10 75 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.2"
          className="text-amber-600"
        />
        <circle cx="50" cy="50" r="2" fill="currentColor" className="text-amber-700" opacity="0.5" />
      </svg>
    </motion.div>
  );
}
