'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Zap } from 'lucide-react'
import Image from 'next/image'
import { asset } from '@/utils/asset'

interface ParticleData {
  left: number
  top: number
  delay: number
}

const HeroSection = () => {
  const [currentQuote, setCurrentQuote] = useState(0)
  const [particles, setParticles] = useState<ParticleData[]>([])
  const [isMounted, setIsMounted] = useState(false)
  
  const quotes = [
    "Die Zeit ist keine Linie. Sie ist ein Meer – und ich setze die Segel.",
    "In den Runen liegt die Wahrheit des Universums verborgen.",
    "Ich habe Welten sterben sehen. Und Helden fallen.",
    "Magie ist Ordnung.",
    "Wer auffallen will, muss der Welt im Wege stehen."
  ]

  useEffect(() => {
    // Generate deterministic particle data only on client side
    const generateParticles = (): ParticleData[] => {
      return [...Array(20)].map((_, i) => {
        // Use index-based pseudo-random generation for consistency
        const seed = i * 987654321
        const pseudoRandom1 = ((seed * 9301 + 49297) % 233280) / 233280
        const pseudoRandom2 = (((seed + 1) * 9301 + 49297) % 233280) / 233280
        const pseudoRandom3 = (((seed + 2) * 9301 + 49297) % 233280) / 233280
        
        return {
          left: pseudoRandom1 * 100,
          top: pseudoRandom2 * 100,
          delay: pseudoRandom3 * 8
        }
      })
    }

    setParticles(generateParticles())
    setIsMounted(true)

    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [quotes.length])

  const handleSpellCast = () => {
    // Triggert eine dramatische Animation mit mehreren Effekten
    const element = document.querySelector('.spell-effect')
    const heroSection = document.querySelector('#hero')
    const bodyElement = document.body
    
    // Button-Effekt
    element?.classList.add('animate-pulse-slow', 'spell-casting')
    
    // Webseite rotieren - Chronowechsel-Effekt
    bodyElement.classList.add('chronowechsel-rotation')
    
    // Vollbild-Flash-Effekt
    const flashOverlay = document.createElement('div')
    flashOverlay.className = 'fixed inset-0 bg-arcane-400/30 z-40 pointer-events-none'
    flashOverlay.style.animation = 'flash-spell 0.8s ease-out'
    document.body.appendChild(flashOverlay)
    
    // Portal-Effekt verstärken
    heroSection?.classList.add('portal-boost')
    
    // Chronon-Partikel verstärken
    const chronons = document.querySelectorAll('.chronon-particles')
    chronons.forEach(particle => {
      particle.classList.add('chronon-boost')
    })
    
    // Alle Effekte nach Animation entfernen
    setTimeout(() => {
      element?.classList.remove('animate-pulse-slow', 'spell-casting')
      heroSection?.classList.remove('portal-boost')
      bodyElement.classList.remove('chronowechsel-rotation')
      chronons.forEach(particle => {
        particle.classList.remove('chronon-boost')
      })
      document.body.removeChild(flashOverlay)
    }, 3000) // Längere Animation für die Rotation
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" id="hero">
      {/* Portal Background Effect */}
      <div className="absolute inset-0 portal-entrance"></div>
      
      {/* Chronon Particles */}
      {isMounted && particles.map((particle, i) => (
        <div
          key={i}
          className="chronon-particles"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="rune-circle w-32 h-32 mx-auto mb-8 flex items-center justify-center relative">
              {/* Magischer Ring-Effekt */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-arcane-500/20 via-mystic-500/20 to-void-500/20 animate-spin-slow"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-l from-arcane-400/10 via-transparent to-mystic-400/10 animate-pulse"></div>
              
              {/* Schwebende Runen um das Siegel */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-arcane-400 rounded-full animate-ping"
                  style={{
                    top: `${50 + 35 * Math.cos((i * Math.PI * 2) / 8)}%`,
                    left: `${50 + 35 * Math.sin((i * Math.PI * 2) / 8)}%`,
                    animationDelay: `${i * 0.2}s`,
                    transform: 'translate(-50%, -50%)'
                  }}
                />
              ))}
              
              {/* Siegel Container */}
              <div className="w-20 h-20 rounded-full overflow-hidden relative z-[60] border-2 border-arcane-400/80 shadow-lg shadow-arcane-500/50 bg-black/20 backdrop-blur-sm">
                <Image 
                  src={asset('/images/Siegel.jpg')} 
                  alt="Thessien's Siegel" 
                  width={80} 
                  height={80} 
                  className="w-full h-full object-cover" 
                />
                {/* Innerer Glanz-Effekt */}
                <div className="absolute inset-0 bg-gradient-to-br from-arcane-400/20 via-transparent to-mystic-400/20 rounded-full"></div>
              </div>
            </div>
            
            <h1 className="font-runic text-6xl md:text-8xl mb-4 magic-text">
              THESSIEN
            </h1>
            <div className="font-arcane text-2xl md:text-3xl text-mystic-300 mb-2">
              DER WANDERER
            </div>
            <div className="text-lg md:text-xl text-arcane-200 opacity-80">
              Erzmagier des Kirin Tor
            </div>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-12"
        >
          <p className="font-arcane text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            <span className="text-mystic-400">Kirin Tor</span> • 
            <span className="text-arcane-400 mx-2">Wanderer</span> • 
            <span className="text-void-400">Suchender</span>
          </p>
        </motion.div>

        {/* Rotating Quotes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mb-12 h-20"
        >
          <motion.p
            key={currentQuote}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="font-arcane text-lg md:text-xl text-mystic-200 italic max-w-3xl mx-auto"
          >
            &ldquo;{quotes[currentQuote]}&rdquo;
          </motion.p>
        </motion.div>

        {/* Spell Cast Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mb-16"
        >
          <button
            onClick={handleSpellCast}
            className="spell-effect group relative inline-flex items-center px-8 py-4 bg-gradient-arcane rounded-full font-runic text-lg font-semibold text-white hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-arcane-500/50"
            style={{ cursor: 'default' }}
          >
            <Zap className="w-6 h-6 mr-3 group-hover:animate-spin" />
            Zauber wirken
            <Sparkles className="w-6 h-6 ml-3 group-hover:animate-pulse" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
