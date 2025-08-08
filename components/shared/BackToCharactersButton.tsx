'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users } from 'lucide-react'
import clsx from 'clsx'

type ColorClasses = {
  bg: string
  hoverBg?: string
  border: string
  text: string
}

interface Props {
  href?: string
  positionClassName?: string
  color: ColorClasses
  ariaLabel?: string
}

export default function BackToCharactersButton({
  href = '/',
  positionClassName = 'fixed bottom-6 left-6 z-50',
  color,
  ariaLabel = 'Zur Charakterauswahl',
}: Props) {
  return (
    <Link href={href} aria-label={ariaLabel} className={positionClassName}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={clsx(
          'h-10 w-10 rounded-full backdrop-blur-sm border flex items-center justify-center shadow-md transition-colors',
          color.bg,
          color.border,
          color.text,
          color.hoverBg
        )}
        title={ariaLabel}
      >
        <Users className="w-5 h-5" />
      </motion.button>
    </Link>
  )
}
