"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
const bp = process.env.NEXT_PUBLIC_BASE_PATH || '';
import Parallax from './Parallax';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{opacity:0,scale:0.85}}
        animate={{opacity:1,scale:1}}
        transition={{duration:1}}
        className="relative z-10 text-center px-6 max-w-5xl"
      >
        <Parallax distance={50}>
          <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full p-[3px] bg-gradient-to-br from-amber-400 via-red-600 to-amber-700 shadow-2xl shadow-red-900/50">
            <div className="w-full h-full rounded-full overflow-hidden ring-2 ring-amber-400/40 relative">
              <Image src={bp + '/sarelan_portrait.png'} alt="Sarelan Feuersturm" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#280a0a] via-transparent to-transparent opacity-40" />
            </div>
          </div>
        </Parallax>
        <motion.h1
          className="mt-8 font-runic text-5xl md:text-7xl bg-gradient-to-r from-amber-300 via-amber-400 to-red-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(251,191,36,0.4)]"
          initial={{y:40,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{delay:0.3}}>
          Sarelan Feuersturm
        </motion.h1>
        <motion.p className="mt-4 text-amber-200/80 text-xl font-caslon"
          initial={{y:20,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{delay:0.5}}>
          Magister von Quel’Thalas • Pyromant & Runenmeister
        </motion.p>
        <motion.p className="mt-6 max-w-3xl mx-auto text-amber-100/70 font-raleway leading-relaxed"
          initial={{y:30,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{delay:0.7}}>
          Feuer ist nicht Zerstörung – es ist Veredelung. Es trennt Schlacke vom Kern, Schwäche von Potential. In der Reinheit der Flamme liegt die Zukunft Quel’Thalas’.
        </motion.p>
        <motion.button
          onClick={()=>document.getElementById('erscheinung')?.scrollIntoView({behavior:'smooth'})}
          whileHover={{scale:1.05}}
          whileTap={{scale:0.95}}
          className="mt-10 px-8 py-4 rounded-lg font-semibold tracking-wide bg-gradient-to-r from-red-600 via-amber-500 to-red-700 text-[#1a0909] shadow-lg shadow-red-900/40 hover:shadow-red-700/60 transition"
        >Wissen entfesseln</motion.button>
      </motion.div>
    </section>
  );
}
