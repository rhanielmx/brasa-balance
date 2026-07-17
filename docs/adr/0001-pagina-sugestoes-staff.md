# ADR-0001: Página de Sugestões de Balanceamento para a Staff

**Data:** 2026-07-17  
**Status:** Aceito  
**Contexto:** O repositório `docs/sugestoes-staff.md` contém análises detalhadas de balanceamento direcionadas à staff do Brasa MMO. Esse conteúdo existe em markdown, mas não há uma interface visual amigável para o jogador comum consumir essas informações.

**Decisão:** Criar uma nova página separada no site, acessível por link no header, que exibe o conteúdo de `sugestoes-staff.md` em formato visual (cards e tabela), mantendo o markdown como fonte da verdade e parseando-o para JSX.

## Detalhes

- **Roteamento:** Estado simples no `App.tsx` (sem react-router), com um state `page: "pvp" | "pve" | "staff"`.
- **Navegação:** Link no header alterna o título para "Sugestões de Balanceamento".
- **Layout:** Grid de cards por classe (2-3 colunas desktop, 1 coluna mobile).
- **Tabela resumo:** Classe | HP Full VIG 3★ | Dano Full VIG 3★ | Ação | Prioridade (badges coloridas 🟡 Média / 🟢 Baixa / —). HP e Dano vêm da planilha (opcionais), o restante do markdown.
- **Conteúdo expandido:** Cards com Diagnóstico, Sugestão, Justificativa, Comentário para players, mais valores numéricos.
- **Filtro/ordenação:** Nenhum — exibição estática completa.
- **Fonte dos dados:** `docs/sugestoes-staff.md` é a verdade; parseado para JSX no componente. HP/Dano 3★ lidos da planilha via API existente quando disponível.

## Consequências

- O markdown precisa de uma estrutura consistente para ser parseável (cabeçalhos por classe, seções padronizadas).
- Se o markdown for reestruturado, a página pode quebrar — requer validação.
- A página funciona offline/modo exemplo sem planilha (HP/Dano opcionais).
