import type { Config } from 'tailwindcss'

// Cores de tema vêm de variáveis CSS (globals.css): seções .theme-dark trocam tudo de uma vez.
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: token('paper'),
        surface: token('surface'),
        ink: token('ink'),
        muted: token('muted'),
        accent: token('accent'),
        cta: { DEFAULT: token('cta'), ink: token('cta-ink') },
        gold: '#CFAB5C',
        navy: '#030D4E', // azul do logo
        night: '#07091C',
      },
      fontFamily: {
        // SF Pro nos aparelhos Apple; Inter (parecida e com tamanho óptico) no resto.
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', 'var(--font-inter)', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      maxWidth: { page: '80rem' },
    },
  },
}

export default config
