import React from 'react';
import { motion } from 'framer-motion';
// Test
const Footer: React.FC = () => {
  const footerSymbols = ['🕯️', '⚔️', '💎', '🏮'];

  return (
    <footer className="py-12 bg-obsidian border-t border-ember relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-flame-gold rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Logo */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="font-cinzel text-3xl text-flame-gold"
            animate={{ 
              textShadow: [
                '0 0 20px rgba(255, 167, 38, 0.5)',
                '0 0 40px rgba(255, 107, 53, 0.8)',
                '0 0 20px rgba(255, 167, 38, 0.5)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            ⚡ Mereldar Glutspeer ⚡
          </motion.span>
        </motion.div>
        
        {/* Quote */}
        <motion.p 
          className="font-caslon text-divine-light mb-6 text-lg italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          &bdquo;Möge das Licht von Beledar stets euren Weg erleuchten.&ldquo;
        </motion.p>
        
        {/* Footer Symbols */}
        <motion.div 
          className="footer-symbols flex justify-center space-x-8 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {footerSymbols.map((symbol, index) => (
            <motion.span
              key={index}
              className={`text-2xl ${index % 2 === 0 ? 'text-flame-gold' : 'text-ember'}`}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                delay: index * 0.5,
                ease: "easeInOut"
              }}
              whileHover={{ 
                scale: 1.5,
                rotate: 15,
                transition: { duration: 0.2 }
              }}
            >
              {symbol}
            </motion.span>
          ))}
        </motion.div>
        
        {/* Navigation Links */}
        <motion.div 
          className="footer-nav mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {[
              { href: '#hero', label: 'Heimat' },
              { href: '#about', label: 'Über Mereldar' },
              { href: '#equipment', label: 'Ausrüstung' },
              { href: '#abilities', label: 'Fähigkeiten' },
              { href: '#allies', label: 'Verbündete' }
            ].map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-divine-light hover:text-flame-gold transition-colors duration-300 font-raleway"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
        
        {/* Additional Info */}
        <motion.div 
          className="footer-info grid md:grid-cols-3 gap-6 mb-6 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-divine-light opacity-80">
            <span className="font-semibold text-ember">Server:</span> Die Aldor (PVE-RP)
          </div>
          <div className="text-divine-light opacity-80">
            <span className="font-semibold text-ember">Fraktion:</span> Allianz
          </div>
          <div className="text-divine-light opacity-80">
            <span className="font-semibold text-ember">Gilde:</span> Arathis Speer
          </div>
        </motion.div>
        
        {/* Divider */}
        <motion.div 
          className="w-full h-px bg-gradient-to-r from-transparent via-ember to-transparent mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        />
        
        {/* Copyright */}
        <motion.div 
          className="footer-bottom space-y-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <p className="font-raleway text-divine-light opacity-60 text-sm">
            © 2025 Mereldar Glutspeer - World of Warcraft Roleplay Character
          </p>
          <p className="font-raleway text-divine-light opacity-40 text-xs">
            World of Warcraft © Blizzard Entertainment, Inc. Alle Rechte vorbehalten.
          </p>
        </motion.div>
        
        {/* Back to Top */}
        <motion.button
          className="mt-8 text-flame-gold hover:text-ember transition-colors duration-300"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          viewport={{ once: true }}
        >
          <span className="text-2xl">⬆️</span>
          <div className="text-sm font-raleway mt-1">Zurück nach oben</div>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
