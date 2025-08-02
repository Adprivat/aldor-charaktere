# Aldor Rollenspielgruppe - Charakterprofile

Eine moderne, interaktive Webanwendung zur Präsentation der Charaktere unserer Rollenspielgruppe.

## 🚀 Features

- **Eine einzige Anwendung** - Alle Charaktere in einem System vereint
- **Interaktive Profile** - Detaillierte Charakterseiten mit Animationen
- **Responsive Design** - Funktioniert auf allen Geräten
- **Modern UI** - Dunkles Fantasy-Theme mit magischen Effekten
- **TypeScript** - Typsichere Entwicklung
- **Next.js 14** - Modernste Web-Technologie

## 🎭 Charaktere

### Mereldar Glutspeer
- **Titel:** Kommandantin • Lampenanzünderin
- **Volk:** Arathi (Mensch)
- **Klasse:** Paladin/Kriegerin
- **Besonderheit:** Einzigartige Verbindung zu den Beledar-Kristallen

### Thessien der Wanderer
- **Titel:** Erzmagier der Kirin Tor
- **Volk:** Mensch
- **Klasse:** Erzmagier
- **Spezialisierung:** Zeitmagie & Arkane Künste

## 🛠️ Installation & Start

### Voraussetzungen
- Node.js (Version 18 oder höher)
- npm oder yarn

### Schnellstart
```bash
# Repository klonen oder Ordner öffnen
cd aldor-charaktere

# Dependencies installieren
npm install

# Development Server starten
npm run dev
```

Die Anwendung ist dann unter `http://localhost:3000` (oder dem nächsten verfügbaren Port) erreichbar.

## 🏗️ Verfügbare Scripts

```bash
# Development Server starten
npm run dev

# Production Build erstellen
npm run build

# Production Server starten
npm start

# Code Linting
npm run lint
```

## 🎨 Technologie-Stack

- **Framework:** Next.js 14 mit App Router
- **Styling:** Tailwind CSS
- **Animationen:** Framer Motion
- **Icons:** Lucide React
- **3D-Effekte:** React Three Fiber (für spezielle Effekte)
- **Sprache:** TypeScript
- **Fonts:** Google Fonts (Cinzel, Libre Caslon Text, Raleway)

## 📁 Projektstruktur

```
aldor-charaktere/
├── app/
│   ├── charaktere/
│   │   ├── mereldar/
│   │   │   └── page.tsx
│   │   └── thessien/
│   │       └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
├── public/
│   └── images/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🎮 Neue Charaktere hinzufügen

Um einen neuen Charakter hinzuzufügen:

1. **Charakterdaten:** Füge den Charakter zur `characters` Liste in `app/page.tsx` hinzu
2. **Profilseite:** Erstelle eine neue Seite unter `app/charaktere/[charaktername]/page.tsx`
3. **Assets:** Füge Bilder unter `public/images/` hinzu
4. **Farben:** Erweitere die Farbpalette in `tailwind.config.js` wenn nötig

## 🎨 Design-System

### Farbpalette
- **Void:** Dunkle Grundtöne (#0f172a bis #f8fafc)
- **Mystic:** Lila-magische Töne (#581c87 bis #faf5ff)
- **Arcane:** Blaue arkane Töne (#1e3a8a bis #eff6ff)
- **Flame:** Warme Feuer-Töne (#7c2d12 bis #fff7ed)

### Schriftarten
- **Fantasy:** Cinzel (für Überschriften)
- **Elegant:** Libre Caslon Text (für Untertitel)
- **Modern:** Raleway (für Fließtext)

## 🔧 Konfiguration

### Umgebungsvariablen
Momentan werden keine speziellen Umgebungsvariablen benötigt.

### Tailwind CSS
Die Konfiguration befindet sich in `tailwind.config.js` und umfasst:
- Custom Farbpalette für Fantasy-Themes
- Spezielle Schriftarten
- Gradient-Definitionen

## 📱 Browser-Kompatibilität

- Chrome/Edge: Vollständig unterstützt
- Firefox: Vollständig unterstützt
- Safari: Vollständig unterstützt
- Mobile Browser: Responsive Design

## 🤝 Beitragen

Da dies ein privates Rollenspiel-Projekt ist, wende dich an die Gruppenleitung für:
- Neue Charaktere
- Design-Änderungen
- Feature-Wünsche
- Bug-Reports

## 📄 Lizenz

Dieses Projekt ist für die private Nutzung der Aldor Rollenspielgruppe bestimmt.
Alle Charaktere sind Eigentum ihrer jeweiligen Spieler.

---

*Erstellt mit ❤️ für die Aldor Rollenspielgruppe*
