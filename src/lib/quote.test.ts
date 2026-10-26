import assert from 'node:assert/strict'
import { test } from 'node:test'
import { buildMessage } from './quote.ts'

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
