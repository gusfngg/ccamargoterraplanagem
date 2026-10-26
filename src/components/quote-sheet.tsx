'use client'

import { Check, X } from 'lucide-react'
import { type ReactNode, useEffect, useRef, useState } from 'react'
import { buildMessage } from '@/lib/quote'
import { ADS_CONVERSION, cities, PHONE_LABEL, services, sizes, TEL, waLink, whens } from '@/lib/site'
import { WhatsAppIcon } from './cta'

function Group({ legend, hint, children }: { legend: string; hint?: string; children: ReactNode }) {
  return (
    <fieldset>
      <legend className="font-semibold">
        {legend}
        {hint && <span className="ml-2 text-sm font-normal text-muted">{hint}</span>}
      </legend>
      <div className="mt-3 flex flex-wrap gap-2">{children}</div>
    </fieldset>
  )
}

function Chip({ type, name, value, label, id }: { type: 'checkbox' | 'radio'; name: string; value: string; label: string; id?: string }) {
  return (
    <label className="group inline-flex min-h-11 cursor-pointer select-none items-center gap-1.5 rounded-full bg-ink/[0.06] px-4 text-[15px] transition-colors hover:bg-ink/[0.1] active:scale-[0.97] has-[:checked]:bg-navy has-[:checked]:text-white has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-gold">
      <input type={type} name={name} value={value} data-id={id} className="sr-only" />
      <Check className="hidden size-4 group-has-[:checked]:block" strokeWidth={2.5} aria-hidden />
      {label}
    </label>
  )
}

// Folha de orçamento: qualquer elemento com [data-quote] abre ela. O valor do atributo pré-marca um serviço.
export function QuoteSheet() {
  const dialog = useRef<HTMLDialogElement>(null)
  const form = useRef<HTMLFormElement>(null)
  const [message, setMessage] = useState(() => buildMessage({ services: [] }))
  const [otherCity, setOtherCity] = useState(false)

  // Relê o formulário inteiro a cada mudança: são poucos campos e evita um estado por campo.
  function sync() {
    if (!form.current) return
    const data = new FormData(form.current)
    const pick = (name: string) => String(data.get(name) ?? '')
    const isOther = pick('city') === 'outra'
    setOtherCity(isOther)
    setMessage(
      buildMessage({
        services: data.getAll('service').map(String),
        size: pick('size'),
        city: isOther ? pick('cityName').trim() : pick('city'),
        when: pick('when'),
      }),
    )
  }

  useEffect(() => {
    function open(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return
      const trigger = (e.target as Element).closest<HTMLElement>('[data-quote]')
      if (!trigger || !dialog.current || !form.current) return
      e.preventDefault()
      const box = form.current.querySelector<HTMLInputElement>(`input[data-id="${trigger.dataset.quote}"]`)
      if (box) box.checked = true
      sync()
      dialog.current.showModal()
    }
    document.addEventListener('click', open)
    return () => document.removeEventListener('click', open)
  }, [])

  function send() {
    window.gtag?.('event', 'conversion', { send_to: ADS_CONVERSION })
    dialog.current?.close()
  }

  return (
    <dialog
      ref={dialog}
      aria-labelledby="quote-title"
      className="quote-sheet"
      onClick={(e) => e.target === dialog.current && dialog.current.close()}
    >
      <form ref={form} onChange={sync} onSubmit={(e) => e.preventDefault()} className="flex min-h-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-4 border-b border-ink/10 px-5 py-5 sm:px-7">
          <div>
            <h2 id="quote-title" className="t-title">
              Pedir orçamento
            </h2>
            <p className="mt-1.5 text-[15px] text-muted">
              Marque o que se aplica. A mensagem fica pronta para enviar no WhatsApp.
            </p>
          </div>
          <button
            type="button"
            onClick={() => dialog.current?.close()}
            aria-label="Fechar"
            className="grid size-9 shrink-0 place-items-center rounded-full bg-ink/[0.06] text-muted transition-colors hover:bg-ink/[0.1] hover:text-ink"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>

        <div className="min-h-0 flex-1 space-y-7 overflow-y-auto overscroll-contain px-5 py-6 sm:px-7">
          <Group legend="O que você precisa?" hint="pode marcar mais de um">
            {services.map((s) => (
              <Chip key={s.id} type="checkbox" name="service" value={s.ask} id={s.id} label={s.name} />
            ))}
            <Chip type="checkbox" name="service" value="outro serviço" id="outro" label="Outro" />
          </Group>

          <Group legend="Tamanho do terreno">
            {sizes.map(([label, value]) => (
              <Chip key={value} type="radio" name="size" value={value} label={label} />
            ))}
          </Group>

          <Group legend="Cidade">
            {cities.map((c) => (
              <Chip key={c} type="radio" name="city" value={c} label={c} />
            ))}
            <Chip type="radio" name="city" value="outra" label="Outra" />
          </Group>
          {otherCity && (
            <label className="block">
              <span className="text-sm font-medium">Qual cidade?</span>
              <input
                name="cityName"
                autoComplete="address-level2"
                autoFocus
                className="mt-2 block w-full rounded-2xl border border-ink/15 bg-paper px-4 py-3 text-base outline-none focus:border-navy focus:ring-4 focus:ring-navy/10"
              />
            </label>
          )}

          <Group legend="Para quando?">
            {whens.map(([label, value]) => (
              <Chip key={value} type="radio" name="when" value={value} label={label} />
            ))}
          </Group>

          <div>
            <p className="font-semibold">Sua mensagem</p>
            <div className="mt-3 flex gap-3">
              <WhatsAppIcon className="mt-2.5 size-5 shrink-0 text-muted" />
              <p className="whitespace-pre-line rounded-[20px] rounded-tl-md bg-ink/[0.06] px-4 py-3 text-[15px] leading-relaxed">
                {message}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-ink/10 px-5 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:pb-4">
          <a href={waLink(message)} target="_blank" rel="noopener noreferrer" onClick={send} className="btn-cta">
            <WhatsAppIcon className="size-5" />
            Enviar pelo WhatsApp
          </a>
          <a href={TEL} className="text-center text-sm text-muted underline-offset-4 hover:text-ink hover:underline">
            ou ligue {PHONE_LABEL}
          </a>
        </div>
      </form>
    </dialog>
  )
}
