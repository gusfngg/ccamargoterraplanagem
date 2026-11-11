import Image from 'next/image'
import sobre from '@/assets/sobre.jpg'

export function About() {
  return (
    <section id="about" className="layer theme-dark pb-24 pt-20 sm:pb-32 sm:pt-28">
      <div className="mx-auto grid max-w-page items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <h2 className="t-section max-w-[15ch]">Mais de 15 anos preparando terrenos na região.</h2>
          <p className="t-lead mt-6 max-w-[48ch] text-muted">
            A CCamargo faz a terraplenagem de áreas comerciais e industriais, condomínios e obras de construtoras, com
            equipe experiente e equipamentos modernos. Nossa missão é preparar o terreno que sustenta a base da sua
            obra.
          </p>
        </div>
        <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[28px] lg:col-span-4 lg:col-start-9 lg:max-w-none">
          <Image
            src={sobre}
            alt="Retroescavadeira com a marca CCamargo em um terreno de areia"
            fill
            sizes="(min-width: 1024px) 30vw, 24rem"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
