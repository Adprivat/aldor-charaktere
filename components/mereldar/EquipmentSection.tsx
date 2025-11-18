import React from 'react';
import { motion } from 'framer-motion';
import { asset } from '@/utils/asset';

interface EquipmentItem {
  name: string;
  type: string;
  description: string;
  rarity: 'legendary' | 'epic' | 'rare' | 'uncommon' | 'common';
  icon: string;
  image?: string; // Optional image path from public folder
}

const EquipmentSection: React.FC = () => {
  const equipment: EquipmentItem[] = [
    {
      name: "Der Glutspeer",
      type: "Primärwaffe",
      description: "Ein Stück arathischer Schmiedekunst, bereits im Reich gefertigt. Die unzähligen Scharten zeigen die Spuren der Kämpfe. Die Flamme umspielt die Waffe und lodert vor Kraft.",
      rarity: "legendary",
      icon: "🔥",
  image: "/images/Glutspeer.png" // Bild aus images Ordner
    },
    {
      name: "Arathische Rüstung", 
      type: "Rüstung",
      description: "Besticht durch Schlichtheit in den Farben des Imperiums. Beige und Rot, Platte trifft auf festes Leder und geweihten Stoff. Der Helm zeigt die Krone der Flamme.",
      rarity: "epic",
      icon: "🛡️",
  image: "/images/Ruestung.png" // Bild im images Ordner
    },
    {
      name: "Arathische Runen der Flamme",
      type: "Verzauberung",
      description: "Eingelassen und durch die Flamme fast diffus pulsierend an den Schulterstücken. Sie schützen die Trägerin und verleihen die Gewissheit: Die Flamme führt sie.",
      rarity: "rare",
      icon: "✨",
      image: undefined // Kein Bild - Emoji wird verwendet
    },
    {
      name: "Geweihter Zunderkasten",
      type: "Relikt",
      description: "Ein einfacher Kasten aus Holz, beschlagen mit dem Symbol der Flamme. Das Symbol, dass es nur einen Funkenschlag benötigt, die Flamme selbst in der Dunkelheit zu führen.",
      rarity: "uncommon",
      icon: "📦",
      image: undefined // Kein Bild - Emoji wird verwendet
    },
    {
      name: "Glutklinge",
      type: "Sekundärwaffe", 
      description: "Ein leichter Einhänder, dessen Parierstange das Symbol der Flamme aufgreift. Die Form erinnert an die Schmieden von Quel'thalas. Mehr eine Erinnerung als eine Kampfwaffe.",
      rarity: "rare",
      icon: "⚔️",
      image: undefined // Kein Bild - Emoji wird verwendet
    },
    {
      name: "Erinnerungsphiole",
      type: "Erinnerung",
      description: "Eine Phiole an einem Lederband, in ihr Sand. Eine Erinnerung, das Wissen - man kämpft nicht allein.",
      rarity: "rare",
      icon: "🔮",
  image: "images/strand.png" // Bild im images Ordner
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'flame-gold';
      case 'epic': return 'mystic-gold';
      case 'rare': return 'crystal-blue';
      case 'uncommon': return 'ember';
      default: return 'divine-light';
    }
  };

  return (
    <section id="equipment" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-lavastone via-shadow-purple to-obsidian" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-cinzel text-5xl text-flame-gold mb-6">Ausrüstung & Symbole der Arathi</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-ember to-transparent mx-auto" />
        </motion.div>
        
        {/* Equipment Grid */}
        <motion.div 
          className="equipment-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {equipment.map((item, index) => (
            <motion.div
              key={item.name}
              className="equipment-card bg-lavastone bg-opacity-50 border border-ember rounded-lg p-6 text-center group hover:border-flame-gold hover:bg-opacity-70 hover:shadow-2xl relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              {/* Rarity Indicator */}
              <div className={`absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-${getRarityColor(item.rarity)}`} />
              
              {/* Equipment Icon */}
              <motion.div 
                className={`equipment-icon w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-${getRarityColor(item.rarity)} to-ember rounded-lg flex items-center justify-center text-4xl animate-glow relative overflow-hidden`}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Tiny floating sparks on hover */}
                {Array.from({ length: 4 }, (_, sparkIndex) => (
                  <motion.div
                    key={sparkIndex}
                    className="absolute w-0.5 h-0.5 bg-flame-gold rounded-full opacity-0 group-hover:opacity-100"
                    animate={{
                      y: [0, -20, -30],
                      x: [(sparkIndex - 2) * 5, (sparkIndex - 2) * 8, (sparkIndex - 2) * 3],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: sparkIndex * 0.2,
                      ease: "easeOut"
                    }}
                  />
                ))}
                
                {/* Render image if available, otherwise emoji */}
                {item.image ? (
                  <img
                    src={asset(item.image)}
                    alt={item.name}
                    className="w-full h-full object-contain rounded-lg"
                  />
                ) : (
                  <motion.span
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {item.icon}
                  </motion.span>
                )}
              </motion.div>
              
              {/* Equipment Info */}
              <h3 className={`font-cinzel text-2xl text-${getRarityColor(item.rarity)} mb-2`}>
                {item.name}
              </h3>
              <p className="text-mystic-gold text-sm font-raleway mb-4">{item.type}</p>
              <p className="font-caslon text-divine-light mb-4 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Equipment Stats */}
        <motion.div
          className="mt-16 bg-obsidian bg-opacity-70 border border-flame-gold rounded-lg p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="font-cinzel text-2xl text-flame-gold text-center mb-8">Kampfausrüstung</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-raleway text-crystal-blue mb-2">Bewaffnung</h4>
              <p className="text-divine-light font-caslon text-sm">
                Schwert, Speer und Schild
              </p>
            </div>
            
            <div className="text-center">
              <h4 className="font-raleway text-ember mb-2">Kampfstil</h4>
              <p className="text-divine-light font-caslon text-sm">
                Arathische Kriegskunst<br/>Flammenmagie
              </p>
            </div>
            
            <div className="text-center">
              <h4 className="font-raleway text-flame-gold mb-2">Tradition</h4>
              <p className="text-divine-light font-caslon text-sm">
                Imperiumstreue<br/>Flammenhüter
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EquipmentSection;
