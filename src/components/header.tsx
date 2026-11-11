import Image from 'next/image'
import type { ReactNode } from 'react'
import logoLight from '@/assets/logo-light.png'
import { QuoteLink } from './cta'

const homeNav = [
  ['Serviços', '#services'],
  ['Como funciona', '#process'],
  ['Obras', '#works'],
  ['Avaliações', '#feedbacks'],
  ['Dúvidas', '#askeds'],
] as const

// Cápsula de vidro flutuante. Fixa no desktop; no celular rola junto (a barra de baixo assume o CTA).
// `nav` e `cta` trocam os itens e o botão em outras páginas (ex.: /obras), com âncoras da própria página.
export function Header({
  nav = homeNav,
  cta = <QuoteLink className="btn-cta h-11 px-5 text-[15px]" />,
}: {
  nav?: readonly (readonly [string, string])[]
  cta?: ReactNode
}) {
  return (
    <header className="theme-dark pointer-events-none absolute inset-x-0 top-0 z-50 px-3 pt-3 lg:fixed">
      <div className="glass pointer-events-auto mx-auto flex h-14 max-w-[68rem] items-center justify-between gap-6 rounded-full py-1.5 pl-5 pr-1.5">
        <a href="#hero" className="shrink-0 rounded-full">
          <Image src={logoLight} alt="CCamargo Terraplenagem" priority className="h-7 w-auto" />
        </a>

        <nav aria-label="Seções" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[14px] tracking-[-0.01em] text-white/70">
            {nav.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="transition-colors hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {cta}
      </div>
    </header>
  )
}
