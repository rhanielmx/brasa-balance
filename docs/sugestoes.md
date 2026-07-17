# Sugestões de Balanceamento — Brasa Balance

> Gerado em 12/07/2026 a partir dos dados da planilha pública.
> Critérios (por ordem de prioridade): **P1** Nenhuma classe obsoleta → **P2** Full VIG não killar outro Full VIG sozinho → **P3** Buildado ter progressão clara de kills.

---

## ⚠️ Limitações desta análise

Os dados da planilha registram **dano por uso da skill / por hit**, não DPS. Como as classes têm ritmos de ataque muito diferentes, comparações diretas de número puro podem enganar:

| Skill | Cooldown | Implicação |
|-------|----------|------------|
| Asal (Billposter) | **15s** | Um disparo a cada 15s — cada uso precisa ser impactante |
| Hop (Jester) | **5s** | Três usos no mesmo intervalo de um Asal |
| Psychic Square (Psykeeper) | **4s** | Burst AEO a cada 4s |
| Windfield (Elementor) | **Sem CD** | Pode ser usado repetidamente |
| Hit físico (Blade/Ranger/Knight) | **Sem CD** | Contínuo, sem janela de vulnerabilidade entre usos |

Além disso, o **stat total** vai muito além dos 313 pontos livres + awakes. Inclui:
- 15 pontos base em todos os stats
- Buff de guilda (+30 all)
- Móveis de guilda (+8 FOR, +5 INT/FOR/DEX)
- Buffs de Pang (+40 VIG, +20 INT/FOR/DEX)
- Pet ativo (+75 no stat do pet — raposa = INT, coelho = DEX, leão = VIG, tigre = FOR)
- Bônus de itens, cartas, power-ups e bênçãos

**Exemplo concreto** (Psykeeper 5★):

| Build / Itens | VIG | INT | HP |
|--------------|-----|-----|-----|
| Full VIG + itens HP | 917 | 106 | 272.473 |
| Full VIG + itens INT (swapado) | 401 | 659 | — |
| Full INT + itens INT | 604 | 419 | 172.698 |

Isso mostra que **swapar itens** move centenas de pontos de stats — o impacto no dano e HP é imenso e não capturado apenas pelos awakes.

### Sistema de Block

O jogo possui **bloqueio corpo-a-corpo** e **bloqueio à distância**, com mais fontes de block melee disponíveis. Quando um ataque é blockado, apenas **1/3 do dano** é sofrido (ex: Blade 142,6K → ~47,5K).

| Classe | Ataque | Blockável? | Fonte de block |
|--------|--------|-----------|----------------|
| Blade / Knight / Jester | Corpo a corpo | Sim | Muitas fontes de block melee |
| Ranger | Distância | Sim (poucas fontes) | Poucas fontes de block ranged |
| Billposter / Magos | Mágico | **Não** | — |

A **Destreza (DEX)** também afeta block: quanto maior sua DEX em relação ao oponente, mais você blocka e menos é blockado. Como Ranger escala com DEX, ele naturalmente blocka mais golpes e é menos blockado — um benefício duplo.

**Implicação:** O dano bruto do Blade (142,6K) é frequentemente reduzido a ~47K por blocks. Já o dano do Ranger (94,6K) quase sempre passa integral por ser a **única classe de ataque físico à distância** — dano mágico não é blockado. Isso significa que o dano efetivo do Ranger no PvP real é muito mais próximo do valor da planilha do que o das classes melee.

---



## Sumário Executivo — Top 3 Problemas

