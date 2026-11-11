import assert from 'node:assert/strict'
import { test } from 'node:test'
import { leadBody, packClickIds, parseClickIds, readClickIds } from './attribution.ts'

const DAY = 24 * 60 * 60 * 1000

test('parseClickIds lê os três parâmetros e ignora o resto', () => {
  assert.deepEqual(parseClickIds('?gclid=Cj0K-abc_1&gbraid=0AAA&wbraid=BBB2&utm_source=google'), {
    gclid: 'Cj0K-abc_1',
    gbraid: '0AAA',
    wbraid: 'BBB2',
  })
  assert.deepEqual(parseClickIds('gclid=x1'), { gclid: 'x1' })
  assert.deepEqual(parseClickIds(''), {})
})

test('parseClickIds descarta vazio, lixo e valor gigante (vai para a planilha)', () => {
  assert.deepEqual(parseClickIds('?gclid=&gbraid=a%20b&wbraid=%3D1%2B1'), {})
  assert.deepEqual(parseClickIds(`?gclid=${'a'.repeat(301)}`), {})
})

test('guarda e lê de volta dentro dos 90 dias', () => {
  const t = Date.UTC(2026, 10, 11)
  const ids = { gclid: 'abc123' }
  assert.deepEqual(readClickIds(packClickIds(ids, t), t + 89 * DAY), ids)
  assert.deepEqual(readClickIds(packClickIds(ids, t), t + 90 * DAY), ids)
})

test('expira depois de 90 dias', () => {
  const t = Date.UTC(2026, 10, 11)
  assert.deepEqual(readClickIds(packClickIds({ gclid: 'abc123' }, t), t + 90 * DAY + 1), {})
})

test('readClickIds aguenta storage vazio, quebrado ou adulterado', () => {
  const now = Date.now()
  assert.deepEqual(readClickIds(null, now), {})
  assert.deepEqual(readClickIds('não é json', now), {})
  assert.deepEqual(readClickIds('null', now), {})
  assert.deepEqual(readClickIds('{"ts":"ontem","ids":{"gclid":"abc"}}', now), {})
  assert.deepEqual(readClickIds(JSON.stringify({ ts: now, ids: { gclid: '=HYPERLINK("x")' } }), now), {})
})

test('leadBody monta o JSON do beacon na ordem combinada, com ids vazios quando não há', () => {
  const lead = { ref: 'K7QM', tipo: 'construtora', faixa: 'mais de 20.000 m²', servicos: 'escavação', cidade: 'Sorocaba', prazo: 'neste mês', valor: 13 }
  const now = new Date('2026-11-11T15:00:00.000Z')
  const body = leadBody(lead, { gclid: 'abc123' }, '/obras', now)
  assert.deepEqual(Object.keys(JSON.parse(body)), [
    'ref', 'tipo', 'faixa', 'servicos', 'cidade', 'prazo', 'valor', 'gclid', 'gbraid', 'wbraid', 'pagina', 'ts',
  ])
  assert.deepEqual(JSON.parse(body), {
    ...lead,
    gclid: 'abc123',
    gbraid: '',
    wbraid: '',
    pagina: '/obras',
    ts: '2026-11-11T15:00:00.000Z',
  })
})
