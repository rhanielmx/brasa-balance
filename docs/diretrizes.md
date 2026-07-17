# Diretrizes de Análise — Brasa Balance

## Leitura da Planilha

Cada aba da planilha representa uma classe (ignorar abas com nome começando por "Cópia de").

### Estrutura das colunas

| Coluna | Descrição |
|---|---|
| **Build** | Distribuição de pontos de status: `FULL VIG` (100% Vigor), `100 FOR/INT/DEX` (100 pts ofensivos + resto Vigor), `FULL FOR/INT/DEX` (100% ofensivo) |
| **Tank Estrelas** | Estrelas da arma de tank (3★ ou 5★). Apenas informativo para o leitor saber a qual item o HP se refere. |
| **Tank Awakes** | Valor dos awakes de Vigor nos itens de tank. Vigor é possível em: armas, escudo, elmo, traje e pet criado (5 slots para classes de 1 arma, 6 para classes de 2 armas/arma+escudo). Ex: VIG +28 com 5 slots = 140 Vig total. |
| **HP** | HP da classe com aquela build. Pode conter múltiplos valores separados por `\|` para diferentes combinações de cartas elementais. |
| **Dano Estrelas** | Estrelas da arma de dano (3★ ou 5★). Similar à coluna Tank Estrelas para o lado ofensivo. |
| **Dano Awakes** | Awakes dos itens de dano. Varia por classe (MP para BP, FOR/DEX + ADDOCH + ATQ para físicos, INT + ATQ para magos, FOR + ATQ para Jester Hop). |
| **DMG** | Dano causado com aquela build e awakes. Pode conter múltiplos valores (diferentes elementos, ou hits progressivos como Blade). |
| **Exibir** | Booleano (TRUE/FALSE). Controla se a linha aparece no site. |
| **Obs** | Observações adicionais (opcional). |

### Cartas elementais

As cartas elementais nos itens modificam os atributos e explicam os múltiplos valores nas colunas HP e DMG:

| Carta | Bônus | Uso típico |
|---|---|---|
| **Terra A** | +7 Vig | Máximo HP |
| **Vento A** | +7% Velocidade | Trade-off: sacrifica Vig por velocidade |
| **Fogo A** | +7 Força | Máximo dano (classes físicas / BP) |
| **Água A** | +7 Int, +2% Conjuração | Máximo dano (classes mágicas). Para o billposter é um trade-off: sacrifica dano por velocidade de conjuração |

### Exemplos de leitura

**Ranger — FULL VIG, 3★, VIG+28:**
> `236.754 (10 Terra) \| 226.254 (8 Vento + 2 Terra)` — HP com o arco 10× Terra A = 236.754; com 8× Vento A + 2× Terra A = 226.254 (sacrifica 56 Vig por 56% vel)
>
> `DEX+28\|ADDOCH +19%\|ATQ +140` — 28 DEX no elmo, 19% ADDOCH no arco+traje+bota+pet coelho, 140 ATAQUE na luva
>
> DMG: `94.6K` por hit físico

**Billposter — 100 FOR, 3★, VIG+28:**
> `234.743 (10 Fogo) \| 231.687 (7 Água + 3 Fogo)` — Asal com escudo 10× Fogo A = 234.743 DMG; com 7× Água A + 3× Fogo A = 231.687 (sacrifica 49 Força por 14% conjuração para conjurar antes do inimigo)

**Psykeeper — FULL VIG, 5★, VIG+28:**
> `~102.2K (Bomb) \| 114.754 (Psychic Square)` — dois valores de dano: um para Spirit Bomb (alvo único, sem cooldown) e outro para Psychic Square (AOE, cooldown)

**Blade — FULL VIG, 3★, VIG+28:**
> `142.6K (1º Hit) ~ 253.5k (4º Hit)` — os 3 primeiros hits têm dano parecido; o 4º hit dá um salto significativo

---

## Terminologia

| Termo | Significado |
|---|---|---|
| **Full Vigor (Full VIG)** | 100% dos pontos de status distribuídos em Vigor |
| **Full INT / FOR / DEX** | 100% dos pontos em Inteligência / Força / Destreza |
| **Buildado** | Pontos divididos entre Vigor e o stat ofensivo (ex: 100 FOR + resto VIG) |
| **Swapado** | Personagem usando itens de dano (não de tank) |
| **Lacotar** | Usar o item *Remantis Laccotte* para encher 100% da vida entre hits (cooldown 1.5s) |
| **Dual** | Dois players combinando skills para matar um terceiro |
| **HC** | Skill *Holy Cross* do Ringmaster — dobra o dano do próximo ataque do parceiro |
| **Dark Illusion** | Skill de invisibilidade compartilhada por Jester e Ranger (evoluções de **Acrobat**). Deixa o usuário invisível por **10s** com **20s de cooldown**. Usado para fugir, reposicionar ou abrir combo. |
| **Counter Attack** | Skill do Jester — se usada no timing correto, **anula o dano do próximo ataque recebido** e tem uma pequena chance de **stunar** o atacante. |
| **Acrobat** | Classe base que evolui para Jester (corpo a corpo, Hop) e Ranger (distância, hit físico). Ambas mantêm acesso à Dark Illusion. |
| **Classe A mata Classe B** | Classe A com itens de dano vs Classe B com itens de tank, ambos Full VIG (salvo dito contrário) |

