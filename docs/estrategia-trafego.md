# Estratégia de aquisição: obra grande, custo baixo (v2, 2026-11-11)

> Objetivo: lead de **obra grande** e não lote residencial de 300 m². Métrica certa **não é CPC**, é
> **custo por obra qualificada** (no fim: R$ faturado por R$ investido). CPC barato e obra grande puxam
> em direções opostas: o clique mais barato é justamente o do dono de lote.
>
> v2 = v1 atacada por um agente "advogado do diabo". Mudanças marcadas com **(v2)**.

## 1. Diagnóstico: por que o Ads antigo trouxe obrinha

1. **O sinal ensina o Google a buscar lote pequeno.** `quote-sheet.tsx` dispara a MESMA conversão para
   "Até 300 m² / Só pesquisando" e para "Mais de 1.000 m²", e dispara no **clique** do link do WhatsApp
   (não na mensagem enviada). O Smart Bidding otimiza para o que converte mais barato = dono de lote.
2. **O site convida obrinha.** FAQ "desde lotes residenciais", "lotes pequenos ficam prontos em alguns
   dias"; "retirada de mato"; faixa de tamanho para em "Mais de 1.000 m²". Nada fala com engenheiro,
   suprimentos ou construtora.
3. **(auditoria GTM, 2026-11-11) Duas contas Ads vivas e conversão inflada.** O código manda para
   `AW-16626951404`; o container `GTM-KQVVT9S4` manda para **outra conta, `AW-18232243737`**, em
   *qualquer clique* em link `wa.me` (inclusive os botões que só ABREM a folha de orçamento) e em
   `tel:`. Nessa conta, abrir o formulário já conta como lead. Corrigido no código na branch
   `trafego-qualificado` (CTA deixa de ser link `wa.me`); falta religar o GTM no evento `lead_whatsapp`.
4. **Provável, a confirmar:** campanha antiga em correspondência ampla e/ou PMax, sem negativas.
   → pegar o **relatório de termos de pesquisa** da conta antiga. É a melhor evidência que existe.

## 2. Tese: quem compra obra grande quase não procura no Google

- Obra grande é contratada por **engenheiro/suprimentos** dentro de um **cadastro de fornecedores
  homologados** (CNPJ, certidões, ART, PGR/PCMSO, NRs, frota, seguro), proposta por m³ medido por
  topografia. Descoberta = indicação + lista homologada.
- Na Meta, quem anuncia "terraplenagem Sorocaba" são pequenos falando com dono de terreno.
- Concorrente B2B sério (SCAVA, Barueri) tem páginas "fornecedor homologado" e "para construtoras".
- Obra grande andando na região: Ecivitas/Emais (~1.400 lotes), Alphaville Votorantim (518 lotes,
  2027), Boa Vista Square/Planeta (ago/26), Lago Azul 2/Ábaco (320 lotes), pautas do Graprohab.

**(v2) O alvo depende da frota (pergunta 3 da seção 8).** O primo já pega obra grande, mas
"grande" tem teto: loteamento de 500+ lotes é obra de terraplenagista com 10+ máquinas e engenheiro.
- **Ramo 1, frota pequena/média:** obras diretas de ~1.000 a ~20.000 m² (galpão, condomínio, área
  comercial) + **subempreitada para a terraplenagista principal** dos loteamentos (máquina com operador
  ou uma frente de serviço).
- **Ramo 2, frota grande + documentação (ART, PGR, seguro):** dá para ir direto às loteadoras e
  construtoras da lista, com o kit de cadastro.

**Dois motores:**

| Motor | Papel | Custo |
|---|---|---|
| **A. Busca paga filtrada** | Captar quem procura ativamente e rejeitar lote pequeno antes do clique | começar R$ 1.500/mês, validar volume |
| **B. Relacionamento ativo** | Subempreitada + construtoras médias + indicadores (topógrafo, engenheiro) | ~2 h/semana de **alguém** + quase zero de mídia |

## 3. Motor A: Google Search que filtra

**Estrutura** (1 campanha Search, frase + exata, sem PMax/Display/parceiros):
- G1 `Terraplenagem + cidade` (terraplanagem/terraplenagem sorocaba, votorantim, "empresa de").
- G2 `Obra grande` (galpão, industrial, condomínio, corte e aterro, movimentação de terra).
  **(v2)** volume provavelmente baixo: validar no Planejador antes de contar com ele.
- G3 `Locação com operador` (escavadeira hidráulica, máquinas pesadas, mensal/diária). Porta de entrada
  B2B: quem aluga máquina hoje vira cliente de obra amanhã.
