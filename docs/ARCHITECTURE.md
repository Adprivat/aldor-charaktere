# Aldor Charaktere - Architecture Documentation

## Overview

This document provides a comprehensive overview of the Aldor Charaktere application architecture, data structures, and component relationships. This documentation is essential for the planned refactoring to ensure no data loss and preservation of all special features.

## System Architecture

### Technology Stack
- **Framework:** Next.js 14.2 with App Router
- **Language:** TypeScript 5.2
- **Styling:** Tailwind CSS 3.3
- **Animations:** Framer Motion 10.16
- **3D Graphics:** React Three Fiber 8.18 + Drei 9.122
- **Icons:** Lucide React 0.284
- **Build Output:** Static Export (no server required)

### Project Statistics
- **Total Lines of Code:** ~7,000
- **Assets Size:** ~69 MB (character images)
- **Number of Characters:** 5 (Mereldar, Thessien, Serran, Weslej, Sarelan)
- **Components:** 45+ React components
- **Test Coverage:** 0% (no tests currently)

## Directory Structure

```
aldor-charaktere/
├── app/                          # Next.js App Router pages
│   ├── charaktere/              # Character routes
│   │   ├── [id]/               # Dynamic route (future characters)
│   │   ├── mereldar/           # Dedicated character pages
│   │   ├── thessien/
│   │   ├── serran/
│   │   ├── weslej/
│   │   └── sarelan/
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout with fonts
│   └── page.tsx                # Landing page with character selection
├── components/                  # React components
│   ├── mereldar/               # Mereldar-specific components (15 files)
│   ├── thessien/               # Thessien-specific components (10 files)
│   ├── serran/                 # Serran-specific components (3 files)
│   ├── weslej/                 # Weslej-specific components (3 files)
│   ├── sarelan/                # Sarelan-specific components (11 files)
│   └── shared/                 # Shared components (4 files)
├── data/                        # Static data files
│   └── characters.ts           # Character definitions
├── themes/                      # Theme configuration
│   └── characterThemes.ts      # Character theme registry
├── types/                       # TypeScript types
│   └── character.ts            # Character type definitions
├── utils/                       # Utility functions
│   └── asset.ts                # Asset path helpers
├── hooks/                       # Custom React hooks
│   └── useCharacterTheme.ts   # Theme hook
└── public/                      # Static assets
    └── images/                 # Character images (69+ MB)
```

## Data Layer

### Core Data Structures

#### 1. CharacterSummary (types/character.ts)
```typescript
interface CharacterSummary {
  id: string;              // Unique identifier
  name: string;            // Full character name
  title: string;           // Character title/role
  description: string;     // Brief description
  image: string;           // Path to character image
  theme: string;           // Homepage card gradient classes
  textColor: string;       // Homepage card text color
  pageTheme?: CharacterTheme; // Full page theme configuration
}
```

**Current Characters:**
- mereldar: "Mereldar Glutspeer" - Kommandantin • Lampenanzünderin
- thessien: "Thessien der Wanderer" - Erzmagier der Kirin Tor
- serran: "Serran Vesperan" - Lehrling des Arkanen
- weslej: "Sir Weslej Eichbaum" - Templer der Kirche des Lichts
- sarelan: "Sarelan Feuersturm" - Magister von Quel'Thalas

#### 2. CharacterTheme (types/character.ts)
```typescript
interface CharacterTheme {
  background: string;      // Page background (gradient classes)
  text: string;            // Primary text color
  panel?: string;          // Card/panel background
  accentGradient?: string; // Accent gradient
  glowColor?: string;      // Particle/glow base color
  backButton?: {           // Back button styling
    container: string;
    hover?: string;
    border: string;
    text: string;
  };
}
```

### Data Files

#### data/characters.ts
- **Purpose:** Central character data registry
- **Exports:** 
  - `characters: CharacterSummary[]` - Array of all characters
  - `getCharacterById(id: string)` - Helper function
