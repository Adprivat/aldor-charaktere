"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { asset } from '@/utils/asset';
import Parallax from './Parallax';

export default function RelationshipSection() {
  return (
    <section id="beziehungen" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="font-cinzel text-4xl text-amber-300 mb-12 text-center">Serran – Vermächtnis & Bindung</motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6}}>
            <p className="text-amber-100/75 font-caslon leading-relaxed mb-4">Sarelan sieht in Serran mehr als nur eine Schülerin – sie ist der lebende Beweis seiner Methodik: Disziplin, Fokus, transmutative Sicht auf Feuer.</p>
            <p className="text-amber-100/70 font-caslon leading-relaxed mb-4">Seit Jahrzehnten nun lehrt er sie, ihre Fähigkeiten zu meistern und ihre Grenzen zu erweitern.</p>
            <p className="text-amber-100/70 font-caslon leading-relaxed">Ihre Verletzbarkeit ist seine. Wer Serran bedroht, testet Geduld, Feuer und das Wissen eines Magisters.</p>
          </motion.div>
          <motion.div initial={{opacity:0,x:50}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6}} className="relative">
            <Parallax distance={70}>
              <div className="rounded-xl overflow-hidden ring-2 ring-amber-500/30 shadow-lg shadow-red-900/40">
                    <Image src={asset('/images/SarelanSerran.png')} alt="Symbolische Bindung" width={600} height={360} className="object-cover w-full h-full" />
              </div>
            </Parallax>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-red-600/30 via-amber-500/20 to-transparent blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