## Ordem de HP entre classes (crescente)

1. Jester (menor HP)
2. Ranger
3. (demais classes em ordem crescente até Knight)
4. Knight (maior HP)

> **Por que Jester e Ranger têm o menor HP:** Ambas evoluem de **Acrobat** e compartilham a skill **Dark Illusion** (invisível por 10s, CD 20s). O HP baixo é um trade-off intencional — a invisibilidade permite reposicionamento, fuga, ou abertura para combo sem ser alvo. Uma classe com dark illusion e HP alto seria difícil de matar. O design sacrifica sobrevivência passiva (HP) por uma ferramenta ativa de escape.

## Ordem de dano físico contínuo (hit físico)

Blade > Ranger > [Jester / Billposter — caso ataquem fisicamente] > Knight

> Jester e Billposter usam skills (Hop e Asal respectivamente), não hit físico.
> Jester e Billposter em hit físico ficariam entre Ranger e Knight.

## Ordem de dano mágico (skills)

Psykeeper (Spirit Bomb) > Elementor (Windfield) > Ringmaster (Queda da Estrela)

### Skills

| Classe | Skill | Tipo | Dano | Velocidade |
|---|---|---|---|---|
| Psykeeper | Spirit Bomb | alvo único, sem cooldown | maior | normal |
| Psykeeper | Psychic Square | AOE, cooldown | maior que Bomb | — |
| Elementor | Windfield | AOE | médio | normal |
| Ringmaster | Queda da Estrela | alvo único | menor | mais rápida |

### Combos relevantes

- **Psykeeper**: várias Spirit Bomb + Psychic Square no timing — kill sem chance de lacotar
- **Ringmaster**: Holy Cross (HC) dobra dano do próximo ataque do parceiro (dual)

---

## Análise por classe

### Billposter

- Full VIG **não mata** ninguém Full VIG
- Mata classes buildadas (parcialmente em dano)
- **Buildado ~100 FOR**: mata Jester Full VIG
- Escalando FOR: conforme aumenta, passa a matar classes progressivamente até Knight Full VIG
- Para matar Knight Full VIG, Billposter geralmente precisa estar Full FOR ou ter itens superiores
- Usa a skill **Asal** — escala com **FOR + MP** (scaling de ATAQUE é irrelevante)

### Jester (Hop)

- Evolução do **Acrobat** — classe irmã do Ranger
- Full VIG **não mata** ninguém Full VIG com vida cheia
- Consegue tirar ~50% da vida de um Full VIG
- Mata **swapado** e em **dual**
- Full VIG mata qualquer classe Full INT / FOR / DEX
- **Dual mais comum**: dois Jesters (Hop) juntos matam qualquer um; Jester + Ringmaster (HC) dobra dano do próximo ataque
- **Buildado ou Full FOR**: mata classes buildadas
  - Com ~100 FOR: só mata players quase Full dano (INT/FOR/DEX)
- Skill **Hop** escala com **FOR + ATAQUE** (não usa ADDOCH)
- **Hop tem conjuração mais lenta** — não chega a ser absurdamente lenta, mas o suficiente para que players skillados consigam reagir e virar o jogo.
- **Dark Illusion**: invisível por 10s (CD 20s) — usado para fugir, reposicionar ou abrir combo saindo da invisibilidade. O HP baixo é o contrapeso: o kit tem ferramentas de escape poderosas.
- **Counter Attack**: se usada no timing correto, anula o dano do próximo ataque recebido e tem uma pequena chance de stunar o atacante.

### Blade

- Full VIG mata qualquer classe Full VIG em **2~3 hits** se o alvo **não lacotar** entre eles

### Ranger

- Evolução do **Acrobat** — classe irmã do Jester
- Full VIG mata qualquer Full VIG em **3~4 hits** (depende da classe)
- Ataca de longe, mas é mais frágil (menos HP)
- **Dark Illusion**: invisível por 10s (CD 20s) — combinado com alcance, permite reposicionar para um ângulo melhor ou fugir de perseguidores melee. É a única ranged com uma ferramenta de escape dessa magnitude, o que justifica o HP mais baixo entre as ranged.

### Knight

