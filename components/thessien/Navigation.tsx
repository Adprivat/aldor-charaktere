'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Scroll, Crown, Sparkles, Clock, Zap } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Profil', href: '#profile', icon: Crown },
    { name: 'Magie', href: '#magic', icon: Sparkles },
    { name: 'Zeitleiste', href: '#timeline', icon: Clock },
    { name: 'Artefakte', href: '#artifacts', icon: Scroll },
    { name: 'Verbindungen', href: '#connections', icon: Zap },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-arcane-700/30">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#hero"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-runic text-xl text-arcane-300 hover:text-arcane-200 transition-colors"
          >
            Thessien
          </motion.a>

          {/* Desktop Navigation */}
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
                  className="flex items-center space-x-2 text-gray-300 hover:text-arcane-300 transition-colors group"
                >
                  <Icon className="w-4 h-4 group-hover:animate-pulse" />
                  <span>{item.name}</span>
                </motion.a>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-arcane-300 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 py-2 px-4 text-gray-300 hover:text-arcane-300 hover:bg-arcane-900/20 rounded transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </nav>
  )
}

export default Navigation
