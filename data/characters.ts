import { CharacterSummary } from '../types/character';
import { getCharacterTheme } from '@/themes/characterThemes';

export const characters: CharacterSummary[] = [
  {
    id: 'mereldar',
    name: 'Mereldar Glutspeer',
    title: 'Kommandantin • Lampenanzünderin',
    description: 'Arathische Kriegerin und Führerin, die den Wandel ihrer Kultur verkörpert.',
    image: '/images/Kommandantin.jpg',
    theme: 'bg-gradient-to-br from-ember to-flame-gold',
  textColor: 'text-flame-gold',
  pageTheme: getCharacterTheme('mereldar')
  },
  {
    id: 'thessien',
    name: 'Thessien der Wanderer',
    title: 'Erzmagier der Kirin Tor',
    description: 'Mächtiger Magier, spezialisiert auf Zeitmagie und arkane Künste.',
    image: '/images/thessien.jpg',
    theme: 'bg-gradient-to-br from-arcane-600 to-mystic-600',
  textColor: 'text-arcane-300',
  pageTheme: getCharacterTheme('thessien')
  },
  {
    id: 'serran',
    name: 'Serran Vesperan',
    title: 'Lehrling des Arkanen',
    description: 'Eine junge Elfe auf der Suche nach den Geheimnissen der Magie.',
    image: '/SerranPortrait.png',
    theme: 'bg-gradient-to-br from-mystic-600 to-arcane-600',
  textColor: 'text-mystic-300',
  pageTheme: getCharacterTheme('serran')
  },
  {
    id: 'weslej',
    name: 'Sir Weslej Eichbaum',
    title: 'Templer der Kirche des Lichts',
    description: 'Ritterlicher Richter des Lichts – halb Krieger, halb Inquisitor.',
    image: '/WeslejPortrait.png',
    theme: 'bg-gradient-to-br from-void-800 to-flame-600',
  textColor: 'text-flame-gold',
  pageTheme: getCharacterTheme('weslej')
  },
  {
    id: 'sarelan',
    name: 'Sarelan Feuersturm',
    title: 'Magister von Quel’Thalas',
    description: 'Pyromant, Runenmeister und Gelehrter des Feuers – Wohlstand durch Wissen.',
    image: '/sarelan_portrait.png',
    theme: 'bg-gradient-to-br from-red-700 via-amber-600 to-red-900',
    textColor: 'text-amber-300',
    pageTheme: getCharacterTheme('sarelan')
  }
];

export const getCharacterById = (id: string) => characters.find(c => c.id === id);
