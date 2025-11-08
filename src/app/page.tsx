import { About } from '@/components/about'
import { Footer } from '@/components/footer'
import { FrequentlyAsked } from '@/components/frequently-asked '
import { Header } from '@/components/header'
import Hero from '@/components/hero'
import Marquee from '@/components/marquee'
import { Services } from '@/components/services'
import { Values } from '@/components/values'

export default function Home() {
  return (
    <div className="bg-grayAm antialiased">
      <div className="mx-auto flex max-w-[90rem] flex-col px-5">
        <Header />
      </div>

      <Hero />

      <div className="mx-auto flex max-w-[112rem] flex-col px-5">
        <Services />
      </div>

      <div className="mx-auto flex max-w-[90rem] flex-col px-5">
        <Values />
        <Marquee />
        <About />

        <FrequentlyAsked />
      </div>

      <div className="border-t mt-32">
        <div className="p-5 mx-auto flex max-w-[90rem] flex-col">
          <Footer />
        </div>
      </div>
    </div>
  )
}
