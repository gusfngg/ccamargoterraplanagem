import { Check, Download } from 'lucide-react'
import type { Metadata } from 'next'
import Image, { getImageProps } from 'next/image'
import tall from '@/assets/hero-tall.jpg'
import wide from '@/assets/hero-wide.jpg'
import logoLight from '@/assets/logo-light.png'
import area from '@/assets/obras/1.jpg'
import movimentacao from '@/assets/obras/3.jpg'
import demolicao from '@/assets/servicos/demolicao.jpg'
import locacao from '@/assets/sobre.jpg'
import { PhoneLink, Stars } from '@/components/cta'
import { Header } from '@/components/header'
import { HeroStage } from '@/components/hero-stage'
import { MobileBar } from '@/components/mobile-bar'
import { Process } from '@/components/process'
import { QuoteSheet } from '@/components/quote-sheet'
import { Works } from '@/components/works'
import { DOCUMENTOS, FROTA, KIT_PDF, MAIOR_OBRA } from '@/lib/obras'
import { GOOGLE_RATING, INSTAGRAM, MOBILIZACAO_MINIMA, PHONE_LABEL, SITE_URL, TEL } from '@/lib/site'

const title = 'Terraplenagem para construtoras e empresas em Sorocaba e região | Ccamargo'
const description =
  'Corte e aterro, preparação de área para galpão e condomínio e locação de escavadeira com operador em Sorocaba, Votorantim e Salto de Pirapora. Mais de 15 anos de experiência. Solicite uma proposta.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/obras` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/obras`,
    siteName: 'Ccamargo Terraplenagem',
    locale: 'pt_BR',
    type: 'website',
  },
}

const nav = [
  ['Serviços', '#servicos'],
  ['Como funciona', '#process'],
  ['Obras', '#works'],
  ['Contato', '#contato'],
] as const

const servicos = [
  {
    name: 'Corte e aterro',
    desc: 'Movimentação de terra até a cota do projeto, com carga e transporte do material que sobra.',
    src: movimentacao,
    alt: 'Escavadeira carregando um caminhão basculante com terra',
  },
  {
    name: 'Preparação de área',
    desc: 'Limpeza, nivelamento e compactação de áreas para galpão, condomínio e loteamento.',
    src: area,
    alt: 'Área extensa terraplenada e nivelada, com estacas de marcação',
  },
  {
    name: 'Máquina com operador',
    desc: 'Locação de escavadeira e retroescavadeira com operador, por diária ou por mês.',
    src: locacao,
    alt: 'Retroescavadeira com a marca CCamargo em um terreno de areia',
  },
  {
    name: 'Demolição e fundação',
    desc: 'Demolição com retirada do entulho e escavação de valas e fundações.',
    src: demolicao,
    alt: 'Escavadeira trabalhando ao lado de uma construção, com caminhão basculante',
  },
] as const

const condicoes = [
  MOBILIZACAO_MINIMA && `Mobilização a partir de ${MOBILIZACAO_MINIMA}`,
  'Locação de máquina com operador por diária ou por mês',
  'Atendimento em Sorocaba, Votorantim, Salto de Pirapora e região',
].filter(Boolean) as string[]

const info = [
  ['Telefone e WhatsApp', <a key="tel" href={TEL} className="hover:underline">{PHONE_LABEL}</a>],
  ['Horário', <>Segunda a sexta, 8h às 18h<br />Sábado, 8h às 12h</>],
  ['Atendimento', 'Sorocaba, Votorantim, Salto de Pirapora e região'],
  [
    'Instagram',
    <a key="ig" href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:underline">
      @ccamargoterraplenagem
    </a>,
  ],
] as const

// Abre a folha de orçamento já marcada como empresa. Sem JS, cai no bloco de contato desta página.
// Sem href para wa.me de propósito: o GTM conta clique em wa.me como conversão.
function Proposta({ className = 'btn-cta' }: { className?: string }) {
  return (
    <a href="#contato" data-quote="" data-quote-who="empresa" className={className}>
      Solicitar proposta
    </a>
  )
}

