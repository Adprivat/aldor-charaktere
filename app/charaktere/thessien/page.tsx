'use client'

import React from 'react';

// Thessien-spezifische Komponenten
import HeroSection from '../../../components/thessien/HeroSection';
import CharacterProfile from '../../../components/thessien/CharacterProfile';
import Timeline from '../../../components/thessien/Timeline';
import MagicSchools from '../../../components/thessien/MagicSchools';
import Artifacts from '../../../components/thessien/Artifacts';
import Connections from '../../../components/thessien/Connections';
import Navigation from '../../../components/thessien/Navigation';
import { getCharacterById } from '@/data/characters';
import FloatingRunes from '../../../components/thessien/FloatingRunes';
import CharacterLayout from '../../../components/shared/CharacterLayout'

export default function ThessienPage() {
  const character = getCharacterById('thessien');
  const theme = character?.pageTheme;

  return (
    <CharacterLayout
      backgroundClassName={theme?.background || 'bg-gradient-to-br from-void-900 via-arcane-900 to-mystic-900'}
      backColor={theme?.backButton || {
        container: 'bg-arcane-800/20',
        hover: 'hover:bg-arcane-700/30',
        border: 'border-arcane-400/30',
        text: 'text-arcane-300'
      }}
    >
      <FloatingRunes />
      <Navigation />
      <main className="pt-16">
        <HeroSection />
        <CharacterProfile />
        <Timeline />
        <MagicSchools />
        <Artifacts />
        <Connections />
      </main>
    </CharacterLayout>
  );
}