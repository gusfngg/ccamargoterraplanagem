export const PHONE = '5515996593858'
export const PHONE_LABEL = '(15) 99659-3858'
export const TEL = 'tel:+5515996593858'
export const INSTAGRAM = 'https://www.instagram.com/ccamargoterraplenagem/'
export const SITE_URL = 'https://www.ccamargoterraplanagem.com.br'
export const ADS_CONVERSION = 'AW-16626951404/1FXaCJuL9cMbEOzJrPg9'

// Âncora dos botões que abrem a folha de orçamento. Não pode ser link wa.me/tel:, senão o GTM
// conta a abertura como lead. Só o "Enviar pelo WhatsApp" da folha é wa.me.
export const QUOTE_FALLBACK = '/#contact'

// Mobilização mínima (ex.: 'R$ 2.500'). Enquanto for null, nenhuma página mostra o valor.
export const MOBILIZACAO_MINIMA: string | null = 'R$ 5.000'

// Nota pública do perfil no Google Maps, conferida em 2026-10-26.
// ponytail: valor fixo; se precisar atualizar sozinho, usar a Places API (exige chave paga).
export const GOOGLE_RATING = '4,9'
export const GOOGLE_PROFILE = 'https://maps.google.com/?cid=1785778199720272066'

export const waLink = (text = 'Olá! Quero um orçamento de terraplenagem.') =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`

// `ask` é como o serviço entra na frase da mensagem do WhatsApp.
export const services = [
  {
    id: 'limpeza',
    name: 'Limpeza de terreno',
    ask: 'limpeza de terreno',
    desc: 'Retirada de mato, tocos, entulho e restos de obra. O terreno fica limpo para medir e construir.',
  },
  {
    id: 'nivelamento',
    name: 'Nivelamento',
    ask: 'nivelamento',
    desc: 'Corte e aterro até o nível do projeto, com compactação para a fundação assentar firme.',
  },
  {
    id: 'escavacao',
    name: 'Escavação',
    ask: 'escavação',
    desc: 'Abertura de valas, fundações e estruturas subterrâneas com escavadeira e retroescavadeira.',
  },
  {
    id: 'demolicao',
    name: 'Demolição',
    ask: 'demolição',
    desc: 'Demolição controlada de construções antigas, com retirada do entulho no mesmo serviço.',
  },
  {
    id: 'perfuracao',
    name: 'Perfuração de solo',
    ask: 'perfuração de solo',
    desc: 'Furos para estacas e brocas de fundação e para coleta de amostras do solo.',
  },
] as const

// `weight` é um proxy AUTODECLARADO de valor do lead (ver leadValue em quote.ts): serve só para observar.
// `id` é o contrato com os gatilhos [data-quote-who] da /obras.
export const whos = [
  { id: 'pf', name: 'Pessoa física', ask: 'pessoa física', weight: 1 },
  { id: 'construtora', name: 'Construtora', ask: 'construtora', weight: 10 },
  { id: 'loteadora', name: 'Loteadora', ask: 'loteadora', weight: 10 },
  { id: 'empresa', name: 'Empresa ou indústria', ask: 'empresa ou indústria', weight: 8 },
] as const

// O 3º item é o pequeno ajuste de valor da faixa (leadValue).
export const sizes = [
  ['Até 1.000 m²', 'até 1.000 m²', 0],
  ['1.000 a 5.000 m²', 'de 1.000 a 5.000 m²', 1],
  ['5.000 a 20.000 m²', 'de 5.000 a 20.000 m²', 2],
  ['Mais de 20.000 m²', 'mais de 20.000 m²', 3],
  ['Não sei', 'tamanho a confirmar', 0],
] as const

export const cities = ['Salto de Pirapora', 'Votorantim', 'Sorocaba'] as const

export const whens = [
  ['O quanto antes', 'o quanto antes'],
  ['Neste mês', 'neste mês'],
  ['Só pesquisando', 'ainda pesquisando'],
] as const

export const faqs = [
  {
    q: 'O orçamento é gratuito?',
    a: 'Sim, o orçamento é sem compromisso. Mande as informações do terreno pelo WhatsApp e combinamos os próximos passos.',
  },
  {
    q: 'Quais cidades vocês atendem?',
    a: 'Salto de Pirapora, Votorantim, Sorocaba e cidades da região. Se o seu terreno fica em outra cidade, fale com a gente.',
  },
  {
    q: 'Quanto tempo dura um serviço de terraplenagem?',
    a: 'Depende do tamanho da área, do tipo de solo e do clima. Obras grandes podem levar algumas semanas. Envie as informações da obra pelo WhatsApp para estimarmos o prazo.',
  },
  {
    q: 'Vocês atendem obras comerciais, condomínios e galpões?',
    a: 'Sim. Fazemos a terraplenagem de áreas comerciais e industriais, galpões e condomínios, e atendemos construtoras. No pedido de orçamento, informe o tipo de obra, a área e o prazo.',
  },
  {
    q: 'Vocês alugam máquina com operador?',
    a: 'Sim. Fazemos locação de máquinas pesadas com operador para obras de terraplenagem. Diga pelo WhatsApp o equipamento, o período e o local da obra.',
  },
  {
    q: 'Quais serviços estão incluídos na terraplenagem?',
    a: 'Limpeza do terreno, escavação, corte e aterro, nivelamento, drenagem e compactação do solo, além de demolição e perfuração quando a obra pede.',
  },
] as const
