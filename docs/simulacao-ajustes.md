# Simulação de Ajustes — Brasa Balance

> Documento alternativo para simular alterações manuais nos valores.
> Não substitui `sugestoes.md` — é um playground de simulação.

---

## Ajustes propostos

| Classe | Stat | Ajuste | Justificativa |
|--------|------|--------|---------------|
| Psykeeper | HP | **-5%** | Reduzir sobrevivência do mago com maior HP |
| Elementor | HP | **-5%** | Ajuste fino na base |
| Ranger | DMG | **-10%** | Compensar alcance + consistência (quase nunca blockado) |
| Blade | DMG | **-10%** | Compensar dano bruto alto (mesmo com blocks frequentes) |
| Demais | — | Nenhum | Manter como referência |

> Aplicado a **todas as builds** da classe (Full VIG, 100 FOR/INT, Full FOR/INT) no mesmo percentual.

---

## Tabelão Comparativo — Antes vs Depois (Full VIG, 3★, VIG+28)

*Ordem crescente de HP (valores ajustados em **negrito**):*

| Classe | HP Antes | HP Depois | DMG Antes | DMG Depois |
|--------|----------|-----------|-----------|------------|
| **Jester** | 226.660 | 226.660 | 145.905 (Hop) | 145.905 |
| **Ranger** | 236.754 | 236.754 | **94.600** | **85.140** (-10%) |
| **Ringmaster** | 252.039 | 252.039 | ~67.000 | ~67.000 |
| **Blade** | 257.644 | 257.644 | 142,6K(1º)~253,5K(4º) | **128,3K(1º)~228,2K(4º)** (-10%) |
| **Billposter** | 258.683 | 258.683 | 197.499 (Asal) | 197.499 |
| **Elementor** | 263.967 | **250.769** (-5%) | ~75.800 | ~75.800 |
| **Psykeeper** | 276.824 | **262.983** (-5%) | 85,8K(Bomb)/109,2K(Square) | 85,8K/109,2K |
| **Knight** | 307.814 | 307.814 | 82.100 | 82.100 |

### Reordenação de HP

| Antes | Depois |
|-------|--------|
| Jester (226.660) | Jester (226.660) |
| Ranger (236.754) | Ranger (236.754) |
| Ringmaster (252.039) | **Elementor (250.769)** ↓1 |
| Blade (257.644) | Ringmaster (252.039) |
| Billposter (258.683) | Blade (257.644) |
| Elementor (263.967) | Billposter (258.683) |
| Psykeeper (276.824) | **Psykeeper (262.983)** ↓1 |
| Knight (307.814) | Knight (307.814) |

**Impacto:** Psy cai de 2º maior HP para **7º** (só ganha de Jester e Ranger). Elementor cai para 4º. Psy perde a posição de "mago tanque" e fica com HP mais próximo de Blade/Billposter.

---

## Simulação de Breakpoints — Full VIG (3★, VIG+28)

### Quem mata quem com os ajustes?

*Valores entre parênteses: dano ajustado / HP ajustado.*
*Comparação: ANTES → DEPOIS.*

#### Psykeeper (HP: 276.824 → 262.983)

| Atacante | DMG | Mata Psy ANTES? | Mata Psy DEPOIS? |
|----------|-----|----------------|------------------|
| Billposter Asal | 197.499 | ❌ (197K < 276K) | ❌ (197K < 262K) |
| Jester Hop | 145.905 | ❌ | ❌ |
| Blade 4º hit | 253.5K → **228,2K** | ❌ (253K < 276K) | ❌ (228K < 262K) |
| Blade 2 hits (1º+2º) | ~325K → **~293K** | ✅ (~325K > 276K) | ✅ (~293K > 262K) |
| Ranger 3 hits | 283.8K → **255,4K** | ✅ (283K > 276K) | ❌ (255K < 262K) |
| Ranger 4 hits | 378.4K → **340,6K** | ✅ | ✅ |
| Psy combo (Bomb+Square) | 195K | ❌ | ❌ |
| Full FOR Billposter | 312.968 | ✅ | ✅ |
| Full FOR Blade 4º | 341,9K → **307,7K** | ✅ | ✅ |

**Mudança relevante:** Nenhum breakpoint novo foi quebrado com -5%. Psy continua não morrendo para Asal, Hop, 4º hit do Blade ou 3 hits do Ranger (com Ranger nerfado). O HP caiu mas ainda está seguro contra os mesmos ataques de antes.

#### Elementor (HP: 263.967 → 250.769)

| Atacante | DMG | Mata Ele ANTES? | Mata Ele DEPOIS? |
|----------|-----|----------------|------------------|
| Billposter Asal | 197.499 | ❌ (197K < 263K) | ❌ (197K < 250K) |
| Jester Hop | 145.905 | ❌ | ❌ |
| Blade 4º hit | 253.5K → **228,2K** | ❌ (253K < 263K) | ❌ (228K < 250K) |
| Blade 2 hits | ~325K → **~293K** | ✅ | ✅ |
| Ranger 3 hits | 283.8K → **255,4K** | ✅ (283K > 263K) | ✅ (255K > 250K) |
| Ranger 4 hits | 378.4K → **340,6K** | ✅ | ✅ |
| Psy Bomb+Square | 195K | ❌ | ❌ |
| Full FOR Billposter | 312.968 | ✅ | ✅ |

