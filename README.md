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

1. **Charakterdaten:** Füge den Charakter zur zentralen Liste in `data/characters.ts` hinzu (mit Basis-Karteninfos)
2. **Theme:** Ergänze/oder passe das Theme im Registry `themes/characterThemes.ts` an (Hintergrund, Text, Back-Button, Akzente)
3. **Profilseite:** Erstelle entweder individuelle Komponenten unter `components/<name>/` und eine Seite `app/charaktere/<name>/page.tsx` ODER nutze die dynamische Route `app/charaktere/[id]`
4. **Assets:** Lege Bilder unter `public/images/` ab (einheitliche Pfade)
5. **Farben:** Falls neue Farbtöne nötig sind, erweitere `tailwind.config.js` (ggf. auch Safelist für dynamische Klassen)

## 🎨 Design-System

### Farbpalette
- **Void:** Dunkle Grundtöne (#0f172a bis #f8fafc)
- **Mystic:** Lila-magische Töne (#581c87 bis #faf5ff)
- **Arcane:** Blaue arkane Töne (#1e3a8a bis #eff6ff)
- **Flame:** Warme Feuer-Töne (#7c2d12 bis #fff7ed)

### Schriftarten
### Theme-Registry

Die pro-Charakter-Stilistik ist zentral in `themes/characterThemes.ts` definiert. Ein Eintrag enthält:
```
background: Klassen für Seitenhintergrund (z.B. Gradient)
text: Primäre Textfarbe
panel (optional): Zusatzklasse für Karten/Paneels
glowColor (optional): Basisfarbe für Partikel/Glühen
backButton: { container, hover, border, text }
```
Die Landing Page nutzt weiterhin vereinfachte Felder `theme` und `textColor` für Karten. Detailseiten ziehen konsistent Werte aus `pageTheme`.
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

## 🌐 Statischer Export (Hosting ohne Node Server)

Das Projekt ist so konfiguriert, dass es vollständig statisch exportiert werden kann. In `next.config.js` ist `output: 'export'` gesetzt und `images.unoptimized = true`, wodurch kein Image-Optimizer / keine Node-Laufzeit benötigt wird.

### Ablauf

```powershell
# Production Build + Export erzeugen
npm run build

# Ergebnis liegt im Ordner
dir .\out
```

Den Inhalt von `out/` kannst du direkt auf jeden beliebigen Static Host laden (GitHub Pages, Netlify Drop, S3/CloudFront, nginx, Apache, lokaler USB-Stick, etc.).

### Warum funktioniert das hier?

- Alle Daten kommen aus statischen TS-Dateien (`data/characters.ts`, `themes/...`).
- Die dynamische Route `app/charaktere/[id]/page.tsx` nutzt `generateStaticParams()` und erzeugt für jedes `id` eine fertige HTML-Datei beim Build.
- Es gibt keine API Routes oder serverseitigen `fetch`-Aufrufe.
- Keine serverseitigen Auth-Zustände oder Sessions.
- Keine Middleware.

### Grenzen

Wenn du später Funktionen wie Formulare mit Server-Handling, API Routen, serverseitige Auth oder On-Demand-Rendering brauchst, reicht der statische Export nicht mehr – dann bräuchtest du wieder `next start` (Node) oder Edge Functions.

### Lokale Vorschau (optional)

```powershell
npx serve out
```

Oder du öffnest einfach die `out/index.html` im Browser (manche History-PushState Routen funktionieren dann nur eingeschränkt; für diese Site unkritisch, da echte Dateien generiert werden).

---