- **Dependencies:** 
  - `types/character.ts`
  - `themes/characterThemes.ts`
- **Critical:** This is the single source of truth for character data

#### themes/characterThemes.ts
- **Purpose:** Theme configuration registry
- **Exports:**
  - `characterThemes: CharacterThemeRegistry` - Theme for each character
  - `getCharacterTheme(id)` - Helper function
- **Dependencies:** `types/character.ts`
- **Critical:** Defines visual identity for each character

## Component Architecture

### Component Categories

#### 1. Page Components (app/)
- **Landing Page** (`app/page.tsx`)
  - Character selection grid
  - Animated transitions
  - Responsive layout
  
- **Character Pages** (`app/charaktere/{character}/page.tsx`)
  - Dedicated pages for each character
  - Unique layouts and sections
  - Character-specific components

#### 2. Character-Specific Components

##### Mereldar Components (15 components)
- **HeroSection.tsx** - Hero banner with character image
- **AboutSection.tsx** - Character story and background
- **AbilitiesSection.tsx** - Skills and abilities display
- **EquipmentSection.tsx** - Equipment and gear
- **AlliesSection.tsx** - Allies and relationships
- **Navigation.tsx** - Character-specific navigation
- **Footer.tsx** - Page footer
- **ParticleBackground.tsx** - Animated particle effects
- **CursorTrail.tsx** - Custom cursor trail effect
- **ScrollProgress.tsx** - Scroll progress indicator
- **LoadingScreen.tsx** - Loading animation
- **SimpleCrystal3D.tsx** - 3D crystal visualization
- **SimpleBeledarCrystal3D.tsx** - Special 3D crystal variant
- **MysticAudioPlayer.tsx** - Custom audio player
- **contexts/ThemeContext.tsx** - Theme context provider

**Special Features:**
- 3D crystal effects using Three.js
- Audio player with custom UI
- Particle animations
- Custom cursor effects
- Theme context for color management

##### Thessien Components (10 components)
- **HeroSection.tsx** - Hero banner
- **CharacterProfile.tsx** - Profile information
- **Timeline.tsx** - Character timeline visualization
- **MagicSchools.tsx** - Magic schools display
- **Artifacts.tsx** - Artifact collection
- **Connections.tsx** - Relationship network
- **Navigation.tsx** - Navigation bar
- **CharacterImageCard.tsx** - Image card component
- **TitleCarousel.tsx** - Title carousel animation
- **FloatingRunes.tsx** - Floating rune effects

**Special Features:**
- Timeline with animated markers
- Magic school categorization
- Floating rune animations
- Title carousel effect
- Complex relationship visualization

##### Sarelan Components (11 components)
- **HeroSection.tsx** - Hero banner
- **AppearanceSection.tsx** - Character appearance
- **SpellbookSection.tsx** - Spell collection
- **WorkshopSection.tsx** - Workshop details
- **EstateSection.tsx** - Estate information
- **WealthSection.tsx** - Wealth and resources
- **RelationshipSection.tsx** - Relationships
- **Navigation.tsx** - Navigation bar
- **PageSections.tsx** - Page section wrapper
- **RunesBackground.tsx** - Animated rune background
- **Parallax.tsx** - Parallax scroll effects

**Special Features:**
- Animated rune background
- Parallax scroll effects
- Complex wealth visualization
- Workshop interface
- Estate management display

##### Serran Components (3 components)
- **HeroSection.tsx** - Hero banner
- **Profile.tsx** - Character profile
- **Navigation.tsx** - Navigation bar

**Special Features:**
- Simpler layout
- Focus on mystical theme

##### Weslej Components (3 components)
- **HeroSection.tsx** - Hero banner
- **Profile.tsx** - Character profile
- **Navigation.tsx** - Navigation bar

**Special Features:**
- Dark, religious theme
- Knight-focused design

#### 3. Shared Components (components/shared/)

