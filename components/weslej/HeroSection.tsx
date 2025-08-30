'use client'

import { motion } from 'framer-motion'
const bp = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Hintergrund */}
      <div className="absolute inset-0 bg-gradient-to-b from-void-900 via-void-800 to-void-900" />

      {/* Dezentes Glühen wie Sigille des Lichts */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-flame-gold/70 rounded-full"
          style={{ left: `${10 + i * 10}%`, top: `${20 + (i % 4) * 18}%` }}
          animate={{ y: [-10, 10, -10], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <div className="relative z-10 text-center px-6 pt-20">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="w-44 h-44 md:w-52 md:h-52 mx-auto rounded-full p-[3px] bg-gradient-to-br from-flame-gold via-void-200 to-flame-400">
            <div className="w-full h-full rounded-full overflow-hidden bg-void-800">
              <img
                src={bp + '/WeslejPortrait.png'}
                alt="Sir Weslej Eichbaum"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <h1 className="font-fantasy text-5xl md:text-6xl font-bold text-void-100 drop-shadow-[0_0_20px_rgba(255,167,38,0.35)]">
          Sir Weslej Eichbaum
        </h1>
        <p className="mt-4 text-flame-gold/90 text-xl">
          Templer der Kirche des Lichts
        </p>
      </div>
    </section>
  )
}
