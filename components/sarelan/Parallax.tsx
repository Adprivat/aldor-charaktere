"use client";
import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxProps {
  children: ReactNode;
  /** Amount of vertical travel in px from start to end of scroll (half goes upward start, half downward end). */
  distance?: number; // total travel range (positive number)
  /** Optional className passed to wrapper */
  className?: string;
}

/**
 * Lightweight parallax wrapper: element moves subtly on vertical scroll relative to viewport.
 * Usage: wrap any image container <Parallax distance={60}>...</Parallax>
 */
export default function Parallax({ children, distance = 60, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [distance / -2, distance / 2]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
