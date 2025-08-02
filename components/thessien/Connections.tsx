'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Users, Crown, Shield, Star, Zap, Heart, Sword, Skull, Clock } from 'lucide-react'

const Connections = () => {
  const connections = [
    {
      name: 'Kirin Tor',
      relationship: 'Erzmagier',
      description: 'Die mächtige Magiervereinigung von Dalaran - einst sein Zuhause',
      type: 'fraktion',
      icon: Crown,
      strength: 100,
      color: 'purple'
    },
        {
      name: 'Allianz',
      relationship: 'Verbündeter',
      description: 'Die Allianz, Heimat vieler Völker.',
      type: 'fraktion',
      icon: Crown,
      strength: 75,
      color: 'purple'
    },
        {
      name: 'Horde',
      relationship: 'Verbündeter',
      description: 'Die Horde, Heimat vieler Völker',
      type: 'fraktion',
      icon: Crown,
      strength: 65,
      color: 'purple'
    },
    {
      name: 'Flammen von Arathor',
      relationship: 'Soldling',
      description: 'Sondermiliz zum Schutze Heilsturz',
      type: 'fraktion',
      icon: Shield,
      strength: 85,
      color: 'arcane'
    }
   
  ]

  const getConnectionColor = (type: string) => {
    switch (type) {
      case 'fraktion': return 'text-arcane-400 border-arcane-500'
      case 'ehemals': return 'text-purple-400 border-purple-500'
      case 'verbündete': return 'text-blue-400 border-blue-500'
      case 'mentor': return 'text-purple-400 border-purple-500'
      case 'drachen': return 'text-yellow-400 border-yellow-500'
      case 'neutral': return 'text-gray-400 border-gray-500'
      case 'rival': return 'text-red-400 border-red-500'
      case 'feind': return 'text-red-600 border-red-600'
      case 'mission': return 'text-mystic-400 border-mystic-500'
      default: return 'text-gray-400 border-gray-500'
    }
  }

  return (
    <section className="py-24 relative" id="connections">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-runic text-4xl md:text-6xl magic-text mb-6">
            Verbindungen
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Das Netzwerk aus Allianzen, Freundschaften und Rivalitäten
          </p>
        </motion.div>

        {/* Detailed Connection Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {connections.map((connection, index) => {
            const Icon = connection.icon
            return (
              <motion.div
                key={connection.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <div className={`p-4 bg-black/40 rounded-lg border ${getConnectionColor(connection.type)} hover:border-opacity-100 border-opacity-50 transition-all hover:scale-105`}>
                  <div className="flex items-center mb-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 ${getConnectionColor(connection.type)} bg-opacity-20`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-arcane text-sm font-semibold text-white">
                        {connection.name}
                      </h3>
                      <p className="text-xs text-gray-400">
                        {connection.relationship}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-gray-300 mb-3">
                    {connection.description}
                  </p>

                  {/* Strength Indicator */}
                  <div className="mb-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-gray-500">Verbindungsstärke</span>
                      <span className="text-xs text-arcane-400">{connection.strength}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${connection.strength}%` }}
                        transition={{ duration: 1, delay: index * 0.05 }}
                        className="h-1 bg-gradient-arcane rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 bg-black/60 rounded-2xl border border-arcane-700">
            <h3 className="font-runic text-2xl magic-text mb-4">
              "Macht ohne Verbündete ist nutzlos. Wissen ohne Austausch vergeht."
            </h3>
            <p className="text-gray-400">
              - Thessien über die Wichtigkeit von Allianzen
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Connections
