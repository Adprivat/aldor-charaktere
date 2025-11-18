import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aldor Rollenspielgruppe - Charakterprofile',
  description: 'Interaktive Charakterprofile der Aldor Rollenspielgruppe',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Raleway:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
