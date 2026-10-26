import { Plus } from 'lucide-react'
import { faqs, PHONE_LABEL, TEL } from '@/lib/site'

export function Faq() {
  return (
    <section id="askeds" className="layer pb-28 pt-20 sm:pb-36 sm:pt-28">
      <div className="mx-auto grid max-w-page gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <h2 className="t-section">Dúvidas frequentes</h2>
          <p className="t-lead mt-5 max-w-[30ch] text-muted">
            Não achou o que procurava? Ligue para{' '}
            <a href={TEL} className="whitespace-nowrap text-accent underline-offset-4 hover:underline">
              {PHONE_LABEL}
            </a>
            .
          </p>
        </div>

        <div className="divide-y divide-ink/10 rounded-[28px] bg-surface px-6 sm:px-8 lg:col-span-8">
          {faqs.map((f) => (
            // name="faq" deixa só uma resposta aberta por vez (acordeão nativo, sem JS).
            <details key={f.q} {...{ name: 'faq' }} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[19px] font-semibold tracking-[-0.02em]">
                {f.q}
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-ink/[0.06] transition-transform duration-300 group-open:rotate-45">
                  <Plus className="size-4" strokeWidth={2.2} aria-hidden />
                </span>
              </summary>
              <p className="max-w-[60ch] pb-6 text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
