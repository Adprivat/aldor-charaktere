'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// Mereldar-spezifische Komponenten
import HeroSection from '../../../components/mereldar/HeroSection';
import AboutSection from '../../../components/mereldar/AboutSection';
import EquipmentSection from '../../../components/mereldar/EquipmentSection';
import AbilitiesSection from '../../../components/mereldar/AbilitiesSection';
import AlliesSection from '../../../components/mereldar/AlliesSection';
import Navigation from '../../../components/mereldar/Navigation';
import Footer from '../../../components/mereldar/Footer';
import ParticleBackground from '../../../components/mereldar/ParticleBackground';
import ScrollProgress from '../../../components/mereldar/ScrollProgress';
import LoadingScreen from '../../../components/mereldar/LoadingScreen';
import CursorTrail from '../../../components/mereldar/CursorTrail';
import { ThemeProvider } from '../../../components/mereldar/contexts/ThemeContext';

export default function MereldarPage() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-obsidian text-divine-light overflow-x-hidden">
        {/* Zurück-Button */}
        <div className="fixed top-4 left-4 z-50">
          <Link href="/">
            <motion.button
              className="flex items-center gap-2 px-4 py-2 bg-ember/20 hover:bg-ember/30 border border-flame-gold/30 rounded-lg backdrop-blur-sm transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-4 h-4 text-flame-gold" />
              <span className="text-flame-gold font-medium">Zurück</span>
            </motion.button>
          </Link>
        </div>

        <LoadingScreen />
        <CursorTrail color="#ffa726" size={6} trailLength={12} />
        <ParticleBackground />
        <Navigation />
        
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <HeroSection />
          <AboutSection />
          <EquipmentSection />
          <AbilitiesSection />
          <AlliesSection />
        </motion.main>
        
        <Footer />
        <ScrollProgress />
      </div>
    </ThemeProvider>
  );
}
