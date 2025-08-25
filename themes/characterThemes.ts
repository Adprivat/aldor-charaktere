import { CharacterThemeRegistry } from '../types/character';

export const characterThemes: CharacterThemeRegistry = {
  mereldar: {
    background: 'bg-obsidian',
    text: 'text-divine-light',
    glowColor: 'flame-gold',
    backButton: {
      container: 'bg-ember/20',
      hover: 'hover:bg-ember/30',
      border: 'border-flame-gold/30',
      text: 'text-flame-gold'
    }
  },
  thessien: {
    background: 'bg-gradient-to-br from-void-900 via-arcane-900 to-mystic-900',
    text: 'text-void-100',
    glowColor: 'arcane-300',
    backButton: {
      container: 'bg-arcane-800/20',
      hover: 'hover:bg-arcane-700/30',
      border: 'border-arcane-400/30',
      text: 'text-arcane-300'
    }
  },
  serran: {
    background: 'bg-gradient-to-b from-[#1a0f12] via-[#2b0f1a] to-[#0d0c0d]',
    text: 'text-void-100',
    glowColor: 'rose-300',
    backButton: {
      container: 'bg-rose-900/30',
      hover: 'hover:bg-rose-800/30',
      border: 'border-rose-400/30',
      text: 'text-rose-300'
    }
  },
  weslej: {
    background: 'bg-gradient-to-b from-void-900 via-void-800 to-void-900',
    text: 'text-void-100',
    glowColor: 'flame-gold',
    backButton: {
      container: 'bg-void-800/40',
      hover: 'hover:bg-void-700/40',
      border: 'border-flame-400/30',
      text: 'text-flame-gold'
    }
  },
  sarelan: {
    background: 'bg-gradient-to-br from-[#280a0a] via-[#3b1010] to-[#120404]',
    text: 'text-amber-100',
    glowColor: 'amber-400',
    panel: 'bg-[#401414]/60 backdrop-blur-sm',
    accentGradient: 'from-amber-500 via-red-600 to-amber-700',
    backButton: {
      container: 'bg-red-900/30',
      hover: 'hover:bg-red-800/30',
      border: 'border-amber-400/30',
      text: 'text-amber-300'
    }
  }
};

export const getCharacterTheme = (id: keyof typeof characterThemes) => characterThemes[id];
