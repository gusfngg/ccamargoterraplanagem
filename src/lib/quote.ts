export type Quote = {
  services: string[]
  size?: string
  city?: string
  when?: string
}

const list = new Intl.ListFormat('pt-BR', { type: 'conjunction' })

// Monta o texto que vai pré-preenchido no WhatsApp. Só entram as linhas que a pessoa escolheu.
export function buildMessage({ services, size, city, when }: Quote) {
  const what = services.length ? list.format(services) : 'terraplenagem'
  return [
    `Olá! Quero um orçamento de ${what}.`,
    size && `Terreno: ${size}`,
    city && `Cidade: ${city}`,
    when && `Prazo: ${when}`,
  ]
    .filter(Boolean)
    .join('\n')
}
