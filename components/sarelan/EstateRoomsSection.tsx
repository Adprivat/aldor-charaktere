"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { asset } from '@/utils/asset';
import Parallax from './Parallax';

interface RoomSection {
  id: string;
  title: string;
  image: string;
  alt: string;
  description: string;
}

const rooms: RoomSection[] = [
  {
    id: 'bibliothek',
    title: 'Bibliothek des Magisters Sarelan',
    image: '/images/Sarelan_Bibliothek.png',
    alt: 'Sarelans Bibliothek mit deckenhohen Bücherregalen, roten Sesseln und magischem Kaminfeuer',
    description: 'Sarelans Bibliothek ist das Herz seines gelehrten Lebens. Deckenhohe Regale aus dunklem Edelholz tragen antike Folianten, sorgfältig gerollte Pergamente und fragile Manuskripte aus längst vergangenen Epochen. Im Zentrum des Raumes lädt ein Lesebereich mit tiefroten Samtsesseln und einem polierten Schreibtisch dazu ein, in die Geheimnisse der Arkane einzutauchen.\n\nDurch hohe Bogenfenster mit bunt gefassten Scheiben fällt warmes, goldenes Licht, das von schwebenden Kerzen und leuchtenden Orbs aufgegriffen wird. Ein Kamin, dessen Flammen in Rot und Gold tanzen, hüllt die Bibliothek in behagliche Wärme. In verglasten Vitrinen ruhen seltene Artefakte, Kristalle und Relikte – stille Zeugen eines Lebens, das der Suche nach Wissen gewidmet ist.'
  },
  {
    id: 'salon',
    title: 'Sarelans Empfangssalon',
    image: '/images/Sarelan_Salon.png',
    alt: 'Eleganter Salon mit rot-goldenen Möbeln, Teppichen und magischem Kronleuchter',
    description: 'Der Salon des Magisters ist der Ort, an dem Sarelan Gäste empfängt – ob adelige Besucher aus Silbermond oder vertraute Weggefährten. Plüschige Sofas und Sessel aus rot-goldenem Samt gruppieren sich um einen kunstvoll gearbeiteten Tisch und laden zu langen Gesprächen bei Wein und Geschichten ein.\n\nDie Wände sind mit Wandteppichen geschmückt, deren Flammenmotive und arkane Symbole im Licht eines prächtigen Kronleuchters schimmern. Schwebende Kristalle streuen sanftes, warmes Leuchten über polierte Holzböden und kostbare Teppiche. An einem Sideboard glitzern Kristallkaraffen und Kelche, während Gemälde thalassischer Landschaften an die Schönheit Quel\'Thalas\' erinnern. Frische, magisch genährte Feuerblumen verleihen dem Raum lebendige Farbe und einen Hauch von Luxus.'
  },
  {
    id: 'arbeitszimmer',
    title: 'Sarelans magisches Arbeitszimmer',
    image: '/images/Sarelan_Arbeitszimmer.png',
    alt: 'Magische Werkstatt mit Runenkreisen am Boden, Artefaktwerkbank und leuchtenden Kristallen',
    description: 'In Sarelans Arbeitszimmer zeigt sich die nüchterne Seite seiner Magie: präzise, konzentriert und bis ins letzte Detail durchdacht. Eine breite Werkbank ist mit Werkzeugen, leuchtenden Kristallen und halbfertigen Artefakten übersät. Konzentrische Runenkreise sind in den Boden eingelassen und pulsieren in Blau und Orange, wenn der Magister ihre Macht entfesselt.\n\nAn den Wänden reihen sich Regale voller beschrifteter Gläser, Kristalle und seltener Materialien. Diagramme, Runenschemata und Formeln leuchten in arkaner Schrift und dokumentieren Jahre intensiver Forschung. In einem Resonanzbecken schweben glimmende Runen über der Oberfläche, während Eindämmungsfelder gefährliche Artefakte sicher umschließen. Ein kleiner Schmiedebereich mit magischen Flammen für filigrane Runenarbeiten macht deutlich: Hier entsteht Magie nicht im Ritualsaal, sondern Schritt für Schritt am Werkstück.'
  },
  {
    id: 'balkon',
    title: 'Ausblick von Sarelans Balkon',
    image: '/images/Sarelan_Balkonblick.png',
    alt: 'Balkon mit Blick über die goldenen Wälder Quel\'Thalas\' und die Türme von Silbermond',
    description: 'Vom Balkon seines Anwesens blickt Sarelan über die leuchtenden Wälder Quel\'Thalas\'. Ein kunstvoll gearbeitetes Steingeländer mit elfischen Flammenmotiven und Runeninschriften rahmt die Aussicht auf uralte Bäume mit goldenen und bernsteinfarbenen Blättern, die im Licht der Dämmerung zu glimmen scheinen.\n\nBequeme Stühle mit roten Kissen und ein kleiner Tisch laden dazu ein, hier den Blick schweifen zu lassen – hin zu den fernen Türmen Silbermonds, die über den Wipfeln aufragen. Magische Feuerblumen in Pflanzgefäßen und schwebende Partikel in der Luft verleihen der Szene eine stille, beinahe zeitlose Magie. Auf diesem Balkon finden Sarelans Kontemplation, seine Zweifel und seine Hoffnung einen Ort.'
  }
];

