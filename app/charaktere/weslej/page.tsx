'use client'

import React from 'react'
import CharacterLayout from '../../../components/shared/CharacterLayout'
import { getCharacterById } from '@/data/characters'

import Navigation from '../../../components/weslej/Navigation'
import HeroSection from '../../../components/weslej/HeroSection'
import Profile from '../../../components/weslej/Profile'
// Back button handled centrally

export default function WeslejPage() {
  const character = getCharacterById('weslej');
  const theme = character?.pageTheme;
  return (
    <CharacterLayout
      backgroundClassName={theme?.background || 'bg-gradient-to-b from-void-900 via-void-800 to-void-900'}
      backColor={theme?.backButton || {
        container: 'bg-void-800/40',
        hover: 'hover:bg-void-700/40',
        border: 'border-flame-400/30',
        text: 'text-flame-gold'
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