| # | Problema | Classe(s) | Gravidade |
|---|----------|-----------|-----------|
| 1 | **Elementor ofuscado por Psykeeper em todos os cenários** — Windfield (75,8K, sem CD) vs Square (111,2K, 4s CD). Mesmo considerando o CD, Square dá mais dano por uso **e** é AOE, enquanto Windfield é só AOE. Elementor não tem nicho exclusivo. | Elementor, Psykeeper | Alta |
| 2 | **Billposter com awakes absurdos (800MP) escala desproporcionalmente** — Asal com 15s de CD precisa ser impactante, mas o salto de 500MP→800MP por slot (7 slots = +2100MP total) pode levar o dano a níveis que matam qualquer classe Full VIG sem chance de resposta, dado o CD de 15s. Já com awakes realistas (450~600MP) o cenário é bem mais equilibrado. | Billposter | Média |
| 3 | **Dados incompletos de Psykeeper 5★** — 4 das 9 linhas contêm "xxx.xxx", impossibilitando análise completa do topo do gear. | Psykeeper | Média |

> **Nota sobre realidade do servidor:** Awakes máximos (44 status / 30% ADDOCH / 800MP) são extremamente raros — provavelmente ninguém possui sequer um, muito menos uma build completa. O cenário realista é 25~28 status, 17~19% ADDOCH e 450~600MP. Os valores máximos na planilha servem para entender o **potencial de scaling**, não o estado atual do jogo.

---

## Tabelão Comparativo — Full VIG, 3★, VIG+28 (Dano por Hit)

A linha de base: 100% dos stats em Vigor, arma 3★ e awakes Vigor+28 nos itens de tank.

*Ordem crescente de HP:*

| Classe | HP | DMG | CD da skill / ritmo | Contexto |
|--------|----|-----|--------------------|----------|
| **Jester** | 226.660 | 145.905 (Hop) | 5s | 3 Hops no CD de 1 Asal |
| **Ranger** | 236.754 | 94.600 (hit) | Sem CD (contínuo) | 4 hits matam Knight |
| **Ringmaster** | 252.039 | ~67.000 (Queda Estrela) | Rápida | Suporte; HC dobra dano do parceiro |
| **Blade** | 257.644 | 142,6K(1º)~253,5K(4º) | Sem CD (contínuo) | 2~3 hits matam Knight |
| **Billposter** | 258.683 | 197.499 (Asal) | **15s** | Um disparo por janela — alto impacto |
| **Elementor** | 263.967 | ~75.800 (Windfield) | **Sem CD** | Cursed Mind (+30% dano mágico, 7s, 35%/2s); Windfield reduz -20% velocidade flat |
| **Psykeeper** | 276.235 | 88.900 (Bomb, sem CD) / 111.210 (Square, 4s) | Bomb é projétil sem CD; Satanology (2s) prende | Combo: stack Bombs → Satanology → Bombs acertam juntas → Square |
| **Knight** | 307.814 | 82.100 (hit) | Sem CD (contínuo) | Tanque; dano baixo |

**Ordens confirmadas:**
- HP: Jester < Ranger < Ringmaster < Blade < Billposter < Elementor < Psykeeper < Knight ✅
- Dano físico (hit): Blade > Ranger > Knight ✅
- Dano mágico por hit: Psy Bomb (88,9K) > Elementor (75,8K) > Ringmaster (67K) ✅

---

## Análise por Classe

### Billposter

**Dados (3★, VIG+28):**

| Build | HP | DMG (Asal, 15s CD) |
|-------|----|------------------|
| Full VIG | 258.683 | 197.499 |
| 100 FOR | 229.681 | 234.743 |
| Full FOR | 167.913 | 312.968 |

**Diagnóstico:**

- Asal com **15s de CD** é o maior cooldown ofensivo do jogo. O dano por uso precisa ser alto para justificá-lo.
- Full VIG (197,5K) **não mata** ninguém Full VIG ✅ — por design, Billposter não deve killar sem investir em FOR.
- 100 FOR (234,7K) mata Jester Full VIG (226,7K) ✅ — conforme diretriz.
- Full FOR (312,9K) mata Knight Full VIG (307,8K) por margem estreita ✅ — conforme diretriz.

**O problema do scaling com MP:**

Asal escala com **FOR + MP**. Como Billposter coloca MP em todos os 7 slots:

