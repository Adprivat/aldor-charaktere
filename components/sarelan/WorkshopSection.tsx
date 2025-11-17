"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Search, Shield, Droplets, Layers, Copy, Cog, ScrollText, AlertTriangle } from 'lucide-react';

interface Block {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string; // tailwind text color
  lines: string[];
  detail?: string;
}

const blocks: Block[] = [
  {
    id: 'ident',
    title: 'Identifikation & Provenienz',
    icon: Search,
    color: 'text-amber-300',
    lines: [
      'Resonanzbecken & Runenlinsen zur Erstaufnahme',
      'Scrying-Kristalle für Quellen- und Signaturspur',
      'Klassifizierung: Schule • Quelle • Gefahrenklasse',
      'Dokumentation durch Abreibungen & Referenzkataloge'
    ],
    detail: 'Analyse trennt Erscheinung von Funktion – jedes Artefakt erhält vor Eingriff eine vollständige Sigillakte.'
  },
  {
    id: 'contain',
    title: 'Eindämmung & Sicherung',
    icon: Shield,
    color: 'text-red-300',
    lines: [
      'Konzentrische Bannkreise: Alarm → Dämpfer → Bannfeld',
      'Arkanplomben & Sigillsiegel für Transportkapseln',
      'Signaturmarken lösen Diebstahlwarnung aus',
      'Stasis-Verschlüsse verlangsamen Entropie'
    ],
    detail: 'Mehrschichtige Verteidigung priorisiert Verzögerung, nicht Vernichtung – Zeit zum Reagieren ist Kernressource.'
  },
  {
    id: 'reinigung',
    title: 'Reinigung & Stabilisierung',
    icon: Droplets,
    color: 'text-emerald-300',
    lines: [
      'Gegenresonanz neutralisiert Leere-/Fel-Sättigung',
      'Sonnenbrunnen-affine Kristallcluster als Filter',
      'Entkopplung von Fluch- oder Fremdankern',
      'Risikobewertung vor jedem Eingriff'
    ],
    detail: 'Ziel ist Funktionsklarheit, nicht naive „Reparatur“. Manche Korruption wird nur gedämpft – nie geheilt.'
  },
  {
    id: 'attune',
    title: 'Attunement & Imbuement',
    icon: Layers,
    color: 'text-amber-300',
    lines: [
      'Auflage neuer Runen-Schichten (Schutz / Bedienung)',
      'Besitzer-Sigille ohne Seelenzwang',
      'Schlüsselgesten & Passphrasen zur Aktivierung',
      'Kalibrierung als Leiter / Speicher'
    ],
    detail: 'Bindung = Interface-Definition. Kontrolle entsteht durch Limits, nicht rohe Verstärkung.'
  },
  {
    id: 'replika',
    title: 'Replikation & Abschriften',
    icon: Copy,
    color: 'text-amber-200',
    lines: [
      'Runen & Schaltbilder als gesicherte Abschriften',
      'Gefährliche Muster nie 1:1 – intentional abgeschwächt',
      'Funktionsrepliken mit Leistungsdeckel',
      'Failsafe-Bruch integriert'
    ],
    detail: 'Wissen wird teilbar ohne Eskalationsspirale – kontrollierte Diffusion arkaner Technologie.'
  },
  {
    id: 'konstrukte',
    title: 'Konstrukte & Geräte',
    icon: Cog,
    color: 'text-amber-300',
    lines: [
      'Werkstatthelfer & Torwächter (mittlere Konstrukte)',
      'Artefakt-Interfaces: Runentafeln / Lesesteine',
      'Verstärkerringe für Ritualkanalisierung',
      'Modulare Wartung statt Komplettneubau'
    ],
    detail: 'Automatisierung schützt Fokus – Routinearbeit wird ausgelagert, Entscheidung bleibt magisch-humanoid.'
  },
  {
    id: 'codex',
    title: 'Methodik & Sicherheit',
    icon: ScrollText,
    color: 'text-amber-300',
    lines: [
      'Dreifaltiger Kreis: Erkennen → Dämpfen → Bannen',
      'Zweitaugen-Prinzip (Serran / Dao’rel bei Hochrisiko)',
      'Sonnenbrunnen-Compliance: keine Ley-Instabilität',
      'Sigill-Protokoll für jede Änderung'
    ],
    detail: 'Disziplin ersetzt Improvisation – Protokollierung ist spätere Rückbau-Versicherung.'
  },
  {
    id: 'grenzen',
    title: 'Grenzen & Kosten',
    icon: AlertTriangle,
    color: 'text-rose-300',
    lines: [
      'Tiefe Leer-/Fel-Reinigung: Kontaminationsrisiko',
      'Neubindung eigenwilliger (halb-sentienter) Artefakte langwierig',
      'Große Portale / Regionalsiegel = Projektaufwand',
      'Manaleistung ≠ endlos – Erschöpfungsfenster'
    ],
    detail: 'Macht wird durch Aufwand & Risiko bezahlt. Nicht alles lässt sich „perfekt“ machen – Akzeptanz kontrollierter Defizite.'
  }
];

