import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AudioPlayerProps {
  className?: string;
}

const MysticAudioPlayer: React.FC<AudioPlayerProps> = ({ className = "" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  useEffect(() => {
    // Initialize Web Audio API
    if (!audioContextRef.current) {
      const AudioContextClass = window.AudioContext || (window as typeof AudioContext & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        audioContextRef.current = new AudioContextClass();
      }
    }

    return () => {
      if (oscillatorRef.current) {
        oscillatorRef.current.stop();
      }
    };
  }, []);

  const createMysticTone = () => {
    if (!audioContextRef.current) return;

    const audioContext = audioContextRef.current;
    
    // Stop existing oscillator
    if (oscillatorRef.current) {
      oscillatorRef.current.stop();
    }

    // Create oscillator
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    // Configure the oscillator for mystical sounds
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
    
    // Create a mystical frequency modulation
    oscillator.frequency.linearRampToValueAtTime(400, audioContext.currentTime + 2);
    oscillator.frequency.linearRampToValueAtTime(150, audioContext.currentTime + 4);
    oscillator.frequency.linearRampToValueAtTime(300, audioContext.currentTime + 6);
    
    // Configure gain for fade in/out
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(volume, audioContext.currentTime + 0.5);
    gainNode.gain.linearRampToValueAtTime(volume * 0.7, audioContext.currentTime + 3);
    gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 5.5);
    
    // Connect nodes
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Store references
    oscillatorRef.current = oscillator;
    gainNodeRef.current = gainNode;
    
    // Start oscillator
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 6);
    
    oscillator.onended = () => {
      setIsPlaying(false);
    };
  };

  const togglePlay = () => {
    if (isPlaying) {
      if (oscillatorRef.current) {
        oscillatorRef.current.stop();
        setIsPlaying(false);
      }
    } else {
      createMysticTone();
      setIsPlaying(true);
    }
  };

  return (
    <motion.div 
      className={`mystic-audio-player ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex items-center space-x-4 bg-lavastone bg-opacity-50 border border-ember rounded-lg p-4">
        <motion.button
          onClick={togglePlay}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
            isPlaying 
              ? 'bg-crimson text-divine-light' 
              : 'bg-gradient-to-r from-ember to-flame-gold text-obsidian hover:scale-110'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isPlaying ? '⏸️' : '🎵'}
        </motion.button>
        
        <div className="flex-1">
          <div className="text-sm font-cinzel text-flame-gold mb-1">
            Mystische Klänge von Beledar
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-divine-light">🔊</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="flex-1 h-1 bg-obsidian rounded-lg outline-none slider"
              style={{
                background: `linear-gradient(to right, #ff6b35 0%, #ff6b35 ${volume * 100}%, #0d0d0d ${volume * 100}%, #0d0d0d 100%)`
              }}
            />
          </div>
        </div>
        
        {isPlaying && (
          <motion.div
            className="flex space-x-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-flame-gold rounded-full"
                animate={{
                  height: ['4px', '16px', '4px'],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default MysticAudioPlayer;
