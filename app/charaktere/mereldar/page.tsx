'use client'

import React from 'react';
import { motion } from 'framer-motion';
import CharacterLayout from '../../../components/shared/CharacterLayout';
import { getCharacterById } from '@/data/characters';

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
// Back button now handled by CharacterLayout

export default function MereldarPage() {
  const character = getCharacterById('mereldar');
  const theme = character?.pageTheme;
  return (
    <ThemeProvider>
      <CharacterLayout
        backgroundClassName={theme?.background || 'bg-obsidian'}
        textClassName={theme?.text || 'text-divine-light'}
        backColor={theme?.backButton || {
          container: 'bg-ember/20',
          hover: 'hover:bg-ember/30',
          border: 'border-flame-gold/30',
          text: 'text-flame-gold'
        }}
      >
        <LoadingScreen />
        <CursorTrail color="#ffa726" size={6} trailLength={12} />
        <ParticleBackground />
        <Navigation />
        
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="pt-16"
        >
          <HeroSection />
          <AboutSection />
          <EquipmentSection />
          <AbilitiesSection />
          <AlliesSection />
        </motion.main>
        
        <Footer />
        <ScrollProgress />
      </CharacterLayout>
    </ThemeProvider>
  );
}
