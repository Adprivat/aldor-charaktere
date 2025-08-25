"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Menu } from 'lucide-react';

const sections = [
  { id: 'hero', label: 'Magister' },
  { id: 'erscheinung', label: 'Erscheinung' },
  { id: 'werkstatt', label: 'Werkstatt' },
  { id: 'anwesen', label: 'Anwesen' },
  { id: 'reichtum', label: 'Wohlstand' },
  { id: 'beziehungen', label: 'Serran' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-sm bg-[#2d0c0c]/60 border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-fantasy text-amber-300 tracking-wide">Feuersturm</Link>
        <button onClick={() => setOpen(o=>!o)} className="md:hidden text-amber-300"><Menu /></button>
        <ul className="hidden md:flex gap-6 text-sm font-raleway">
          {sections.map(s => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="text-amber-300/70 hover:text-amber-200 transition-colors">{s.label}</a>
            </li>
          ))}
        </ul>
      </div>
      {open && (
        <ul className="md:hidden px-4 pb-4 space-y-2">
          {sections.map(s => (
            <li key={s.id}>
              <a onClick={()=>setOpen(false)} href={`#${s.id}`} className="block rounded bg-[#401414]/60 px-4 py-2 text-amber-200/80 hover:text-amber-100 hover:bg-[#4d1919]/70 transition">{s.label}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
