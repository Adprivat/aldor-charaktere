"use client";
import { useEffect, useState } from 'react';

interface Rune { left:number; top:number; delay:number; size:number }

export default function RunesBackground() {
  const [runes,setRunes] = useState<Rune[]>([]);
  useEffect(()=>{
    const list: Rune[] = Array.from({length:26}).map((_,i)=>({
      left: Math.random()*100,
      top: Math.random()*100,
      delay: Math.random()*8,
      size: 12 + Math.random()*32
    }));
    setRunes(list);
  },[]);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {runes.map((r,i)=>(
        <div key={i}
          className="absolute text-amber-500/10 font-cinzel animate-pulse"
          style={{left:`${r.left}%`,top:`${r.top}%`,fontSize:r.size,animationDuration:`${6 + (i%5)}s`,animationDelay:`${r.delay}s`}}>
          ✧
        </div>
      ))}
    </div>
  );
}
