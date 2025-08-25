"use client";
import { motion } from 'framer-motion';
import { Gem, Lock, BookOpen, Coins } from 'lucide-react';

const assets = [
  { icon: Coins, label: 'Gold & Edelsteine', detail: 'Arkan versiegelt – Liquidität & Ritualmaterial.' },
  { icon: Gem, label: 'Kristalle & Manakerne', detail: 'Fragmente uralten Manas, konzentrierte Energiespeicher.' },
  { icon: BookOpen, label: 'Manuskripte', detail: 'Hochelfische Quellen – Abschriften nur gegen Gegenwert.' },
  { icon: Lock, label: 'Schatzkammer', detail: 'Bannkreise, Wächterkonstrukte, Runenverriegelungen.' }
];

export default function WealthSection() {
  return (
    <section id="reichtum" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="font-cinzel text-4xl text-amber-300 mb-12 text-center">Wohlstand & Sicherung</motion.h2>
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}} className="space-y-6">
            <p className="text-amber-100/75 font-caslon leading-relaxed">Sarelans Vermögen ist Werkzeug, nicht Zierde. Es fließt in Runenexperimente, Expeditionen und die Ausbildung seiner Schülerin. Sein Anwesen ersetzt Höfisches – Macht aus Wissen statt Politik.</p>
            <p className="text-amber-100/70 font-caslon leading-relaxed">Der Schatz ruht hinter geometrisch verschachtelten Bannkreisen. Jede Schicht reagiert auf Signatur und Absicht. Fremdzugriff? Entladung statt Öffnung.</p>
            <p className="text-amber-100/70 font-caslon leading-relaxed">Nur Eine besitzt neben Ihm vollen Zugriff – Ausdruck von Vertrauen und Vermächtnis. </p>
          </motion.div>
          <motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7,delay:0.1}} className="grid sm:grid-cols-2 gap-6">
            {assets.map((a,i)=> (
              <div key={a.label} className="rounded-lg p-5 bg-[#401414]/70 ring-1 ring-amber-500/20 shadow-md shadow-red-900/30 hover:ring-amber-400/40 transition">
                <a.icon className="w-7 h-7 text-amber-400 mb-3" />
                <h3 className="font-raleway font-semibold text-amber-200 mb-1">{a.label}</h3>
                <p className="text-xs text-amber-100/60 leading-relaxed">{a.detail}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
