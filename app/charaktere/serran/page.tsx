'use client'

import React from 'react'
import Navigation from '../../../components/serran/Navigation'
import HeroSection from '../../../components/serran/HeroSection'
import Profile from '../../../components/serran/Profile'
import CharacterLayout from '../../../components/shared/CharacterLayout'
import { getCharacterById } from '@/data/characters'

export default function SerranPage() {
  const character = getCharacterById('serran');
  const theme = character?.pageTheme;
  return (
    <CharacterLayout
      backgroundClassName={theme?.background || 'bg-gradient-to-b from-[#1a0f12] via-[#2b0f1a] to-[#0d0c0d]'}
      backColor={theme?.backButton || {
        container: 'bg-rose-900/30',
        hover: 'hover:bg-rose-800/30',
        border: 'border-rose-400/30',
        text: 'text-rose-300'
      }}
    >
      <Navigation />
      <main className="pt-16">
        <HeroSection />
        <Profile />
      </main>
    </CharacterLayout>
  )
}