function Hero() {
  const common = { alt: 'Escavadeira em terreno de terra vermelha sendo terraplenado', sizes: '100vw', priority: true }
  const { srcSet: wideSet } = getImageProps({ ...common, src: wide }).props
  const { srcSet: tallSet, ...img } = getImageProps({ ...common, src: tall }).props

  return (
    <section id="hero" className="theme-dark sticky top-0 h-[100svh] min-h-[36rem]">
      <HeroStage>
        <picture>
          <source media="(min-width: 768px)" srcSet={wideSet} />
          <source media="(max-width: 767px)" srcSet={tallSet} />
          <img {...img} className="anim-settle absolute inset-0 h-full w-full object-cover md:object-right" />
        </picture>
        <div aria-hidden className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-night/60 to-transparent" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-night/90 via-night/50 to-transparent" />

        <div className="relative z-10 mx-auto flex h-full max-w-page flex-col justify-between px-5 pb-16 pt-28 sm:justify-end sm:px-8 sm:pb-28">
          <div>
            <h1>
              <span className="t-eyebrow anim-in block max-w-[34ch]">
                Terraplenagem para construtoras, condomínios e áreas industriais
              </span>
              <span className="t-hero anim-in mt-4 block text-white [animation-delay:80ms]">
                Área pronta <br className="hidden sm:block" />
                para a sua obra.
              </span>
            </h1>
            <p className="t-lead anim-in mt-6 max-w-[38ch] text-white/75 [animation-delay:160ms]">
              Corte e aterro, preparação de área e máquina com operador em Sorocaba, Votorantim, Salto de Pirapora e
              região. Mais de 15 anos de experiência.
            </p>
            <p className="anim-in mt-5 inline-flex items-center gap-2.5 text-[15px] text-white/75 [animation-delay:200ms]">
              <Stars />
              <span>
                <strong className="font-semibold text-white">{GOOGLE_RATING}</strong> no Google
              </span>
            </p>
          </div>
          <div className="anim-in flex flex-col gap-3 [animation-delay:240ms] sm:mt-10 sm:flex-row">
            <Proposta />
            <PhoneLink className="btn glass text-white hover:bg-white/15" />
          </div>
        </div>
      </HeroStage>
    </section>
  )
}

