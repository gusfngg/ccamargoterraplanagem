import './globals.css'
import { inter } from '@/lib/fonts'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ccamargoterraplanagem.com.br'),
  title: 'Terraplenagem em Salto de Pirapora SP | Ccamargo Terraplenagem - Orçamento Grátis',
  description: 'Empresa de terraplenagem em Salto de Pirapora e região. Nivelamento de terreno, escavação, aterro e limpeza. +15 anos de experiência. Solicite seu orçamento gratuito!',
  keywords: [
    'terraplenagem Salto de Pirapora',
    'terraplenagem Salto de Pirapora SP',
    'empresa de terraplenagem',
    'nivelamento de terreno',
    'escavação de terreno',
    'aterro e compactação',
    'limpeza de terreno',
    'terraplanagem perto de mim',
    'serviços de terraplanagem',
    'ccamargo terraplenagem',
  ],
  openGraph: {
    title: 'Terraplenagem em Salto de Pirapora e Região | Ccamargo Terraplenagem',
    description: '✓ Nivelamento ✓ Demolição ✓ Escavação ✓ Aterro ✓ Limpeza de Terreno. Equipamentos modernos e equipe experiente. Atendemos Salto de Pirapora e região. Orçamento sem compromisso!',
    url: 'https://www.ccamargoterraplanagem.com.br',
    siteName: 'Ccamargo Terraplenagem',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ccamargo Terraplenagem - Equipamentos e serviços em Salto de Pirapora SP',
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  alternates: {
    canonical: 'https://www.ccamargoterraplanagem.com.br',
  },
}

// Schema.org JSON-LD para SEO local
const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Ccamargo Terraplenagem",
  "image": "https://www.ccamargoterraplanagem.com.br/og-image.jpg",
  "description": "Empresa de terraplenagem em Salto de Pirapora e região. Nivelamento, escavação, aterro e limpeza de terrenos com equipamentos modernos.",
  "url": "https://www.ccamargoterraplanagem.com.br",
  "telephone": "+55-15-99659-3858",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Eligio Arthur Perazzio, Salto De Pirapora SP, 18115-120, Brasil", 
    "addressLocality": "Salto de Pirapora",
    "addressRegion": "SP",
    "postalCode": "18160-000", 
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-23.6479436", 
    "longitude": "-47.5767464"  
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "12:00"
    }
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Salto de Pirapora"
    },
    {
      "@type": "City",
      "name": "Votorantim"
    },
    {
      "@type": "City",
      "name": "Sorocaba"
    }
    // Adicione outras cidades que você atende
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </head>
      <body className={`${inter} antialiased scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-neutral-500 dark:scrollbar-track-neutral-700`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}