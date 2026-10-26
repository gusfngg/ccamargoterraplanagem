import { Inter } from 'next/font/google'

// Fallback para quem não tem SF Pro (Android/Windows). O eixo opsz dá o corte "Display" nos títulos.
export const inter = Inter({
  subsets: ['latin'],
  axes: ['opsz'],
  variable: '--font-inter',
  display: 'swap',
})
