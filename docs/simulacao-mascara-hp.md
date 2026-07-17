# Simulação — Máscara de HP

> Documento para analisar o impacto de uma máscara que adiciona +5% ao pool de multiplicadores de HP.

---

## Cálculo do multiplicador

HP final = HP base × (1 + soma dos bônus %)

| Fonte | % |
|-------|---|
| Bônus universais (Eel, Orgulho, Chocolate, Pão, Set+10, Set tank, Cartas, Leão, Orbes) | +206% |
| Bônus de arma + estrelas (3★) — maioria | +24% |
| Bônus de arma + estrelas (3★) — Knight | +36% |
| **Total sem máscara — maioria 3★** | **3,30×** |
| **Total com máscara (+5% aditivo) — maioria 3★** | **3,35×** |

Aumento real de HP: **~1,5%** (diluição pelos +230% já existentes).

---

## HP antes e depois — Full VIG, 3★, VIG+28

| Classe | HP sem máscara | HP com máscara (+1,5%) | Aumento |
|--------|---------------|----------------------|---------|
| Jester | 226.660 | **230.059** | +3.399 |
| Ranger | 236.754 | **240.305** | +3.551 |
| Ringmaster | 252.039 | **255.819** | +3.780 |
| Blade | 257.644 | **261.508** | +3.864 |
| Billposter | 258.683 | **262.563** | +3.880 |
| Elementor | 263.967 | **267.926** | +3.959 |
| Psykeeper | 276.824 | **280.976** | +4.152 |
| Knight | 307.814 | **312.385** | +4.571 |

> Knight tem bônus de arma maior (+30% vs +20%), então o aumento real é ~1,48% em vez de ~1,52%. A diferença é mínima.

---

## Impacto nos breakpoints

### Ranger 3 hits (94,6K × 3 = 283,8K)

| Alvo | HP sem máscara | Morre em 3? | HP com máscara | Morre em 3? |
|------|---------------|-------------|----------------|-------------|
| Jester | 226.660 | ✅ | 230.059 | ✅ |
| Ringmaster | 252.039 | ✅ | 255.819 | ✅ |
| Blade | 257.644 | ✅ | 261.508 | ✅ |
| Billposter | 258.683 | ✅ | 262.563 | ✅ |
| Elementor | 263.967 | ✅ | 267.926 | ✅ |
| Psykeeper | 276.824 | ✅ | 280.976 | ✅ |
| Knight | 307.814 | ❌ | 312.385 | ❌ |

**Nenhuma mudança.** Ranger continua matando todos exceto Knight em 3 hits.

### Blade 4º hit (253,5K)

| Alvo | HP sem máscara | Morre? | HP com máscara | Morre? |
|------|---------------|--------|----------------|--------|
| Jester | 226.660 | ✅ | 230.059 | ✅ |
| **Ringmaster** | **252.039** | **✅** (253K > 252K) | **255.819** | **❌** (253K < 255K) |
| Blade | 257.644 | ❌ | 261.508 | ❌ |
| Demais | >257K | ❌ | >261K | ❌ |

**Mudança:** Blade perde a capacidade de oneshot Ringmaster de 4º hit com a máscara.

### Billposter Full FOR (312,9K) vs Knight

| Cenário | HP Knight | Morre? |
|---------|-----------|--------|
| Sem máscara | 307.814 | ✅ (312,9K > 307,8K) |
| Com máscara | 312.385 | ✅ (312,9K > 312,3K) por ~500 |

Ainda mata, mas margem caiu de ~5K para ~500.

### Demais breakpoints

| Cenário | Sem máscara | Com máscara | Mudou? |
|---------|-------------|-------------|--------|
| Billposter 100 FOR mata Jester | ✅ 234K > 226K | ✅ 234K > 230K | ❌ |
| Billposter Full VIG mata alguém? | ❌ 197K < 226K | ❌ 197K < 230K | ❌ |
| Jester Full VIG tira ~50% HP | ✅ 145K ≈ 47% de 307K | ✅ 145K ≈ 46% de 312K | ❌ |
| Blade 1º+2º hits matam Full VIG | ✅ ~325K > 307K | ✅ ~325K > 312K | ❌ |
| Psy combo Bomb+Square mata? | ❌ 195K < 276K | ❌ 195K < 280K | ❌ |

---

## Conclusão

A máscara (+5% aditivo ao pool) resulta em **~1,5% de HP real** e altera **apenas 1 breakpoint** no cenário Full VIG 3★:

1. **Blade 4º hit → Ringmaster**: de kill para não-kill (margem de ~2,3K)
2. **Billposter Full FOR → Knight**: margem cai de ~5K para ~500 (ainda mata)

Para comparação, o nerf alternativo que estávamos simulando anteriormente (Psy/Elementor -5% HP, Ranger/Blade -10% DMG) mexia em **múltiplos breakpoints** e quebrava a diretriz de Ranger 3 hits. A máscara é uma intervenção muito mais leve.

Se o objetivo é **aumentar a sobrevivência geral sem nerfar dano**, a máscara sozinha é insuficiente para mudar o meta — apenas 1 breakpoint se altera. Se o objetivo fosse que ela causasse um impacto real (~5% de HP final), precisaria adicionar **~+16~17% ao pool de multiplicadores** em vez de +5%.
