"use client";
import { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import BackToCharactersButton from './BackToCharactersButton';

interface CharacterLayoutProps {
  children: ReactNode;
  backColor: {
    container: string;
    hover?: string;
    border: string;
    text: string;
  };
  backgroundClassName: string;
  enableTopBackButton?: boolean;
  textClassName?: string; // override default text color
}

export default function CharacterLayout({
  children,
  backColor,
  backgroundClassName,
  enableTopBackButton = true,
  textClassName = 'text-void-100'
}: CharacterLayoutProps) {
  return (
    <div className={`min-h-screen ${backgroundClassName} ${textClassName} overflow-x-hidden`}>      
      {enableTopBackButton && (
        <div className="fixed top-4 left-4 z-50">
          <Link href="/">
            <motion.button
              className={`flex items-center gap-2 px-4 py-2 ${backColor.container} ${backColor.hover ?? ''} border ${backColor.border} rounded-lg backdrop-blur-sm transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className={`w-4 h-4 ${backColor.text}`} />
              <span className={`${backColor.text} font-medium`}>Zurück</span>
            </motion.button>
          </Link>
        </div>
      )}

      <BackToCharactersButton
        color={{
          bg: backColor.container,
          hoverBg: backColor.hover,
          border: `border ${backColor.border}`,
          text: backColor.text
        }}
      />
      {children}
    </div>
  );
}
