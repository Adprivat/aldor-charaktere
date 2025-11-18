import React from 'react';
import { motion } from 'framer-motion';
import { asset } from '@/utils/asset';

const AboutSection: React.FC = () => {
  const timelineEvents = [
    {
      age: "8-18",
      title: "Frühe Jugend",
      description: "Die Flamme führt Uns. Das Imperium und der Kaiser stehen über allem. Formung wie arathischen Stahl zur künftigen Klerikerin der Flamme.",
      color: "flame-gold",
      imagePath: null
    },
    {
      age: "18-21", 
      title: "Junge Erwachsene",
      description: "Geweiht in der heiligen Flamme. Der Drang nach Mehr erwacht und führt zum Dienst an der Waffe.",
      color: "ember",
      imagePath: "/images/Foliant.png"
    },
    {
      age: "21-24",
      title: "Erste Schritte",
      description: "Als Streiter der Flamme, einem Paladin gleich. Bedrohungen des Reiches niedergeschlagen, der Name Glutspeer wird bekannt.",
      color: "crimson",
      imagePath: null
    },
    {
      age: "25",
      title: "Aufbruch ins Unbekannte",
      description: "Erwählt für die 3. Flotte nach Beledar. Mission: Den Stern beschützen vor der letzten Schlacht zwischen Flamme und Dunkelheit.",
      color: "flame-gold",
      imagePath: null
    },
    {
      age: "30",
      title: "Eine neue Heimat",
      description: "Nach dem Absturz in Heilsturz gestrandet. Aufbau der neuen Arathi-Siedlung unter Beledar.",
      color: "ember",
      imagePath: '/images/Glutspeer28.jpg'
    },
    {
      age: "32",
      title: "Der Tag der Dunkelheit",
      description: "Beledar verschiebt sich in die Leere. Aufstieg zur Lampenanzünderin - geschaffen für den Kampf gegen die Dunkelheit.",
      color: "crystal-blue",
      imagePath: '/images/Neruber.png'
    },
    {
      age: "37",
      title: "Kommandantin",
      description: "Aufstieg zur Speerspitze von Arathis Speer. Führung der Einheit in den dunkelsten Stunden.",
      color: "flame-gold",
      imagePath: '/images/Kommandantin.jpg'
    },
    {
      age: "38",
      title: "Neue Bündnisse",
      description: "Freundschaften mit Fremden, besonders ein Band zu einem Kirin Tor Magier. Adoption der Tochter Tilda.",
      color: "mystic-gold",
      imagePath: '/images/Thessien_Mereldar.png'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-lavastone to-shadow-purple" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-cinzel text-5xl text-flame-gold mb-6">Über Mereldar</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-ember to-transparent mx-auto" />
        </motion.div>
        
        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Character Portrait */}
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="character-portrait w-full max-w-md mx-auto">
              <motion.div 
                className="aspect-square bg-gradient-to-br from-flame-gold via-ember to-crimson p-2 rounded-lg"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full bg-lavastone rounded-lg flex items-center justify-center relative overflow-hidden">
                  <img 
                    src={asset('/images/Kommandantin.jpg')} 
                    alt="Mereldar Glutspeer - Charakterportrait" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-30" />
                  <motion.div 
                    className="absolute bottom-4 right-4 w-6 h-6 bg-flame-gold rounded-full"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.7, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Character Info */}
          <motion.div 
            className="order-1 md:order-2 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="role-badge inline-flex items-center bg-ember bg-opacity-20 border border-ember rounded-full px-6 py-2"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span 
                className="w-3 h-3 bg-flame-gold rounded-full mr-3"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="font-raleway text-flame-gold">Kommandantin • Lampenanzünderin • Arathis Speer</span>
            </motion.div>
            
            <motion.p 
              className="font-caslon text-lg text-divine-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Mereldar Glutspeer entstammt einer Imperiumstreuen Familie, die sich zur Gänze den Werten 
              und dem Glauben der Flamme unterworfen hat. Benannt nach einer legendären Priesterin, 
              war sie von Geburt an dazu bestimmt, der Flamme zu dienen.
            </motion.p>
            
            <motion.p 
              className="font-caslon text-lg text-divine-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Als Kommandantin von Arathis Speer und erfahrene Lampenanzünderin trägt sie heute die 
              Verantwortung für den Schutz von Heilsturz. In den Tiefen, wo Beledar zwischen Licht 
              und Leere wandelt, ist sie die Speerspitze gegen die Dunkelheit.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-3 mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <span className="px-3 py-1 bg-flame-gold bg-opacity-20 text-flame-gold rounded-full text-sm font-raleway">
                Die Flamme führt mich!
              </span>
              <span className="px-3 py-1 bg-crystal-blue bg-opacity-20 text-crystal-blue rounded-full text-sm font-raleway">
                Ich bin eine Arathi!
              </span>
              <span className="px-3 py-1 bg-ember bg-opacity-20 text-ember rounded-full text-sm font-raleway">
                Verteidige die Schwachen
              </span>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Timeline */}
        <motion.div 
          className="timeline-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="font-cinzel text-3xl text-flame-gold text-center mb-12">Lebensweg einer Arathi</h3>
          <div className="timeline-container relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-flame-gold via-ember to-crimson transform -translate-x-1/2" />
            
            <div className="timeline-events space-y-16">
              {timelineEvents.map((event, index) => (
                <motion.div 
                  key={event.title}
                  className="timeline-event relative"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Marker */}
                  <motion.div 
                    className={`timeline-marker absolute left-1/2 w-6 h-6 bg-${event.color} rounded-full transform -translate-x-1/2 z-10`}
                    animate={{ 
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    whileHover={{ scale: 1.3 }}
                  />
                  
                  {/* Timeline Content */}
                  <motion.div 
                    className={`timeline-content ${
                      index % 2 === 0 
                        ? 'md:w-1/2 md:pr-8 text-right' 
                        : 'md:w-1/2 md:ml-auto md:pl-8'
                    } ml-8 md:ml-0`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-lavastone bg-opacity-50 border border-ember rounded-lg p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className={`font-cinzel text-xl text-${event.color}`}>
                          {event.title}
                        </h4>
                        <span className="text-mystic-gold text-sm font-raleway">
                          Alter {event.age}
                        </span>
                      </div>
                      
                      {/* Optional Timeline Image */}
                      {event.imagePath && (
                        <motion.div 
                          className="timeline-image mb-4"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <img 
                            src={asset(event.imagePath)}
                            alt={`${event.title} - Alter ${event.age}`}
                            className="w-full max-w-xs mx-auto rounded-lg border border-ember shadow-lg"
                          />
                        </motion.div>
                      )}
                      
                      <p className="font-caslon text-divine-light">{event.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
