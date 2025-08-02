'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { User, Star, Shield, Zap, Clock, Book } from 'lucide-react'
import Image from 'next/image'
import CharacterImageCard from './CharacterImageCard'
import TitleCarousel from './TitleCarousel'

const CharacterProfile = () => {
  const stats = [
    { label: 'Hauptmagieschule', value: 'Arkane Magie', icon: Zap, description: 'Manipulation der Realität' },
    { label: 'Rang', value: 'Erzmagier', icon: Star, description: 'Höchster gelehrter Rang im Kirin Tor' },
    { label: 'Fraktion', value: 'Kirin Tor', icon: Shield, description: 'Verbunden mit Flammen von Arathor' },
    { label: 'Spezialisierung', value: 'Chronomantie', icon: Clock, description: 'Zeitlinien & Arkane Strukturmagie' },
    { label: 'Erfahrung', value: 'Kriegsveteran', icon: Book, description: 'Teilnahme an den großen Kriegen Azeroths' },
    { label: 'Titel', value: 'Der Wanderer', icon: User, description: 'Überlebender des Absturzes von Dalaran' },
  ]

  return (
    <section className="py-24 relative" id="profile">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-runic text-4xl md:text-6xl magic-text mb-6">
            Charakterprofil
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Entdecke Thessien, Träger vieler Titel
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Character Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <CharacterImageCard />
          </motion.div>

          {/* Character Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="p-4 bg-black/40 rounded-lg border border-arcane-800 hover:border-arcane-600 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-gradient-arcane rounded-lg flex items-center justify-center group-hover:animate-pulse">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-arcane text-gray-300">{stat.label}</span>
                        </div>
                        <span className="font-runic text-arcane-300 text-lg">{stat.value}</span>
                      </div>
                      <p className="text-xs text-gray-400 ml-14 opacity-0 group-hover:opacity-100 transition-opacity">
                        {stat.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Title Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8"
            >
              <TitleCarousel />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CharacterProfile
