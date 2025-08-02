import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading with progress
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const flames = Array.from({ length: 8 }, (_, i) => i);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 bg-obsidian z-50 flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            {/* Logo */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring" }}
            >
              <div className="text-6xl font-cinzel text-flame-gold text-shadow-strong">
                ⚡ Mereldar
              </div>
            </motion.div>

            {/* Flame Circle */}
            <div className="relative w-32 h-32 mx-auto mb-8">
              {flames.map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute w-3 h-6 bg-gradient-to-t from-ember to-flame-gold rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                    originX: 0.5,
                    originY: 4,
                  }}
                  animate={{
                    rotate: (360 / flames.length) * index,
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    rotate: { duration: 0 },
                    scale: { 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: index * 0.1,
                      ease: "easeInOut" 
                    },
                    opacity: { 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: index * 0.1,
                      ease: "easeInOut" 
                    },
                  }}
                  transformTemplate={({ rotate }) => 
                    `translate(-50%, -50%) rotate(${rotate}) translateY(-40px)`
                  }
                />
              ))}
              
              {/* Center Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-radial from-flame-gold via-ember to-transparent rounded-full"
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

            {/* Loading Text */}
            <motion.div
              className="font-caslon text-divine-light text-lg mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Das Licht von Beledar erwacht...
            </motion.div>

            {/* Progress Bar */}
            <div className="w-64 h-2 bg-lavastone rounded-full overflow-hidden mx-auto">
              <motion.div
                className="h-full bg-gradient-to-r from-ember to-flame-gold rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Progress Text */}
            <motion.div
              className="font-raleway text-divine-light text-sm mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {Math.round(progress)}%
            </motion.div>

            {/* Floating Particles */}
            {Array.from({ length: 20 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-flame-gold rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
