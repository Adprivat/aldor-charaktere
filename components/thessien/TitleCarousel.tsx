'use client'

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const titles = [
  {
    title: "Erzmagier der Kirin Tor",
    desc: "Einst Lehrer, Verteidiger und Lenker der arkanen Schulen in der Stadt der Magie – Nun ein Wanderer.",
    color: "text-arcane-300",
  },
  {
    title: "Adept der Chonomantie",
    desc: "Ewiger Lehrling der Zeit.",
    color: "text-mystic-300",
  },
  {
    title: "Bewahrer des Violetten Auges",
    desc: "Streiter gegen die Schatten, Jäger der Leere im Namen der Ordnung.",
    color: "text-void-300",
  },
  {
    title: "Träger des heiligen Öls",
    desc: "Die heilige Flamme von Arathor – ein Symbol der Hoffnung und des Lichts.",
    color: "text-yellow-300",
  },
  {
    title: "Verführer der Flamme",
    desc: "Er wandelte am Abgrund – doch kam mit neuer Glut zurück.",
    color: "text-orange-300",
  },
  {
    title: "Chronist der Runen von Dalaran",
    desc: "Hüter des geschriebenen Wissens und Bewahrer der gefährlichsten arkanen Geheimnisse.",
    color: "text-purple-300",
  },
  {
    title: "Magus der zerschlagenen Stadt",
    desc: "Zeuge des Falls und der Wiedergeburt Dalarans – gezeichnet von Verlust und Hoffnung.",
    color: "text-blue-300",
  }
];

export default function TitleCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-black/30 rounded-xl shadow-xl p-6 overflow-hidden border border-mystic-800">
      {/* Particle Effect Background */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.1),transparent_70%)] animate-pulse" />
      
      {/* Magical Particles */}
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-arcane-400 rounded-full animate-ping pointer-events-none"
          style={{
            top: `${20 + i * 20}%`,
            left: `${15 + i * 20}%`,
            animationDelay: `${i * 1.5}s`,
            animationDuration: '3s'
          }}
        />
      ))}

      <h2 className="text-2xl text-center text-mystic-300 mb-6 font-runic tracking-wider z-10 relative">
        Titel & Ehren
      </h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="p-6 bg-gradient-to-br from-black/60 to-black/40 rounded-lg shadow-md hover:shadow-lg transition z-10 relative border border-gray-700"
        >
          <h3 className={`text-xl font-bold font-runic ${titles[index].color} mb-2`}>
            {titles[index].title}
          </h3>
          <p className="text-gray-300 leading-relaxed text-sm">
            {titles[index].desc}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-4 z-10 relative">
        {titles.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 ${
              i === index ? "bg-arcane-400 shadow-lg" : "bg-gray-600 hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
