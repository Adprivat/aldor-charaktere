# Aldor Rollenspielgruppe - Charakterprofile

Eine moderne, interaktive Webanwendung zur Präsentation der Charaktere unserer Rollenspielgruppe.

## 📊 Projekt-Übersicht

- **5 Charaktere** mit individuellen, detaillierten Profilseiten
- **~6.300 Zeilen Code** (TypeScript/TSX/CSS)
- **69+ MB Assets** (Hochauflösende Charakterbilder)
- **Vollständig statisch** exportierbar für einfaches Hosting
- **Next.js 14** mit modernem App Router
- **Produktiv einsetzbar** ohne Server-Infrastruktur

## 🚀 Features

- **Eine einzige Anwendung** - Alle Charaktere in einem System vereint
- **Interaktive Profile** - Detaillierte Charakterseiten mit Animationen und 3D-Effekten
- **Responsive Design** - Funktioniert optimal auf allen Geräten
- **Modern UI** - Individuelles dunkles Fantasy-Theme für jeden Charakter
- **Zentrale Theme-Verwaltung** - Konsistentes Design-System mit character-spezifischen Farbpaletten
- **Statischer Export** - Kann auf jedem Static Host ohne Node.js Server betrieben werden
- **TypeScript** - Vollständig typsichere Entwicklung
- **Next.js 14** - Modernste Web-Technologie mit App Router
- **Performance-Optimiert** - Schnelle Ladezeiten durch statische Generierung
- **Erweiterbar** - Einfaches Hinzufügen neuer Charaktere über zentrale Konfiguration

## 🎭 Charaktere

Die Aldor Rollenspielgruppe präsentiert derzeit fünf detaillierte Charakterprofile:

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

### Serran Vesperan
- **Titel:** Lehrling des Arkanen
- **Volk:** Elfe
- **Klasse:** Magierin
- **Besonderheit:** Auf der Suche nach den Geheimnissen der Magie

### Sir Weslej Eichbaum
- **Titel:** Templer der Kirche des Lichts
- **Volk:** Mensch
- **Klasse:** Krieger/Inquisitor
- **Besonderheit:** Ritterlicher Richter des Lichts

### Sarelan Feuersturm
- **Titel:** Magister von Quel'Thalas
- **Volk:** Blutelfe
- **Klasse:** Pyromant & Runenmeister
- **Besonderheit:** Gelehrter des Feuers und Verfechter von Wohlstand durch Wissen

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
# Development Server starten (mit Hot Reload)
npm run dev
# → Öffnet http://localhost:3000 (oder nächster freier Port)

# Production Build + Static Export erstellen
npm run build
# → Erzeugt optimierten Build im /out Verzeichnis
# → Alle Seiten werden zu statischen HTML-Dateien

# Production Server starten (optional, für Vorschau)
npm start
# → Nur für Testing, nicht für Production-Deployment nötig
# → Static Export kann direkt deployed werden

# Code Linting (ESLint)
npm run lint
# → Prüft Code auf Fehler und Style-Probleme
```

**Tipp:** Nach `npm run build` kann der Inhalt des `out/` Ordners direkt auf einen Static Host deployed werden.

## 🎨 Technologie-Stack

- **Framework:** Next.js 14.2 mit App Router
- **Styling:** Tailwind CSS 3.3 mit custom Fantasy-Farbpalette
- **Animationen:** Framer Motion 10.16 (für Seitenübergänge und UI-Animationen)
- **Icons:** Lucide React 0.284
- **3D-Effekte:** React Three Fiber 8.18 + Drei 9.122 (für 3D-Kristalle und spezielle Effekte)
- **Sprache:** TypeScript 5.2
- **Fonts:** Google Fonts (Cinzel für Überschriften, Libre Caslon Text für Untertitel, Raleway für Fließtext)
- **Build:** Static Export (keine Server-Laufzeit benötigt)
- **Utilities:** clsx für bedingte CSS-Klassen

## 📁 Projektstruktur

```
aldor-charaktere/
├── app/
│   ├── charaktere/
│   │   ├── [id]/           # Dynamische Route für künftige Charaktere
│   │   │   └── page.tsx
│   │   ├── mereldar/       # Dedizierte Charakterseiten
│   │   │   └── page.tsx
│   │   ├── thessien/
│   │   │   └── page.tsx
│   │   ├── serran/
│   │   │   ├── page.tsx
│   │   │   └── layout.tsx
│   │   ├── weslej/
│   │   │   └── page.tsx
│   │   └── sarelan/
│   │       └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx            # Landing Page mit Charakterauswahl
├── components/
│   ├── mereldar/           # Charakter-spezifische Komponenten
│   ├── thessien/
│   ├── serran/
│   ├── weslej/
│   ├── sarelan/
│   └── shared/             # Gemeinsam genutzte Komponenten
├── data/
│   └── characters.ts       # Zentrale Charakterdaten
├── themes/
│   └── characterThemes.ts  # Theme-Registry für alle Charaktere
├── types/
│   └── character.ts        # TypeScript Type-Definitionen
├── utils/
│   └── asset.ts            # Asset-Pfad Helfer
├── hooks/
│   └── useCharacterTheme.ts
├── public/
│   └── images/             # Charakter-Bilder und Assets (69MB+)
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🎮 Neue Charaktere hinzufügen

