import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { inter } from '@/lib/fonts'
import { faqs, SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Ccamargo Terraplenagem | Serviços em Salto de Pirapora',
  description:
    'Empresa de terraplenagem em Salto de Pirapora e região. Nivelamento de terreno, escavação, aterro e limpeza. +15 anos de experiência. Solicite um orçamento gratuito!',
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
  // A imagem de compartilhamento vem de src/app/opengraph-image.jpg (convenção do Next).
  openGraph: {
    title: 'Terraplenagem em Salto de Pirapora e Região | Ccamargo Terraplenagem',
    description:
      'Nivelamento, demolição, escavação, aterro e limpeza de terreno. Equipamentos modernos e equipe experiente. Atendemos Salto de Pirapora e região. Orçamento sem compromisso!',
    url: SITE_URL,
    siteName: 'Ccamargo Terraplenagem',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: { canonical: SITE_URL },
}

export const viewport: Viewport = {
  themeColor: '#07091C',
}

// Schema.org para SEO local + perguntas frequentes.
const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Ccamargo Terraplenagem',
    image: `${SITE_URL}/opengraph-image.jpg`,
    description:
      'Empresa de terraplenagem em Salto de Pirapora e região. Nivelamento, escavação, aterro e limpeza de terrenos com equipamentos modernos.',
    url: SITE_URL,
    telephone: '+55-15-99659-3858',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Eligio Arthur Perazzio, Salto De Pirapora SP, 18115-120, Brasil',
      addressLocality: 'Salto de Pirapora',
      addressRegion: 'SP',
      postalCode: '18160-000',
      addressCountry: 'BR',
    },
    geo: { '@type': 'GeoCoordinates', latitude: '-23.6479436', longitude: '-47.5767464' },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '12:00' },
    ],
    areaServed: ['Salto de Pirapora', 'Votorantim', 'Sorocaba'].map((name) => ({ '@type': 'City', name })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  },
]

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KQVVT9S4');`}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KQVVT9S4"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* Google Ads: a conversão dispara no envio do orçamento (quote-sheet.tsx). */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-16626951404" strategy="afterInteractive" />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16626951404');
          `}
        </Script>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

        {children}
        <Analytics />
      </body>
    </html>
  )
}
