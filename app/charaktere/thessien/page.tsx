'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// Thessien-spezifische Komponenten
import HeroSection from '../../../components/thessien/HeroSection';
import CharacterProfile from '../../../components/thessien/CharacterProfile';
import Timeline from '../../../components/thessien/Timeline';
import MagicSchools from '../../../components/thessien/MagicSchools';
import Artifacts from '../../../components/thessien/Artifacts';
import Connections from '../../../components/thessien/Connections';
import Navigation from '../../../components/thessien/Navigation';
import FloatingRunes from '../../../components/thessien/FloatingRunes';

export default function ThessienPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-void-900 via-arcane-900 to-mystic-900 text-void-100 overflow-x-hidden">
      {/* Zurück-Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/">
          <motion.button
            className="flex items-center gap-2 px-4 py-2 bg-arcane-800/20 hover:bg-arcane-700/30 border border-arcane-400/30 rounded-lg backdrop-blur-sm transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-4 h-4 text-arcane-300" />
            <span className="text-arcane-300 font-medium">Zurück</span>
          </motion.button>
        </Link>
      </div>

      {/* Floating Runes Background Effect */}
      <FloatingRunes />
      
      <Navigation />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pt-16"
      >
        <HeroSection />
        
        <CharacterProfile />
        <Timeline />
        <MagicSchools />
        <Artifacts />
        <Connections />
      </motion.main>
    </div>
  );
}