Um einen neuen Charakter hinzuzufügen:

1. **Charakterdaten:** Füge den Charakter zur zentralen Liste in `data/characters.ts` hinzu
   - Definiere `id`, `name`, `title`, `description`, `image`
   - Setze `theme` und `textColor` für die Landing Page Karte
   - Verweise auf `pageTheme` über `getCharacterTheme(id)`

2. **Theme:** Ergänze das Theme im Registry `themes/characterThemes.ts`
   - `background`: Hintergrund-Gradient oder Farbe
   - `text`: Primäre Textfarbe
   - `glowColor`: Für Partikeleffekte (optional)
   - `backButton`: Styling für Zurück-Button
   - `panel` und `accentGradient`: Zusätzliche Optionen (optional)

3. **Profilseite:** Zwei Optionen:
   - **Dedizierte Seite:** Erstelle `app/charaktere/<name>/page.tsx` mit individuellen Komponenten unter `components/<name>/` (empfohlen für komplexe Profile)
   - **Dynamische Route:** Nutze automatisch `app/charaktere/[id]/page.tsx` für einfache Profile

4. **Assets:** Lege Charakter-Bilder unter `public/images/` ab
   - Portrait-Bilder für Landing Page
   - Zusätzliche Bilder für Detailseite
   - Nutze konsistente Namenskonventionen

5. **Type-Definitions:** Falls nötig, erweitere `types/character.ts`

6. **Farben:** Falls neue Farbtöne nötig sind:
   - Erweitere `tailwind.config.js` (Theme-Farben)
   - Füge dynamisch verwendete Klassen zur Safelist hinzu

7. **Build:** Nach Änderungen `npm run build` ausführen, um statischen Export zu erstellen

## 🎨 Design-System

### Farbpalette
Das Projekt verwendet ein konsistentes Fantasy-Farbsystem mit vier Hauptpaletten:

