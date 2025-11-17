import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { asset } from '@/utils/asset';

const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-shadow-purple via-lavastone to-obsidian"
        style={{ y }}
      />
      
      {/* Floating Tiny Sparks */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 pointer-events-none"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
            scale: [0.5, 1, 0.5],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 4 + i * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          <div className="w-full h-full bg-flame-gold rounded-full shadow-sm" 
               style={{ boxShadow: '0 0 3px #ffa726' }} />
        </motion.div>
      ))}

      <motion.div 
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
        style={{ opacity }}
      >
        {/* Hero Portrait */}
        <motion.div 
          className="hero-portrait mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, type: "spring" }}
        >
          <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-b from-flame-gold via-ember to-crimson p-1 animate-glow">
            <div className="w-full h-full rounded-full bg-lavastone flex items-center justify-center relative overflow-hidden">
        {/* Profile Image */}                <img 
          src={asset('/images/pcomic.jpg')}
                alt="Mereldar Glutspeer Portrait"
                className="w-full h-full object-cover rounded-full"
                style={{
                  objectPosition: 'center center',
                  filter: 'brightness(1.1) contrast(1.05) saturate(1.1)'
                }}
              />
              
              {/* Character silhouette overlay for mystical effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-20 rounded-full"
                animate={{ 
                  opacity: [0.2, 0.1, 0.2],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Lantern glow effect */}
              <motion.div 
                className="lantern-glow absolute bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-flame-gold rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
        
        {/* Title */}
        <motion.h1 
          className="font-cinzel text-6xl md:text-8xl font-bold text-flame-gold mb-6 text-shadow-strong"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.span
            animate={{ 
              textShadow: [
                '0 0 20px rgba(255, 167, 38, 0.5)',
                '0 0 40px rgba(255, 107, 53, 0.8), 0 0 60px rgba(255, 167, 38, 0.3)',
                '0 0 20px rgba(255, 167, 38, 0.5)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Mereldar Glutspeer
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="font-caslon text-2xl md:text-3xl text-divine-light mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Trägerin der Flamme
        </motion.p>
        
        <motion.p 
          className="font-raleway text-lg md:text-xl text-divine-light opacity-80 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          Das ewige Licht in der Finsternis von Heilsturz
        </motion.p>
        
        {/* Sacred Quote */}
        <motion.div 
          className="sacred-quote text-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <p className="font-caslon text-xl italic text-flame-gold border-l-4 border-ember pl-6 inline-block">
            &bdquo;Solange ein Funke glimmt, wird die Flamme nicht vergehen.&ldquo;
          </p>
        </motion.div>
        
        {/* CTA Button */}
        <motion.button 
          className="cta-button bg-gradient-to-r from-ember to-flame-gold hover:from-flame-gold hover:to-ember text-obsidian font-raleway font-semibold px-8 py-4 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 10px 30px rgba(255, 107, 53, 0.5)'
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Mehr über Mereldars Geschichte
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
