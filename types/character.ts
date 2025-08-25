export interface CharacterTheme {
  /** Full page background (can be gradient classes) */
  background: string;
  /** Primary accent text color */
  text: string;
  /** Card / panel background modifier (optional) */
  panel?: string;
  /** Accent gradient or focus effect */
  accentGradient?: string;
  /** Floating glow / particle base color (optional) */
  glowColor?: string;
  /** Back button styling shortcut */
  backButton?: {
    container: string;
    hover?: string;
    border: string;
    text: string;
  };
}

export interface CharacterSummary {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string; // public path
  /** Existing homepage gradient (kept for backward compat) */
  theme: string; // tailwind background gradient classes (homepage card)
  textColor: string; // tailwind text color class (homepage card)
  /** Full page theme config (optional if page uses bespoke components) */
  pageTheme?: CharacterTheme;
}

export type CharacterId = CharacterSummary['id'];

export const CHARACTER_IDS: CharacterId[] = ['mereldar', 'thessien', 'serran', 'weslej', 'sarelan'];

export type CharacterThemeRegistry = Record<CharacterId, CharacterTheme>;

