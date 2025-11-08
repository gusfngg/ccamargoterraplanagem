// eslint-disable-next-line camelcase
import { Jura, Inter } from 'next/font/google'
import localFont from 'next/font/local'

export const switzer = localFont({
  src: [
    {
      path: '../font/Switzer-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../font/Switzer-Medium.otf',
      weight: '500',
      style: 'medium',
    },
  ],
})

export const inter = Inter({ subsets: ['latin'] })

export const jura = Jura({
  subsets: ['latin'],
  display: 'swap',
})
