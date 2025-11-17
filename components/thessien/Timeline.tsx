'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Users, Crown } from 'lucide-react'
import Image from 'next/image'

const Timeline = () => {
  const timelineEvents = [
    {
    year: 'Geburtsjahre',
    title: 'Geburt in Dalaran',
    description: 'Thessien wird in einer nichtmagischen Familie geboren, die eng mit den Kirin Tor verbunden ist.',
    icon: Crown,
    category: 'Herkunft',
    image: null
  },
  {
    year: 'Frühe Jahre',
    title: 'Zu den Kirin Tor',
    description: 'Seine Familie übergibt Thessien an die Kirin Tor',
    icon: Crown,
    category: 'Ausbildung',
    image: null
  },
  {
    year: 'Teenagerzeit (≈ 12–15)',
    title: 'Junger Schüler',
    description: 'Thessien macht als strebsamer, motivierter und auch ehrgeiziger Schüler von sich Reden',
    icon: Crown,
    category: 'Ausbildung',
    image: '/images/schule.png'
  },
  {
    year: 'Junge Jahre (≈ 18)',
    title: 'Beobachtung der Bedrohung durch die Brennende Legion',
    description: 'Teilnahme an Expeditionen, um frühere Invasionen der Legion zu studieren ',
    icon: Crown,
    category: 'Forschung',
    image: null
  },
  {
    year: 'Anfang 20er',
    title: 'Erste Teilnahme an einer Allianz-Mission',
    description: 'Reise durch Azeroth, Unterstützung bei der Untersuchung verhüllter dämonischer Aktivitäten.',
    icon: Crown,
    category: 'Aktion',
    image: null
  },
  {
    year: '≈ 25',
    title: 'Forschungsreise Scherbenwelt',
    description: 'Aktive Teilnahme an Expeditionen zur Scherbenwelt, Kampf im schwarzen Tempel',
    icon: Crown,
    category: 'Kampf',
    image: null
  },
  {
    year: '≈ 27',
    title: "Studienreise nach Quel'Thalas",
    description: 'Erforschung der arkanen Geschichte der Hochelfen ',
    icon: Crown,
    category: 'Forschung',
    image: null
  },
  {
    year: '≈ 30',
    title: 'Nordend-Kampagne',
    description: 'Erforschung des Nexus, Krieg um die Eiskronenzitadelle und Unterstützung der Allianz & Horde gegen den Lichkönig.',
    icon: Crown,
    category: 'Forschung',
    image: '/images/ThessienSchatten.png'
  },
  {
    year: '≈ 32',
    title: 'Studie der Geißel im ehemaligen Lordaeron',
    description: 'Spurensuche nach nekrotischen Energien nach dem Fall Arthas’ ',
    icon: Crown,
    category: 'Forschung',
    image: null
  },
  {
    year: '≈ 33',
    title: 'Beförderung zum Erzmagier',
    description: 'Aufgrund seiner Leistungen und Befähigungen wird Thessien in den Rang eines Erzmagiers erhoben.',
    icon: Crown,
    category: 'Ausbildung',
    image: '/images/ThessienErzmagier.png'
  },
  {
    year: '≈ 34',
    title: 'Mission Draenor',
    description: 'Erste Kontakte mit Chronomantie ',
    icon: Crown,
    category: 'Forschung',
    image: null
  },
  {
    year: '≈ 36',
    title: 'Kampf gegen die Brennende Legion (Legion-Expedition)',
    description: 'Kampf der Kirin Tor gegen die Legion während der Invasion von Argus.',
    icon: Crown,
    category: 'Kampf',
    image: '/images/argus.png'
  },
  {
    year: '≈ 38',
    title: 'Forschungsreise Boralus',
    description: 'Forschung in und um Boralus',
    icon: Crown,
    category: 'Forschung',
    image: null
  },
  {
    year: '≈ 42+',
    title: 'Studium auf den Dracheninseln',
    description: 'Erforschung der Dracheninseln',
    icon: Crown,
    category: 'Forschung',
    image: '/images/dracheninseln.png'
  },
   {
      year: 'Gegenwart',
      title: 'Die Flamme',
      description: 'Nach dem Sturze Dalarans unterstützt er die Arathi.',
      icon: Users,
      category: 'Aktuelle Mission',
      image: '/images/ThessienFlamme.png'
    }
  ]

  return (
    <section className="py-24 relative" id="timeline">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-runic text-4xl md:text-6xl magic-text mb-6">
            Abenteuer-Timeline
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Eine Reise durch Warcraft
          </p>
        </motion.div>

        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-arcane-500 via-mystic-500 to-void-500 h-full"></div>

          <div className="space-y-16">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-black/40 p-6 rounded-xl border border-gray-700 hover:border-arcane-500 transition-colors group">
                      {/* Event Image - nur anzeigen wenn vorhanden */}
                      {event.image && (
                        <div className="mb-4 rounded-lg overflow-hidden">
                          <Image
                            src={event.image}
                            alt={event.title}
                            width={400}
                            height={300}
                            className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      )}
                      
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-gradient-arcane rounded-lg flex items-center justify-center mr-4 group-hover:animate-pulse">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <span className="text-sm text-arcane-400 font-runic">{event.category}</span>
                          <h3 className="font-arcane text-xl text-white">{event.title}</h3>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-3">{event.description}</p>
                      
                      <div className="text-sm text-mystic-400 font-runic">
                        {event.year}
                      </div>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="relative z-10 w-2/12 flex justify-center">
                    <div className="w-6 h-6 bg-gradient-arcane rounded-full border-4 border-black shadow-2xl">
                      <div className="w-full h-full bg-gradient-arcane rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="w-full md:w-5/12"></div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 bg-black/60 rounded-2xl border border-arcane-700">
            <h3 className="font-runic text-2xl magic-text mb-4">
              &ldquo;Zeit ist ein Fluss, und ich bin sowohl der Strom als auch der Steuermann.&rdquo;
            </h3>
            <p className="text-gray-400 text-lg">
              - Thessien der Wanderer
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline
