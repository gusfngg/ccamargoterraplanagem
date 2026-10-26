'use client'

import { Phone } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { PHONE_LABEL, TEL } from '@/lib/site'
import { QuoteLink } from './cta'

// Cápsula de vidro no celular: aparece depois do hero e some quando o bloco de contato está na tela.
export function MobileBar() {
  const [show, setShow] = useState(false)
  const bar = useRef<HTMLDivElement>(null)

  // O hero é sticky (fica "visível" atrás das folhas), então observamos um marcador no fim dele.
  useEffect(() => {
    const heroEnd = document.getElementById('hero-end')
    const contact = document.getElementById('contact')
    if (!heroEnd || !contact) return
    let pastHero = false
    let atContact = false
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === heroEnd) pastHero = !e.isIntersecting && e.boundingClientRect.top < 0
        else atContact = e.isIntersecting
      }
      setShow(pastHero && !atContact)
    })
    io.observe(heroEnd)
    io.observe(contact)
    return () => io.disconnect()
  }, [])

  // React 18 não repassa `inert` como prop; escondida, a barra não pode receber foco.
  useEffect(() => {
    if (bar.current) bar.current.inert = !show
  }, [show])

  return (
    <div
      ref={bar}
      aria-hidden={!show}
      className={`theme-dark glass fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-40 flex gap-1.5 rounded-full p-1.5 transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] lg:hidden ${show ? 'translate-y-0 opacity-100' : 'translate-y-[150%] opacity-0'}`}
    >
      <QuoteLink className="btn-cta flex-1" />
      <a href={TEL} aria-label={`Ligar para ${PHONE_LABEL}`} className="btn w-12 bg-white/10 px-0 text-white">
        <Phone className="size-5" strokeWidth={1.8} aria-hidden />
      </a>
    </div>
  )
}
