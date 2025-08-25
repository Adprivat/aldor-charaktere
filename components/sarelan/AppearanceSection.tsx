"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Parallax from './Parallax';

export default function AppearanceSection() {
  return (
    <section id="erscheinung" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        <motion.div initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.7}}>
          <h2 className="font-cinzel text-4xl text-amber-300 mb-6">Erscheinung & Präsenz</h2>
          <p className="text-amber-100/80 leading-relaxed mb-4 font-caslon">Sarelan ist hochgewachsen, diszipliniert und von kontrollierter Eleganz. Seine strahlend blauen Augen – gereinigt vom Fel – durchdringen jede Illusion.</p>
          <p className="text-amber-100/70 leading-relaxed mb-4 font-caslon">Der rot-goldene Ornat symbolisiert Wissen und Verantwortung. Bewegungen wie präzise gesetzte Runen: zweckvoll, ruhig, sicher.</p>
          <p className="text-amber-100/70 leading-relaxed font-caslon">Er betrachtet die Welt, als läge unter allem ein leuchtendes Muster arkaner Geometrien, das nur entschlüsselt werden muss.</p>
        </motion.div>
        <motion.div initial={{opacity:0,x:50}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.7,delay:0.1}} className="relative">
          <Parallax distance={80}>
            <div className="rounded-xl overflow-hidden ring-2 ring-amber-500/30 shadow-xl shadow-red-900/40">
              <Image src="/sarelan2.png" alt="Sarelan Feuersturm Gewand" width={600} height={720} className="object-cover w-full h-full" />
            </div>
          </Parallax>
          <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-gradient-to-br from-amber-500/20 via-red-600/20 to-transparent blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
