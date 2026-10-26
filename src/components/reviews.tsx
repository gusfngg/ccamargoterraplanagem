import { ArrowUpRight } from 'lucide-react'
import { GOOGLE_PROFILE, GOOGLE_RATING } from '@/lib/site'
import { GoogleIcon, Stars } from './cta'

// Trechos de avaliações reais do Google (texto original, só encurtado).
const featured = {
  name: 'Obra JK',
  text: 'Atendimento com muito comprometimento, preços justos e total transparência. Recomendo de olhos fechados para quem busca parcerias de verdade!',
}

const reviews = [
  {
    name: 'Váleria Freire',
    text: 'A equipe que me atendeu era muito experiente e qualificada. O serviço foi executado conforme especificado em projeto, com cuidado e precisão.',
  },
  { name: 'Vera Márcia', text: 'Segunda vez que fechamos com ele e o serviço foi executado com rapidez e excelência!' },
  {
    name: 'Debora Cristina',
    text: 'Os funcionários, desde o atendimento até o operador, muito atenciosos e prestativos, e pontuais na data e horário combinados!',
  },
  { name: 'Paulo Rogério', text: 'Trabalho realizado no prazo estipulado, com ótima qualidade e profissionalismo, preço justo.' },
  { name: 'Élio Batista', text: 'Foi muito fácil de combinar o trabalho e resolveu tudo que eu precisei.' },
  {
    name: 'Paulo Júnior',
    text: 'Cumprem o que prometem, trabalho honesto. Com certeza voltarei a fazer serviços com eles e com certeza eu indico.',
  },
  { name: 'Nelso Torres', text: 'Empresa íntegra com profissionais extremamente comprometidos. Muitíssimo satisfeito.' },
]

export function Reviews() {
  return (
    <section id="feedbacks" className="pb-24 pt-24 sm:pb-32 sm:pt-32">
      <div className="mx-auto flex max-w-page flex-wrap items-end justify-between gap-x-8 gap-y-8 px-5 sm:px-8">
        <h2 className="t-section max-w-[14ch]">Quem contratou, recomenda.</h2>
        <a
          href={GOOGLE_PROFILE}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-full bg-surface py-3 pl-3 pr-6 shadow-[0_1px_2px_rgb(0_0_0/0.04)] transition-shadow hover:shadow-[0_8px_30px_-8px_rgb(0_0_0/0.15)]"
        >
          <span className="grid size-12 place-items-center rounded-full bg-paper">
            <GoogleIcon className="size-6" />
          </span>
          <span>
            <span className="flex items-center gap-2.5">
              <span className="text-[28px] font-semibold leading-none tracking-[-0.03em]">{GOOGLE_RATING}</span>
              <Stars />
            </span>
            <span className="mt-1 flex items-center gap-1 text-[14px] text-muted group-hover:text-ink">
              Ver avaliações no Google
              <ArrowUpRight className="size-3.5" strokeWidth={2} aria-hidden />
            </span>
          </span>
        </a>
      </div>

      <div className="mx-auto max-w-page px-5 sm:px-8">
        <figure className="mt-12 rounded-[28px] bg-surface p-7 sm:p-12 lg:mt-16">
          <Stars className="size-5" />
          <blockquote className="mt-6 max-w-[34ch] text-[clamp(1.5rem,1rem+1.8vw,2.5rem)] font-semibold leading-[1.18] tracking-[-0.025em]">
            “{featured.text}”
          </blockquote>
          <figcaption className="mt-6 text-muted">{featured.name}</figcaption>
        </figure>

        <ul className="mt-4 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {reviews.map((r) => (
            <li key={r.name} className="mb-4 break-inside-avoid rounded-[28px] bg-surface p-7">
              <figure>
                <Stars />
                <blockquote className="mt-4">“{r.text}”</blockquote>
                <figcaption className="mt-4 text-[15px] text-muted">{r.name}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
