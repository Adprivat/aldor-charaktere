import { notFound } from 'next/navigation';
import { characters, getCharacterById } from '@/data/characters';
import type { Metadata } from 'next';

interface Params { id: string }

export async function generateStaticParams() {
  return characters.map(c => ({ id: c.id }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const character = getCharacterById(params.id);
  if (!character) return { title: 'Charakter nicht gefunden' };
  return {
    title: `${character.name} – Aldor Charakterprofil`,
    description: character.description,
    openGraph: {
      title: character.name,
      description: character.description,
      images: [{ url: character.image }]
    }
  };
}

export default function CharacterEntryPage({ params }: { params: Params }) {
  // For now we still rely on individual static pages; redirect to them if exist
  const character = getCharacterById(params.id);
  if (!character) return notFound();

  // Provide simple fallback if someone navigates /charaktere/[id] directly while legacy pages remain
  return (
    <div className="min-h-screen flex items-center justify-center text-center p-8">
      <div>
        <h1 className="text-3xl font-fantasy mb-4">{character.name}</h1>
        <p className="text-void-400 mb-6">Dieses Profil nutzt noch die spezifische Route /charaktere/{character.id}.</p>
        <a href={`/charaktere/${character.id}`} className="fantasy-button">Zum vollständigen Profil</a>
      </div>
    </div>
  );
}
