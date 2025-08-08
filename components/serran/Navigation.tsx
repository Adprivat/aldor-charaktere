'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Crown, Eye, PackageOpen } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Profil', href: '#profile', icon: Crown },
    { name: 'Aussehen', href: '#appearance', icon: Eye },
    { name: 'Besitz', href: '#possessions', icon: PackageOpen },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-crimson/30">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#profile"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-runic text-xl text-rose-300 hover:text-rose-200 transition-colors"
          >
            Serran
          </motion.a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-2 text-gray-300 hover:text-rose-300 transition-colors group"
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </motion.a>
              )
            })}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menü"
          >
            ☰
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="block py-2 text-gray-300 hover:text-rose-300">
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
