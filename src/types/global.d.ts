export {}

declare global {
  interface Window {
    // Pode não existir se o bloqueador de anúncios barrar o script do Google.
    gtag?: (...args: unknown[]) => void
  }
}
