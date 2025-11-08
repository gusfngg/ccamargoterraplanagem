import { jura, switzer } from '@/lib/fonts'
import Image from 'next/image'
import AboutImage from '@/assets/about.png'
import BlurFade from './ui/blur-fade'

export function About() {
  return (
    <section
      id="about"
      className="mt-28 lg:flex-row flex-col flex lg:items-start items-center gap-4 lg:gap-16"
    >
      <BlurFade inView>
        <Image
          className="lg:w-[400px] lg:h-[600px] h-[490px] w-[380px] rounded-md"
          src={AboutImage}
          height={5313}
          width={3438}
          alt=""
        />
      </BlurFade>

      <div>
        <BlurFade inView>
          <h1 className={`text-2xl md:text-3xl font-bold ${jura.className}`}>
            SOBRE NÓS
          </h1>
        </BlurFade>

        <BlurFade inView>
          <p
            className={`${switzer.className} mt-8  max-w-[500px] text-justify`}
          >
            A CCamargo Terraplenagem é uma empresa que vem atuando na área há
            mais de{' '}
            <span className="font-mono border bg-zinc-400/30 rounded-md p-0.5">
              12 anos
            </span>{' '}
            no mercado. Tendo uma vasta experiência em diversas áreas do ramo,
            sua missão é entregar um serviço com excelência, sempre visando a
            satisfação de seus clientes. A nossa missão é preparar o terreno
            para sustentar a base da realização do seu sonho!
          </p>
        </BlurFade>
      </div>
    </section>
  )
}