**Mudança relevante:** Elementor com -5% HP + Ranger com -10% DMG = Ranger 3 hits **ainda matam** Elementor (255,4K > 250,7K), mas por margem muito estreita (~4,6K). Na prática, com blocks e variação de dano, é um empate.

#### Ranger (DMG: 94.600 → 85.140)

| Alvo (HP) | Hits ANTES | Hits DEPOIS |
|-----------|-----------|-------------|
| Jester (226.660) | 3 (283,8K) | 3 (255,4K) ✅ |
| Ringmaster (252.039) | 3 (283,8K) | 3 (255,4K) ✅ |
| Blade (257.644) | 3 (283,8K) | **4 (340,6K)** ❌ |
| Billposter (258.683) | 3 (283,8K) | **4 (340,6K)** ❌ |
| Elementor (256.048) | ~~3 (283,8K)~~ | **4 (340,6K)** ❌ |
| Psykeeper (257.446) | ~~3 (283,8K)~~ | **4 (340,6K)** ❌ |
| Knight (307.814) | **4** (378,4K) | **4** (340,6K) ✅ |

**Mudança relevante:** Ranger perde a capacidade de matar em **3 hits** classes de HP médio (Blade, Billposter). Agora precisa de **4 hits** para a maioria das classes. Só Jester e Ringmaster continuam morrendo em 3 hits. Knight continua levando 4 hits.

#### Blade (DMG: 142,6K(1º)~253,5K(4º) → 128,3K(1º)~228,2K(4º))

| Alvo (HP) | 4º hit ANTES | 4º hit DEPOIS | 1º+2º hits ANTES | 1º+2º hits DEPOIS |
|-----------|-------------|--------------|-----------------|------------------|
| Jester (226.660) | ✅ 253,5K > 226K | ✅ 228,2K > 226K | ✅ | ✅ |
| Ringmaster (252.039) | ✅ 253,5K > 252K | ❌ **228,2K < 252K** | ✅ | ✅ |
| Blade (257.644) | ❌ 253,5K < 257K | ❌ 228,2K < 257K | ✅ | ✅ |
| Billposter (258.683) | ❌ 253,5K < 258K | ❌ 228,2K < 258K | ✅ | ✅ |
| Elementor (256.048) | ❌ 253,5K < 263K | ❌ **228,2K < 256K** | ✅ | ✅ |
| Psykeeper (257.446) | ❌ 253,5K < 276K | ❌ **228,2K < 257K** | ✅ | ✅ |
| Knight (307.814) | ❌ 253,5K < 307K | ❌ 228,2K < 307K | ✅ | ✅ |

*(1º+2º hits ANTES: ~325K. DEPOIS: ~293K)*

**Mudança relevante:** O 4º hit do Blade **perde a capacidade de oneshot Ringmaster** (228,2K < 252K). Antes matava Jester e Ringmaster de 4º hit; agora só Jester. A soma 1º+2º hits (~293K) continua matando qualquer classe com HP < 293K — perde apenas Knight (307K).

---

## Simulação — Builds Ofensivas (100 FOR/INT, 3★, VIG+28)

### Psykeeper 100 INT

| Stat | Antes | Depois (-5% HP) |
|------|-------|-----------------|
| HP | 245.534 | **233.257** |
| Bomb | ~102.000 | ~102.000 |
| Square | 119.376 | 119.376 |

**Breakpoints:** Com 233K de HP, Psy 100 INT:
- Asal Billposter 100 FOR (234.743): **mata por pouco** (234K > 233K) ✅
- Hop Jester Full FOR (195.268): ❌ não mata
- Hop Jester 100 FOR (161.603): ❌
- Blade 4º hit Full VIG (228,2K): ❌ (228K < 233K)

### Psykeeper Full INT

| Stat | Antes | Depois (-5% HP) |
|------|-------|-----------------|
| HP | 178.878 | **169.934** |
| Bomb | ~141.300 | ~141.300 |
| Square | 140.893 | 140.893 |

Sem impacto significativo.

### Elementor 100 INT

| Stat | Antes | Depois (-5% HP) |
|------|-------|-----------------|
| HP | 231.576 | **219.997** |
| Windfield | ~83.500 | ~83.500 |

### Elementor Full INT

| Stat | Antes | Depois (-5% HP) |
|------|-------|-----------------|
| HP | 162.582 | **154.453** |
| Windfield | ~99.900 | ~99.900 |

### Ranger 100 DEX / Full DEX

*DMG reduzido em 10% em todas as builds:*

