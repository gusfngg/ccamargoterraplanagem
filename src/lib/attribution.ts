// O wa.me perde o gclid: guardamos os ids de clique na chegada e mandamos junto com o Ref para a planilha.

const KEY = 'cc_click_ids'
const TTL = 90 * 24 * 60 * 60 * 1000 // 90 dias, a janela do Google para importar conversão offline
const PARAMS = ['gclid', 'gbraid', 'wbraid'] as const
// Os valores acabam numa planilha: só aceita o formato dos ids do Google (letras, números, _ e -).
const VALID = /^[\w-]{1,300}$/

export type ClickIds = { gclid?: string; gbraid?: string; wbraid?: string }

export type Lead = {
  ref: string
  tipo: string
  faixa: string
  servicos: string
  cidade: string
  prazo: string
  valor: number
}

function clean(get: (name: string) => unknown) {
  const ids: ClickIds = {}
  for (const name of PARAMS) {
    const value = get(name)
    if (typeof value === 'string' && VALID.test(value)) ids[name] = value
  }
  return ids
}

export const parseClickIds = (search: string) => {
  const params = new URLSearchParams(search)
  return clean((name) => params.get(name))
}

export const packClickIds = (ids: ClickIds, now: number) => JSON.stringify({ ts: now, ids })

export function readClickIds(raw: string | null, now: number): ClickIds {
  try {
    const { ts, ids } = JSON.parse(raw ?? '')
    return typeof ts === 'number' && now - ts <= TTL ? clean((name) => ids?.[name]) : {}
  } catch {
    return {} // vazio ou quebrado: tratado como "sem atribuição"
  }
}

export function leadBody(lead: Lead, ids: ClickIds, pagina: string, now: Date) {
  return JSON.stringify({
    ref: lead.ref,
    tipo: lead.tipo,
    faixa: lead.faixa,
    servicos: lead.servicos,
    cidade: lead.cidade,
    prazo: lead.prazo,
    valor: lead.valor,
    gclid: ids.gclid ?? '',
    gbraid: ids.gbraid ?? '',
    wbraid: ids.wbraid ?? '',
    pagina,
    ts: now.toISOString(),
  })
}

// Chamado uma vez por carregamento (ClickIds, no layout). Clique novo substitui o antigo: vale o último.
export function captureClickIds() {
  try {
    const ids = parseClickIds(location.search)
    if (Object.keys(ids).length) localStorage.setItem(KEY, packClickIds(ids, Date.now()))
  } catch {
    // Storage bloqueado (modo privado): sem atribuição, o site segue normal.
  }
}

export function sendLead(lead: Lead) {
  const url = process.env.NEXT_PUBLIC_LEADS_ENDPOINT
  if (!url) return
  try {
    const ids = readClickIds(localStorage.getItem(KEY), Date.now())
    // text/plain evita o preflight de CORS, que o Apps Script não responde.
    const body = new Blob([leadBody(lead, ids, location.pathname, new Date())], { type: 'text/plain;charset=UTF-8' })
    navigator.sendBeacon(url, body)
  } catch {
    // Medir nunca pode atrapalhar o envio do WhatsApp: se o beacon falhar, o lead só fica sem linha na planilha.
  }
}