| Awake por slot | MP total (7 slots) | Gap | Impacto estimado |
|---------------|-------------------|-----|-----------------|
| 500MP (realista) | 3.500 | — | Referência atual |
| 650MP (raro) | 4.550 | +1.050 | ~+11% DMG (230,9K → 264,5K) |
| 800MP (absurdo) | 5.600 | **+2.100** | ~+22% DMG (230,9K → 288,7K) |

O gap entre 500MP e 800MP por slot adiciona **2.100 MP total**. Se Asal escala linearmente com MP, Full FOR com 800MP pode chegar a ~420K — suficiente para **sobrecarregar** qualquer classe Full VIG (307K do Knight vira overkill de ~113K).

Em contraste, com awakes **realistas** (500MP), o dano Full FOR de ~313K já está calibrado para matar Knight por pouco. O problema é **o potencial futuro** conforme o servidor envelhece e mais awakes altos surgem.

**Sugestões:**

1. **(Nerf preventivo — escala de MP)** Aplicar **retornos decrescentes** no scaling de MP do Asal para valores acima de 500MP por slot. Ex: MP excedente contribui 50% a menos no dano. Isso preserva o equilíbrio com awakes realistas (450~600MP) mas impede que o Billposter do futuro com 7×800MP seja desproporcional.
2. **(Alternativa)** Reduzir levemente o coeficiente de MP no Asal e aumentar o coeficiente de FOR, compensando com um pequeno buff no dano base. Assim o Billposter é incentivado a investir em FOR (sacrificando HP) em vez de depender apenas de MP passivo.
3. **(Nerf nenhum por enquanto)** Se ninguém tem 800MP e o dano atual está dentro das diretrizes, aguardar até que awakes altos se tornem um problema real.

---

### Jester (Hop)

**Dados (3★, VIG+28):**

| Build | HP | DMG (Hop, 5s CD) |
|-------|----|-----------------|
| Full VIG | 226.660 | 145.905 |
| 100 FOR | 199.399 | 161.603 |
| Full FOR | 141.338 | 195.268 |

**Diagnóstico:**

- Full VIG tira ~47% da vida de Knight (dentro dos ~50% previstos). ✅
- Full FOR (195K) ainda não mata Knight Full VIG sozinho, mas destrói buildados. ✅
- É a classe mais frágil (menor HP), consistente com o papel.

**Sugestões:**

1. **Nenhuma mudança.** Jester é o ponto de referência de balanceamento — risco vs recompensa bem calibrado.
2. **(Monitorar)** Se no futuro com awakes maiores o Hop passar a matar Full VIG em 2 hits, pode precisar de nerf.

---

### Blade

**Dados (3★, VIG+28):**

| Build | HP | 1º Hit | 4º Hit | Ratio 4º/1º |
|-------|----|--------|--------|-------------|
| Full VIG | 257.644 | 142.600 | 253.500 | 1,78× |
| 100 FOR | 228.642 | 158.500 | 281.700 | 1,78× |
| Full FOR | 166.874 | 192.300 | 341.900 | 1,78× |

**Diagnóstico:**

- Hits são **contínuos (sem CD)** — Blade pode aplicar dano sem pausa, diferentemente de classes de skill.
- **Porém, é corpo a corpo e sofre com blocks.** Com muitas fontes de block melee no jogo, o dano real é frequentemente 1/3 do nominal (ex: 142,6K → ~47,5K). Isso reduz bastante o impacto dos números altos da planilha.
- Full VIG: 2~3 hits matam Knight (142,6K + ~180K ≈ 322K > 307,8K), se nenhum blockar. Na prática, blocks frequentes tornam a kill menos garantida. ✅
- 4º hit Full VIG (253,5K) oneshota Jester Full VIG (226,7K) — mas o 4º hit também pode ser blockado (~84,5K), então a ameaça é menos consistente do que parece.
- Full FOR 4º hit (341,9K) → ~114K se blockado. Ainda permite resposta (lacote entre hits).