export default function WorkshopSection() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section id="werkstatt" className="relative py-32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full bg-radial from-red-900/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-amber-600/10 via-red-700/10 to-transparent blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.h2
          initial={{opacity:0,y:35}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:0.8}}
          className="font-cinzel text-5xl text-center bg-gradient-to-r from-amber-300 via-amber-400 to-red-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(251,191,36,0.35)] mb-4"
        >Werkstatt der Artefaktmagie</motion.h2>
        <motion.p
          initial={{opacity:0,y:25}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:0.7,delay:0.15}}
          className="text-amber-100/70 max-w-3xl mx-auto text-center font-caslon leading-relaxed mb-14"
        >Hier liegt die Quelle seines Wohlstands: systematische Veredelung, Sicherung und Nutzbarmachung machtvoller Relikte – kein Zufall, sondern kuratierte arkane Infrastruktur.</motion.p>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 mb-16">
          {blocks.map(b => {
            const Icon = b.icon;
            const active = open === b.id;
            return (
              <motion.button
                key={b.id}
                layout
                onClick={() => setOpen(o => o === b.id ? null : b.id)}
                whileHover={{y:-4}}
                whileTap={{scale:0.97}}
                className={`group relative rounded-xl p-5 text-left bg-[#3a1111]/70 ring-1 ring-amber-500/25 hover:ring-amber-400/50 transition overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-red-800/20 via-transparent to-amber-600/10" />
                <div className="flex items-start gap-3 relative z-10">
                  <Icon className={`w-6 h-6 ${b.color}`} />
                  <div>
                    <h3 className="font-raleway font-semibold text-amber-200 tracking-wide text-sm mb-1">{b.title}</h3>
                    <ul className="space-y-1">
                      {b.lines.slice(0,2).map(l => <li key={l} className="text-[11px] leading-snug text-amber-100/70 font-caslon">{l}</li>)}
                    </ul>
                    <div className="mt-2 text-[10px] uppercase tracking-wider text-amber-400/50 font-raleway">{active ? 'Schließen' : 'Mehr'}</div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
        <AnimatePresence mode="wait">
          {open && (
            <motion.div
              key={open}
              initial={{opacity:0,y:30}}
              animate={{opacity:1,y:0}}
              exit={{opacity:0,y:-25}}
              transition={{duration:0.6}}
              className="relative rounded-2xl px-10 py-12 overflow-hidden ring-1 ring-amber-500/30 bg-gradient-to-br from-[#3d1212]/90 via-[#2a0b0b]/90 to-[#3d1212]/90 shadow-2xl shadow-red-900/40"
            >
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-red-700/10 via-amber-500/5 to-red-700/10" />
                <div className="absolute inset-0 rounded-2xl border border-amber-400/10" />
              </div>
              {blocks.filter(b => b.id === open).map(b => (
                <div key={b.id} className="relative z-10 grid md:grid-cols-5 gap-10">
                  <div className="md:col-span-2 space-y-6">
                    <div className="flex items-center gap-3">
                      <b.icon className={`w-8 h-8 ${b.color}`} />
                      <h3 className="font-runic text-3xl text-amber-200">{b.title}</h3>
                    </div>
                    <p className="text-amber-100/70 text-sm font-caslon leading-relaxed">{b.detail}</p>
                    <div className="h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
                    <div className="text-[11px] uppercase tracking-wider font-raleway text-amber-400/60">Vollständige Prozessübersicht</div>
                  </div>
                  <div className="md:col-span-3 grid sm:grid-cols-2 gap-6 content-start">
                    {b.lines.map(l => (
                      <div key={l} className="rounded-lg p-4 bg-[#461616]/70 ring-1 ring-amber-500/20 hover:ring-amber-400/40 transition group">
                        <div className="text-amber-200/90 text-xs font-caslon leading-snug">{l}</div>
                        <div className="mt-2 h-px bg-gradient-to-r from-red-700/0 via-red-700/40 to-red-700/0 opacity-0 group-hover:opacity-100 transition" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <button onClick={() => setOpen(null)} className="absolute top-4 right-4 text-amber-300/60 hover:text-amber-200 transition text-xs font-raleway uppercase tracking-wider">Schließen</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