- Geo por presença, raio ~50 km de Salto de Pirapora. Horário comercial.
- **(v2) Risco:** se G2 não tiver busca, a verba escorre para G1 genérico (= público de lote).
  Controle: orçamento separado por grupo ou G1 com lance mais baixo.

**Filtro antes do clique (v2: em R$, não em m²):**
- Anúncio com **"Mobilização a partir de R$ X"** / "Diária de escavadeira com operador a partir de R$ Y"
  e "Para empresas, construtoras e condomínios". Todo mundo entende reais, ninguém sabe medir m².
  Quem tem obrinha não clica, e não clicar = não pagar.
- Negativas (lista inicial ~60 termos, anexo): brinquedo, vaga, curso, cnae, "limpeza de lote", "preço
  m2", "barata", "mini escavadeira", piscina, fossa, cidades fora do raio, concorrentes.
  NÃO negativar "preço", "aluguel", "diária" sozinhos.

**Filtro depois do clique:** landing **`/obras`** (B2B): prova em escala (frota, m³, fotos de obra
grande, vídeo da cabine), tabela de diária/mobilização, documentação para cadastro, formulário com
**tipo de cliente**. Home atual segue para orgânico e para quem chega por indicação.

**Sinal para o lance (v2: o conserto principal):**
1. **Agora:** **CPC manual ou Maximizar cliques com teto de CPC**, e o filtro é feito por palavra-chave,
   negativa e anúncio, não pelo algoritmo. NÃO usar "Maximizar conversões" com a conversão de clique
   atual: ela conta o lote de 300 m² igual à construtora, e o Google voltaria a caçar lote (o erro
   original). A conversão do site continua gravando **valor por tipo de cliente** (empresa >
   pessoa física) e faixa, mas só para observação: tipo e metragem são **autodeclarados**, e por isso
   não servem de alvo para o lance.
2. **Centro do plano:** conversão **verificada por pessoa**. Código `Ref` curto na mensagem do WhatsApp
   + gravar `{Ref, gclid/gbraid/wbraid, tipo, faixa}` numa planilha (Apps Script recebe o beacon do
   site, já que `wa.me` perde o gclid). O primo (ou quem atende) marca na linha do Ref: *qualificado /
   visita técnica / fechou R$*. Essa aba sobe pelo Data Manager como conversão offline e passa a ser a
   **primária**. Aí sim: Maximizar conversões em cima do lead **verificado**, e valor/tROAS só com
   15+ conversões em 30 dias.
3. `tel:` como secundária; chamadas reais via call asset (≥ 60 s).

## 4. Motor B: relacionamento (de onde vem a obra grande que cabe)

1. **(v2) Quem faz:** o primo opera máquina o dia todo. Definir um responsável pelas 2 h/semana
   (alguém da família/escritório, ou o Gustavo como serviço). O primo entra só na visita técnica.
2. **Kit de apresentação/cadastro em PDF:** CNPJ, frota com fotos, obras feitas com m²/m³ e referência,
   documentos que **já existem** (não prometer ART/PGR/seguro que não tem).
3. **Alvos certos:** (a) **terraplenagistas principais** dos loteamentos da região (descobrir quem
   está executando Ecivitas, Boa Vista Square, Lago Azul 2...) → oferecer máquina com operador/frente;
   (b) construtoras médias de galpão/condomínio; (c) **indicadores**: topógrafos, engenheiros civis,
   arquitetos, empreiteiros de casa (o topógrafo é o primeiro a pisar no terreno) → indicação paga.
4. **Perfil da Empresa no Google (Maps) trabalhado:** pedir avaliação no fim de cada obra, foto toda
   semana, categoria "locação de equipamentos", corrigir CEP inconsistente (ver diário). Em busca local,
   o Maps pesa tanto quanto o anúncio e é de graça.
5. **Remarketing barato** só para quem visitou `/obras` (Google), com vídeo de obra. Meta com público
   amplo "para construtoras": **cortado** (não segmenta B2B direito). PNCP/licitação: **cortado** por ora.

## 5. Lead pequeno

