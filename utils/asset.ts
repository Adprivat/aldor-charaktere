// Zentrale Helfer für statische Assets mit optionalem basePath (z.B. GitHub Pages Unterverzeichnis)
// Verhindert wiederholte process.env Zugriffe und Stringverkettung im JSX.

export const basePath: string = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** Präfixe einen öffentlichen Asset-Pfad mit dem konfigurierten basePath. */
export function asset(path: string): string {
  if (!path.startsWith('/')) return basePath + '/' + path; // defensive
  return basePath + path;
}

/** Kleiner Helper um optional mehrere Varianten zu wählen (kann später erweitert werden). */
export function image(path: string): string { return asset(path); }