##### CharacterLayout.tsx
- **Purpose:** Common layout wrapper for character pages
- **Features:** Consistent structure, navigation placement
- **Used by:** Multiple character pages

##### BackToCharactersButton.tsx
- **Purpose:** Navigation button to return to character selection
- **Features:** Consistent styling across pages
- **Uses:** Character theme data for styling

##### MagicBento Components
- **MagicBento.tsx** - Bento grid layout system
- **MagicBentoEnhancer.tsx** - Enhancement wrapper for bento items
- **Purpose:** Reusable grid layout with animations
- **Features:** Responsive, animated, flexible

## Presentation Layer

### Styling System

#### Tailwind Configuration
Custom color palette with fantasy theme:
- **void:** Dark base tones (#0f172a - #f8fafc)
- **mystic:** Purple magical tones (#581c87 - #faf5ff)
- **arcane:** Blue arcane tones (#1e3a8a - #eff6ff)
- **flame:** Warm fire tones (#7c2d12 - #fff7ed)

Character-specific colors:
- flame-gold, ember, crimson (Mereldar)
- crystal-blue, mystic-gold (General)
- obsidian, lavastone, shadow-purple (Effects)

#### Font System
- **Cinzel:** Headlines and titles (fantasy feel)
- **Libre Caslon Text:** Subtitles (elegant)
- **Raleway:** Body text (modern, readable)

### Animation System

#### Framer Motion Integration
- Page transitions
- Component animations
- Scroll-based animations
- Hover effects

#### Special Effects
- Particle systems
- Cursor trails
- Floating elements
- 3D transformations

## Module Dependencies

### Core Dependencies
```
app/page.tsx
  ├── data/characters.ts
  ├── components/shared/BackToCharactersButton.tsx
  └── utils/asset.ts

app/charaktere/mereldar/page.tsx
  ├── components/mereldar/* (all 15 components)
  └── themes/characterThemes.ts

data/characters.ts
  ├── types/character.ts
  └── themes/characterThemes.ts

themes/characterThemes.ts
  └── types/character.ts
```

### Circular Dependencies
**None identified** - Clean unidirectional data flow

## Critical Features to Preserve

### 1. Mereldar-Specific
- ✅ 3D Beledar crystal animations
- ✅ Custom audio player with mystical theme
- ✅ Particle background effects
- ✅ Custom cursor trail
- ✅ Scroll progress indicator
- ✅ Loading screen animation
- ✅ Theme context with color management
- ✅ Unique hero section with glowing effects

### 2. Thessien-Specific
- ✅ Timeline with animated markers (color-coded)
- ✅ Magic schools categorization system
- ✅ Floating rune effects
- ✅ Title carousel animation
- ✅ Artifact collection display
- ✅ Relationship network visualization
- ✅ Character image card with effects

### 3. Sarelan-Specific
- ✅ Animated rune background
- ✅ Parallax scroll effects
- ✅ Workshop interface
- ✅ Estate management display
- ✅ Wealth visualization with coin icons
- ✅ Spellbook section with spell categories
- ✅ Relationship section with detailed descriptions

### 4. Serran-Specific
- ✅ Mystical purple/rose theme
- ✅ Profile layout with image
- ✅ Custom gradient background

### 5. Weslej-Specific
- ✅ Dark void theme with light accents
- ✅ Religious/knight aesthetic
- ✅ Profile layout with character image

### 6. Shared Features
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Static export capability
- ✅ Character theme system
- ✅ Consistent navigation patterns
- ✅ Image optimization (unoptimized flag)
- ✅ Base path configuration for subpath deployment

## Known Issues

### Build Issues
1. **Font Loading Failures**
   - Google Fonts cannot be fetched in sandboxed environment
   - Fallback to CDN links in HTML head
   - **Impact:** Build fails without internet access
   - **Solution:** Consider local font files or mock in development

2. **ESLint Warnings**
   - Unused imports in multiple files
   - Unescaped quotes in JSX
   - `any` types in some components
   - Missing dependency in useEffect hooks
   - **Impact:** Code quality warnings
   - **Priority:** Low (cosmetic)

3. **Image Optimization**
   - Using `<img>` instead of Next.js `<Image>`
   - Configured with `images.unoptimized: true`
   - **Impact:** Warning messages only
   - **Priority:** Low (intentional for static export)

### Technical Debt
1. No test coverage
2. Some code duplication across character components
3. Direct style props in some components
4. Mixed component organization patterns

## Refactoring Opportunities

### High Priority (Preserve All Features)
1. **Extract Common Patterns**
   - Hero section pattern
   - Navigation pattern
   - Profile layout pattern
   - Section wrapper pattern

2. **Create Shared Utilities**
   - Animation helpers
   - Theme utilities
   - Asset path management

3. **Improve Type Safety**
   - Remove `any` types
   - Add proper event types
   - Stricter component props

### Medium Priority
1. **Component Organization**
   - Consistent naming conventions
   - Logical grouping of related components
   - Extract sub-components where beneficial

2. **Code Deduplication**
   - Identify duplicate logic
   - Create reusable hooks
   - Share animation configurations

### Low Priority
1. **Add Test Infrastructure**
   - Setup testing framework (Jest + React Testing Library)
   - Add unit tests for utilities
   - Add integration tests for data flow
   - Add visual regression tests

2. **Documentation**
   - Component JSDoc comments
   - Usage examples
   - Migration guides

## Data Flow Diagram

```
Landing Page (app/page.tsx)
    ↓
    ├── Reads: data/characters.ts
    │   ↓
    │   └── Defines: CharacterSummary[]
    │       ├── id, name, title, description
    │       ├── image path
    │       ├── theme (homepage)
    │       └── pageTheme reference
    │
    └── Displays: Character Cards
        ↓
        User Clicks Character
        ↓
Character Page (app/charaktere/{id}/page.tsx)
    ↓
    ├── Reads: themes/characterThemes.ts
    │   ↓
    │   └── Provides: CharacterTheme config
    │       ├── background
    │       ├── text colors
    │       ├── glow colors
    │       └── button styles
    │
    └── Renders: Character Components
        ├── HeroSection
        ├── AboutSection (if exists)
        ├── Profile (if exists)
        ├── Special Features (3D, audio, etc.)
        └── Navigation
```

## Security Considerations

1. **Static Export:** No server-side vulnerabilities
2. **Image Assets:** Large file sizes, consider optimization
3. **External Fonts:** CDN dependency
4. **No User Input:** No XSS vulnerabilities
5. **No API Calls:** No CSRF concerns

## Performance Considerations

1. **Asset Size:** 69+ MB of images
2. **3D Rendering:** Three.js performance on mobile
3. **Animations:** Framer Motion impact on low-end devices
4. **Static Generation:** All pages pre-rendered at build time

## Migration Strategy (Future Refactoring)

### Phase 1: Non-Breaking Changes
- Add documentation
- Fix ESLint warnings
- Extract common utilities
- No structural changes

### Phase 2: Extract Shared Patterns
- Create base components
- Maintain backward compatibility
- Keep all existing components functional

### Phase 3: Component Reorganization
- Move to feature-based structure
- Maintain all visual features
- Test thoroughly at each step

### Phase 4: Add Testing
- Setup test infrastructure
- Add tests for new patterns
- Gradually cover existing code

## Conclusion

This architecture provides a solid foundation for the planned refactoring. The key principles for refactoring are:

1. **Data Preservation:** All character data must remain intact
2. **Feature Preservation:** All visual effects and presentations must be maintained
3. **Incremental Changes:** Make small, testable changes
4. **Documentation First:** Document before changing
5. **No Surprises:** Communicate all changes clearly

The current codebase is functional and well-structured. Refactoring should focus on reducing duplication and improving maintainability without disrupting the user experience or removing any features.
