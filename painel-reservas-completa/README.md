# Painel de Reservas — Gabarito do Roteiro 16

Implementação completa do projeto de prática de rotas. Use-a para comparar sua solução depois de tentar cada etapa do roteiro.

## Executar

```bash
npm install
npm run dev
```

## Verificar

```bash
npm test
npm run build
```

| Caminho | Resultado esperado |
| --- | --- |
| `/` | resumo de reservas e ocupação |
| `/reservas` | lista com filtro por situação |
| `/reservas/res-03` | detalhe de uma reserva existente |
| `/reservas/res-99` | mensagem de reserva não encontrada |
| `/salas` | lista de salas |
| `/salas/sala-01` | agenda de uma sala existente |
| `/salas/sala-04` | mensagem de agenda vazia |
| `/qualquer-url` | página 404 |