- **Void:** Dunkle Grundtöne - von tiefschwarz (#0f172a) bis hell (#f8fafc)
  - Für Hintergründe, Schatten und neutrale UI-Elemente
- **Mystic:** Lila-magische Töne - von dunkel (#581c87) bis pastell (#faf5ff)
  - Für magische Effekte, arkane Elemente
- **Arcane:** Blaue arkane Töne - von dunkelblau (#1e3a8a) bis hellblau (#eff6ff)
  - Für Wasser, Eis, arkane Magie
- **Flame:** Warme Feuer-Töne - von rotbraun (#7c2d12) bis cremig (#fff7ed)
  - Für Feuer, Licht, göttliche Elemente

Zusätzlich gibt es charakter-spezifische Sonderfarben wie:
- `flame-gold`, `ember`, `crimson` (Mereldar)
- `crystal-blue`, `mystic-gold` (Allgemein)
- `obsidian`, `lavastone`, `shadow-purple` (Spezialeffekte)

### Schriftarten

Das Projekt nutzt drei Google Fonts für unterschiedliche Einsatzzwecke:

- **Cinzel (Fantasy):** Für Überschriften und Titel - verleiht einen epischen, mittelalterlichen Charakter
- **Libre Caslon Text (Elegant):** Für Untertitel und wichtige Texte - klassisch und lesbar
- **Raleway (Modern):** Für Fließtext und UI-Elemente - modern und klar

### Theme-Registry

Die charakter-spezifische Stilistik ist zentral in `themes/characterThemes.ts` definiert. Jeder Charakter-Eintrag enthält:

```typescript
{
  background: string;      // Seitenhintergrund (z.B. Gradient-Klassen)
  text: string;           // Primäre Textfarbe
  glowColor?: string;     // Basisfarbe für Partikel/Glühen (optional)
  panel?: string;         // Zusatzklasse für Karten/Panels (optional)
  accentGradient?: string; // Accent-Gradient (optional)
  backButton: {           // Styling für Zurück-Button
    container: string;
    hover?: string;
    border: string;
    text: string;
  }
}
```

**Verwendung:**
- Landing Page: Nutzt `theme` und `textColor` für Charakterkarten
- Detailseiten: Ziehen Werte aus `pageTheme` via `getCharacterTheme(id)`
- Konsistente Anwendung über `useCharacterTheme` Hook möglich

## 🔧 Konfiguration

### Next.js
Das Projekt nutzt in `next.config.js`:
- **Static Export:** `output: 'export'` für vollständigen statischen Export
- **Base Path:** `/test` in Produktion (konfigurierbar für Subpfad-Deployments)
- **Unoptimierte Bilder:** `images.unoptimized: true` (keine Image Optimization API nötig)
- **Asset Prefix:** Automatisch gesetzt basierend auf `basePath`

### Umgebungsvariablen
Die einzige verwendete Variable ist:
- `NEXT_PUBLIC_BASE_PATH`: Wird automatisch aus `basePath` in `next.config.js` gesetzt (für Subpfad-Deployments wie GitHub Pages)

### Tailwind CSS
Die Konfiguration befindet sich in `tailwind.config.js` und umfasst:
- **Custom Farbpalette:** void, mystic, flame, arcane (jeweils 50-900 Abstufungen)
- **Charakter-spezifische Farben:** obsidian, flame-gold, ember, crimson, crystal-blue, etc.
- **Schriftarten:** Cinzel (fantasy), Libre Caslon Text (elegant), Raleway (modern)
- **Safelist:** Dynamisch verwendete Farben für Timeline-Elemente
- **Gradient-Definitionen:** Radial, Fantasy, Arcane Gradienten

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

## 🔍 Häufige Fragen & Troubleshooting

### Build schlägt fehl wegen Google Fonts?
Falls der Build mit Fehlern zu Google Fonts abbricht (z.B. in Umgebungen mit eingeschränktem Internetzugang):
- Die Fonts sind als Fallback im `<head>` als CDN-Link eingebunden
- Der Build benötigt grundsätzlich Internetzugang für Font-Optimierung
- Alternative: Fonts lokal ablegen und Import anpassen

### Bilder werden nicht angezeigt?
- Prüfe, ob die Bilder unter `public/images/` existieren
- Bei statischem Export: Achte auf korrekte Base Path Konfiguration
- Die `asset()` Funktion aus `utils/asset.ts` kümmert sich um Pfadpräfixe

### Neue Charaktere erscheinen nicht?
1. Charakter in `data/characters.ts` hinzugefügt? ✓
2. Theme in `themes/characterThemes.ts` definiert? ✓
3. `npm run build` ausgeführt? ✓
4. Bei dedizierter Seite: Seite unter `app/charaktere/<id>/page.tsx` erstellt? ✓

### Dynamische Farben funktionieren nicht?
- Tailwind CSS purgt unbenutzte Klassen
- Dynamisch verwendete Klassen müssen in `tailwind.config.js` zur `safelist` hinzugefügt werden
- Beispiel: Timeline-Marker-Farben sind dort bereits eingetragen

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

**Hinweis zur aktuellen Konfiguration:** Das Projekt ist aktuell für Deployment unter `/test` konfiguriert (siehe `basePath` in `next.config.js`). Falls du es im Root-Verzeichnis deployen möchtest, setze `basePath` auf einen leeren String `''`.

### Warum funktioniert das hier?

- Alle Daten kommen aus statischen TS-Dateien (`data/characters.ts`, `themes/characterThemes.ts`).
- Die dynamische Route `app/charaktere/[id]/page.tsx` nutzt `generateStaticParams()` und erzeugt für jedes `id` eine fertige HTML-Datei beim Build.
- Vorhandene Charaktere (mereldar, thessien, serran, weslej, sarelan) haben dedizierte Seiten und werden nicht über die dynamische Route exportiert.
- Es gibt keine API Routes oder serverseitigen `fetch`-Aufrufe.
- Keine serverseitigen Auth-Zustände oder Sessions.
- Keine Middleware.
- `next.config.js` ist konfiguriert mit `output: 'export'` und `images.unoptimized: true`.

### Grenzen

Wenn du später Funktionen wie Formulare mit Server-Handling, API Routen, serverseitige Auth oder On-Demand-Rendering brauchst, reicht der statische Export nicht mehr – dann bräuchtest du wieder `next start` (Node) oder Edge Functions.

### Lokale Vorschau (optional)

```bash
# Mit npx serve (empfohlen)
npx serve out

# Oder mit Python
python -m http.server 8000 --directory out

# Oder mit PHP
php -S localhost:8000 -t out
```

Alternativ kannst du auch einfach die `out/index.html` im Browser öffnen (History-PushState Routen funktionieren eingeschränkt, aber für diese Site unkritisch, da echte Dateien generiert werden).

### Deployment-Optionen

Der statische Export kann auf zahlreichen Plattformen gehostet werden:

- **GitHub Pages:** Kostenloses Hosting direkt aus dem Repository
- **Netlify Drop:** Drag & Drop Deployment, automatische CI/CD möglich
- **Vercel:** Optimiert für Next.js, automatisches Deployment
- **AWS S3 + CloudFront:** Skalierbar, CDN-Distribution
- **Firebase Hosting:** Einfaches Deployment mit CLI
- **Nginx/Apache:** Traditionelles Webserver-Hosting
- **Lokaler Fileserver:** USB-Stick, NAS, oder lokaler Server

Alle Optionen funktionieren ohne Node.js Runtime auf dem Server!

---
