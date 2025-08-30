// Generische dynamische Charakterseite für künftig neue Charaktere.
// Aktuell haben vorhandene Charaktere (mereldar, sarelan, serran, thessien, weslej) eigene statische Seiten.
// Diese Datei sorgt lediglich dafür, dass Next.js' static export-Anforderung erfüllt ist.

import { characters, getCharacterById } from '@/data/characters';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// IDs mit eigener Seite – NICHT durch die dynamische Route exportieren (vermeidet doppelte Pfade / Konflikte)
const dedicated = new Set(['mereldar','sarelan','serran','thessien','weslej']);

// Keine zusätzlichen Params zur Laufzeit (wichtig für output: 'export')
export const dynamicParams = false;
export const revalidate = false; // vollständig statisch

export async function generateStaticParams() {
	const list = characters.filter(c => !dedicated.has(c.id)).map(c => ({ id: c.id }));
	// Falls aktuell keine nicht-dedizierten Charaktere existieren, einen Dummy ausgeben,
	// damit Next den Export nicht wegen "fehlender" generateStaticParams verweigert.
	if (list.length === 0) {
		return [{ id: '__dummy__' }];
	}
	return list;
}

interface Params { id: string }

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
	const c = getCharacterById(params.id);
	if (!c || dedicated.has(c.id)) {
		return { title: 'Charakter nicht gefunden' };
	}
	return {
		title: `${c.name} – Aldor Charakterprofil`,
		description: c.description,
		openGraph: { title: c.name, description: c.description, images: [{ url: c.image }] }
	};
}

export default function GenericCharacterPage({ params }: { params: Params }) {
		if (params.id === '__dummy__') return notFound();
		const c = getCharacterById(params.id);
		if (!c || dedicated.has(params.id)) return notFound();
	return (
		<main className="min-h-screen flex flex-col items-center justify-center p-10 text-center">
			<h1 className="text-4xl font-fantasy mb-4">{c.name}</h1>
			<p className="text-void-300 max-w-xl mb-6">{c.description}</p>
			<p className="text-void-500 text-sm">(Generische Seite – für diesen Charakter existiert keine spezialisierte Detailseite.)</p>
		</main>
	);
}
