"use client";
import { motion } from 'framer-motion';
import { FlaskConical, Shield, ScrollText, Swords } from 'lucide-react';

const services = [
  { icon: FlaskConical, title: 'Runen & Bannkreise', desc: 'Präzise Abwehrgeometrien für Karawanen, Anwesen und Reliquien.' },
  { icon: Shield, title: 'Arkaner Schutz', desc: 'Mehrschichtige Siegel, die Fel, Verderbnis und Spionage bannen.' },
  { icon: ScrollText, title: 'Wissenshandel', desc: 'Abschriften seltener Manuskripte – gegen Gold, Gefallen oder mehr Wissen.' },
  { icon: Swords, title: 'Pyromantische Taktik', desc: 'Analyse von Schlachtfeldern & Feuerrouten für maximale Kontrolle.' }
];

export default function WorkshopSection() {
  return (
    <section id="werkstatt" className="relative py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="font-cinzel text-4xl text-amber-300 mb-12 text-center">Anwesen & Werkstatt</motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s,i)=> (
            <motion.div key={s.title} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6, delay:i*0.1}} className="relative group rounded-xl p-[1px] bg-gradient-to-br from-amber-500/20 via-red-700/20 to-transparent">
              <div className="h-full rounded-xl bg-[#401414]/70 backdrop-blur-sm p-6 flex flex-col">
                <s.icon className="w-8 h-8 text-amber-400 mb-4" />
                <h3 className="font-raleway font-semibold text-amber-200 tracking-wide mb-2">{s.title}</h3>
                <p className="text-sm text-amber-100/70 leading-relaxed flex-grow">{s.desc}</p>
                <div className="mt-4 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
              </div>
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-amber-400/10 via-red-600/10 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
