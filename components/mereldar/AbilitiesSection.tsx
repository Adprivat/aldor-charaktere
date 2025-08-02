import React from 'react';
import { motion } from 'framer-motion';

const AbilitiesSection: React.FC = () => {
  const abilities = [
    {
      name: "Aegisschild",
      description: "Ein Bollwerk der Flamme, gewährt Schutz und vermag aber auch den Feind an seinen Mauern verbrennen zu lassen.",
      icon: "🛡️"
    },
    {
      name: "Weihe der Flamme",
      description: "Erholung und Kraftspender für Verbündete, quälender Untergrund für Feinde, die die Kraft der Flamme zu spüren bekommen.",
      icon: "🔥"
    },
    {
      name: "Flammengeschoss",
      description: "Geformt aus arkaner Energie und der Flamme, angetrieben durch die Stärke der Trägerin und deren Glauben. Bringt die Flamme über den Gegner.",
      icon: "💥"
    },
    {
      name: "Waffenverzauberung",
      description: "Die Energie der Flamme versengt Gegner und fügt ihnen Schmerzen zu, wie ein stetiger Nadelstich.",
      icon: "⚡"
    }
  ];

  return (
    <section id="abilities" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-shadow-purple via-obsidian to-lavastone" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-cinzel text-5xl text-flame-gold mb-6">Kernfähigkeiten der Flamme</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-ember to-transparent mx-auto" />
        </motion.div>

        {/* Abilities Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {abilities.map((ability, index) => (
            <motion.div
              key={ability.name}
              className="ability-card bg-lavastone bg-opacity-50 border border-crystal-blue rounded-lg p-8 relative overflow-hidden group hover:border-flame-gold"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-flame-gold to-ember rounded-full flex items-center justify-center text-2xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {ability.icon}
                  </motion.div>
                  <div>
                    <h3 className="font-cinzel text-2xl text-flame-gold">{ability.name}</h3>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-divine-light font-caslon leading-relaxed text-lg">
                {ability.description}
              </p>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-flame-gold opacity-20" />
              
              {/* Floating sparks */}
              {Array.from({ length: 3 }, (_, sparkIndex) => (
                <motion.div
                  key={sparkIndex}
                  className="absolute w-1 h-1 bg-flame-gold rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    y: [0, -15, -25],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: sparkIndex * 0.5,
                    ease: "easeOut"
                  }}
                />
              ))}
            </motion.div>
          ))}
        </motion.div>

        {/* Combat Stats */}
        <motion.div
          className="bg-obsidian bg-opacity-70 border border-flame-gold rounded-lg p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="font-cinzel text-2xl text-flame-gold text-center mb-8">Kampfstärken & Schwächen</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-raleway text-crystal-blue mb-2">Stärken</h4>
              <p className="text-divine-light font-caslon text-sm">
                Hohe Agilität<br/>Hohe Belastbarkeit
              </p>
            </div>
            
            <div className="text-center">
              <h4 className="font-raleway text-ember mb-2">Schwächen</h4>
              <p className="text-divine-light font-caslon text-sm">
                Geringere körperliche Kraft
              </p>
            </div>
            
            <div className="text-center">
              <h4 className="font-raleway text-mystic-gold mb-2">Spezialisierung</h4>
              <p className="text-divine-light font-caslon text-sm">
                Flammenmagie<br/>Schutz & Heilung
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AbilitiesSection;
