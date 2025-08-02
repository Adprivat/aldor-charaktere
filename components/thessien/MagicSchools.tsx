'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Zap, Flame, Snowflake, Leaf, Skull, Heart } from 'lucide-react'

const MagicSchools = () => {
  const [hoveredSchool, setHoveredSchool] = useState<string | null>(null)

  const magicSchools = [
    {
      name: 'Transmutation',
      description: 'Verwandlung von Materie und Energie - Thessiens Meisterdisziplin',
      icon: Zap,
      color: 'arcane',
      spells: ['Polymorph', 'Energieumwandlung', 'Materieverwandlung', 'Chronomantie'],
      mastery: 100,
      isMain: true
    },
    {
      name: 'Bannung',
      description: 'Schutz, Barrieren und magische Abwehr',
      icon: Heart,
      color: 'mystic',
      spells: ['Bannkreise', 'Magische Schutze', 'Magie aufheben'],
      mastery: 80,
      
    },
    {
      name: 'Illusion',
      description: 'Manipulation der Wahrnehmung und Täuschungsmagie',
      icon: Snowflake,
      color: 'void',
      spells: ['Unsichtbarkeit', 'Spiegelbilder', 'Gedankenverwirrung'],
      mastery: 65
    },
    {
      name: 'Nekromantie',
      description: 'Magie des Todes und der Lebenskraft',
      icon: Skull,
      color: 'purple',
      spells: ['Lebensentzug', 'Untoten-Kontrolle', 'Schaffung Untoter'],
      mastery: 65
    },
    {
      name: 'Verzauberung',
      description: 'Beeinflussung von Geist und Willen',
      icon: Heart,
      color: 'red',
      spells: ['Gedankenkontrolle', 'Charme-Zauber', 'Willensbruch'],
      mastery: 60
    },
    {
      name: 'Weissagung',
      description: 'Erkundung von Vergangenheit, Gegenwart und Zukunft',
      icon: Leaf,
      color: 'blue',
      spells: ['Hellsicht', 'Wahrsagerei', 'Arkane Spurensuche und Analyse'],
      mastery: 55
    },
    {
      name: 'Beschwörung',
      description: 'Herbeirufen von Kreaturen und Objekten',
      icon: Flame,
      color: 'orange',
      spells: ['Beschwörung von Kreaturen', 'Beschwörung von Gegenständen'],
      mastery: 50
    },
    {
      name: 'Hervorrufung',
      description: 'Manipulation von Elementen und Energie',
      icon: Flame,
      color: 'orange',
      spells: ['Feuerball', 'Eissturm', 'Arkanschlag'],
      mastery: 80
    }
  ]

  return (
    <section className="py-24 relative" id="magic">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-runic text-4xl md:text-6xl magic-text mb-6">
            Magieschulen
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Thessiens arkane Künste
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {magicSchools.map((school, index) => {
            const Icon = school.icon
            return (
              <motion.div
                key={school.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
                onMouseEnter={() => setHoveredSchool(school.name)}
                onMouseLeave={() => setHoveredSchool(null)}
              >
                <div className={`relative p-6 bg-black/40 rounded-xl border transition-all duration-300 hover:scale-105 ${
                  school.isMain ? 'border-arcane-500 bg-arcane-900/20 ring-2 ring-arcane-500/30' :
                  'border-gray-700 hover:border-arcane-500'
                }`}>
                  {/* Badge for Main School */}
                  {school.isMain && (
                    <div className="absolute top-3 right-3 px-2 py-1 text-xs rounded-full bg-arcane-500 text-white">
                      Hauptschule
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse ${
                    school.isMain ? 'bg-gradient-arcane' : 'bg-gradient-void'
                  }`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* School Name */}
                  <h3 className={`font-runic text-xl mb-2 ${
                    school.isMain ? 'text-arcane-300' : 'text-gray-300'
                  }`}>
                    {school.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4">
                    {school.description}
                  </p>

                  {/* Mastery Level */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-500">Meisterschaft</span>
                      <span className="text-xs text-arcane-400">{school.mastery}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${school.mastery}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-2 bg-gradient-arcane rounded-full"
                      />
                    </div>
                  </div>

                  {/* Spells */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: hoveredSchool === school.name ? 1 : 0,
                      height: hoveredSchool === school.name ? 'auto' : 0
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-gray-700">
                      <h4 className="text-xs text-gray-500 mb-2">Beispiele:</h4>
                      <div className="space-y-1">
                        {school.spells.map((spell) => (
                          <div key={spell} className="text-xs text-mystic-300">
                            • {spell}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-arcane opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default MagicSchools
