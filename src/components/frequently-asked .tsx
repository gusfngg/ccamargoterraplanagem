import { switzer } from '@/lib/fonts'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'
import { ButtonCta } from './ui/button-cta'
import BlurFade from './ui/blur-fade'

export function FrequentlyAsked() {
  return (
    <section id='askeds' className="mt-32 flex items-center justify-center flex-col">
        <h1
          className={`${switzer.className} font-medium text-2xl lg:text-3xl text-center mx-auto max-w-[900px]`}
        >
          Perguntas frequentes
        </h1>

      <div className="w-[23rem] lg:w-[45rem] mt-12 border p-4 rounded-md flex items-center justify-center flex-col">
          <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Quais serviços de terraplenagem vocês oferecem?
                </AccordionTrigger>
                <AccordionContent>
                  Oferecemos serviços completos de terraplenagem, incluindo
                  nivelamento de terreno, escavação, drenagem, compactação, e
                  demolição. Nosso objetivo é preparar o solo para construção,
                  garantindo estabilidade e segurança.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Quanto tempo dura um projeto de terraplenagem?
                </AccordionTrigger>
                <AccordionContent>
                  A duração depende da complexidade e do tamanho do terreno,
                  além das condições climáticas e do tipo de solo. Em média,
                  pequenos projetos duram alguns dias, enquanto grandes obras
                  podem levar algumas semanas.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  A empresa trabalha com terrenos de qualquer tamanho?
                </AccordionTrigger>
                <AccordionContent>
                  Trabalhamos com terrenos de todos os tamanhos, desde pequenos
                  lotes residenciais até grandes áreas comerciais e industriais.
                  Nossa equipe está preparada para atender projetos de
                  diferentes escalas, sempre com o mesmo nível de qualidade e
                  eficiência.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Quais são as etapas do processo de terraplenagem?
                </AccordionTrigger>
                <AccordionContent>
                  O processo inclui análise e planejamento do terreno, remoção
                  de entulhos e vegetação, escavação, nivelamento, drenagem e
                  compactação do solo. Cada etapa é feita com cuidado para
                  garantir um terreno estável e seguro.
                </AccordionContent>
              </AccordionItem>
          </Accordion>

        <BlurFade inView>
          <ButtonCta className="mt-6" message="Solicitar um orçamento" />
        </BlurFade>
      </div>
    </section>
  )
}
