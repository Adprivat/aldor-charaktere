# Manual Testing Checklist

## Purpose

This checklist provides a systematic approach to manually verify all features and functionality after refactoring changes. Use this before finalizing any refactoring phase.

## Pre-Testing Setup

- [ ] Run `npm install` to ensure dependencies are current
- [ ] Run `npm run build` to create production build
- [ ] Verify build completes without errors
- [ ] Serve the `out/` directory locally for testing
- [ ] Open browser developer console to monitor for errors
- [ ] Test on multiple viewports (mobile, tablet, desktop)

## Landing Page Tests

### Visual Elements
- [ ] Page loads without console errors
- [ ] Dark background gradient displays correctly
- [ ] Main title "Aldor Rollenspielgruppe" displays in Cinzel font
- [ ] Subtitle "Charakterprofile" displays correctly

### Character Cards (All 5)
- [ ] **Mereldar card** displays with correct image
  - [ ] Name: "Mereldar Glutspeer"
  - [ ] Title: "Kommandantin • Lampenanzünderin"
  - [ ] Description: "Arathische Kriegerin und Führerin..."
  - [ ] Gradient: ember to flame-gold
  - [ ] Hover effect: scale and shadow
  
- [ ] **Thessien card** displays with correct image
  - [ ] Name: "Thessien der Wanderer"
  - [ ] Title: "Erzmagier der Kirin Tor"
  - [ ] Description: "Mächtiger Magier, spezialisiert..."
  - [ ] Gradient: arcane to mystic
  - [ ] Hover effect works
  
- [ ] **Serran card** displays with correct image
  - [ ] Name: "Serran Vesperan"
  - [ ] Title: "Lehrling des Arkanen"
  - [ ] Description: "Eine junge Elfe auf der Suche..."
  - [ ] Gradient: mystic to arcane
  - [ ] Hover effect works
  
- [ ] **Weslej card** displays with correct image
  - [ ] Name: "Sir Weslej Eichbaum"
  - [ ] Title: "Templer der Kirche des Lichts"
  - [ ] Description: "Ritterlicher Richter des Lichts..."
  - [ ] Gradient: void to flame
  - [ ] Hover effect works
  
- [ ] **Sarelan card** displays with correct image
  - [ ] Name: "Sarelan Feuersturm"
  - [ ] Title: "Magister von Quel'Thalas"
  - [ ] Description: "Pyromant, Runenmeister und Gelehrter..."
  - [ ] Gradient: red via amber to red
  - [ ] Hover effect works

### Navigation
- [ ] Clicking each card navigates to correct character page
- [ ] Browser back button returns to landing page
- [ ] Page transitions are smooth (Framer Motion)

### Responsive Design
- [ ] Mobile (< 640px): Cards stack in 1-2 columns
- [ ] Tablet (640-1024px): Cards in 2-3 columns
- [ ] Desktop (> 1024px): Cards in optimal grid
- [ ] All text remains readable at all sizes
- [ ] Images scale appropriately

## Mereldar Page Tests

### Loading & Initial Display
- [ ] Loading screen appears briefly
- [ ] Loading animation plays smoothly
- [ ] Smooth transition to main content
- [ ] Page background is obsidian color
- [ ] No console errors on load

### Hero Section
- [ ] Large character portrait displays (Kommandantin.jpg)
- [ ] Portrait has glowing frame effect
- [ ] Title "Mereldar Glutspeer" displays with glow
- [ ] Subtitle displays role information
- [ ] Quote/motto displays if present
- [ ] Section is responsive on all devices

### Particle Background
- [ ] Particles are visible floating in background
- [ ] Particles have golden glow (flame-gold theme)
- [ ] Animation is smooth and continuous
- [ ] No performance issues or lag
- [ ] Particles don't interfere with text readability

### Cursor Trail (Desktop Only)
- [ ] Custom cursor trail appears when moving mouse
- [ ] Trail has glowing effect
- [ ] Trail follows mouse smoothly
- [ ] Trail fades appropriately
- [ ] Does NOT appear on mobile/touch devices

### Scroll Progress Bar
- [ ] Bar appears at top of page
- [ ] Bar is flame-gold colored
- [ ] Bar width increases as page scrolls
- [ ] Bar reaches 100% at bottom of page
- [ ] Bar is always visible (fixed position)

