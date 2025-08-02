import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';

interface CursorTrailProps {
  color?: string;
  size?: number;
  trailLength?: number;
}

const CursorTrail: React.FC<CursorTrailProps> = ({ 
  color = '#ffa726', 
  size = 4, 
  trailLength = 15 
}) => {
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: string }>>([]);
  const [isMoving, setIsMoving] = useState(false);
  const idCounter = useRef(0);

  const updateTrail = useCallback((x: number, y: number) => {
    const newPoint = { x, y, id: `trail-${Date.now()}-${idCounter.current++}` };
    setTrail(prev => {
      const newTrail = [newPoint, ...prev].slice(0, trailLength);
      return newTrail;
    });
    setIsMoving(true);
    
    const timeout = setTimeout(() => setIsMoving(false), 100);
    return () => clearTimeout(timeout);
  }, [trailLength]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      updateTrail(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [updateTrail]);

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: point.x - size / 2,
            top: point.y - size / 2,
            width: size,
            height: size,
            background: `radial-gradient(circle, ${color}, transparent)`,
            boxShadow: `0 0 ${size * 2}px ${color}`,
          } as React.CSSProperties}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ 
            opacity: (trailLength - index) / trailLength * 0.8,
            scale: (trailLength - index) / trailLength * 1.2
          }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.2 }}
        />
      ))}
      
      {/* Main cursor glow when moving */}
      {isMoving && trail.length > 0 && (
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            left: trail[0].x - size * 2,
            top: trail[0].y - size * 2,
            width: size * 4,
            height: size * 4,
            background: `radial-gradient(circle, ${color}33, transparent)`,
            border: `1px solid ${color}66`,
          } as React.CSSProperties}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </div>
  );
};

export default CursorTrail;
