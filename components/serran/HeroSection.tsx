'use client'

import { motion } from 'framer-motion'
const bp = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Hintergrund-Gradient in Anlehnung an das Bild-Design */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f12] via-[#2b0f1a] to-[#0d0c0d]" />

      {/* Glühende Partikel (dezent) */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-rose-400/70 rounded-full"
          style={{ left: `${10 + i * 10}%`, top: `${20 + (i % 4) * 18}%` }}
          animate={{ y: [-10, 10, -10], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Titel */}
      <div className="relative z-10 text-center px-6 pt-20">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="w-44 h-44 md:w-52 md:h-52 mx-auto rounded-full p-[3px] bg-gradient-to-br from-rose-400 via-rose-300 to-rose-200">
            <div className="w-full h-full rounded-full overflow-hidden bg-void-800">
              <img
                src={bp + '/Serran.png'}
                alt="Serran Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <h1 className="font-fantasy text-5xl md:text-6xl font-bold text-rose-200 drop-shadow-[0_0_20px_rgba(244,63,94,0.35)]">
          Serran Vesperan
        </h1>
        <p className="mt-4 text-rose-300/80 text-xl">
          Disziplin • Kontrolle • Zurückhaltung
        </p>
      </div>
    </section>
  )
}
