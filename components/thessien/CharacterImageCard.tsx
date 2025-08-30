'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Star, Shield, Zap, Clock, Book, Maximize2, Square } from 'lucide-react'
import Image from 'next/image'
const bp = process.env.NEXT_PUBLIC_BASE_PATH || '';

const CharacterImageCard = () => {
  const [imageMode, setImageMode] = useState<'cover' | 'contain' | 'natural'>('contain') // Standard auf 'contain' geändert
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [imageError, setImageError] = useState(false)

  const toggleImageMode = () => {
    setImageMode(prev => {
      switch (prev) {
        case 'cover': return 'contain'
        case 'contain': return 'natural'
        case 'natural': return 'cover'
        default: return 'contain'
      }
    })
  }

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <>
      <div className="relative group">
        {/* Image Controls */}
        <div className="absolute top-4 right-4 z-20 flex gap-2">
          <button
            onClick={toggleImageMode}
            className="bg-black/60 hover:bg-black/80 text-white p-2 rounded-lg backdrop-blur-sm transition-colors"
            title={`Anzeigemodus: ${imageMode}`}
          >
            <Square className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsFullscreen(true)}
            className="bg-black/60 hover:bg-black/80 text-white p-2 rounded-lg backdrop-blur-sm transition-colors"
            title="Vollbild"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Main Image Container */}
        <div className={`rounded-2xl relative overflow-hidden ${
          imageMode === 'natural' ? 'w-full h-auto' : 
          imageMode === 'contain' ? 'w-full h-[500px]' : 'aspect-square h-96'
        }`}>
          {/* Character Image */}
          <div className="w-full h-full relative">
            {!imageError ? (
              <Image
                src={bp + '/images/thessien-character.jpg'}
                alt="Thessien der Wanderer - Erzmagier des Kirin Tor"
                fill={imageMode !== 'natural'}
                width={imageMode === 'natural' ? 800 : undefined}
                height={imageMode === 'natural' ? 600 : undefined}
                className={`transition-transform duration-300 group-hover:scale-105 ${
                  imageMode === 'cover' ? 'object-cover object-top' :
                  imageMode === 'contain' ? 'object-contain object-center' :
                  'w-full h-auto object-scale-down'
                }`}
                style={{
                  objectPosition: imageMode === 'cover' ? 'center top' : 'center center'
                }}
                onError={handleImageError}
                priority
              />
            ) : (
              <div className="w-full h-full bg-black/40 flex items-center justify-center">
                <div className="text-center">
                  <User className="w-32 h-32 text-arcane-300 mx-auto mb-4" />
                  <p className="text-arcane-200 font-arcane text-lg">
                    Thessien der Wanderer
                  </p>
                  <p className="text-gray-400 text-sm">
                    Erzmagier des Kirin Tor
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    Charakterbild nicht verfügbar
                  </p>
                </div>
              </div>
            )}
          </div>
          
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
          
          {/* Character Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
            <div className="bg-black/80 backdrop-blur-md rounded-lg p-4">
              <h3 className="text-arcane-200 font-arcane text-lg font-semibold mb-1">
                Thessien der Wanderer
              </h3>
              <p className="text-gray-300 text-sm">
                Erzmagier der Kirin Tor
              </p>
            </div>
          </div>
          
          {/* Magic Particles */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-arcane-400 rounded-full animate-ping pointer-events-none"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 12}%`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6"
          onClick={() => setIsFullscreen(false)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={bp + '/images/thessien-character.jpg'}
              alt="Thessien der Wanderer - Vollbild"
              width={1200}
              height={800}
              className="rounded-xl object-contain max-h-[90vh] max-w-[90vw]"
              onError={handleImageError}
            />
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2 rounded-lg backdrop-blur-sm transition-colors"
            >
              ✕
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-xl">
              <h3 className="font-runic text-2xl text-white mb-2">
                Thessien der Wanderer
              </h3>
              <p className="text-gray-300">
                Erzmagier des Kirin Tor - Vollbild Ansicht
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

export default CharacterImageCard
