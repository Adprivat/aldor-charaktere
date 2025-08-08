'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, Sparkles, Sword, Crown } from 'lucide-react'

export default function HomePage() {
  const characters = [
    {
      id: 'mereldar',
      name: 'Mereldar Glutspeer',
      title: 'Kommandantin • Lampenanzünderin',
      description: 'Arathische Kriegerin und Führerin, die den Wandel ihrer Kultur verkörpert.',
      image: '/images/Kommandantin.jpg',
      theme: 'bg-gradient-to-br from-ember to-flame-gold',
      textColor: 'text-flame-gold'
    },
    {
      id: 'thessien',
      name: 'Thessien der Wanderer',
      title: 'Erzmagier der Kirin Tor',
      description: 'Mächtiger Magier, spezialisiert auf Zeitmagie und arkane Künste.',
      image: '/images/thessien.jpg',
      theme: 'bg-gradient-to-br from-arcane-600 to-mystic-600',
      textColor: 'text-arcane-300'
    },
    {
      id: 'serran',
      name: 'Serran Vesperan',
      title: 'Lehrling des Arkanen',
      description: 'Eine junge Elfe auf der Suche nach den Geheimnissen der Magie.',
      image: '/SerranPortrait.png', // updated
      theme: 'bg-gradient-to-br from-mystic-600 to-arcane-600',
      textColor: 'text-mystic-300'
    }
  ]

  return (
    <div className="min-h-screen bg-void-900 text-void-100">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-void-900 via-void-800 to-mystic-900/20" />
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-mystic-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-fantasy font-bold text-gradient mb-6">
              Charaktere, die du kennen solltest
            </h1>
            <p className="text-xl md:text-2xl text-void-300 mb-12 max-w-3xl mx-auto">
              Entdecke die Geschichten unserer Helden durch interaktive Charakterprofile
            </p>
          </motion.div>
        </div>
      </section>

      {/* Character Selection */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-fantasy font-bold text-gradient mb-4">
              Unsere Charaktere
            </h2>
            <p className="text-lg text-void-300 max-w-2xl mx-auto">
              Wähle einen Charakter und tauche in seine einzigartige Geschichte ein
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {characters.map((character, index) => (
              <motion.div
                key={character.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={`/charaktere/${character.id}`}>
                  <div className="fantasy-card group-hover:scale-105 transition-transform duration-300 cursor-pointer">
                    {/* Character Image */}
                    <div className="h-48 rounded-lg mb-6 overflow-hidden relative">
                      <img 
                        src={character.image} 
                        alt={character.name}
                        className="w-full h-full object-cover object-center"
                        onError={(e) => {
                          // Fallback to icon if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className={`hidden absolute inset-0 ${character.theme} flex items-center justify-center`}>
                        {character.id === 'mereldar' ? (
                          <Sword className="w-16 h-16 text-white" />
                        ) : (
                          <Crown className="w-16 h-16 text-white" />
                        )}
                      </div>
                    </div>

                    <h3 className={`text-2xl font-fantasy font-bold mb-2 ${character.textColor}`}>
                      {character.name}
                    </h3>
                    
                    <p className="text-void-300 mb-4 font-elegant">
                      {character.title}
                    </p>
                    
                    <p className="text-void-400 mb-6">
                      {character.description}
                    </p>

                    <div className="flex items-center justify-center space-x-2 text-mystic-400 group-hover:text-mystic-300 transition-colors">
                      <span>Profil entdecken</span>
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-void-500">
        <p>&copy; 2025 Aldor Rollenspielgruppe. Alle Charaktere sind Eigentum ihrer Spieler.</p>
      </footer>
    </div>
  )
}
