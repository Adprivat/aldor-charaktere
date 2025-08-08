'use client'

import { motion } from 'framer-motion'
import { Eye, Feather, Book, Gem, Shirt, Package } from 'lucide-react'

export default function Profile() {
  return (
    <section id="profile" className="py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Intro-Box in Anlehnung an die Buch-Gestaltung */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl bg-gradient-to-b from-black/50 to-black/30 border border-rose-800/40 p-6 shadow-[0_0_30px_rgba(244,63,94,0.15)]"
          >
            <h2 className="text-2xl font-fantasy text-rose-300 mb-2">Über Serran</h2>
            <p className="text-void-200 leading-relaxed">
              Eine junge Blutelfe, deren gesamtes Auftreten von Disziplin, Kontrolle und Zurückhaltung geprägt ist. Das tiefrote Haar trägt sie offen, doch nicht unordentlich. Es ist exakt gelegt, glatt, gleichmäßig – als wäre jede Strähne bewusst dort, wo sie hingehört. Kein Schmuck, keine verspielten Zöpfe, nur klare Linien, wie ein Teil ihrer Haltung. Ihre Figur entspricht jener zeitlosen Perfektion, wie sie viele Elfen tragen.
            </p>
          </motion.div>

          {/* Attribute-Kacheln */}
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Eye, label: 'Augen', text: 'Smaragdgrün, ruhig, prüfend' },
              { icon: Feather, label: 'Auftritt', text: 'Analytisch, beherrscht, kontrolliert' },
              { icon: Shirt, label: 'Kleidung', text: 'Schlicht, funktional, makellos' },
              { icon: Gem, label: 'Schmuck', text: 'Kein sichtbarer Zierrat' },
            ].map(({ icon: Icon, label, text }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-4 rounded-lg bg-black/40 border border-rose-900/30 hover:border-rose-700/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-1">
                  <Icon className="w-4 h-4 text-rose-300" />
                  <span className="text-rose-300 font-semibold">{label}</span>
                </div>
                <p className="text-void-300 text-sm">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Besitz */}
        <div id="possessions" className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl bg-black/40 border border-rose-900/30">
            <h3 className="text-xl text-rose-300 mb-2 flex items-center gap-2"><Package className="w-4 h-4"/>Kleider und Besitz</h3>
            <p className="text-void-300 text-sm leading-relaxed">
              Sie bevorzugt Kleidung, die dem Zweck dient: präzise, ordentlich, sauber. Ihre Bewegungen sind ruhig und bedacht – nichts an ihr wirkt zufällig, nichts unkontrolliert.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-black/40 border border-rose-900/30">
            <h3 className="text-xl text-rose-300 mb-2 flex items-center gap-2"><Book className="w-4 h-4"/>Haltung</h3>
            <p className="text-void-300 text-sm leading-relaxed">
              Mimik und Gestik sind reduziert. Wer ihre Reaktion sucht, muss genau hinsehen: ein kaum wahrnehmbares Zucken des Mundwinkels, ein minimaler Blickwechsel – mehr gibt sie selten preis.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
