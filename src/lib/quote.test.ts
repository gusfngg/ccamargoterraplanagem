import assert from 'node:assert/strict'
import { test } from 'node:test'
import { buildMessage, leadValue, makeRef } from './quote.ts'
import { sizes, whos } from './site.ts'

test('sem escolhas vira pedido genérico', () => {
  assert.equal(buildMessage({ services: [] }), 'Olá! Quero um orçamento de terraplenagem.')
})

test('junta serviços em português e só inclui linhas preenchidas', () => {
  assert.equal(
    buildMessage({
      services: ['limpeza de terreno', 'nivelamento', 'escavação'],
      size: 'até 300 m²',
      city: 'Votorantim',
    }),
    'Olá! Quero um orçamento de limpeza de terreno, nivelamento e escavação.\nTerreno: até 300 m²\nCidade: Votorantim',
  )
})

test('mensagem completa traz "Você é" depois do pedido e o Ref na última linha', () => {
  assert.equal(
    buildMessage({
      services: ['escavação'],
      who: 'construtora',
      size: 'de 5.000 a 20.000 m²',
      city: 'Sorocaba',
      when: 'o quanto antes',
      ref: 'K7QM',
    }),
    'Olá! Quero um orçamento de escavação.\nVocê é: construtora\nTerreno: de 5.000 a 20.000 m²\nCidade: Sorocaba\nPrazo: o quanto antes\nRef: K7QM',
  )
})

test('Ref sozinho continua sendo a última linha', () => {
  assert.equal(buildMessage({ services: [], ref: 'AB23' }), 'Olá! Quero um orçamento de terraplenagem.\nRef: AB23')
})

test('makeRef: 4 caracteres, sem ambíguos (0 O 1 I L)', () => {
  for (let i = 0; i < 500; i++) assert.match(makeRef(), /^[2-9A-HJKMNP-Z]{4}$/)
})

test('makeRef: cobre o alfabeto inteiro (31 símbolos) nas pontas', () => {
  assert.equal(makeRef(() => 0), '2222')
  assert.equal(makeRef(() => 0.999999), 'ZZZZ')
})

test('leadValue: tipo vazio vale 2, faixa só soma um ajuste', () => {
  assert.equal(leadValue({}), 2)
  assert.equal(leadValue({ who: 1 }), 1)
  assert.equal(leadValue({ who: 10, size: 2 }), 12)
  assert.equal(leadValue({ size: 3 }), 5)
})

test('contrato com a /obras: ids dos tipos de cliente e pesos em ordem de valor', () => {
  assert.deepEqual(
    whos.map((w) => w.id),
    ['pf', 'construtora', 'loteadora', 'empresa'],
  )
  const weight = Object.fromEntries(whos.map((w) => [w.id, w.weight]))
  assert.ok(weight.pf >= 1 && weight.pf < weight.empresa && weight.empresa < weight.construtora)
  assert.equal(weight.construtora, weight.loteadora)
})

test('faixas: ajuste cresce com o tamanho e "Não sei" não ganha bônus', () => {
  const bonus = sizes.map(([, , b]) => b)
  assert.ok(bonus[0] < bonus[1] && bonus[1] < bonus[2] && bonus[2] < bonus[3])
  assert.equal(bonus[4], 0)
})
