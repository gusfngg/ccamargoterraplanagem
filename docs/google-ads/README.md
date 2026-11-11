# Campanha Google Ads: como importar

Arquivo: `campanha-editor.csv` (gerado e validado: títulos ≤ 30, descrições ≤ 90, caminhos ≤ 15).
Conteúdo: 1 campanha Search **pausada**, 3 grupos (Terraplenagem Região, Obra Grande, Locação com
Operador), 66 palavras (exata + frase), 3 anúncios responsivos → `/obras`, 67 negativas de campanha.

## 1. Importar
Google Ads Editor → baixar a conta → **Conta > Importar > Do arquivo** → `campanha-editor.csv` →
revisar as mudanças propostas → **Manter**. Se alguma coluna não for reconhecida, o Editor mostra antes
de aplicar (os nomes das colunas seguem o padrão do Editor em inglês).

## 2. Ajustar à mão (o CSV não cobre)
- **Local:** raio de **50 km** em volta de Salto de Pirapora · opção "Presença: pessoas no local".
- **Idioma:** português.
- **Redes:** desmarcar "Parceiros de pesquisa" e "Display" se o Editor ligar.
- **Programação:** seg–sex 7h–19h, sáb 7h–13h.
- **Orçamento:** veio R$ 50/dia (≈ R$ 1.500/mês). CPC máx. R$ 3,50–4,50 por grupo: chute inicial,
  ajustar pela 1ª semana.
- **Lance:** CPC manual. **Não** trocar para "Maximizar conversões" antes de ter conversão confirmada
  pela planilha (ver `docs/estrategia-trafego.md`).

## 3. Recursos (adicionar no nível da campanha)
**Sitelinks** (texto ≤ 25 · descrições ≤ 35):
| Texto | Descrição 1 | Descrição 2 | URL |
|---|---|---|---|
| Obras para Empresas | Galpões, condomínios e indústria | Obras a partir de R$ 5.000 | /obras |
| Máquina com Operador | Escavadeira e retroescavadeira | Por diária ou por mês | /obras#servicos |
| Obras Realizadas | Veja trabalhos na região | Sorocaba e Votorantim | /obras#works |
| Pedir Proposta | Resposta pelo WhatsApp | Conte a obra e a cidade | /obras#contato |

**Frases de destaque** (≤ 25): Obras a partir de R$ 5.000 · Frota própria · Mais de 15 anos ·
Nota 4,9 no Google · Proposta pelo WhatsApp · Máquina com operador

**Chamada:** (15) 99659-3858 · contar como conversão só ligações ≥ 60 s.

## 4. Conversão
Criar a ação **"Lead WhatsApp"** (Site, valor dinâmico, contar "Uma") e mandar o código
`AW-XXXX/YYYY` para trocar `ADS_CONVERSION` em `src/lib/site.ts`. Pausar no GTM as tags da conta
`AW-18232243737` para não contar em dobro.

## 5. Confirmar com o primo antes de ativar
Escavadeira hidráulica e retroescavadeira **com operador** por diária/mês · "frota própria" ·
atende galpão e condomínio. Se algo não for verdade, tirar do anúncio.
