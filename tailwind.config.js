/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Gemeinsame Fantasy-Farbpalette
        'mystic': {
          50: '#faf5ff', 100: '#f3e8ff', 200: '#e9d5ff', 300: '#d8b4fe', 400: '#c084fc',
          500: '#a855f7', 600: '#9333ea', 700: '#7c3aed', 800: '#6b21a8', 900: '#581c87',
        },
        'flame': {
          50: '#fff7ed', 100: '#ffedd5', 200: '#fed7aa', 300: '#fdba74', 400: '#fb923c',
          500: '#f97316', 600: '#ea580c', 700: '#c2410c', 800: '#9a3412', 900: '#7c2d12',
        },
        'arcane': {
          50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd', 400: '#60a5fa',
          500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8', 800: '#1e40af', 900: '#1e3a8a',
        },
        'void': {
          50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1', 400: '#94a3b8',
          500: '#64748b', 600: '#475569', 700: '#334155', 800: '#1e293b', 900: '#0f172a',
        },
        // Mereldar-spezifisch
        'obsidian': '#0d0d0d', 'lavastone': '#2d1b1b', 'shadow-purple': '#4a1a4a',
        'divine-light': '#fff3e0', 'flame-gold': '#ffa726', 'ember': '#ff6b35',
        'crimson': '#dc143c', 'crystal-blue': '#4fc3f7', 'mystic-gold': '#ffb347',
      },
      fontFamily: {
        'fantasy': ['Cinzel', 'serif'],
        'elegant': ['Libre Caslon Text', 'serif'],
        'modern': ['Raleway', 'sans-serif'],
        'cinzel': ['Cinzel', 'serif'],
        'caslon': ['Libre Caslon Text', 'serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'runic': ['Cinzel', 'serif'],
        'arcane': ['Libre Caslon Text', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-fantasy': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'gradient-arcane': 'linear-gradient(135deg, #a855f7, #3b82f6)',
      },
    },
  },
  plugins: [],
}