- Dano físico contínuo menor que Blade e Ranger

### Psykeeper

- Buildado consegue combar com Bomb + Square para matar sem lacote entre hits

---

## Awakes por tipo de classe

### Classes de dano físico com hit (Blade, Knight, Ranger)

Essas classes usam **ADDOCH** onde possível e o **stat principal** onde ADDOCH não é possível. Usam **ATAQUE** na luva.

| Classe | Armas | Stat principal |
|---|---|---|
| Blade | 2 machados | FOR |
| Knight | 1 espada + 1 escudo | FOR |
| Ranger | 1 arco | DEX |

| Slot | Awake |
|---|---|
| Arma (1) / Arco / Espada | ADDOCH |
| Arma (2) / Escudo | ADDOCH |
| Elmo | Stat principal (FOR / DEX) |
| Traje | ADDOCH |
| Bota | ADDOCH |
| Luva | ATAQUE |
| Pet criado | ADDOCH |

**Exemplo — Ranger**: 28 DEX (elmo) + 140 ATAQUE (luva) + 76 ADDOCH (19 arco + 19 traje + 19 bota + 19 coelho pet)

**Exemplo — Blade**: 28 FOR (elmo) + 140 ATAQUE (luva) + 95 ADDOCH (19 machado1 + 19 machado2 + 19 traje + 19 bota + 19 coelho pet)

### Classes de dano mágico (Psykeeper, Elementor, Ringmaster)

Usam **INT** onde possível e **ATAQUE** onde INT não é possível.
Bota **não possui** slot ofensivo — o awake de bota é irrelevante para dano.

| Classe | Armas |
|---|---|
| Psykeeper | 1 cetro + 1 escudo |
| Elementor | 1 cajado |
| Ringmaster | 1 bastão |

| Slot | Awake |
|---|---|
| Arma (1) — cetro / cajado / bastão | INT |
| Arma (2) — escudo (só Psy) | INT |
| Elmo | INT |
| Traje | INT |
| Luva | ATAQUE |
| Bota | — (irrelevante) |
| Pet criado | INT |

**Exemplo — Psykeeper**: 28 INT (cetro) + 28 INT (escudo) + 28 INT (elmo) + 28 INT (traje) + 140 ATAQUE (luva) + 28 INT (pet) = 140 INT + 140 ATAQUE

**Exemplo — Elementor**: 28 INT (cajado) + 28 INT (elmo) + 28 INT (traje) + 140 ATAQUE (luva) + 28 INT (pet) = 112 INT + 140 ATAQUE

### Jester (Hop)

Segue o mesmo padrão dos magos, trocando **INT por FOR**. Não usa ADDOCH (skill Hop escala com FOR + ATAQUE).

| Classe | Armas |
|---|---|
| Jester | 1 ioiô |

| Slot | Awake |
|---|---|
| Arma (ioiô) | FOR |
| Elmo | FOR |
| Traje | FOR |
| Bota | — (irrelevante) |
| Luva | ATAQUE |
| Pet criado | FOR |

> Se fosse atacar fisicamente (hit), usaria ADDOCH nos mesmos slots que Blade/Knight.
> Para este levantamento consideramos apenas Jester com Hop.

### Billposter (Asal)

O **Asal** escala com **FOR + MP**. O scaling de ATAQUE é praticamente flat e irrelevante.
INT fornece MP base (9 MP por ponto), mas indiretamente — nos awakes, MP puro compensa mais.
É a única classe que consegue colocar seu awake principal em **todos os slots de item**.

> Se houvessem awakes híbridos MP+FOR, seriam bons. Para os testes consideramos apenas awakes puros de MP.

| Classe | Armas |
|---|---|
| Billposter | 1 punho + 1 escudo |

| Slot | Awake |
|---|---|
| Arma (punho) | MP |
| Escudo | MP |
| Elmo | MP |
| Traje | MP |
| Luva | MP |
| Bota | MP |
| Pet criado | MP |

**Exemplo — Full 500 MP**: 500 (punho) + 500 (escudo) + 500 (elmo) + 500 (traje) + 500 (luva) + 500 (bota) + 500 (pet) = **3500 MP** total nos awakes

---

## Resumo — Awakes por slot e classe

| Slot | Físico (hit) | Mágico | Jester (Hop) | Billposter |
|---|---|---|---|---|
| Arma 1 | ADDOCH | INT | FOR | MP |
| Arma 2 / Escudo | ADDOCH | INT (só Psy) | — | MP |
| Elmo | FOR / DEX | INT | FOR | MP |
| Traje | ADDOCH | INT | FOR | MP |
| Bota | ADDOCH | — | — | MP |
| Luva | ATAQUE | ATAQUE | ATAQUE | MP |
| Pet | ADDOCH | INT | FOR | MP |
