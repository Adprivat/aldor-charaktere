'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Navigation from '../../../components/serran/Navigation'
import HeroSection from '../../../components/serran/HeroSection'
import Profile from '../../../components/serran/Profile'
import BackToCharactersButton from '../../../components/shared/BackToCharactersButton'

export default function SerranPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0f12] via-[#2b0f1a] to-[#0d0c0d] text-void-100 overflow-x-hidden">
      {/* Zurück-Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/">
          <motion.button
            className="flex items-center gap-2 px-4 py-2 bg-rose-900/30 hover:bg-rose-800/30 border border-rose-400/30 rounded-lg backdrop-blur-sm transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-4 h-4 text-rose-300" />
            <span className="text-rose-300 font-medium">Zurück</span>
          </motion.button>
        </Link>
      </div>

      <BackToCharactersButton
        color={{
          bg: 'bg-rose-900/30',
          hoverBg: 'hover:bg-rose-800/30',
          border: 'border border-rose-400/30',
          text: 'text-rose-300'
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
