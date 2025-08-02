import React from 'react';
import { motion } from 'framer-motion';

interface Ally {
  name: string;
  title: string;
  relationship: string;
  description: string;
  faction: string;
  icon: string;
  color: string;
  image?: string; // Optional image path from public folder
}

const AlliesSection: React.FC = () => {
  const allies: Ally[] = [
    {
      name: "Thessien der Wanderer",
      title: "Erzmagier der Kirin Tor",
      relationship: "Besonderes Band",
      description: "Ein mächtiger Magier, dessen Verbindung zu Mereldar über die Pflicht hinausgewachsen ist. Ihre Beziehung symbolisiert den Wandel der Arathi.",
      faction: "Kirin Tor",
      icon: "🧙‍♂️",
      color: "crystal-blue",
      image: 'thessien.jpg' // Bild aus dem public Ordner
    },
    {
      name: "Engracia Morgensinn",
      title: "Quel'dorei",
      relationship: "Enge Vertraute",
      description: "Eine Elfin, deren Eleganz und Weisheit Mereldars Respekt und Freundschaft verdient haben.",
      faction: "Quel'dorei",
      icon: "🌟",
      color: "flame-gold",
      image: undefined // Kein Bild - Emoji wird verwendet
    },
    {
      name: "Reyner Mearzschmydt",
      title: "Arathi-Kamerad",
      relationship: "Langjähriger Gefährte",
      description: "Ein treuer Arathi-Kamerad, der bereits aus dem alten Reich bekannt ist und die Strapazen von Heilsturz geteilt hat.",
      faction: "Arathi",
      icon: "⚔️",
      color: "ember",
      image: undefined // Kein Bild - Emoji wird verwendet
    },
    {
      name: "Pavlov Wyldeisen",
      title: "Arathi-Kamerad", 
      relationship: "Vertrauensvoller Gefährte",
      description: "Ein weiterer Arathi-Veteran, der in den Reihen von Arathis Speer gedient hat und Mereldars Führung respektiert.",
      faction: "Arathi",
      icon: "🛡️",
      color: "ember",
      image: undefined // Kein Bild - Emoji wird verwendet
    },
    {
      name: "Tilda",
      title: "Adoptivtochter",
      relationship: "Tochter",
      description: "Ein arathisches Waisenkind, das Mereldar nach einem schweren Verlust aufgenommen hat. Das Mädchen brachte die Kommandantin zurück ins Leben.",
      faction: "Arathi",
      icon: "👧",
      color: "divine-light",
      image: undefined // Kein Bild - Emoji wird verwendet
    }
  ];

  const quotes = [
    {
      text: "Ihr seht aus als wenn ihr unter Druck zerbrecht wie Glas!",
      context: "In der Hitze des Gefechts"
    },
    {
      text: "Die Flamme führt mich!",
      context: "Schlachtruf der Überzeugung"
    },
    {
      text: "Ich bin eine Arathi!",
      context: "Stolze Herkunftsbekundung"
    },
    {
      text: "Schachzug des Lichts ist kein Spiel, es ist Krieg.",
      context: "Über die Ernsthaftigkeit des Kampfes"
    },
    {
      text: "Die Dunkelheit kann mich nicht brechen, die Flamme brennt in mir.",
      context: "Angesichts der Leere"
    },
    {
      text: "Bei Lothars Landung! Die Fremdlinge sind mir suspekt!",
      context: "Erste Begegnungen mit Außenstehenden"
    },
    {
      text: "Es wird Zeit die Welt zu sehen. Die Arathi verändern sich und ich mich mit ihnen.",
      context: "Erkenntnis des Wandels"
    }
  ];

  return (
    <section id="allies" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-lavastone via-shadow-purple to-obsidian" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-cinzel text-5xl text-flame-gold mb-6">Verbündete & Weggefährten</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-ember to-transparent mx-auto mb-6" />
          <p className="font-caslon text-lg text-divine-light max-w-3xl mx-auto">
            In den Tiefen von Heilsturz hat Mereldar treue Gefährten gefunden - Arathi-Kameraden, 
            fremde Verbündete und eine Familie, die sie sich selbst geschaffen hat.
          </p>
        </motion.div>

        {/* Allies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {allies.map((ally, index) => (
            <motion.div
              key={ally.name}
              className="ally-card bg-lavastone bg-opacity-50 border border-ember rounded-lg p-6 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Faction Indicator */}
              <div className={`absolute top-0 right-0 px-3 py-1 bg-${ally.color} bg-opacity-20 text-${ally.color} text-xs font-raleway rounded-bl-lg`}>
                {ally.faction}
              </div>
              
              {/* Icon */}
              <div className="text-center mb-4">
                {/* Render image if available, otherwise emoji */}
                {ally.image ? (
                  <div className="w-20 h-20 mx-auto mb-2">
                    <img
                      src={`/${ally.image}`}
                      alt={ally.name}
                      className="w-full h-full object-cover rounded-full border-2 border-ember"
                    />
                  </div>
                ) : (
                  <motion.span 
                    className="text-5xl block"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.4 }}
                  >
                    {ally.icon}
                  </motion.span>
                )}
              </div>
              
              {/* Header */}
              <div className="text-center mb-4">
                <h3 className={`font-cinzel text-xl text-${ally.color} mb-1`}>
                  {ally.name}
                </h3>
                <p className="text-mystic-gold text-sm font-raleway mb-2">{ally.title}</p>
                <span className="inline-block px-3 py-1 bg-crystal-blue bg-opacity-20 text-crystal-blue text-xs font-raleway rounded-full">
                  {ally.relationship}
                </span>
              </div>
              
              {/* Description */}
              <p className="text-divine-light font-caslon text-sm leading-relaxed">
                {ally.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quotes Section */}
        <motion.div
          className="quotes-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="font-cinzel text-3xl text-flame-gold text-center mb-12">
            Worte einer Kriegerin
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {quotes.map((quote, index) => (
              <motion.div
                key={index}
                className="quote-card bg-obsidian bg-opacity-70 border border-flame-gold rounded-lg p-6 relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Quote Icon */}
                <div className="absolute top-4 left-4 text-flame-gold opacity-30">
                  <span className="text-2xl">❝</span>
                </div>
                
                {/* Quote Text */}
                <blockquote className="font-caslon text-divine-light text-lg italic mb-4 pl-8">
                  "{quote.text}"
                </blockquote>
                
                {/* Context */}
                <div className="text-right">
                  <span className="text-mystic-gold text-sm font-raleway">
                    — {quote.context}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Character Evolution */}
        <motion.div
          className="character-evolution mt-16 bg-gradient-to-r from-shadow-purple via-lavastone to-shadow-purple rounded-lg p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="font-cinzel text-2xl text-flame-gold text-center mb-6">
            Der Wandel einer Arathi
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-raleway text-crystal-blue mb-3">Vergangenheit</h4>
              <p className="text-divine-light font-caslon text-sm">
                Strikt imperiumstreu, misstrauisch gegenüber Fremden, 
                gebunden an alte Traditionen und den unbeugsamen Glauben der Flamme.
              </p>
            </div>
            
            <div>
              <h4 className="font-raleway text-mystic-gold mb-3">Gegenwart</h4>
              <p className="text-divine-light font-caslon text-sm">
                Langsam wachsende Offenheit, zaghafte Freundschaften, 
                neue Verantwortung als Mutter und Führerin im Wandel.
              </p>
            </div>
            
            <div>
              <h4 className="font-raleway text-flame-gold mb-3">Zukunft</h4>
              <p className="text-divine-light font-caslon text-sm">
                Bereit, die Welt zu sehen. Die Arathi verändern sich, 
                und sie verändert sich mit ihnen - ohne ihre Werte zu verlieren.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AlliesSection;