| Build | DMG Antes | DMG Depois |
|-------|-----------|------------|
| 100 DEX | 102.900 | **92.610** |
| Full DEX | 120.400 | **108.360** |

### Blade 100 FOR / Full FOR

*DMG reduzido em 10% em todos os hits:*

| Build | 4º hit Antes | 4º hit Depois |
|-------|-------------|--------------|
| 100 FOR | 281.700 | **253.530** |
| Full FOR | 341.900 | **307.710** |

Blade Full FOR 4º hit: 307,7K vs Knight Full VIG: 307,8K — **não mata mais** por margem de 100 de HP.

---

## Resumo das Mudanças nos Breakpoints

| Cenário | ANTES | DEPOIS | Impacto |
|---------|-------|--------|---------|
| Ranger mata Blade em 3 hits | ✅ | ❌ (precisa de 4) | Ranger perde capacidade de matar classes de HP médio em 3 hits |
| Ranger mata Psy em 3 hits | ✅ | ❌ (255K < 262K) | Psy sobrevive à custa do nerf de -5% HP no Psy + -10% DMG no Ranger |
| Blade 4º hit oneshot Ringmaster | ✅ (253K > 252K) | ❌ (228K < 252K) | Blade não oneshota mais Ringmaster de 4º hit |
| Blade 4º hit mata Jester | ✅ (253K > 226K) | ✅ (228K > 226K) | Ainda mata — por pouco |
| Blade Full FOR 4º hit mata Knight | ✅ (341K > 307K) | ❌ (307,7K < 307,8K) | Por 100 de HP — empate técnico |
| Billposter 100 FOR mata Psy 100 INT | ❌ (234K < 245K) | ⚠️ (234K > 233K) | Por apenas ~1,5K de diferença — empate técnico |
| Ranger 3 hits matam Elementor | ✅ (283K > 263K) | ✅ (255K > 250K) | Ainda mata, mas por margem estreita (~4,6K) |
| Knight Full VIG vs Knight Full VIG | 246K em 3 hits (não mata) | 246K em 3 hits (não mata) | Inalterado |
| Jester Full VIG vs Full VIG | ~47% da vida | ~47% da vida | Inalterado |

---

## Verificação das Diretrizes

| Diretriz | ANTES | DEPOIS | Quebrou? |
|----------|-------|--------|----------|
| Billposter Full VIG não mata ninguém Full VIG | ✅ 197K < 226K | ✅ 197K < 226K | ❌ |
| Billposter 100 FOR mata Jester Full VIG | ✅ 234K > 226K | ✅ 234K > 226K | ❌ |
| Jester Full VIG tira ~50% da vida | ✅ 47% | ✅ 47% | ❌ |
| Blade Full VIG mata Full VIG em 2~3 hits | ✅ 1º+2º = ~325K | ✅ 1º+2º = ~293K | ❌ (ainda mata) |
| Ranger Full VIG mata Full VIG em 3~4 hits | ✅ 3 hits = 283K | ⚠️ **4 hits** para Blade/Psy | **SIM** — Ranger perde 3-hit kill contra classes de HP médio |
| Psy Bomb > Elementor Windfield > RM | ✅ 85,8 > 75,8 > 67 | ✅ 85,8 > 75,8 > 67 | ❌ |
| Ordem de HP (Jester < ... < Knight) | ✅ | ⚠️ Psy cai de 2º para 7º | **SIM** — sequência mantida, mas posições internas mudaram |

**Diretrizes quebradas:**
1. **Ranger Full VIG mata Full VIG em 3~4 hits** → contra Blade/Psy/Elementor/Billposter, agora precisa de **4 hits**. Ainda mata Jester/Ringmaster em 3.
2. **Ordem de HP** — a sequência Jester < ... < Knight ainda vale, mas Psy despenca de 2º para 7º. Isso é aceitável? Depende se a ordem histórica "Psy é o mago mais tankudo" é um pilar de design ou só uma consequência não intencional.

---

## Observações

- O **Ranger com -10% DMG** perde a capacidade de matar em 3 hits classes de HP médio (Blade, Psy, Elementor, Billposter). Contra Knight continua sendo 4 hits. Ainda mata Jester e Ringmaster em 3 hits.
- O **Blade com -10% DMG** perde o oneshot de 4º hit no Ringmaster, mas continua letal em 1º+2º hits para todas as classes exceto Knight. O Full FOR perde o oneshot de 4º hit no Knight por margem insignificante (~100 HP).
- O **Psy com -5% HP** cai de 2º maior HP para 7º — um tombo grande. Mas não quebra nenhum breakpoint novo (continua sobrevivendo aos mesmos ataques de antes porque o Ranger também foi nerfado). A principal mudança é posicional.
- O **Elementor com -5% HP** ainda morre para Ranger 3 hits, mas por margem estreita. O HP mais baixo aproxima Elementor de Ringmaster (250K vs 252K), o que pode ser estranho dado que Elementor é DPS e Ringmaster é suporte.