### Navigation Bar
- [ ] Nav bar is sticky at top when scrolling
- [ ] "Zurück" (Back) button works, returns to character selection
- [ ] Section links present: About, Abilities, Equipment, Allies
- [ ] Clicking section link smoothly scrolls to section
- [ ] Active section is highlighted
- [ ] Nav collapses to hamburger on mobile

### About Section
- [ ] Section title displays
- [ ] Character story and background text displays
- [ ] Multiple subsections render (Origins, Journey, Current)
- [ ] Images within section display correctly
- [ ] Quotes are formatted distinctly
- [ ] Text is readable with proper line spacing
- [ ] Layout is responsive
- [ ] Scroll animations trigger when section enters view

### Abilities Section
- [ ] Section title displays
- [ ] Abilities display in grid layout
- [ ] Each ability card shows:
  - [ ] Icon
  - [ ] Ability name
  - [ ] Description
- [ ] Cards have hover effect (scale)
- [ ] Abilities are color-coded by type
- [ ] Grid is responsive (adjusts columns)
- [ ] Entrance animations play

### Equipment Section
- [ ] Section title displays
- [ ] Equipment displays in grid
- [ ] Each equipment card shows:
  - [ ] Image
  - [ ] Item name
  - [ ] Description
  - [ ] Rarity indicator (if applicable)
- [ ] Weapon stats display correctly
- [ ] Hover effects work
- [ ] Grid is responsive

### Allies Section
- [ ] Section title displays
- [ ] Ally profiles display
- [ ] Each ally shows:
  - [ ] Portrait
  - [ ] Name
  - [ ] Relationship description
- [ ] Cards expand on hover
- [ ] Quotes display correctly
- [ ] Layout is responsive
- [ ] Transitions are smooth

### 3D Crystal Effects
- [ ] Beledar crystal renders in 3D
- [ ] Crystal rotates automatically
- [ ] Crystal has glow/light effects
- [ ] Crystal is interactive (hover affects rotation)
- [ ] No WebGL errors in console
- [ ] Canvas resizes with viewport
- [ ] Performance is acceptable

### Audio Player (if present)
- [ ] Audio player UI displays
- [ ] Play/pause button works
- [ ] Volume control works
- [ ] Progress bar shows current position
- [ ] Seek functionality works (click progress bar)
- [ ] Time display shows current/total time
- [ ] Controls are themed appropriately
- [ ] Player is responsive

### Footer
- [ ] Footer displays at bottom of page
- [ ] Credits and attribution present
- [ ] Links work correctly
- [ ] Styled with character theme
- [ ] Responsive layout

## Thessien Page Tests

### Hero Section
- [ ] Character portrait displays (thessien.jpg)
- [ ] Title with arcane styling
- [ ] Role and class information shows
- [ ] Quote displays if present
- [ ] Gradient background (void to arcane to mystic)
- [ ] Animated entrance works

### Character Profile
- [ ] Profile section displays
- [ ] Character information shows
- [ ] Statistics display correctly
- [ ] Attributes breakdown present
- [ ] Skills listing complete
- [ ] Text formatting correct
- [ ] Responsive layout

### Timeline
- [ ] Timeline displays vertically
- [ ] All chronological events present
- [ ] Markers are color-coded by type:
  - [ ] Arcane events (blue)
  - [ ] Combat events (red)
  - [ ] Discovery events (gold)
  - [ ] Personal events (purple)
- [ ] Dates display for each event
- [ ] Event descriptions are readable
- [ ] Icons display for event categories
- [ ] Events alternate left/right on desktop
- [ ] Connecting lines visible between events
- [ ] Scroll animations trigger
- [ ] Stacks vertically on mobile

### Magic Schools Section
- [ ] Section displays in grid
- [ ] All magic schools present:
  - [ ] Arcane
  - [ ] Fire
  - [ ] Frost
  - [ ] Time
  - [ ] Illusion
  - [ ] Abjuration
- [ ] Each school shows:
  - [ ] Icon
  - [ ] Name
  - [ ] Proficiency level
  - [ ] Description
- [ ] Color-coded by school type
- [ ] Hover effects work
- [ ] Mastery badges display
- [ ] Grid is responsive

