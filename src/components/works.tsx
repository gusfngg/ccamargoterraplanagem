'use client'

import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'
import o1 from '@/assets/obras/1.jpg'
import o2 from '@/assets/obras/2.jpg'
import o3 from '@/assets/obras/3.jpg'
import o4 from '@/assets/obras/4.jpg'
import o5 from '@/assets/obras/5.jpg'
import o6 from '@/assets/obras/6.jpg'
import o7 from '@/assets/obras/7.jpg'
import o8 from '@/assets/obras/8.jpg'
import o9 from '@/assets/obras/9.jpg'
import { INSTAGRAM } from '@/lib/site'

const obras = [
  [o9, 'Minicarregadeira nivelando um terreno de terra batida cercado de árvores'],
  [o1, 'Área extensa terraplenada e nivelada, com estacas de marcação'],
  [o2, 'Escavadeira e minicarregadeira em platô recém-nivelado ao lado de um muro'],
  [o3, 'Escavadeira carregando um caminhão basculante com terra'],
  [o4, 'Retroescavadeira trabalhando em canteiro com paletes de blocos'],
  [o5, 'Terreno limpo e nivelado em área urbana'],
  [o6, 'Retroescavadeira e caminhão em movimentação de terra'],
  [o7, 'Retroescavadeira abrindo vala ao lado de um campo gramado'],
  [o8, 'Estrutura pré-moldada sobre terreno preparado'],
] as const

const paddle =
  'grid size-11 place-items-center rounded-full bg-ink/[0.07] text-ink transition hover:bg-ink/[0.12] active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold'

export function Works() {
  const track = useRef<HTMLUListElement>(null)

  function nudge(dir: 1 | -1) {
    const el = track.current
    if (!el) return
    const smooth = !matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollBy({ left: dir * el.clientWidth * 0.75, behavior: smooth ? 'smooth' : 'auto' })
  }

  return (
    <section id="works" className="pt-20 sm:pt-28">
      <div className="mx-auto flex max-w-page flex-wrap items-end justify-between gap-x-8 gap-y-5 px-5 sm:px-8">
        <div>
          <h2 className="t-section">Obras realizadas</h2>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="t-lead mt-3 inline-flex items-center gap-1 text-accent underline-offset-4 hover:underline"
          >
            Mais obras no Instagram
            <ArrowUpRight className="size-5" strokeWidth={1.8} aria-hidden />
          </a>
        </div>
        <div className="hidden gap-2 sm:flex">
          <button type="button" onClick={() => nudge(-1)} aria-label="Fotos anteriores" className={paddle}>
            <ChevronLeft className="size-5" strokeWidth={2} aria-hidden />
          </button>
          <button type="button" onClick={() => nudge(1)} aria-label="Próximas fotos" className={paddle}>
            <ChevronRight className="size-5" strokeWidth={2} aria-hidden />
          </button>
        </div>
      </div>

      <ul ref={track} className="track mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:mt-12">
        {obras.map(([src, alt]) => (
          <li
            key={src.src}
            className="relative aspect-[4/3] w-[82vw] shrink-0 snap-start overflow-hidden rounded-[28px] bg-ink/5 sm:w-[54vw] lg:w-[38rem]"
          >
            <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 38rem, 82vw" className="object-cover" />
          </li>
        ))}
      </ul>
    </section>
  )
}
