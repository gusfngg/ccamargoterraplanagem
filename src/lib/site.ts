export const PHONE = '5515996593858'
export const PHONE_LABEL = '(15) 99659-3858'
export const TEL = 'tel:+5515996593858'
export const INSTAGRAM = 'https://www.instagram.com/ccamargoterraplenagem/'
export const SITE_URL = 'https://www.ccamargoterraplanagem.com.br'
export const ADS_CONVERSION = 'AW-16626951404/1FXaCJuL9cMbEOzJrPg9'

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

export const sizes = [
  ['Até 300 m²', 'até 300 m²'],
  ['300 a 1.000 m²', 'de 300 a 1.000 m²'],
  ['Mais de 1.000 m²', 'mais de 1.000 m²'],
  ['Não sei', 'tamanho a confirmar'],
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
    a: 'Depende do tamanho do terreno, do tipo de solo e do clima. Em média, lotes pequenos ficam prontos em alguns dias e obras grandes podem levar algumas semanas.',
  },
  {
    q: 'Vocês trabalham com terrenos de qualquer tamanho?',
    a: 'Sim. Atendemos desde lotes residenciais até grandes áreas comerciais e industriais, com o mesmo cuidado em todas as escalas.',
  },
  {
    q: 'Quais serviços estão incluídos na terraplenagem?',
    a: 'Limpeza do terreno, escavação, corte e aterro, nivelamento, drenagem e compactação do solo, além de demolição e perfuração quando a obra pede.',
  },
] as const