O pedido é **cortar** obrinha. O corte mais eficiente é o preço: "mobilização a partir de R$ X" no
anúncio e na `/obras`, com X definido pelo primo como o valor abaixo do qual não vale a pena tirar a
máquina do pátio. Quem ainda chegar com obra pequena ou recebe esse preço ou é indicado a um parceiro
(reciprocidade). Assim o tempo do primo não vai para lead que não fecha.
(Opcional, **contrário ao pedido**, só se um dia ele quiser volume pequeno rentável: "sobra do
loteamento" = ser a terraplenagem indicada pela imobiliária de um loteamento recém-entregue.)

## 6. Métricas e regras de corte

- Semanal: termos de pesquisa (negativar), leads por tipo de cliente, custo por lead empresa.
- Mensal (planilha Ref): leads → qualificados → visitas → propostas → fechadas → R$.
- Corte do Motor A: 60 dias / ~R$ 3 mil sem nenhuma proposta acima do ticket mínimo → manter só G3
  (locação) + marca, e o resto do esforço vai para o B.

## 7. Fatias de implementação (cada uma ≤ 1 dia)

1. Auditoria de tag: GTM-KQVVT9S4 + `gtag.js` direto: a conversão não pode disparar em dobro.
2. Formulário: tipo de cliente + faixas maiores + valor por tipo + `Ref` na mensagem + `transaction_id`
   (`site.ts`, `quote.ts`, `quote-sheet.tsx`). Listener `tel:` secundário.
3. Planilha: captura de gclid/gbraid/wbraid na chegada + beacon com Ref para Apps Script.
4. Página `/obras` + copy B2B + tabela de mobilização; limpar FAQ que convida lote pequeno.
5. Campanha nova no Ads (estrutura, negativas, anúncios com preço mínimo).
6. Data Manager: aba da planilha → conversão offline "obra qualificada" (secundária → primária).
7. Kit PDF + Perfil da Empresa (conteúdo vem do cliente).

## 8. Perguntas para o primo (bloqueiam o resto)

1. Verba mensal de mídia.
2. O que é "obra grande" para ele: ticket mínimo em R$ e maior obra já feita.
3. Frota, operadores, raio de atuação, quantas obras simultâneas aguenta.
4. Valor de mobilização mínima e diária de cada máquina (vira filtro no anúncio).
5. Documentação que já tem (ART/responsável técnico, PGR, seguro).
6. Quem responde o WhatsApp e quem marcaria a planilha.
7. **Acesso à conta antiga do Google Ads** (relatório de termos de pesquisa, tipo de campanha, CPC).

## Anexo A: negativas iniciais (frase entre aspas; o resto em correspondência ampla)

brinquedo, controle remoto, miniatura, "para brincar", praia, jogo, desenho, simulador, emprego, vaga,
vagas, salário, curso, apostila, pdf, tcc, cnae, dnit, nbr, "o que é", significado,
"terraplanagem ou terraplenagem", "terraplenagem ou terraplanagem", "a venda", usada, usado, olx,
"mercado livre", fipe, consórcio, financiamento, peças, mecânico, portugal, "limpeza de lote",
"limpeza de terreno", roçada, roçagem, capina, "terreno pequeno", "lote pequeno", quintal, barata,
barato, "mais barato", "preço m2", "preço m3", "preço por hora", "valor da hora",
"hora de retroescavadeira", "mini escavadeira", "caçamba de entulho", piscina, fossa,
"rio de janeiro", rj, "belo horizonte", goiania, fortaleza, recife, bauru, araraquara,
+ nomes de concorrentes (cabral, antunes, tgm, "céu azul", "jc terraplanagem", "ji terraplanagem").
Revisar toda semana pelo relatório de termos. Lixo real visto no autocomplete: "retroescavadeira de
brinquedo", "aluguel de escavadeira na praia para brincar", "cnae para terraplenagem".

## Fontes

- Homologação B2B (concorrente modelo): https://scavaterraplanagem.com.br/fornecedor-homologado-terraplanagem
  e https://scavaterraplanagem.com.br/terraplanagem-para-construtoras
- Alphaville Votorantim: https://www.jornalcruzeiro.com.br/sorocaba/noticias/2026/06/761423-alphaville-anuncia-novos-residenciais-em-votorantim.html
- Ecivitas Alteza: https://editoranews.com/sorocaba-anuncia-seu-primeiro-complexo-urbano-smart-city-com-vista-privilegiada-para-o-lago-do-ipatinga/
- Boa Vista Square: https://www.jornalipanema.com.br/noticia/9382/votorantim/sorocaba/comecam-as-obras-do-maior-empreendimento-imobiliario-de-sorocaba.html
- Loteamentos aprovados (AELO): https://aelo.com.br/loteamentos-aprovados/
- Google Ads: lances https://support.google.com/google-ads/answer/6268637 e /15099424 ·
  ações secundárias /11461796 · offline via Data Manager /15713840 · chamadas /6095883
- Volume e CPC por termo: **não levantados** (chave do treg expirada) → Planejador de Palavras-chave.
