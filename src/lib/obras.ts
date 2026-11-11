// Dados da /obras que só o cliente sabe. Vazio = a seção correspondente não aparece.
// NUNCA preencher com estimativa: só número, documento e obra que existem de verdade.

// Máquinas próprias, ex.: { maquina: 'Escavadeira hidráulica', qtd: 2 }.
export const FROTA: { maquina: string; qtd: number }[] = []

// Uma frase sobre a maior obra feita, ex.: 'Corte e aterro de X m³ para galpão em Sorocaba'.
export const MAIOR_OBRA: string | null = null

// Documentos que a empresa já tem para cadastro de fornecedor, ex.: 'CNPJ ativo', 'ART', 'Seguro de máquinas'.
export const DOCUMENTOS: string[] = []

// Caminho do kit de apresentação em PDF (arquivo em /public), ex.: '/kit-ccamargo.pdf'.
export const KIT_PDF: string | null = null
