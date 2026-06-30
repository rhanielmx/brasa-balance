# Brasa Balance

Vitrine de balanceamento para o servidor **FlyFes** — exibe combinações de HP e dano por classe, build e awakes de equipamento.

## Funcionalidades

- 8 classes jogáveis com abas individuais
- Cards organizados por build (Full Vigor, Híbrido, Full Dano)
- Estrelas da arma e awakes por slot de equipamento
- Suporte a múltiplos valores de dano (Blade: 1º/4º hit, Psykeeper: múltiplas skills)
- Vídeos embed dos testes por classe
- Dados ao vivo via Google Sheets ou fallback com dados de exemplo

## Como usar

```bash
npm install
npm run dev
```

### Planilha Google Sheets

1. Crie uma planilha com uma aba por classe
2. Publique em **Arquivo → Compartilhar → Publicar na web**
3. Compartilhe como **Qualquer um com o link pode ver**
4. Copie o ID da URL (hash entre `/d/` e `/edit`)
5. Crie `.env.local` com:

```
VITE_SHEET_ID=seu_id_aqui
```

### Colunas da planilha

| Build | Tank Estrelas | Tank Awakes | HP | Dano Estrelas | Dano Awakes | DMG | Exibir | Obs |

- **Exibir**: checkbox — desmarcado oculta a linha do site
- **Obs**: texto livre opcional

## Stack

React + TypeScript + Vite, deploy na Vercel.
