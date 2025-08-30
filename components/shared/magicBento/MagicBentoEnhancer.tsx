"use client";
import React, { useEffect } from "react";

interface MagicBentoEnhancerProps {
  sectionSelector: string;
  glowColor?: string; // rgb like '255, 100, 140'
  spotlightRadius?: number;
}

const DEFAULT_GLOW = "255, 100, 140";

const injectOnce = (id: string, css: string) => {
  if (document.getElementById(id)) return;
  const style = document.createElement("style");
  style.id = id;
  style.textContent = css;
  document.head.appendChild(style);
};

export const MagicBentoEnhancer: React.FC<MagicBentoEnhancerProps> = ({
  sectionSelector,
  glowColor = DEFAULT_GLOW,
  spotlightRadius = 320,
}) => {
  useEffect(() => {
    const section = document.querySelector(sectionSelector) as HTMLElement | null;
    if (!section) return;

    const cards = Array.from(section.querySelectorAll<HTMLElement>(".bento-card"));
    if (!cards.length) return;

    injectOnce(
      "magic-bento-enhancer-style",
      `/* minimal glow layer */
      .bento-card{position:relative;--glow-x:50%;--glow-y:50%;--glow-intensity:0;--glow-radius:${spotlightRadius}px;}
      .bento-card::after{content:'';position:absolute;inset:0;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .35s ease; background:radial-gradient(circle at var(--glow-x) var(--glow-y), rgba(${glowColor},calc(var(--glow-intensity)*0.55)) 0%, rgba(${glowColor},calc(var(--glow-intensity)*0.18)) 40%, transparent 72%);mix-blend-mode:screen;}
      .bento-card:hover::after{opacity:1;}
      .bento-spotlight-layer{position:fixed;left:0;top:0;width:800px;height:800px;pointer-events:none;border-radius:50%;background:radial-gradient(circle, rgba(${glowColor},0.18)0%, rgba(${glowColor},0.10)25%, rgba(${glowColor},0.04)55%, transparent 75%);opacity:0;transform:translate(-50%,-50%);mix-blend-mode:screen;z-index:40;}
    `
    );

    const spotlight = document.createElement("div");
    spotlight.className = "bento-spotlight-layer";
    document.body.appendChild(spotlight);

    const proximity = spotlightRadius * 0.55;
    const fadeDistance = spotlightRadius * 0.85;

    const handleMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      if (!inside) {
        spotlight.style.opacity = "0";
        cards.forEach(c => c.style.setProperty("--glow-intensity", "0"));
        return;
      }
      spotlight.style.left = e.clientX + "px";
      spotlight.style.top = e.clientY + "px";
      let closest = Infinity;
      cards.forEach(card => {
        const cr = card.getBoundingClientRect();
        const cx = cr.left + cr.width / 2;
        const cy = cr.top + cr.height / 2;
        const dist = Math.hypot(e.clientX - cx, e.clientY - cy) - Math.max(cr.width, cr.height) / 2;
        const d = Math.max(0, dist);
        closest = Math.min(closest, d);
        let intensity = 0;
        if (d <= proximity) intensity = 1; else if (d <= fadeDistance) intensity = (fadeDistance - d) / (fadeDistance - proximity);
        const relX = ((e.clientX - cr.left) / cr.width) * 100;
        const relY = ((e.clientY - cr.top) / cr.height) * 100;
        card.style.setProperty("--glow-x", relX + "%");
        card.style.setProperty("--glow-y", relY + "%");
        card.style.setProperty("--glow-intensity", intensity.toString());
      });
      const op = closest <= proximity ? 0.85 : closest <= fadeDistance ? ((fadeDistance - closest) / (fadeDistance - proximity)) * 0.85 : 0;
      spotlight.style.opacity = op.toString();
    };

    document.addEventListener("mousemove", handleMove);
    return () => {
      document.removeEventListener("mousemove", handleMove);
      spotlight.remove();
    };
  }, [sectionSelector, glowColor, spotlightRadius]);

  return null;
};

export default MagicBentoEnhancer;
