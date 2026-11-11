# Rastreamento de lead qualificado (passo a passo)

O que o site manda agora, quando alguém clica em **Enviar pelo WhatsApp** na folha de orçamento:

| Para onde | O quê |
|---|---|
| Google Ads (gtag, `AW-16626951404`) | conversão com `value` (proxy por tipo + faixa) e `transaction_id` = Ref |
| `dataLayer` (GTM) | evento `lead_whatsapp` com `lead_ref`, `lead_tipo`, `lead_faixa`, `lead_valor` |
| Planilha (Apps Script) | uma linha por lead: Ref, tipo, faixa, serviços, cidade, prazo, gclid/gbraid/wbraid, página |
| WhatsApp | a mensagem, com `Você é: ...` e `Ref: XXXX` na última linha |

Abrir a folha **não** conta mais como lead: os botões "Pedir orçamento" deixaram de ser link `wa.me`.
O valor é um **proxy autodeclarado** (tipo + faixa que a pessoa marcou). Serve para observar, não para
otimizar lance.

## 1. Planilha + Apps Script (15 min)

1. Crie uma planilha nova (ex.: "Leads CCamargo"). Extensões > Apps Script.
2. Cole o conteúdo de `docs/apps-script/leads.gs` e salve.
3. Implantar > Nova implantação > tipo **App da Web**: *Executar como* **Eu**, *Quem tem acesso* **Qualquer pessoa**.
   Autorize quando pedir. Copie a URL que termina em `/exec`.
4. Abra a URL no navegador: deve mostrar `ok`.
5. Na Vercel (Settings > Environment Variables), crie `NEXT_PUBLIC_LEADS_ENDPOINT` com essa URL, em
   Production, e faça **redeploy** (variável `NEXT_PUBLIC_` é gravada no build).
6. Teste: abra `/obras?gclid=TESTE123`, envie um orçamento e confira a linha na aba `leads` (o script cria a
   aba e o cabeçalho sozinho).
   Sem a variável o site funciona igual, só não grava na planilha.

Se mudar o script depois: Implantar > Gerenciar implantações > editar > **Nova versão** (a URL não muda).

A aba `leads` tem as colunas `status` (lista: qualificado / visita / proposta / fechou / perdido) e
`valor_fechado` vazias. Quem atende o WhatsApp acha a linha pelo **Ref** da mensagem e preenche.

## 2. GTM (container `GTM-KQVVT9S4`)

Hoje o container tem tags de conversão da conta `AW-18232243737` que disparam em **clique em link**:
uma para `wa.me|api.whatsapp.com|wa.link` e outra para `tel:`. O clique em "Enviar pelo WhatsApp" continua
sendo `wa.me`, então essa tag ainda dispara. Duas formas de resolver, conforme a seção 3:

- **Pausar** o gatilho de clique `wa.me` das tags da `AW-18232243737` (se a conta oficial for outra), ou
- **Trocar** esse gatilho por um de **Evento personalizado** `lead_whatsapp` e ligar as variáveis (se for a oficial):
  1. Variáveis > Nova > *Variável da camada de dados*: `lead_valor` e `lead_ref`.
  2. Gatilhos > Novo > *Evento personalizado*, nome do evento `lead_whatsapp`.
  3. Na tag de conversão: **Valor da conversão** = `{{lead_valor}}`, **ID da transação** = `{{lead_ref}}`,
     moeda `BRL`, gatilho = o novo.
  4. Visualizar (Preview) no site, enviar um orçamento e ver a tag disparar uma vez.

A tag de `tel:` pode ficar: ligar é intenção real, mas trate como conversão **secundária** no Ads.

## 3. Qual conta do Google Ads é a oficial? (decisão do Gustavo)

As duas estão vivas: `AW-16626951404` no código (`ADS_CONVERSION`, `layout.tsx`) e `AW-18232243737` no GTM.
Escolha **uma** para receber o lead de WhatsApp. Critério: a conta onde a campanha nova vai rodar e que o
cliente controla.

- **Oficial = `AW-16626951404`:** nada a mudar no código. No GTM, pause as tags de WhatsApp da `AW-18232243737`.
- **Oficial = `AW-18232243737`:** religue as tags dela ao evento `lead_whatsapp` (seção 2) e remova a linha
  `gtag('event', 'conversion', ...)` de `send()` em `src/components/quote-sheet.tsx`.

Nos dois casos mantenha `transaction_id` = Ref: se o mesmo lead chegar duas vezes na **mesma** ação de
conversão, o Google descarta a repetida. Na ação de conversão (Metas > Conversões), deixe como **secundária**
enquanto o lance for CPC manual (estratégia, seção 3), e com valor "usar valores diferentes".

## 4. Da planilha para o Google Ads (conversão offline)

O Google só liga o clique ao lead pelo `gclid`, e o `wa.me` perde ele. Por isso a planilha guarda o
`gclid` (e `gbraid`/`wbraid`, de iOS) de cada Ref. O site guarda o id por **90 dias** no navegador (a janela
do Google); no Safari o navegador pode apagar antes (~7 dias sem visita).

Formato da importação (Data Manager): **Google Click ID, Conversion Name, Conversion Time, Conversion Value,
Currency**. Crie duas ações de conversão offline no Ads: "Obra qualificada" e "Obra fechada".

Crie abas derivadas, só com fórmulas (nada de copiar à mão). Na aba `importar_qualificada`:

```
A1:E1  Google Click ID | Conversion Name | Conversion Time | Conversion Value | Currency
A2  =FILTER(leads!I2:I, leads!I2:I<>"", REGEXMATCH(leads!M2:M, "^(qualificado|visita|proposta|fechou)$"))
B2  =ARRAYFORMULA(IF(A2:A="",,"Obra qualificada"))
C2  =FILTER(leads!A2:A, leads!I2:I<>"", REGEXMATCH(leads!M2:M, "^(qualificado|visita|proposta|fechou)$"))
E2  =ARRAYFORMULA(IF(A2:A="",,"BRL"))
```

`Conversion Value` (D) fica vazio na qualificada. Na aba `importar_fechada`, troque a condição por
`leads!M2:M="fechou"`, o nome por "Obra fechada" e preencha D com
`=FILTER(leads!N2:N, leads!I2:I<>"", leads!M2:M="fechou")` (o `valor_fechado` real, em reais).

`#N/A` na aba derivada só quer dizer que ainda não há linha para subir.

Uso: baixe a aba como CSV (Arquivo > Fazer download > CSV) e suba no Data Manager. Faça isso por semana,
não por lead. `Conversion Time` sai em horário de Brasília (`yyyy-mm-dd hh:mm:ss`).

Linha **sem gclid** não sobe (lead orgânico, link direto, Safari que apagou). Isso é esperado.

### A confirmar no template do próprio Data Manager (não consegui verificar)

- Se o template tem colunas para **gbraid/wbraid**. Sem elas, só o `gclid` sobe.
- O formato exato de `Conversion Time` e como informar o fuso (America/Sao_Paulo, ou sufixo `-03:00`).
- A janela máxima entre o clique e a importação (o site assume 90 dias).
- Quantidade mínima de conversões para o Smart Bidding usar o dado (estratégia: 15+ em 30 dias).
