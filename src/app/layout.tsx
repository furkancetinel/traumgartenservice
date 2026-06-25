import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TraumGartenservice Wien — Professionelle Gartenpflege',
  description: 'Gartenpflege, Rasenmähen, Bewässerung, Grabpflege und Grünflächenreinigung in Wien. Faire Preise, schnelle Terminvergabe, rechtlich zugelassen.',
  keywords: 'Gartenpflege Wien, Rasenmähen Wien, Grabpflege Wien, Grünflächenreinigung, Gartenservice Wien',
  openGraph: {
    title: 'TraumGartenservice — Gartenpflege in Wien',
    description: 'Professionelle Gartenpflege in Wien. Rasenmähen, Bewässerung, Grabpflege & mehr.',
    locale: 'de_AT',
    type: 'website',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
