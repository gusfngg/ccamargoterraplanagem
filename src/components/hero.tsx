import { getImageProps } from 'next/image'
import tall from '@/assets/hero-tall.jpg'
import wide from '@/assets/hero-wide.jpg'
import { GOOGLE_RATING } from '@/lib/site'
import { PhoneLink, QuoteLink, Stars } from './cta'
import { HeroStage } from './hero-stage'

export function Hero() {
  // Foto horizontal no desktop, vertical no celular (art direction com <picture>).
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
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-night/90 via-night/30 to-transparent sm:h-2/3 sm:via-night/50" />

        <div className="relative z-10 mx-auto flex h-full max-w-page flex-col justify-between px-5 pb-16 pt-28 sm:justify-end sm:px-8 sm:pb-28">
          <div>
            <h1>
              <span className="t-eyebrow anim-in block">Terraplenagem em Salto de Pirapora e região</span>
              <span className="t-hero anim-in mt-4 block text-white [animation-delay:80ms]">
                Terreno pronto <br className="hidden sm:block" />
                para construir.
              </span>
            </h1>
            <p className="t-lead anim-in mt-6 max-w-[34ch] text-white/75 [animation-delay:160ms]">
              Limpeza, escavação, nivelamento e demolição de terrenos, com mais de 15 anos de experiência. Orçamento sem
              compromisso pelo WhatsApp.
            </p>
            <a
              href="#feedbacks"
              className="anim-in mt-5 inline-flex items-center gap-2.5 text-[15px] text-white/75 transition-colors [animation-delay:200ms] hover:text-white"
            >
              <Stars />
              <span>
                <strong className="font-semibold text-white">{GOOGLE_RATING}</strong> no Google
              </span>
            </a>
          </div>
          <div className="anim-in flex flex-col gap-3 [animation-delay:240ms] sm:mt-10 sm:flex-row">
            <QuoteLink />
            <PhoneLink className="btn glass text-white hover:bg-white/15" />
          </div>
        </div>
      </HeroStage>
    </section>
  )
}
