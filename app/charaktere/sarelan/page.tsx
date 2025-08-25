'use client'
import CharacterLayout from '@/components/shared/CharacterLayout';
import Navigation from '@/components/sarelan/Navigation';
import PageSections from '@/components/sarelan/PageSections';
import RunesBackground from '@/components/sarelan/RunesBackground';
import { getCharacterById } from '@/data/characters';

export default function SarelanPage() {
  const c = getCharacterById('sarelan');
  const theme = c?.pageTheme;
  return (
    <CharacterLayout
      backgroundClassName={theme?.background || 'bg-[#280a0a]'}
      textClassName={theme?.text || 'text-amber-100'}
      backColor={theme?.backButton || { container:'bg-red-900/30', hover:'hover:bg-red-800/30', border:'border-amber-400/30', text:'text-amber-300' }}
      enableTopBackButton={false}
    >
      <RunesBackground />
      <Navigation />
      <main className="pt-20">
        <PageSections />
      </main>
    </CharacterLayout>
  );
}
