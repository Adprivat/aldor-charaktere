import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / scrollHeight) * 100;
      
      setScrollProgress(progress);
      setIsVisible(scrolled > 100);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Circular Progress */}
          <div className="relative w-16 h-16">
            {/* Background Circle */}
            <svg
              className="w-full h-full transform -rotate-90"
              viewBox="0 0 64 64"
            >
              <circle
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke="rgba(45, 27, 27, 0.3)"
                strokeWidth="4"
              />
              <motion.circle
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke="url(#flameGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: scrollProgress / 100 }}
                transition={{ duration: 0.2 }}
                style={{
                  strokeDasharray: "175.93", // 2 * π * 28
                  strokeDashoffset: 175.93 * (1 - scrollProgress / 100)
                }}
              />
              <defs>
                <linearGradient id="flameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff6b35" />
                  <stop offset="50%" stopColor="#ffa726" />
                  <stop offset="100%" stopColor="#ff6b35" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Center Button */}
            <motion.button
              onClick={scrollToTop}
              className="absolute inset-2 bg-gradient-to-br from-ember to-flame-gold rounded-full flex items-center justify-center text-obsidian text-xl font-bold shadow-lg"
              whileHover={{ 
                scale: 1.1,
                boxShadow: '0 10px 30px rgba(255, 107, 53, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 4px 15px rgba(255, 107, 53, 0.2)',
                  '0 8px 25px rgba(255, 167, 38, 0.4)',
                  '0 4px 15px rgba(255, 107, 53, 0.2)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ⚡
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollProgress;
