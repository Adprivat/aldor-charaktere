import { useMemo } from 'react';
import { getCharacterTheme } from '@/themes/characterThemes';
import { CharacterId } from '@/types/character';

export function useCharacterTheme(id: CharacterId) {
  return useMemo(() => getCharacterTheme(id), [id]);
}