### Artifacts Section
- [ ] Artifact collection displays
- [ ] Each artifact card shows:
  - [ ] Image (if available)
  - [ ] Name
  - [ ] Origin
  - [ ] Power description
  - [ ] Rarity indicator
- [ ] Hover reveal animations work
- [ ] Grid layout responsive

### Connections Section
- [ ] Relationship network displays
- [ ] Each connection shows:
  - [ ] Portrait
  - [ ] Name
  - [ ] Relationship type
  - [ ] Relationship strength/level
  - [ ] Description
- [ ] Color-coded by relationship type:
  - [ ] Allies (green)
  - [ ] Mentors (gold)
  - [ ] Rivals (orange)
  - [ ] Enemies (red)
  - [ ] Acquaintances (blue)
- [ ] Hover details work
- [ ] Grid is responsive

### Title Carousel
- [ ] Carousel displays multiple titles
- [ ] Titles rotate automatically
- [ ] Smooth transitions between titles
- [ ] Auto-play works
- [ ] Pause on hover (if implemented)
- [ ] Fade animations smooth

### Floating Runes
- [ ] Rune symbols visible in background
- [ ] Runes are randomly positioned
- [ ] Float animation works
- [ ] Fade in/out effects
- [ ] Multiple rune types display
- [ ] Animation loops continuously
- [ ] Performance acceptable

### Navigation
- [ ] Navigation bar works
- [ ] Section navigation functional
- [ ] Back button returns to character selection
- [ ] Themed styling correct

## Sarelan Page Tests

### Hero Section
- [ ] Character portrait displays (sarelan_portrait.png)
- [ ] Fire-themed title display
- [ ] Quote with ember styling
- [ ] Gradient background (dark red via amber)
- [ ] Animated entrance

### Appearance Section
- [ ] Physical description displays
- [ ] Character traits listed
- [ ] Visual characteristics described
- [ ] Text formatting correct
- [ ] Images integrated properly

### Spellbook Section
- [ ] Spell collection displays
- [ ] Spells categorized by school:
  - [ ] Pyromancy
  - [ ] Runecraft
  - [ ] Transmutation
  - [ ] Enhancement
- [ ] Each spell card shows:
  - [ ] Icon
  - [ ] Name
  - [ ] Effect description
  - [ ] Mana cost
  - [ ] Casting time
  - [ ] Spell level badge
- [ ] Hover expansion works
- [ ] Scroll animations trigger
- [ ] Grid is responsive

### Workshop Section
- [ ] Workshop description displays
- [ ] Crafting stations shown
- [ ] Tool inventory listed
- [ ] Project showcase visible
- [ ] Resource tracking present
- [ ] Interactive elements work
- [ ] Themed styling applied

### Estate Section
- [ ] Estate overview displays
- [ ] Property details shown
- [ ] Location information present
- [ ] Facilities listed
- [ ] Staff information included
- [ ] Animated entrance works
- [ ] Responsive layout

### Wealth Section
- [ ] Wealth visualization displays
- [ ] Coin icons present (gold, silver, copper)
- [ ] Resource breakdown shown
- [ ] Assets listed
- [ ] Income sources displayed
- [ ] Coin displays animate
- [ ] Numbers formatted correctly
- [ ] Hover effects work

### Relationship Section
- [ ] Relationship profiles display
- [ ] Each relationship shows:
  - [ ] Character description
  - [ ] Relationship nature
  - [ ] Detailed narrative
  - [ ] Portrait (if available)
- [ ] Cards are responsive

### Runes Background
- [ ] Rune symbols visible in background
- [ ] Runes randomly positioned
- [ ] Rotation animations work
- [ ] Opacity varies appropriately
- [ ] Multiple rune types present
- [ ] Animation continuous
- [ ] Performance acceptable
- [ ] Layering correct (behind content)

### Parallax Effect
- [ ] Parallax scrolling works
- [ ] Multiple layers move at different speeds
- [ ] Depth perception created
- [ ] Transitions smooth
- [ ] Performance acceptable

### Navigation
- [ ] Navigation functional
- [ ] Section links work
- [ ] Back button works
- [ ] Fire-themed colors correct

## Serran Page Tests

