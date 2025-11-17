'use client'

import { motion } from 'framer-motion'
import { Shield, Gavel, Swords, Church } from 'lucide-react'

export default function Profile() {
  return (
    <section id="profile" className="py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl bg-gradient-to-b from-black/50 to-black/30 border border-flame-400/30 p-6 shadow-[0_0_30px_rgba(255,167,38,0.15)]"
          >
            <h2 className="text-2xl font-fantasy text-flame-gold mb-2">Über Sir Weslej Eichbaum</h2>
            <p className="text-void-200 leading-relaxed">
              Ein massiger Mann in schwerem Plattenornat tritt aus dem Schatten wie eine lebende Statue aus vergessener Zeit. Weißes Tuch fällt in steifen Bahnen über eine Rüstung aus grauem Stahl, durchzogen von goldglühenden Lichtadern – nicht funkelnd, sondern brennend ruhig wie ein ewiges Urteil. Er sagt nichts. Und doch fühlt man sich bewertet.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Church, label: 'Glaube', text: 'Heiliges Licht – Respekt, Mitgefühl, Geduld' },
              { icon: Shield, label: 'Rang', text: 'Templer der Kirche des Lichts' },
              { icon: Swords, label: 'Spezialisierung', text: 'Jagd auf Ketzer, Dämonen, Untote, Kulte' },
              { icon: Gavel, label: 'Rolle', text: 'Richter, Sühner, Wächter des Dogmas' },
            ].map(({ icon: Icon, label, text }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-4 rounded-lg bg-black/40 border border-flame-400/20 hover:border-flame-400/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-1">
                  <Icon className="w-4 h-4 text-flame-gold" />
                  <span className="text-flame-gold font-semibold">{label}</span>
                </div>
                <p className="text-void-300 text-sm">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Rüstung & Waffe */}
        <div id="gear" className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl bg-black/40 border border-flame-400/20">
            <h3 className="text-xl text-flame-gold mb-2 flex items-center gap-2"><Shield className="w-4 h-4"/>Rüstung</h3>
            <p className="text-void-300 text-sm leading-relaxed">
              Schwere Plattenrüstung in mattem Stahlgrau und kaltem Weiß, durchzogen von leuchtenden goldenen Lichtadern – geweihtes Siegelwerk, funktional und einschüchternd. Ein Symbol uralter Disziplin und heiliger Macht.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-black/40 border border-flame-400/20">
            <h3 className="text-xl text-flame-gold mb-2 flex items-center gap-2"><Gavel className="w-4 h-4"/>Waffe</h3>
            <p className="text-void-300 text-sm leading-relaxed">
              Zweihändiger Streitkolben mit Lichtsigille – der „Morgenhammer“. Zu schwer für einen gewöhnlichen Krieger, schlicht und final wie ein Urteil.
            </p>
          </div>
        </div>

        {/* Mantel & Ornat */}
        <div id="appearance" className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl bg-black/40 border border-flame-400/20">
            <h3 className="text-xl text-flame-gold mb-2">Mantel und Ornat</h3>
            <p className="text-void-300 text-sm leading-relaxed">
              Elfenbeinfarbenes Weiß, glatt und schwer wie von heiligen Ölen durchzogen. Der Mantel schwingt kaum – er fällt streng wie das letzte Wort in einem Gerichtssaal.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-black/40 border border-flame-400/20">
            <h3 className="text-xl text-flame-gold mb-2">Ornamente</h3>
            <p className="text-void-300 text-sm leading-relaxed">
              Geometrisch abgestufte Bordüren, runische Umrahmungen wie schützende Ketten. Zwillingsmuster aus omegaförmigen Bögen – Sinnbild des letzten Schildes und des ewigen Kreislaufs von Licht und Prüfung.
            </p>
          </div>
        </div>

        {/* Credo */}
        <div id="creed" className="mt-12 p-6 rounded-xl bg-black/40 border border-flame-400/30">
          <h3 className="text-xl text-flame-gold mb-2">Auftreten</h3>
          <p className="text-void-200 leading-relaxed italic">
            „Er kam mit der Schwere einer Tür, die nie geöffnet wird – und doch wusste jeder in der Halle: Wer sie durchschreitet, wird vom Licht selbst gerichtet.“
          </p>
        </div>

        {/* Bilder */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[{src: '/images/weslej.png', alt: 'Weslej'}, {src: '/images/weslej2.png', alt: 'Weslej 2'}, {src: '/images/WeslejPortrait.png', alt: 'Portrait'}].map(img => (
            <div
              key={img.src}
              className="rounded-lg border border-flame-400/20 bg-black/40 aspect-[16/10] flex items-center justify-center"
            >
              <img src={img.src} alt={img.alt} className="max-w-full max-h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
