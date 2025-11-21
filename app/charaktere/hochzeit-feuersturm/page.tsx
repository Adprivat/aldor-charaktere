'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Heart, Sparkles, Flame } from 'lucide-react'
import { asset } from '@/utils/asset'

export default function HochzeitFeuersturmPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#280a0a] via-[#3b1010] to-[#1a0505] text-amber-100 overflow-x-hidden">
      {/* Navigation */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/">
          <motion.button
            className="flex items-center gap-2 px-4 py-2 bg-red-900/30 hover:bg-red-800/30 border border-amber-400/30 rounded-lg backdrop-blur-sm transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-4 h-4 text-amber-300" />
            <span className="text-amber-300 font-medium">Zurück</span>
          </motion.button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-amber-900/10 to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <Heart className="w-16 h-16 text-amber-400 mx-auto mb-6 animate-pulse" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-cinzel text-6xl md:text-7xl text-amber-300 mb-6 leading-tight"
          >
            Eine Hochzeit auf dem
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-red-500 to-amber-400">
              Anwesen Feuersturm
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center justify-center gap-4 text-2xl font-caslon text-amber-200 mb-12"
          >
            <Link href="/charaktere/sarelan" className="hover:text-amber-400 transition-colors">
              Sarelan Feuersturm
            </Link>
            <Heart className="w-6 h-6 text-red-500" />
            <Link href="/charaktere/serran" className="hover:text-amber-400 transition-colors">
              Serran Vesperan
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl text-amber-100/80 font-caslon max-w-3xl mx-auto leading-relaxed"
          >
            Die Vereinigung zweier Seelen in perfekter arkaner Harmonie
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-amber-400"
          >
            <Sparkles className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </section>

      {/* Decision Section */}
      <section className="relative py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-black/40 via-red-900/20 to-black/40 border border-amber-500/30 rounded-2xl p-10 shadow-2xl backdrop-blur-sm"
          >
            <h2 className="font-cinzel text-4xl text-amber-300 mb-8 text-center flex items-center justify-center gap-3">
              <Flame className="w-8 h-8" />
              Die Entscheidung
              <Flame className="w-8 h-8" />
            </h2>
            <div className="space-y-6 font-caslon text-amber-100/90 leading-relaxed text-lg">
              <p>
                Die Entscheidung gegen eine öffentliche Zeremonie in Silbermond war keine des Versteckens, sondern eine der Perfektion, und sie trafen sie gemeinsam. In den stillen Abendstunden nach ihrer Rückkehr, als sie im Salon bei einem Glas Wein saßen, sprachen sie über die Bedeutung ihrer Vereinigung.
              </p>
              <p>
                Für Sarelan, dessen gesamtes Leben der kontrollierten Anwendung von Macht und der Veredelung durch Präzision gewidmet war, war dies nicht ein Staatsakt oder ein Symbol für das Volk. Für Serran, deren Disziplin und analytischer Verstand jeden Aspekt ihres Daseins prägten, war es ebenso wenig eine Zurschaustellung für die Massen. Sie betrachteten ihre Verbindung als die Vollendung eines jahrzehntelangen Werkes, die finale, leuchtende Rune in dem komplexen arkanen Muster, das ihre beider Leben und Verbindung darstellte.
              </p>
              <p className="text-amber-200 font-semibold italic">
                Eine solche Zeremonie, darin waren sie sich einig, duldete keine unkontrollierten Variablen, keine applaudierende Menge, keine politischen Notwendigkeiten. Sie verlangte nach einem Umfeld, das so makellos und bedeutungsvoll war wie die Verbindung selbst.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rings Section */}
      <section className="relative py-20 bg-gradient-to-b from-transparent via-black/30 to-transparent">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-cinzel text-5xl text-amber-300 mb-16 text-center"
          >
            Die Ringe der Vereinigung
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-xl overflow-hidden ring-2 ring-amber-500/40 shadow-2xl shadow-red-900/50">
                <Image
                  src={asset('/images/wedding_rings.png')}
                  alt="Die Ringe der Vereinigung"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-amber-500/30 via-red-600/20 to-transparent blur-3xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-red-600/30 via-amber-500/20 to-transparent blur-3xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 font-caslon text-amber-100/90 leading-relaxed"
            >
              <p>
                Die Wahl der Ringe überließ er keinem Juwelier. In den tiefsten Kammern seiner magischen Werkstatt, umgeben von schwebenden Kristallen und summenden Eindämmungsfeldern, entwarf er die Siegel ihrer Verbindung selbst.
              </p>
              <p>
                Für seinen eigenen Ring wählte er ein breites Band aus reinem Gold, legiert mit einem Hauch von Rotgold, das an die Flammen des Sonnenbrunnens erinnerte. Die Runen, die sich um das Band wanden, waren nicht nur Zierde; sie waren ein Versprechen. Schutz, Loyalität und ewige Leidenschaft, in arkane Geometrie gegossen.
              </p>
              <p>
                Für Serran entwarf er einen Ring, der ihr Wesen spiegelte: schlanker, eleganter, von tödlicher Präzision. Wenn die Ringe zusammengebracht wurden, vervollständigten sie ein komplexes magisches Siegel.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wedding Attire */}
      <section className="relative py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-cinzel text-5xl text-amber-300 mb-16 text-center"
          >
            Die Hochzeitskleidung
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-red-900/30 via-black/40 to-amber-900/30 border border-amber-500/30 rounded-xl p-8 shadow-xl"
            >
              <h3 className="font-cinzel text-2xl text-amber-400 mb-4 flex items-center gap-2">
                <Flame className="w-6 h-6" />
                Sarelans Gewand
              </h3>
              <p className="font-caslon text-amber-100/80 leading-relaxed">
                Sein Eigenes war eine Variation seiner Magister-Roben, doch aus einer Seide gewoben, die mit Goldstaub und pulverisierten Rubinen durchsetzt war. Die Runenmuster an den Säumen und auf den Schulterstücken waren nicht aufgestickt, sondern eingewoben und leuchteten bei jeder Bewegung sanft auf. Es war die Kleidung eines Gelehrten, eines Meisters, aber auch die eines Bräutigams, der seine Macht und seinen Wohlstand als Ausdruck seiner Hingabe zur Schau stellte.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-rose-900/30 via-black/40 to-red-900/30 border border-rose-500/30 rounded-xl p-8 shadow-xl"
            >
              <h3 className="font-cinzel text-2xl text-rose-300 mb-4 flex items-center gap-2">
                <Heart className="w-6 h-6" />
                Serrans Kleid
              </h3>
              <p className="font-caslon text-amber-100/80 leading-relaxed">
                Serrans Kleid war ein Meisterwerk der Verwandlung. Auf den ersten Blick schien es aus schlichter, tiefroter Seide zu bestehen, die ihre elegante Figur umschmeichelte. Doch Sarelan hatte die Fäden mit einer subtilen Magie belegt. Im warmen Schein der magischen Laternen schien das Kleid lebendig zu werden. Goldene Muster, die an fließende Flammen erinnerten, tanzten über den Stoff, als wären sie flüssiges Licht. Gekrönt wurde ihr Haupt von einem zarten Diadem aus kleinen Juwelen, das ihr rotes Haar wie ein Sternenkranz schmückte.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ceremony Section */}
      <section className="relative py-24 bg-gradient-to-b from-transparent via-red-900/20 to-transparent">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-cinzel text-6xl text-amber-300 mb-20 text-center"
          >
            Die Zeremonie
          </motion.h2>

          {/* Ceremony Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative mb-16"
          >
            <div className="rounded-2xl overflow-hidden ring-4 ring-amber-500/50 shadow-2xl shadow-amber-900/50">
              <Image
                src={asset('/images/wedding_ceremony_intimate.png')}
                alt="Die Zeremonie auf dem Balkon"
                width={1200}
                height={600}
                className="object-cover w-full"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#280a0a] via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Ceremony Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 font-caslon text-amber-100/90 leading-relaxed text-lg"
          >
            <p>
              Als Ort für die Zeremonie wählten sie gemeinsam den eleganten Steinbalkon, der einen atemberaubenden Blick auf die goldenen Wälder von Quel&apos;Thalas bot. Es war der Ort, an dem sie oft in stiller Eintracht gestanden und die Schönheit ihrer Heimat bewundert hatten. Hier, zwischen den kunstvoll verzierten Säulen mit ihren leuchtenden Runeninschriften, würden sie ihre Gelübde austauschen.
            </p>

            <div className="bg-black/30 border-l-4 border-amber-500 p-6 rounded-r-lg">
              <p className="text-amber-200">
                Die Gästeliste war klein, aber sorgfältig gewählt. Keine politischen Würdenträger, keine entfernten Verwandten aus Pflichtgefühl, keine Schaulustigen. Nur jene, die ihnen wirklich nahestanden – eine Handvoll enger Vertrauter, Gelehrte, mit denen Sarelan seit Jahrhunderten korrespondierte, und einige wenige Freunde. Vielleicht ein Dutzend Seelen, nicht mehr.
              </p>
            </div>

            <p>
              Der Balkon war in eine Szenerie verwandelt worden, die gleichermaßen prunkvoll und intim war. Magische Feuerblumen in kunstvollen Kristallgefäßen säumten die Geländer, ihre Blütenblätter schwebten wie glühende Funken in der Luft. Schwebende arkane Lichter in warmen Gold- und Orangetönen schwebten über den Köpfen der Gäste.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Vows */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-xl overflow-hidden ring-2 ring-amber-500/40 shadow-2xl shadow-red-900/50">
                <Image
                  src={asset('/images/balcony_sunset_kiss.png')}
                  alt="Der Kuss bei Sonnenuntergang"
                  width={600}
                  height={800}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="font-cinzel text-4xl text-amber-300 mb-6">Die Gelübde</h3>
              
              <div className="space-y-6 font-caslon text-amber-100/90 leading-relaxed">
                <p>
                  Als die Sonne den Horizont berührte und den Himmel in ein Meer aus flüssigem Gold und Purpur tauchte, traten Sarelan und Serran auf den Balkon. Sie schritten gemeinsam zum Zentrum des Runenkreises.
                </p>

                <div className="bg-gradient-to-br from-red-900/20 via-black/30 to-amber-900/20 border border-amber-500/30 rounded-lg p-6">
                  <p className="text-amber-200 italic">
                    Sarelan nahm ihre Hände. Seine Stimme, sonst so präzise und befehlend, war erfüllt von einer tiefen, ruhigen Wärme. Er sprach nicht von Heldentaten oder Opfern, sondern von Mustern und Resonanzen. Er sprach davon, wie ihre Seelen seit Jahrzehnten in einer harmonischen Frequenz schwingen, wie sie die Unvollkommenheiten des anderen ausgleichen und wie ihre Vereinigung das vollkommenste arkane Konstrukt sei, das er je geschaffen habe.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-rose-900/20 via-black/30 to-red-900/20 border border-rose-500/30 rounded-lg p-6">
                  <p className="text-rose-200 italic">
                    Serran antwortete mit einer seltenen, unverhüllten Aufrichtigkeit. Ihre Stimme war klar und fest, doch jeder, der sie kannte, konnte die Emotion hören, die darunter lag. Sie sprach nicht von Liebe als stürmischem Gefühl, sondern als unumstößlicher Wahrheit, als Axiom ihres Lebens. Sie war sein Vermächtnis, und er war ihr Anker in der unendlichen Weite der Magie.
                  </p>
                </div>

                <p className="text-amber-300 font-semibold">
                  Als sie einander die Ringe ansteckten, bildete sich zwischen ihren Händen ein leuchtendes, ineinandergreifendes Siegel aus Licht, das Symbol ihrer vereinten Macht und ihrer ewigen Verbindung.
                </p>

                <p>
                  Der Kuss, der folgte, war nicht der stürmische Kuss der ersten Leidenschaft, sondern der tiefe, wissende Kuss zweier Seelen, die endlich ihren perfekten Platz im Universum gefunden hatten, an der Seite des anderen.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Celebration Section */}
      <section className="relative py-24 bg-gradient-to-b from-transparent via-black/40 to-transparent">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-cinzel text-6xl text-amber-300 mb-16 text-center"
          >
            Die Feier
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 font-caslon text-amber-100/90 leading-relaxed text-lg"
          >
            <p>
              Nach der Zeremonie wurden die Gäste in den prunkvollen Salon geführt, der für diesen Anlass in eine Szenerie verwandelt worden war, die selbst die erfahrensten unter ihnen staunen ließ. Die großen Fenster standen offen und ließen die kühle Abendluft herein, die den Duft der magischen Feuerblumen aus den Gärten mit sich trug.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-amber-900/20 via-black/30 to-red-900/20 border border-amber-500/30 rounded-xl p-8">
                <h3 className="font-cinzel text-2xl text-amber-400 mb-4 flex items-center gap-2">
                  <Sparkles className="w-6 h-6" />
                  Das Festmahl
                </h3>
                <p className="text-amber-100/80 leading-relaxed">
                  Die Speisen, die serviert wurden, waren keine gewöhnlichen Gerichte. Jeder Gang war ein Meisterwerk der kulinarischen und magischen Kunst. Zarte Scheiben von in Honig glasiertem Phasenhühnchen, das mit arkanen Kräutern gewürzt war. Filigrane Pasteten gefüllt mit seltenen Pilzen. Frische Früchte, die in flüssigem Gold zu schwimmen schienen.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-900/20 via-black/30 to-amber-900/20 border border-red-500/30 rounded-xl p-8">
                <h3 className="font-cinzel text-2xl text-amber-400 mb-4 flex items-center gap-2">
                  <Flame className="w-6 h-6" />
                  Der Arkanwein
                </h3>
                <p className="text-amber-100/80 leading-relaxed">
                  Der Wein, der kredenzt wurde, war ein jahrhundertealter Arkanwein aus Sarelans privater Sammlung. Jeder Schluck veränderte seinen Geschmack subtil, von süß zu herb, von fruchtig zu würzig, als würde er sich an die Stimmung des Trinkenden anpassen.
                </p>
              </div>
            </div>

            <p>
              Sarelan und Serran saßen an der Stirnseite der Tafel, nicht auf erhöhten Thronen, sondern auf eleganten Sesseln. Dies war keine Schau ihrer Überlegenheit, sondern eine Feier unter Gleichgesinnten. Sarelan, dessen Gesicht sonst so streng und kontrolliert war, zeigte ein seltenes, warmes Lächeln. Serran erlaubte sich kleine Momente der Freude, ein leises Lachen, ein sanftes Berühren von Sarelans Hand.
            </p>

            <div className="bg-black/30 border-l-4 border-amber-500 p-6 rounded-r-lg">
              <p className="text-amber-200 italic">
                Zum Abschluss des Festmahls wurde ein Dessert serviert, das selbst die verwöhntesten Gäste in Erstaunen versetzte. Eine Kreation aus kristallisiertem Honig, durchzogen mit feinen Fäden aus essbarem Gold, die auf der Zunge schmolzen und ein Gefühl von reiner, konzentrierter Magie hinterließen.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Image - Rings */}
      <section className="relative py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden ring-4 ring-amber-500/50 shadow-2xl shadow-amber-900/50">
              <Image
                src={asset('/images/rings_on_hands_sunset.png')}
                alt="Vereint für die Ewigkeit"
                width={1200}
                height={800}
                className="object-cover w-full"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#280a0a] via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Ending Section */}
      <section className="relative py-24 mb-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-black/60 via-red-900/30 to-black/60 border-2 border-amber-500/40 rounded-2xl p-12 shadow-2xl text-center"
          >
            <Heart className="w-12 h-12 text-amber-400 mx-auto mb-6" />
            <p className="font-caslon text-xl text-amber-100/90 leading-relaxed italic mb-8">
              Als der letzte Gast gegangen war und die Stille über das Anwesen zurückkehrte, standen Sarelan und Serran allein im Salon. Sie traten hinaus auf den Balkon, wo ein kleiner, intimer Tisch für zwei vorbereitet war. Sie setzten sich, die Stille der Nacht um sie herum, und blickten hinaus auf die goldenen Wälder, die im Mondlicht schimmerten.
            </p>
            <p className="font-cinzel text-2xl text-amber-300">
              Sie sprachen diese Nacht kaum noch ein Wort.
            </p>
          </motion.div>

          {/* Back Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mt-16"
          >
            <Link href="/charaktere/sarelan">
              <motion.button
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-900/40 to-amber-900/40 hover:from-red-800/50 hover:to-amber-800/50 border border-amber-400/40 rounded-lg backdrop-blur-sm transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="w-5 h-5 text-amber-300" />
                <span className="text-amber-300 font-medium">Zu Sarelan</span>
              </motion.button>
            </Link>

            <Link href="/charaktere/serran">
              <motion.button
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-900/40 to-red-900/40 hover:from-rose-800/50 hover:to-red-800/50 border border-rose-400/40 rounded-lg backdrop-blur-sm transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="w-5 h-5 text-rose-300" />
                <span className="text-rose-300 font-medium">Zu Serran</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
