'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Scroll, Crown, Zap, Eye, Shield, Gem, Star, Clock } from 'lucide-react'

const Artifacts = () => {
  const [selectedArtifact, setSelectedArtifact] = useState<number | null>(null)

  // Explicit type definition for empty array
  const artifacts: Array<{
    name: string
    description: string
    rarity: string
    power: string
    origin: string
    icon: any
    effects: string[]
    lore: string
  }> = [
 //   {
 //     name: 'Chronos Kristall',
 //     description: 'Ein uralter Kristall, der die Essenz der Zeit selbst enthält',
 //     rarity: 'Legendär',
 //     power: 'Zeitmanipulation',
 //     origin: 'Ruinen von Dalaran',
 //     icon: Clock,
 //     effects: ['Zeitriss öffnen', 'Temporale Heilung', 'Chronostase'],
 //     lore: 'Dieser Kristall wurde aus den Trümmern Dalarans geborgen, als die Stadt das erste Mal zerstört wurde. Er pulsiert mit temporaler Energie und erlaubt es Thessien, durch die Zeit zu reisen.'
 //   },
    
  ]

  return (
    <section className="py-24 relative" id="artifacts">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-runic text-4xl md:text-6xl magic-text mb-6">
            Artefakte & Relikte
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dalaran ist zerstört. Und Thessiens Habe ebenso...
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artifacts.map((artifact, index) => {
            const Icon = artifact.icon
            const isSelected = selectedArtifact === index

            return (
              <motion.div
                key={artifact.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedArtifact(isSelected ? null : index)}
              >
                <div className={`relative p-6 bg-black/40 rounded-xl border transition-all duration-300 hover:scale-105 ${
                  isSelected ? 'border-arcane-500 bg-arcane-950/20' : 'border-gray-700 hover:border-arcane-600'
                }`}>
                  {/* Rarity Badge */}
                  <div className={`absolute top-4 right-4 px-2 py-1 rounded text-xs font-runic ${
                    artifact.rarity === 'Legendär' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
                    artifact.rarity === 'Artefakt' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' :
                    'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                  }`}>
                    {artifact.rarity}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-arcane rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Name and Description */}
                  <h3 className="font-runic text-xl text-arcane-300 mb-2">
                    {artifact.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {artifact.description}
                  </p>

                  {/* Power and Origin */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-500">Macht:</span>
                      <span className="text-xs text-mystic-400">{artifact.power}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-500">Ursprung:</span>
                      <span className="text-xs text-arcane-400">{artifact.origin}</span>
                    </div>
                  </div>

                  {/* Effects */}
                  <div className="space-y-1">
                    <h4 className="text-xs text-gray-500 mb-2">Effekte:</h4>
                    {artifact.effects.map((effect, effectIndex) => (
                      <div key={effectIndex} className="flex items-center space-x-2">
                        <Star className="w-3 h-3 text-arcane-400" />
                        <span className="text-xs text-gray-300">{effect}</span>
                      </div>
                    ))}
                  </div>

                  {/* Expanded Lore */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isSelected ? 'auto' : 0,
                      opacity: isSelected ? 1 : 0
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 mt-4 border-t border-gray-700">
                      <h4 className="text-sm text-arcane-300 mb-2 font-runic">Geschichte:</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {artifact.lore}
                      </p>
                    </div>
                  </motion.div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-arcane opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Artifact Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 bg-black/60 rounded-2xl border border-arcane-700">
            <Gem className="w-12 h-12 text-arcane-400 mx-auto mb-4 animate-pulse" />
            <h3 className="font-runic text-2xl magic-text mb-4">
              Thessiens Sammlung
            </h3>
            <p className="text-gray-400 max-w-2xl">
              Zeit, neu zu beginnen.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Artifacts