function Servicos() {
  return (
    <section id="servicos" className="layer pb-24 pt-20 sm:pb-32 sm:pt-28">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <h2 className="t-section max-w-[18ch]">O que fazemos para empresas.</h2>
        <p className="t-lead mt-5 max-w-[46ch] text-muted">
          Frente de terraplenagem para obra comercial, industrial e de condomínio.
        </p>

        <ul className="mt-12 grid gap-3 sm:mt-16 sm:gap-4 md:grid-cols-2 md:auto-rows-[20rem]">
          {servicos.map((s) => (
            <li key={s.name} className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-night md:aspect-auto">
              <Image src={s.src} alt={s.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7">
                <h3 className="t-title">{s.name}</h3>
                <p className="mt-1.5 max-w-[40ch] text-[15px] leading-snug text-white/75">{s.desc}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-col gap-8 rounded-[28px] bg-surface p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="t-title">Condições</h3>
            <ul className="mt-4 space-y-2.5">
              {condicoes.map((c) => (
                <li key={c} className="flex gap-2.5">
                  <Check className="mt-1 size-[18px] shrink-0 text-accent" strokeWidth={2.2} aria-hidden />
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[15px] text-muted">
              Tem um lote residencial?{' '}
              <a href="/" className="text-accent underline underline-offset-4">
                Veja o atendimento para terrenos
              </a>
              .
            </p>
          </div>
          <Proposta className="btn-cta self-start lg:self-auto" />
        </div>
      </div>
    </section>
  )
}

// Só aparece quando src/lib/obras.ts tiver ao menos um dado preenchido pelo cliente.
function Frota() {
  if (!FROTA.length && !MAIOR_OBRA && !DOCUMENTOS.length && !KIT_PDF) return null

  return (
    <section id="frota" className="mx-auto max-w-page px-5 pt-20 sm:px-8 sm:pt-28">
      <h2 className="t-section max-w-[18ch]">Frota e documentação</h2>
      <div className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-2">
        {FROTA.length > 0 && (
          <div className="rounded-[28px] bg-surface p-6 sm:p-8">
            <h3 className="t-title">Frota própria</h3>
            <ul className="mt-4 space-y-2.5">
              {FROTA.map((f) => (
                <li key={f.maquina} className="flex items-baseline gap-3">
                  <span className="min-w-[2ch] font-semibold tabular-nums text-accent">{f.qtd}</span>
                  {f.maquina}
                </li>
              ))}
            </ul>
          </div>
        )}
        {MAIOR_OBRA && (
          <div className="rounded-[28px] bg-surface p-6 sm:p-8">
            <h3 className="t-title">Maior obra</h3>
            <p className="t-lead mt-4 text-muted">{MAIOR_OBRA}</p>
          </div>
        )}
        {(DOCUMENTOS.length > 0 || KIT_PDF) && (
          <div className="rounded-[28px] bg-surface p-6 sm:p-8">
            <h3 className="t-title">Documentação para cadastro</h3>
            {DOCUMENTOS.length > 0 && (
              <ul className="mt-4 space-y-2.5">
                {DOCUMENTOS.map((d) => (
                  <li key={d} className="flex gap-2.5">
                    <Check className="mt-1 size-[18px] shrink-0 text-accent" strokeWidth={2.2} aria-hidden />
                    {d}
                  </li>
                ))}
              </ul>
            )}
            {KIT_PDF && (
              <a href={KIT_PDF} download className="btn-quiet mt-6">
                <Download className="size-[18px]" strokeWidth={1.8} aria-hidden />
                Baixar apresentação (PDF)
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

function Contato() {
  return (
    <div
      id="contato"
      className="layer theme-dark bg-[radial-gradient(56rem_30rem_at_50%_0%,rgb(207_171_92/0.16),transparent_70%)]"
    >
      <section className="mx-auto max-w-page px-5 pt-24 text-center sm:px-8 sm:pt-32">
        <h2 className="t-hero mx-auto max-w-[12ch]">Vamos falar da sua obra?</h2>
        <p className="t-lead mx-auto mt-6 max-w-[36ch] text-muted">
          Conte o tipo de obra, a cidade e o prazo. A conversa segue pelo WhatsApp.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Proposta />
          <PhoneLink />
        </div>
      </section>

      <footer className="mx-auto max-w-page px-5 pb-10 pt-24 sm:px-8">
        <div aria-hidden className="h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
        <dl className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {info.map(([label, value]) => (
            <div key={label}>
              <dt className="text-[13px] font-medium text-muted">{label}</dt>
              <dd className="mt-2">{value}</dd>
            </div>
          ))}
        </dl>
        <div className="flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Image src={logoLight} alt="CCamargo Terraplenagem" className="h-8 w-auto self-start sm:self-auto" />
          <p className="text-[13px] text-muted">© {new Date().getFullYear()} CCamargo Terraplenagem</p>
        </div>
      </footer>
    </div>
  )
}

// Landing dos anúncios para empresas. Mesma linguagem de folhas da home, sem nenhum link para wa.me.
export default function Obras() {
  return (
    <>
      <Header nav={nav} cta={<Proposta className="btn-cta h-11 px-5 text-[15px]" />} />
      <main>
        <div className="relative bg-night">
          <Hero />
          <div id="hero-end" aria-hidden />
          <Servicos />
        </div>
        <Process />
        <div className="layer pb-24 sm:pb-32">
          <Works />
          <Frota />
        </div>
      </main>
      <Contato />
      <QuoteSheet />
      <MobileBar contactId="contato" who="empresa" />
    </>
  )
}