**Sugestões:**

1. **(Ajuste na curva)** O ratio 1,78× entre 1º e 4º hit é muito íngreme. Sugiro suavizar para ~1,5×, redistribuindo parte do dano do 4º hit para os hits 2 e 3. O DPS total se mantém, mas o pico que oneshota sem lacote é reduzido.
2. **(Nerf opcional)** Se o 4º hit Full FOR não deve oneshot Knight, reduzir o 4º hit em ~10% para ~307K (empata com o HP de Knight Full VIG).

---

### Ranger

**Dados (3★, VIG+28):**

| Build | HP | DMG (hit, sem CD) |
|-------|----|------------------|
| Full VIG | 236.754 | 94.600 |
| 100 DEX | 208.628 | 102.900 |
| Full DEX | 148.710 | 120.400 |

**Escalonamento:** +27,3% de Full VIG → Full DEX.

**Diagnóstico:**

- Full VIG mata qualquer Full VIG em 3~4 hits ✅.
- **Única classe de ataque físico à distância.** Todas as outras físicas (Blade, Knight, Jester) são melee e sofrem com blocks — quando blockados, só 1/3 do dano passa. Ex: Blade 142,6K → ~47,5K.
- Como existem **muitas fontes de block melee e poucas de block ranged**, o dano do Ranger é muito mais consistente que o dano melee no PvP real.
- **DEX dá benefício duplo**: aumenta o dano E melhora a chance de block (mais DEX que o oponente = mais block, menos blockado). Ranger naturalmente ganha nos dois lados.
- Escalonamento DEX é o menor entre físicas, mas isso é **intencional e correto** — alcance + consistência de dano já são vantagens enormes.

**Sugestões:**

1. **(Nerf leve de 3~5%)** Reduzir o dano base do hit em ~3~5% (~94,6K → ~90~92K). O alcance + consistência de dano (quase nunca blockado) + DEX dar block advantage justificam um dano ligeiramente menor que as melee. Não precisa ser um nerf grande — só o suficiente para que a vantagem de alcance não seja acumulada com dano cheio.
2. **(Alternativa — manter)** Se o objetivo é que Ranger continue sendo uma ameaça consistente à distância, o dano atual já está calibrado. Neste caso, apenas monitorar conforme o HP do servidor sobe com sets de jóias.

---

### Knight

**Dados (3★, VIG+28):**

| Build | HP | DMG (hit, sem CD) |
|-------|----|------------------|
| Full VIG | 307.814 | 82.100 |
| 100 FOR | 272.941 | 89.600 |
| Full FOR | 198.662 | 105.800 |

**Diagnóstico:**

- **Maior HP da planilha** (307,8K) — tanque por excelência. ✅
- **Menor dano entre classes de hit físico.** ✅ (consistente com o papel)
- Sofre do mesmo problema de block que Blade — dano melee é frequentemente reduzido a 1/3.
- 3 hits Full VIG = 246,3K (bruto) — na prática, com blocks, leva mais hits.
- Full FOR (105,8K): 3 hits = 317,4K > 307,8K — mata Knight Full VIG em 3 hits, se nenhum blockar.

**Sugestões:**

1. **(Buff leve de ~10%)** Aumentar o dano base do hit em ~10% (82K → ~90K). Knight é melee (sofre blocks), tem o menor dano entre as físicas e já é o tanque mais lento. 3 hits = 270K (Full VIG) ainda não mata ninguém sozinho, mas 3 hits = ~348K (Full FOR) passaria a ameaçar outros Knights. É um buff pequeno que dá a Knight mais relevância ofensiva sem quebrar o papel de tanque.

---

### Psykeeper

**Dados (3★, VIG+28):**

| Build | HP | Bomb (projétil, sem CD) | Square (AOE, 4s CD) |
|-------|----|----------------------|---------------------|
| Full VIG | 276.235 | 88.900 | 111.210 |
| 100 INT | 249.706 | 105.400 | 121.427 |
| Full INT | 183.052 | 145.000 | 142.987 |

