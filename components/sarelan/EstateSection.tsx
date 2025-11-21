"use client";
import { motion } from 'framer-motion';
import { Landmark, BookLock, Trees, Eye } from 'lucide-react';
import { asset } from '@/utils/asset';
import Image from 'next/image';
import Parallax from './Parallax';

const bullets = [
  { icon: Landmark, title: 'Arkane Bastion', text: 'Kathedrale des Wissens statt höfischer Repräsentation.' },
  { icon: Trees, title: 'Eingebettet', text: 'Verborgen im thalassischen Wald – Symbiose aus Natur & Baukunst.' },
  { icon: BookLock, title: 'Versiegeltes Wissen', text: 'Runenreliefs, leise glühende Siegel, Bibliotheken hinter Bannkreisen.' },
  { icon: Eye, title: 'Wachsame Stille', text: 'Keine Feste – ein Refugium für Forschung, Abwehr & Sammlung.' }
];

export default function EstateSection() {
  return (
    <section id="anwesen" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="font-cinzel text-4xl text-amber-300 mb-10 text-center">Anwesen von Quel&apos;Thalas</motion.h2>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.8}} className="relative mb-16 rounded-xl overflow-hidden ring-1 ring-amber-500/30 shadow-xl shadow-red-900/40">
          <Parallax distance={90} className="relative block">
            <div className="aspect-[16/7] w-full bg-[#2d0c0c] relative">
        <Image
          src={asset('/images/anwesen.png')}
                alt="Sarelans abgeschiedenes Anwesen im Wald von Quel'Thalas"
                fill
                priority={false}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#280a0a] via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-3 right-4 text-[10px] tracking-wide text-amber-200/50 font-raleway uppercase">Visualisierung des Anwesens</div>
          </Parallax>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6}} className="space-y-8">
            {bullets.map((b)=> (
              <div key={b.title} className="flex gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-[#401414]/70 flex items-center justify-center ring-1 ring-amber-500/30 group-hover:ring-amber-400/50 transition">
                  <b.icon className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-raleway font-semibold text-amber-200 tracking-wide mb-1">{b.title}</h3>
                  <p className="text-amber-100/70 text-sm leading-relaxed font-caslon">{b.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div initial={{opacity:0,x:50}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6}} className="space-y-6">
            <p className="text-amber-100/75 font-caslon leading-relaxed">Eine arkane Zuflucht – disziplinierte Geometrie, lebendiger Wald und kontrollierte Isolation formen eine Aura der geistigen Unangreifbarkeit.</p>
            <p className="text-amber-100/70 font-caslon leading-relaxed">Das Hauptturmdach wie eine stilisierte Flamme: Statement für transmutative Feuerlehre statt zerstörerischer Wildheit.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
