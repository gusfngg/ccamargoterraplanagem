import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import demolicao from '@/assets/servicos/demolicao.jpg'
import escavacao from '@/assets/servicos/escavacao.jpg'
import limpeza from '@/assets/servicos/limpeza.jpg'
import nivelamento from '@/assets/servicos/nivelamento.jpg'
import perfuracao from '@/assets/servicos/perfuracao.jpg'
import { services, waLink } from '@/lib/site'

// Bento: 6 colunas no desktop (4+2 / 4+2 / 3+3), 2 no tablet, 1 no celular. Uma célula por serviço.
const cells = {
  limpeza: [limpeza, 'Escavadeira e caminhão retirando vegetação de um terreno', 'md:col-span-2 lg:col-span-4 lg:row-span-2'],
  nivelamento: [nivelamento, 'Terreno amplo nivelado com escavadeira ao pôr do sol', 'lg:col-span-2'],
  escavacao: [escavacao, 'Escavadeira abrindo o solo ao lado de pedras e entulho', 'lg:col-span-2'],
  demolicao: [demolicao, 'Escavadeira trabalhando ao lado de uma construção, com caminhão basculante', 'lg:col-span-3'],
  perfuracao: [perfuracao, 'Retroescavadeira em terreno ao lado de uma casa em obra', 'lg:col-span-3'],
} as const

export function Services() {
  return (
    <section id="services" className="layer pb-24 pt-20 sm:pb-32 sm:pt-28">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <h2 className="t-section max-w-[18ch]">Tudo o que o terreno precisa antes da obra.</h2>
        <p className="t-lead mt-5 max-w-[46ch] text-muted">Toque em um serviço para pedir orçamento com ele já marcado.</p>

        <ul className="mt-12 grid gap-3 sm:mt-16 sm:gap-4 md:grid-cols-2 md:auto-rows-[17rem] lg:grid-cols-6 lg:auto-rows-[18.5rem]">
          {services.map((s) => {
            const [src, alt, span] = cells[s.id]
            return (
              <li
                key={s.id}
                className={`group relative aspect-[4/3] overflow-hidden rounded-[28px] bg-night md:aspect-auto ${span}`}
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(min-width: 1024px) 60vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-7">
                  <div>
                    <h3 className="t-title">{s.name}</h3>
                    <p className="mt-1.5 max-w-[40ch] text-[15px] leading-snug text-white/75">{s.desc}</p>
                  </div>
                  <a
                    href={waLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-quote={s.id}
                    aria-label={`Pedir orçamento de ${s.ask}`}
                    className="grid size-11 shrink-0 place-items-center rounded-full bg-white/15 backdrop-blur-md transition-colors duration-300 after:absolute after:inset-0 group-hover:bg-white group-hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <ArrowUpRight className="size-5" strokeWidth={1.8} aria-hidden />
                  </a>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
