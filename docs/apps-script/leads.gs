// Recebe o beacon do site (src/lib/attribution.ts) e grava UMA linha por lead na aba "leads".
// Publicar como Web App: passo a passo em docs/rastreamento.md.
// Criar o script de dentro da planilha (Extensões > Apps Script), para getActiveSpreadsheet() funcionar.

const ABA = 'leads'
// Colunas A:L vêm do site. M:N ficam vazias: o dono preenche (status e valor fechado).
const CAMPOS = ['ts', 'ref', 'tipo', 'faixa', 'servicos', 'cidade', 'prazo', 'valor', 'gclid', 'gbraid', 'wbraid', 'pagina']
const CABECALHO = ['data_hora', 'ref', 'tipo', 'faixa', 'servicos', 'cidade', 'prazo', 'valor_proxy', 'gclid', 'gbraid', 'wbraid', 'pagina', 'status', 'valor_fechado']
const STATUS = ['qualificado', 'visita', 'proposta', 'fechou', 'perdido']

// Mesmo alfabeto do makeRef() do site (sem 0/O/1/I/L). Barra lixo, já que a URL é pública.
const REF_VALIDO = /^[2-9A-HJKMNP-Z]{4}$/

// O site manda text/plain (evita preflight de CORS), então o JSON vem em postData.contents.
function doPost(e) {
  let lead
  try {
    lead = JSON.parse(e.postData.contents)
  } catch (err) {
    return texto('json invalido')
  }
  if (!lead || !REF_VALIDO.test(String(lead.ref))) return texto('ref invalido')

  const lock = LockService.getScriptLock()
  lock.waitLock(10000)
  try {
    const sheet = aba()
    const linha = sheet.getLastRow() + 1
    const valores = CAMPOS.map((campo) => String(lead[campo] ?? '').slice(0, 300))
      // Apóstrofo na frente neutraliza fórmula (=, +, -, @) mesmo se o formato texto falhar.
      .map((v) => (/^[=+\-@]/.test(v) ? "'" + v : v))
    valores[0] = horaLocal(lead.ts)
    // Formato texto: o endpoint é público e "cidade" é livre. Sem isso, "=IMPORTXML(...)" viraria fórmula.
    sheet.getRange(linha, 1, 1, CAMPOS.length).setNumberFormat('@').setValues([valores])
  } finally {
    lock.releaseLock()
  }
  return texto('ok')
}

// Saúde: abrir a URL /exec no navegador deve mostrar "ok".
function doGet() {
  return texto('ok')
}

function texto(s) {
  return ContentService.createTextOutput(s)
}

// Horário de Brasília no formato que a importação offline do Google Ads aceita.
function horaLocal(iso) {
  const d = new Date(iso)
  return Utilities.formatDate(isNaN(d) ? new Date() : d, 'America/Sao_Paulo', 'yyyy-MM-dd HH:mm:ss')
}

function aba() {
  const planilha = SpreadsheetApp.getActiveSpreadsheet()
  let sheet = planilha.getSheetByName(ABA)
  if (!sheet) sheet = planilha.insertSheet(ABA)
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(CABECALHO)
    sheet.getRange(1, 1, 1, CABECALHO.length).setFontWeight('bold')
    sheet.setFrozenRows(1)
    const regra = SpreadsheetApp.newDataValidation().requireValueInList(STATUS, true).setAllowInvalid(false).build()
    sheet.getRange('M2:M').setDataValidation(regra)
  }
  return sheet
}