export default function EstateRoomsSection() {
  return (
    <section id="anwesen-raeume" className="relative py-28">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-red-900/15 via-amber-600/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-amber-700/10 to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="font-cinzel text-5xl bg-gradient-to-r from-amber-300 via-amber-400 to-red-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(251,191,36,0.35)] mb-8">
            Sarelans Anwesen
          </h2>
          <p className="text-amber-100/75 max-w-4xl mx-auto font-caslon leading-relaxed text-lg">
            Sarelans Anwesen vereint alle Facetten seines Lebens als thalassischer Magister:
            In der Bibliothek sammelt er Wissen, im Salon empfängt er Gäste, in seinem Arbeitszimmer formt er Magie – und auf dem Balkon findet er Ruhe und Klarheit.
            Die folgenden Eindrücke geben einen Blick hinter die Fassade des Magisters und zeigen, wie eng Gelehrsamkeit, Gastfreundschaft, Forschung und Kontemplation in seinem Alltag miteinander verwoben sind.
          </p>
        </motion.div>

        {/* Room Sections */}
        <div className="space-y-32">
          {rooms.map((room, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${!isEven ? 'md:grid-flow-dense' : ''}`}
              >
                {/* Image */}
                <motion.div
                  className={`relative ${!isEven ? 'md:col-start-2' : ''}`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  <Parallax distance={70}>
                    <div className="relative rounded-xl overflow-hidden ring-2 ring-amber-500/30 shadow-2xl shadow-red-900/40">
                      <div className="aspect-[4/3] relative">
                        <Image
                          src={asset(room.image)}
                          alt={room.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#280a0a]/60 via-transparent to-transparent" />
                      </div>
                    </div>
                  </Parallax>
                  {/* Decorative glow */}
                  <div className={`absolute -z-10 ${isEven ? '-right-8 -bottom-8' : '-left-8 -bottom-8'} w-64 h-64 rounded-full bg-gradient-to-br from-amber-500/20 via-red-600/15 to-transparent blur-3xl`} />
                </motion.div>

                {/* Text Content */}
                <motion.div
                  className={`space-y-6 ${!isEven ? 'md:col-start-1' : ''}`}
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <div>
                    <h3 className="font-cinzel text-3xl text-amber-300 mb-4 drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]">
                      {room.title}
                    </h3>
                    <div className="h-1 w-24 bg-gradient-to-r from-amber-500 via-red-600 to-transparent rounded-full mb-6" />
                  </div>
                  
                  <div className="space-y-4">
                    {room.description.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-amber-100/75 font-caslon leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
