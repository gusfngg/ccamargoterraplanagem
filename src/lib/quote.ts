export type Quote = {
  services: string[]
  who?: string
  size?: string
  city?: string
  when?: string
  ref?: string
}

const list = new Intl.ListFormat('pt-BR', { type: 'conjunction' })

// Monta o texto que vai pré-preenchido no WhatsApp. Só entram as linhas que a pessoa escolheu.
// O Ref vai por último: é a chave que liga a mensagem à linha da planilha de leads.
export function buildMessage({ services, who, size, city, when, ref }: Quote) {
  const what = services.length ? list.format(services) : 'terraplenagem'
  return [
    `Olá! Quero um orçamento de ${what}.`,
    who && `Você é: ${who}`,
    size && `Área: ${size}`,
    city && `Cidade: ${city}`,
    when && `Prazo: ${when}`,
    ref && `Ref: ${ref}`,
  ]
    .filter(Boolean)
    .join('\n')
}

// Sem 0/O/1/I/L: o código é ditado e lido no WhatsApp. 31^4 ≈ 920 mil combinações.
const REF_ALPHABET = '23456789ABCDEFGHJKMNPQRSTUVWXYZ'

export function makeRef(random = Math.random) {
  let ref = ''
  for (let i = 0; i < 4; i++) ref += REF_ALPHABET[Math.floor(random() * REF_ALPHABET.length)]
  return ref
}

// Proxy de valor do lead para OBSERVAÇÃO. Tipo e faixa são autodeclarados, então não servem de alvo
// de lance. `who` = peso do tipo (whos em site.ts), `size` = ajuste da faixa (sizes em site.ts).
// Tipo em branco vale 2: fica entre pessoa física (1) e empresa (8).
export function leadValue({ who, size }: { who?: number; size?: number }) {
  return (who ?? 2) + (size ?? 0)
}