### Hero Section
- [ ] Character portrait displays (SerranPortrait.png)
- [ ] Purple/rose gradient background correct
- [ ] Title and subtitle display
- [ ] Mystical theme applied
- [ ] Animated entrance works
- [ ] Responsive layout

### Profile Section
- [ ] Biography displays
- [ ] Background story present
- [ ] Personality traits listed
- [ ] Goals and motivations shown
- [ ] Image integration correct
- [ ] Text sections formatted
- [ ] Responsive layout

### Layout & Theme
- [ ] Custom dark gradient background
- [ ] Purple/rose color scheme throughout
- [ ] Special styling applied correctly

### Navigation
- [ ] Simple navigation bar works
- [ ] Back button functional
- [ ] Rose/mystic themed colors
- [ ] Responsive

## Weslej Page Tests

### Hero Section
- [ ] Knight portrait displays (WeslejPortrait.png)
- [ ] Dark void theme with light accents
- [ ] Title with religious styling
- [ ] Order/affiliation display
- [ ] Animated entrance works

### Profile Section
- [ ] Knight background displays
- [ ] Order history present
- [ ] Code and values listed
- [ ] Mission statement shown
- [ ] Character traits described
- [ ] Image displays correctly
- [ ] Sections formatted properly

### Theme
- [ ] Dark void background
- [ ] Light accents (flame-gold)
- [ ] Religious/knight aesthetic maintained

### Navigation
- [ ] Navigation bar works
- [ ] Back button functional
- [ ] Void/flame themed colors
- [ ] Responsive

## Cross-Browser Testing

### Chrome/Edge
- [ ] All pages load correctly
- [ ] All features work
- [ ] No console errors
- [ ] Performance acceptable

### Firefox
- [ ] All pages load correctly
- [ ] All features work
- [ ] No console errors
- [ ] Performance acceptable

### Safari (if available)
- [ ] All pages load correctly
- [ ] All features work
- [ ] No console errors
- [ ] Performance acceptable

### Mobile Browsers
- [ ] Pages load on mobile devices
- [ ] Touch interactions work
- [ ] Responsive design correct
- [ ] Performance acceptable on mobile

## Build & Deployment Tests

### Development Mode
- [ ] `npm run dev` starts successfully
- [ ] Hot reload works
- [ ] No build errors
- [ ] All features work in dev mode

### Production Build
- [ ] `npm run build` completes successfully
- [ ] No build errors or warnings (except known font issue)
- [ ] `out/` directory created
- [ ] All HTML files generated
- [ ] Assets copied correctly

### Static Export Validation
- [ ] Serve `out/` directory locally
- [ ] All routes accessible
- [ ] All assets load correctly
- [ ] No 404 errors for resources
- [ ] Base path configuration works (if /test path)

## Performance Checks

### Page Load Times
- [ ] Landing page loads quickly (< 3 seconds)
- [ ] Character pages load quickly (< 3 seconds)
- [ ] Images load progressively
- [ ] No blocking resources

### Runtime Performance
- [ ] Scrolling is smooth (60 fps)
- [ ] Animations don't cause lag
- [ ] 3D effects perform well
- [ ] Particle effects don't impact performance
- [ ] No memory leaks over time

### Asset Optimization
- [ ] Images are appropriately sized
- [ ] No unnecessarily large assets
- [ ] JavaScript bundle size reasonable
- [ ] CSS bundle size reasonable

## Accessibility Checks

### Navigation
- [ ] Tab navigation works
- [ ] Focus indicators visible
- [ ] Skip links present (if applicable)

### Content
- [ ] Text has sufficient contrast
- [ ] Headings in proper hierarchy
- [ ] Images have alt text (where appropriate)

## Final Verification

- [ ] All character data intact
- [ ] No features removed
- [ ] All visual effects work
- [ ] No functionality broken
- [ ] Build succeeds
- [ ] Static export works
- [ ] Documentation updated
- [ ] Git commits clean

## Notes Section

Use this section to record any issues found during testing:

**Issues Found:**
- 

**Resolved:**
- 

**Outstanding:**
- 

**Observations:**
- 

---

**Test Date:** _______________  
**Tester:** _______________  
**Branch/Commit:** _______________  
**Result:** [ ] PASS [ ] FAIL [ ] PARTIAL
