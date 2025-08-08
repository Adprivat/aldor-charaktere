'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

import Navigation from '../../../components/weslej/Navigation'
import HeroSection from '../../../components/weslej/HeroSection'
import Profile from '../../../components/weslej/Profile'
import BackToCharactersButton from '../../../components/shared/BackToCharactersButton'

export default function WeslejPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-void-900 via-void-800 to-void-900 text-void-100 overflow-x-hidden">
      {/* Zurück-Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/">
          <motion.button
            className="flex items-center gap-2 px-4 py-2 bg-void-800/40 hover:bg-void-700/40 border border-flame-400/30 rounded-lg backdrop-blur-sm transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-4 h-4 text-flame-gold" />
            <span className="text-flame-gold font-medium">Zurück</span>
          </motion.button>
        </Link>
      </div>

      <BackToCharactersButton
        color={{
          bg: 'bg-void-800/40',
          hoverBg: 'hover:bg-void-700/40',
          border: 'border border-flame-400/30',
          text: 'text-flame-gold'
        }}
      />

      <Navigation />

      <main className="pt-16">
        <HeroSection />
        <Profile />
      </main>
    </div>
  )
}
