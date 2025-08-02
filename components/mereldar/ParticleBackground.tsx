import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Small spark particle system
    interface SparkParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      life: number;
      maxLife: number;
      twinkle: number;
    }

    const sparks: SparkParticle[] = [];
    const sparkColors = [
      '#ffa726', // Flame-Gold
      '#ff6b35', // Ember
      '#ffb347', // Helles Gold
      '#fff3e0'  // Divine Light
    ];

    const createSpark = () => {
      // Erstelle kleine Funken an verschiedenen Positionen
      const spark: SparkParticle = {
        x: Math.random() * canvas.width,
        y: canvas.height + 5,
        vx: (Math.random() - 0.5) * 1, // Sehr leichte horizontale Bewegung
        vy: -Math.random() * 2 - 0.5, // Langsame Aufwärtsbewegung
        size: Math.random() * 1.5 + 0.5, // Sehr kleine Größe (0.5-2px)
        opacity: Math.random() * 0.8 + 0.2,
        color: sparkColors[Math.floor(Math.random() * sparkColors.length)],
        life: 0,
        maxLife: Math.random() * 150 + 100,
        twinkle: Math.random() * Math.PI * 2
      };
      sparks.push(spark);
    };

    const updateSparks = () => {
      for (let i = sparks.length - 1; i >= 0; i--) {
        const spark = sparks[i];
        
        // Bewegung
        spark.x += spark.vx;
        spark.y += spark.vy;
        spark.life++;
        
        // Twinkle-Effekt
        spark.twinkle += 0.15;
        const twinkleEffect = Math.sin(spark.twinkle) * 0.3 + 0.7;
        
        // Funke wird langsam transparenter
        const lifeRatio = spark.life / spark.maxLife;
        spark.opacity = Math.max(0, (1 - lifeRatio) * twinkleEffect);
        
        // Sehr leichte Drift
        spark.vx *= 0.998;
        spark.vy += 0.01; // Minimale Schwerkraft
        
        // Entferne tote Funken
        if (spark.life >= spark.maxLife || spark.y < -10) {
          sparks.splice(i, 1);
        }
      }
    };

    const drawSparks = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      sparks.forEach(spark => {
        ctx.save();
        ctx.globalAlpha = spark.opacity;
        
        // Kleiner Glow-Effekt
        ctx.shadowBlur = spark.size * 2;
        ctx.shadowColor = spark.color;
        ctx.fillStyle = spark.color;
        
        // Sehr kleiner Punkt
        ctx.beginPath();
        ctx.arc(spark.x, spark.y, spark.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      });
    };

    let animationId: number;
    let lastSparkTime = 0;

    const animate = (timestamp: number) => {
      // Erstelle neue Funken alle 300ms (weniger häufig)
      if (timestamp - lastSparkTime > 300 && sparks.length < 25) {
        createSpark();
        lastSparkTime = timestamp;
      }

      updateSparks();
      drawSparks();
      
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleBackground;
