"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Landmark, BookLock, Trees, Eye } from 'lucide-react';
import Image from 'next/image';
const bp = process.env.NEXT_PUBLIC_BASE_PATH || '';
import Parallax from './Parallax';

const FULL_TEXT = `Einsam und zugleich erhaben erhebt sich Sarelan Feuersturms Anwesen im herbstlich getönten Waldland von Quel’Thalas, verborgen zwischen uralten Baumriesen, deren Blätter in feurigen Farben lodern wie das letzte Aufflammen eines Tages. Der Anblick des Anwesens wirkt, als sei es nicht erbaut, sondern aus der Essenz des Waldes selbst herausgewachsen – eine Symbiose aus Natur und elfischer Baukunst, von makelloser Harmonie und dennoch ehrfurchtgebietend in seiner Präsenz.

Die Architektur ist ein Sinnbild sin’doreischer Eleganz: schmale, hoch aufragende Türme mit spitz zulaufenden Dächern, gedeckt in kräftigem Scharlachrot, das im Abendlicht zu glühen scheint wie die Glut eines Feuers. Goldene Zierleisten fassen die Kanten und Bögen, als würden sie die Formen der Sonne nachzeichnen. Der zentrale Baukörper wird von einem majestätischen Hauptturm überragt, dessen Dach wie eine Flamme gen Himmel strebt, ein sichtbares Wahrzeichen weit über die Baumwipfel hinaus.

Die Fassade aus hellem, fast alabasterweißem Stein ist reich verziert mit filigranen Reliefs – Runen, Ornamente und geschwungene Muster, die in der Abenddämmerung zu tanzen scheinen, als würde das Gebäude selbst leise flüstern. Über dem Portal wölbt sich ein hoher Spitzbogen, eingerahmt von feingliedrigen Säulen, deren goldene Kapitelle im Zwielicht schimmern. Die schweren Türen aus rotem, poliertem Holz sind von Arkansiegeln durchzogen, die schwach glühen, wenn man ihnen zu nahekommt.

Das Anwesen wirkt von außen wie eine Kathedrale des Wissens – weder schlicht noch prunkvoll, sondern in jedem Detail von Würde und Strenge durchdrungen. Keine bunten Glasfenster erzählen Geschichten, wie es bei Tempeln üblich wäre, stattdessen sind die hohen, schmalen Fenster von rubinroten Rahmen eingefasst, die an Blut und Feuer erinnern.

Der Pfad zum Eingang windet sich durch das hohe Laubwerk des Waldes. Moose und Schatten legen sich weich über die Stufen, die zum Haupttor führen, als wollte der Wald selbst das Anwesen vor neugierigen Blicken verhüllen. Kein geschäftiges Treiben, keine lauten Stimmen dringen aus dem Inneren. Es ist still – ehrfurchtsvoll still. Nur das Rascheln der Blätter und das entfernte Schlagen einer Krähe durchbrechen die Ruhe.

Wer das Anwesen betrachtet, erkennt sofort: Dies ist kein Ort für rauschende Feste. Kein Palast, der Besucherscharen einlädt. Dies ist eine Festung des Geistes, ein Refugium für einen Magister, der Reichtum und Wissen gleichermaßen hortet – und für den allein schon die Mauern ein Bannkreis sind, der Fremde fernhält. Hinter diesen Mauern, so munkelt man, befinden sich Werkstätten voller leuchtender Kristalle, Bannkreise, die in der Dunkelheit pulsieren, und Bibliotheken, die das Wissen der Hochelfen seit Jahrhunderten bewahren.

Das Anwesen strahlt jene Ambivalenz aus, die auch Sarelan selbst prägt: Schönheit und Härte, Glanz und Strenge, ein Ort, der gleichermaßen bewundert wie gefürchtet wird.`;

const bullets = [
  { icon: Landmark, title: 'Arkane Bastion', text: 'Kathedrale des Wissens statt höfischer Repräsentation.' },
  { icon: Trees, title: 'Eingebettet', text: 'Verborgen im thalassischen Wald – Symbiose aus Natur & Baukunst.' },
  { icon: BookLock, title: 'Versiegeltes Wissen', text: 'Runenreliefs, leise glühende Siegel, Bibliotheken hinter Bannkreisen.' },
  { icon: Eye, title: 'Wachsame Stille', text: 'Keine Feste – ein Refugium für Forschung, Abwehr & Sammlung.' }
];

export default function EstateSection() {
  const [open, setOpen] = useState(false);
  return (
    <section id="anwesen" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="font-cinzel text-4xl text-amber-300 mb-10 text-center">Anwesen von Quel’Thalas</motion.h2>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.8}} className="relative mb-16 rounded-xl overflow-hidden ring-1 ring-amber-500/30 shadow-xl shadow-red-900/40">
          <Parallax distance={90} className="relative block">
            <div className="aspect-[16/7] w-full bg-[#2d0c0c]">
              <Image
                src={bp + '/anwesen.png'}
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
            {bullets.map((b,i)=> (
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
            <div>
              <button onClick={()=>setOpen(o=>!o)} className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-gradient-to-r from-red-700 via-amber-600 to-red-700 text-[#1a0808] font-raleway font-semibold shadow shadow-red-900/40 hover:shadow-red-700/60 transition">
                {open ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                {open ? 'Beschreibung ausblenden' : 'Vollständige Beschreibung anzeigen'}
              </button>
            </div>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  key="fulltext"
                  initial={{opacity:0,height:0}}
                  animate={{opacity:1,height:'auto'}}
                  exit={{opacity:0,height:0}}
                  transition={{duration:0.5}}
                  className="overflow-hidden"
                >
                  <div className="prose prose-invert max-w-none text-amber-100/70 font-caslon leading-relaxed whitespace-pre-line">
                    {FULL_TEXT}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
