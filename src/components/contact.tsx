import Image from 'next/image'
import logoLight from '@/assets/logo-light.png'
import { INSTAGRAM, PHONE_LABEL, TEL } from '@/lib/site'
import { PhoneLink, QuoteLink } from './cta'

const info = [
  ['Telefone e WhatsApp', <a key="tel" href={TEL} className="hover:underline">{PHONE_LABEL}</a>],
  ['Horário', <>Segunda a sexta, 8h às 18h<br />Sábado, 8h às 12h</>],
  ['Atendimento', 'Salto de Pirapora, Votorantim, Sorocaba e região'],
  [
    'Instagram',
    <a key="ig" href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:underline">
      @ccamargoterraplenagem
    </a>,
  ],
] as const

export function Contact() {
  return (
    <div
      id="contact"
      className="layer theme-dark bg-[radial-gradient(56rem_30rem_at_50%_0%,rgb(207_171_92/0.16),transparent_70%)]"
    >
      <section className="mx-auto max-w-page px-5 pt-24 text-center sm:px-8 sm:pt-32">
        <h2 className="t-hero mx-auto max-w-[12ch]">Vamos preparar o seu terreno?</h2>
        <p className="t-lead mx-auto mt-6 max-w-[34ch] text-muted">Conte o que precisa e receba o orçamento pelo WhatsApp.</p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <QuoteLink />
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
          <Image src={logoLight} alt="CCamargo Terraplenagem" className="h-8 w-auto" />
          <p className="text-[13px] text-muted">
            © {new Date().getFullYear()} CCamargo Terraplenagem. Site por{' '}
            <a href="https://instagram.com/gs.gus" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Gustavo Camargo
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
