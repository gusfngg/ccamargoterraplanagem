import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Faq } from '@/components/faq'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { MobileBar } from '@/components/mobile-bar'
import { Process } from '@/components/process'
import { QuoteSheet } from '@/components/quote-sheet'
import { Reviews } from '@/components/reviews'
import { Services } from '@/components/services'
import { Works } from '@/components/works'

// Cada seção é uma "folha" (.layer) que sobe por cima da anterior, alternando claro e escuro.
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="relative bg-night">
          <Hero />
          <div id="hero-end" aria-hidden />
          <Services />
        </div>
        <Process />
        <div className="layer">
          <Works />
          <Reviews />
        </div>
        <About />
        <Faq />
      </main>
      <Contact />
      <QuoteSheet />
      <MobileBar />
    </>
  )
}