**Diagnóstico:**

- **Bomb não tem CD** — Psykeeper pode acumular múltiplos projéteis antes de prender o alvo com **Satanology (2s CD)**. O dano efetivo não é 88,9K e sim **N bombs acertando o alvo preso simultaneamente**.
- Combo típico: spam Bombs → Satanology → Bomba landed juntas → Square (4s CD) para finalizar. Com 2~3 bombs acumuladas, o burst chega a 177,8K~266,7K + 111,2K = até **378K** — suficiente para matar qualquer Full VIG sem chance de lacote.
- **Square (AOE) dar mais dano que Bomb (ST)** é intencional: Bomb é spammável sem CD, Square tem 4s de CD. O dano maior compensa o tempo de espera.
- **5★ dados incompletos** (xxx.xxx) — prejudicam a avaliação do topo do gear.

**Comparação com Elementor:** Square (111,2K a cada 4s) vs Windfield (75,8K sem CD). Square ganha em burst; Windfield ganha em desgaste. A diferença está no combo do Psy (stack Bombs + Satanology) que Elementor não tem equivalente.

**Sugestões:**

1. **(Completar testes)** Coletar dados 5★ de Psy — essencial para calibrar o topo do gear.
2. **(Monitorar combo Psy)** Se com awakes altos o stack de Bombs + Satanology + Square passar a matar Full VIG sem dar tempo de lacotar sequer entre os hits do combo, pode precisar de nerf. Por enquanto o dano parece dentro do esperado para um combo que exige execução.
3. **(Nenhuma mudança em Bomb vs Square)** A relação ST vs AOE está justificada pelo CD — Bomb sem CD, Square com 4s.

---

### Elementor

**Dados (3★, VIG+28):**

| Build | HP | Windfield (AOE, sem CD) |
|-------|----|----------------------|
| Full VIG | 263.967 | ~75.800 |
| 100 INT | 231.576 | ~83.500 |
| Full INT | 162.582 | ~99.900 |

**Kit completo:**

| Skill | Efeito | CD | Chance |
|-------|--------|----|--------|
| Windfield | Dano AOE + reduz -20% velocidade flat (minutos) | Sem CD | 50% slow |
| Cursed Mind | Alvo recebe +30% dano mágico por 7s | 2s | 35% |

**Diagnóstico:**

- Windfield sem CD dá 75,8K por cast. É spamável, mas cada hit individual é baixo.
- **Cursed Mind (+30% dano mágico, 7s)** é o verdadeiro diferencial. Com ele ativo: 75,8K × 1,3 = **~98,5K por Windfield** — comparável a Bomb.
- A ativação é inconsistente (35% chance, 2s CD). Em média leva ~3 tentativas (~6s) para ativar, e o debuff dura 7s. Janela de burst curta e sujeita a RNG, além de poder ser removida com Pergaminho Sagrado (cash, sem CD).
- **Cursed Mind também amplifica dano mágico de aliados** (Psy, RM da mesma guilda). Isso dá a Elementor um papel de suporte mágico que nenhuma outra classe tem — diferente do HC do RM que só dobra UM ataque, Cursed Mind dura 7s e beneficia todos os danos mágicos no alvo.
- Windfield também aplica **-20% velocidade flat** (ex: 250% → 230%) por minutos. Não é um debuff forte, mas pode ser útil em perseguição.

**Elementor não é um Psykeeper pior — é um híbrido suporte/DPS mágico.** Seu valor está em grupos, amplificando o dano de aliados mágicos enquanto contribui com dano consistente. Solo, realmente perde para Psy em burst.

**Sugestões:**

1. **(Nerf nenhum por enquanto)** Elementor tem um nicho válido como amplificador mágico em grupo. Se o Cursed Mind está subutilizado, talvez o problema seja de percepção, não de números.
2. **(Monitorar)** Se em grupo (Elementor + Psykeeper) o combo Cursed Mind + Bomb/Square se mostrar opressivo, pode ser necessário ajustar a duração do Cursed Mind (7s → 5s) ou a margem de amplificação (30% → 20%).

