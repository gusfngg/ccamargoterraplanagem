import './globals.css'
import { inter } from '@/lib/fonts'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  metadataBase: new URL('https://almeidaterraplenagem.com.br'),
  keywords: [
    'Terraplenagem Salto de Pirapora',
    'Ccamargo Terraplenagem',
    'Terraplanagem Salto de Pirapora',
    'Serviços de Terraplenagem',
    'Nivelamento de terreno Salto de Pirapora',
  ],
  title: 'Terraplenagem em Salto de Pirapora e região | Ccamargo Terraplenagem',
  openGraph: {
    title: 'Ccamargo Terraplenagem | Serviços em Salto de Pirapora',
    description:
      'Ccamargo Terraplenagem: Serviços especializados de terraplenagem em Salto de Pirapora. Nivelamento, aterro e preparação de terrenos. Orçamento gratuito!',
    images: [''],
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Ccamargo Terraplenagem',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter} antialiased 
        overflow-y-auto
        [&::-webkit-scrollbar]:w-1
        [&::-webkit-scrollbar-track]:rounded-full
      [&::-webkit-scrollbar-track]:bg-gray-100
        [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-thumb]:bg-gray-300
      dark:[&::-webkit-scrollbar-track]:bg-neutral-700
      dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 `}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
