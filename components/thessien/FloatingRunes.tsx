'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface RuneData {
  rune: string
  delay: number
  left: number
  size: number
}

// Move runes array outside component to avoid dependency issues
const runes = ['ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ', 'ᚺ', 'ᚾ', 'ᛁ', 'ᛃ', 'ᛇ', 'ᛈ', 'ᛉ', 'ᛊ', 'ᛏ', 'ᛒ', 'ᛖ', 'ᛗ', 'ᛚ', 'ᛜ', 'ᛞ', 'ᛟ']

const FloatingRunes = () => {
  const [runeData, setRuneData] = useState<RuneData[]>([])
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Generate deterministic rune data only on client side
    const generateRuneData = (): RuneData[] => {
      return [...Array(30)].map((_, i) => {
        // Use index-based pseudo-random generation for consistency
        const seed = i * 123456789
        const pseudoRandom1 = ((seed * 9301 + 49297) % 233280) / 233280
        const pseudoRandom2 = (((seed + 1) * 9301 + 49297) % 233280) / 233280
        const pseudoRandom3 = (((seed + 2) * 9301 + 49297) % 233280) / 233280
        const pseudoRandom4 = (((seed + 3) * 9301 + 49297) % 233280) / 233280
        
        return {
          rune: runes[Math.floor(pseudoRandom1 * runes.length)],
          delay: pseudoRandom2 * 20,
          left: pseudoRandom3 * 100,
          size: pseudoRandom4 * 20 + 20
        }
      })
    }

    setRuneData(generateRuneData())
    setIsMounted(true)
  }, [])

  // Render nothing during SSR to avoid hydration mismatch
  if (!isMounted) {
    return <div className="floating-runes"></div>
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {runeData.map((data, i) => (
        <motion.div
          key={i}
          className="absolute text-arcane-400/20 select-none"
          style={{
            left: `${data.left}%`,
            fontSize: `${data.size}px`,
          }}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{ 
            y: '-100vh', 
            opacity: [0, 1, 1, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: 20 + data.delay,
            delay: data.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {data.rune}
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingRunes
