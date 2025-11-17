"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback, useMemo } from 'react';
import { Sparkles, Orbit, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

interface PageDef {
  id: string;
  title: string;
  icon: React.ElementType;
  body: JSX.Element;
}

const list = (items: string[]) => (
  <ul className="list-disc pl-5 space-y-1">
    {items.map(i => <li key={i} className="text-sm leading-snug text-amber-100/80 font-caslon">{i}</li>)}
  </ul>
);

export default function SpellbookSection() {
  const pages: PageDef[] = useMemo(() => [
    {
      id: 'schulen',
      title: 'Schulen & Kanon',
      icon: Sparkles,
      body: (
        <div className="space-y-5">
          <div>
            <h3 className="font-raleway tracking-wide text-amber-300 text-sm mb-1">Arkan</h3>
            {list(['Arkanschlag', 'Arkane Geschosse', 'Arkane Explosion', 'Blinzeln / Teleport / Portale', 'Zeitverzögerung / Verlangsamung', 'Gegenzauber', 'Unsichtbarkeit', 'Spiegelbild', 'Magische Barriere / Schutz' ])}
          </div>
          <div>
            <h3 className="font-raleway tracking-wide text-amber-300 text-sm mb-1">Feuer</h3>
            {list(['Feuerball', 'Pyroschlag', 'Feuerschlag', 'Flammenstoß', 'Flammenregen', 'Verbrennung', 'Wärme- & Lichtmanipulation'])}
          </div>
          <div>
            <h3 className="font-raleway tracking-wide text-amber-300 text-sm mb-1">Allgemein</h3>
            {list(['Polymorphie', 'Zauberraub', 'Langsamer Fall', 'Fluch entfernen', ])}
          </div>
        </div>
      )
    },
    {
      id: 'rasse',
      title: 'Sin’dorei‑Affinitäten',
      icon: Orbit,
      body: (
        <div className="space-y-4 text-amber-100/80 font-caslon text-sm leading-relaxed">
          <p><strong className="text-amber-300 font-raleway">Arkaner Strom:</strong> Kurzzeitiger Null-Impuls – unterbricht, leitet ab, glättet Manaströme.</p>
          <p><strong className="text-amber-300 font-raleway">Leylinien‑Fokus:</strong> Versteht und nutzt natürliche Manaadern zur Effizienzsteigerung.</p>
          <p><strong className="text-amber-300 font-raleway">Kristall & Runenstein:</strong> Umgang mit Manakristallen, speichernde Runenplatten, modulare Arkankonstrukte.</p>
          <p><strong className="text-amber-300 font-raleway">Runenarchitektur:</strong> Geometrische Verstärkung von Bannfeldern & Portalen.</p>
        </div>
      )
    },
    {
      id: 'profil',
      title: 'Stärken & Schwächen',
      icon: Shield,
      body: (
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-raleway tracking-wide text-emerald-300 text-sm mb-2">Stärken</h3>
            {list(['Präzise Runen & Disziplin', 'Portalmagie & Raumanker', 'Gegenzauber / Dispels', 'Verzauberungskunst', 'Kontrollierte Ressourcenführung'])}
          </div>
          <div>
            <h3 className="font-raleway tracking-wide text-rose-300 text-sm mb-2">Schwächen</h3>
            {list(['Überkanalisierung → Erschöpfung', 'Anfällig für Antimagie-Felder', 'Begrenzte Heiloptionen', 'Risiko mentaler Überlast bei Leyline-Manipulation'])}
          </div>
        </div>
      )
    }
  ], []);

  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex(i => (i + 1) % pages.length), [pages.length]);
  const prev = useCallback(() => setIndex(i => (i - 1 + pages.length) % pages.length), [pages.length]);

  return (
    <section id="magie" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
          className="font-cinzel text-4xl text-amber-300 mb-14 text-center"
        >Arkane Praxis</motion.h2>
        <div className="relative flex flex-col items-center">
          <div className="relative w-full max-w-4xl perspective-[1800px]">
            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-[#3a1212] via-[#240a0a] to-[#3a1212] opacity-90 ring-1 ring-amber-500/30 shadow-2xl shadow-red-900/40" />
            <div className="absolute -inset-2 blur-2xl bg-gradient-to-r from-red-800/20 via-amber-600/10 to-red-700/20 rounded-3xl" />
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={pages[index].id}
                initial={{rotateY: 70, opacity:0, x:80}}
                animate={{rotateY: 0, opacity:1, x:0}}
                exit={{rotateY:-70, opacity:0, x:-80}}
                transition={{duration:0.7, ease:'easeInOut'}}
                className="origin-left will-change-transform"
              >
                <div className="grid md:grid-cols-5 gap-10 px-10 py-12">
                  <div className="md:col-span-2 space-y-6">
                    <div className="flex items-center gap-3">
                      {(() => { const Icon = pages[index].icon; return <Icon className="w-7 h-7 text-amber-400" /> })()}
                      <h3 className="font-runic text-2xl text-amber-200 tracking-wide">{pages[index].title}</h3>
                    </div>
                    <motion.div key={pages[index].id + '-body'} initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:0.25}} className="text-amber-100/75 text-sm leading-relaxed font-caslon">
                      {index === 0 && <p className="mb-4">Grundlagen beherrschter Hochelfenmagie – strukturierte Kanalisierung statt chaotischer Entladung.</p>}
                      {index === 1 && <p className="mb-4">Volksspezifische Resonanzen formen Effizienz & taktische Nischen in der arkanen Praxis.</p>}
                      {index === 2 && <p className="mb-4">Das Profil eines disziplinierten sin’doreischen Magisters – Balance zwischen Präzision & Belastungsgrenzen.</p>}
                    </motion.div>
                    <div className="hidden md:block h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
                    <div className="flex gap-4">
                      <button onClick={prev} className="group relative px-4 py-2 rounded-md bg-[#471616]/70 ring-1 ring-amber-500/30 hover:ring-amber-400/50 text-amber-200 text-sm font-raleway tracking-wide overflow-hidden">
                        <span className="relative z-10 flex items-center gap-2"><ChevronLeft className="w-4 h-4" />Zurück</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-red-700/0 via-red-700/10 to-red-700/0 opacity-0 group-hover:opacity-100 transition" />
                      </button>
                      <button onClick={next} className="group relative px-4 py-2 rounded-md bg-[#471616]/70 ring-1 ring-amber-500/30 hover:ring-amber-400/50 text-amber-200 text-sm font-raleway tracking-wide overflow-hidden">
                        <span className="relative z-10 flex items-center gap-2">Weiter<ChevronRight className="w-4 h-4" /></span>
                        <span className="absolute inset-0 bg-gradient-to-r from-red-700/0 via-red-700/10 to-red-700/0 opacity-0 group-hover:opacity-100 transition" />
                      </button>
                    </div>
                    <div className="text-xs font-raleway uppercase tracking-wider text-amber-400/60">Seite {index+1} / {pages.length}</div>
                  </div>
                  <div className="md:col-span-3 relative">
                    <motion.div key={pages[index].id+ '-content'} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.15}} className="prose prose-invert max-w-none">
                      {pages[index].body}
                    </motion.div>
                    <div className="pointer-events-none absolute -inset-6 rounded-2xl border border-amber-400/10" />
                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-amber-500/20" />
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/5 via-transparent to-red-900/10 mix-blend-overlay" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#2b0d0d] to-transparent pointer-events-none rounded-l-2xl" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#2b0d0d] to-transparent pointer-events-none rounded-r-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