---

### Ringmaster

**Dados (3★, VIG+28):**

| Build | HP | Queda da Estrela |
|-------|----|-----------------|
| Full VIG | 252.039 | ~67.000 |
| 100 INT | 221.298 | ~77.300 |
| Full INT | 155.822 | ~101.400 |

**Diagnóstico:**

- Menor dano bruto, classe suporte. ✅
- Holy Cross (HC) dobra dano do parceiro — utility que justifica o dano baixo.
- Full INT (101,4K) comparável a Elementor Full INT (99,9K) — surpreendente para suporte, mas sacrifica muita vida (155,8K HP).

**Sugestões:**

1. **Nenhuma mudança.** Ringmaster está bem calibrada como suporte.

---

## Seção Cruzada

### Psykeeper vs Elementor

| Aspecto | Psykeeper | Elementor |
|---------|-----------|-----------|
| Full VIG HP | 276.235 (2º) | 263.967 (4º) |
| Dano hit (Full VIG) | 88,9K Bomb (ST) | 75,8K Windfield (AOE) |
| Dano AOE (Full VIG) | 111,2K Square (4s CD) | 75,8K Windfield (sem CD) |
| Burst AOE (Full VIG) | **111.200** (1 hit, 4s CD) | 75.800 (1 hit, sem CD) |
| Versatilidade | ST + AOE + combo kill | Só AOE |

**Veredito:** Psykeeper ganha no PvP (burst vence desgaste). Elementor precisaria acertar 2 Windfields para superar 1 Square (151,6K > 111,2K), mas entre os casts o alvo pode lacotar ou interromper. **Elementor precisa de uma identidade mais clara.**

### Billposter vs Jester — Tiro vs rajada

| Aspecto | Billposter | Jester |
|---------|-----------|--------|
| CD da skill | 15s | 5s |
| Dano Full VIG | 197.499 | 145.905 |
| Dano Full FOR | 312.968 | 195.268 |
| Alcance | Longo | Corpo a corpo |

**Veredito:** Jester dá 3 disparos no intervalo de 1 Asal (~438K vs 197K em 15s), mas precisa estar corpo a corpo. Billposter dá um tiro potente de longe a cada 15s. São filosofias opostas — desde que um único Asal não seja forte demais para um tiro só decidir a luta.

---

## Resumo de Sugestões

| Classe | Tipo | Sugestão | Prio | Justificativa |
|--------|------|----------|------|---------------|
| **Elementor** | Monitorar | Combo Cursed Mind + Psy/RM em grupo pode ser opressivo | 🟡 Média | Nicho válido como amplificador mágico; Cursed Mind (30%/7s) beneficia grupo |
| **Psykeeper** | Ajuste | Completar dados 5★; monitorar combo Bomb + Satanology + Square com awakes altos | 🔴 Alta | Dados 5★ incompletos; combo pode ficar opressivo no topo do gear |
| **Billposter** | Nerf preventivo | Retornos decrescentes no scaling de MP acima de 500MP/slot | 🟡 Média | Escala desproporcional com awakes absurdos; preserva equilíbrio com awakes realistas |
| **Blade** | — | Nenhuma por enquanto | 🟢 Baixa | Dano alto no papel, mas blocks reduzem drasticamente o dano efetivo |
| **Ranger** | Nerf leve | -3~5% dano base hit | 🟢 Baixa | Única classe que quase nunca blocka; alcance + consistência justificam dano ligeiramente menor |
| **Knight** | — | Nenhuma por enquanto | 🟢 Baixa | Dano melee já é inconsistente (blocks); HP é o maior do jogo |
| **Jester** | — | Nenhuma | — | Referência de balanceamento |
| **Ringmaster** | — | Nenhuma | — | Suporte bem calibrado; HC compensa dano baixo |
