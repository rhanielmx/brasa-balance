import type { Classe } from "./types"

export type Prioridade = "Média" | "Baixa" | null

export interface StaffSugestao {
  classe: Classe
  acao: string
  motivo: string
  prioridade: Prioridade
  analise: string
  sugestao: string
}

export const STAFF_SUGESTOES: StaffSugestao[] = [
  {
    classe: "Billposter",
    acao: "Ponto de atenção — estudar scaling de MP no futuro",
    motivo: "MP em 7 slots escala muito mais que qualquer classe; longe da realidade hoje",
    prioridade: "Baixa",
    analise:
      "Asal tem o maior cooldown ofensivo do jogo (15s) — o dano precisa ser alto para justificar a janela de espera. O BP Full VIG (197.5K) não mata ninguém Full VIG, 100 FOR (234.7K) mata Jester, Full FOR (312.9K) mata Knight por margem estreita. O problema é potencial futuro: Billposter coloca MP em todos os 7 slots, e com awakes de 800MP por slot (7×800=5.600 MP base só em awakes) o dano pode disparar para níveis que matam qualquer Full VIG sem chance de resposta, porém esses awakes elevados ainda estão muito longe da realidade do servidor. Com awakes realistas (450~650MP) o equilíbrio já está bom.",
    sugestao:
      "Ponto de atenção: O Billposter usa MP em todos os 7 slots de awake. Quando todos esses awakes forem altos, ele vai escalar muito mais que qualquer outra classe — mas isso ainda está longe de acontecer no servidor. Fica o registro para estudos futuros: se um dia o servidor chegar nesse ponto, talvez seja necessário pensar em alguma forma de fazer o dano crescer menos conforme o MP fica muito alto, para evitar um nerf pesado de uma vez.",
  },
  {
    classe: "Jester",
    acao: "Nenhuma",
    motivo: "Referência de balanceamento",
    prioridade: null,
    analise:
      "Full VIG tira ~47% da vida de um Knight Full VIG sendo capaz de matar knight full vig no HC com pouca força na build. Jester Full FOR (195.3K) sozinho não mata ninguém Full VIG, mas mata buildados. O papel do Jester não é matar Full VIG solo, e sim aproveitar oportunidades para pegar buildados/swapados e matar Full VIG em combos (como em dual de Hop ou Hop + HC). Jester é o ponto de referência de balanceamento — risco (corpo a corpo, relativamente frágil) vs recompensa (Hop a cada 5s) bem calibrado, progressão de kills limpa.",
    sugestao:
      "Nenhuma mudança no momento, jester está numa boa posição de balanceamento.",
  },
  {
    classe: "Blade",
    acao: "Nerf de ~10% no dano base + reduzir ratio 1,78× → ~1,5×",
    motivo: "Sets joia + 5★ deixaram físicas fortes; 4º hit concentra poder demais",
    prioridade: "Média",
    analise:
      "Blade é forte — maior dano físico por hit (142.6K~253.5K). Por ser corpo a corpo e sofrer com block (~1/3 do dano), além de ficar exposto por muito tempo se quiser dar os 4 hits, o dano base em condições normais é aceitável. O problema está no topo do gear: sets joia (Tigre, Coelho) + armas 5★ deixam o dano acima do ideal, e o ratio de 1,78× entre o 1º e o 4º hit concentra poder demais num único golpe.",
    sugestao:
      "Nerf de 10~15% no dano base + reduzir o ratio 1,78× → ~1,5× (baixar o dano do 4º hit). O 4º hit continua sendo o mais forte, mas sem o pico exagerado. O problema não é a classe em si, mas o combo de sets joia + armas 5★. O ajuste mantém o Blade letal, mas com margem para o inimigo escapar.",
  },
  {
    classe: "Ranger",
    acao: "Nerf de ~10% no dano base + anéis do set Coelho: esquiva → ADDOCH",
    motivo: "Classe física que mais escala com Coelho + 5★; nerf puro prejudicaria novos players",
    prioridade: "Média",
    analise:
      "Ranger está forte pelo mesmo motivo do Blade: set Coelho + arma 5★ elevou o dano (Full DEX 5★ chega a 137.9K/hit). O problema é que simplesmente nerfar o dano base puro prejudicaria novos players sem acesso a esse gear e o Ranger é a classe física que mais escala com esses itens. Além disso, o set Leão vai subir o HP geral em breve, o que ainda não é realidade no servidor.",
    sugestao:
      "Reduzir o dano base em 10~15%. Além disso, atualizar o set Coelho trocando a esquiva dos anéis por ADDOCH — cada anel +20 daria +5% ADDOCH (total +10% com os dois anéis). Isso não compensa o nerf (o Ranger ainda vai perder dano no geral), mas ajuda novos players que ainda não têm arma 5★ a não ficar tão para trás.",
  },
  {
    classe: "Knight",
    acao: "Nenhuma (observar com itens full endgame)",
    motivo: "Tankar e matar seria broken; dano baixo é intencional",
    prioridade: null,
    analise:
      "Knight está numa situação confortável — maior HP Full VIG (307.8K) como esperado de um tank. O dano baixo (82.1K) é intencional: Knight pode matar players sozinho, mas não deve ser uma ameaça gigante solo (potencial de kill inferior ao Blade). Buffar o dano agora arriscaria criar uma classe que tanka e mata muito bem e que poderia ser difícil de balancear.",
    sugestao:
      "Nenhuma por enquanto. Observar se não vai ficar muito forte com itens full endgame no futuro.",
  },
  {
    classe: "Psykeeper",
    acao: "Nenhuma agora — provavelmente vai precisar de nerf quando set Leão estiver acessível",
    motivo: "Set Leão ainda não acessível; gear topado é raro",
    prioridade: "Baixa",
    analise:
      "Psykeeper parece muito forte — Bomb (~85.8K, sem CD) + Square (109.2K, 4s CD) com combo de Satanology pode matar qualquer Full VIG. Porém, exige skill alta para executar e só atinge esse pico com set joia, que ainda não é tão acessível. O HP (276.8K Full VIG 3★) também pode ser ponto de atenção no futuro com set Leão e gear mais topado.",
    sugestao:
      "Nenhuma por enquanto, mas possivelmente vai precisar de nerf no HP quando o set Leão estiver acessível. Monitorar dano e HP conforme os players evoluem o gear — nerfar o HP agora enquanto o set leão ainda não é acessível poderia ser prematuro.",
  },
  {
    classe: "Elementor",
    acao: "Nerf de ~4% no HP (qdo set Leão chegar) + Windfield: slow flat → percentual (-20%)",
    motivo: "Kit defensivo não justifica HP alto; slow percentual dá mais controle sem aumentar dano",
    prioridade: "Baixa",
    analise:
      "Windfield (75,8K, sem CD) é uma skill em área — essa é a identidade da classe. O dano é mais baixo que o de um Psy no burst, mas por ser AoE e sem CD, o Elementor pode pegar múltiplas kills no timing certo (dois Jesters num dual, 2~3 swapados se batendo). Além disso, tem um kit defensivo completo: root (situacional), blinkpool para teleportar (inimigo perde o alvo), e Windfield de conjuração rápida que mata qualquer swapado — no máximo 2 acertos para híbridos (Blade com Blain, Jester com set aleatório). O kit defensivo não justifica o HP atual, mais alto que Billposter e Blade.",
    sugestao:
      "Nerf de ~4% no HP futuramente, quando o set Leão estiver mais acessível. Alterar o debuff do Windfield de redução flat (-20 p.p. de velocidade) para redução percentual (×0,8). Ex: 250% de velocidade → atualmente 250%−20%=230%; com a mudança 250%×0,8=200%. Mais efetivo contra players rápidos sem aumentar o dano.",
  },
  {
    classe: "Ringmaster",
    acao: "Nenhuma",
    motivo: "Suporte bem calibrado; HC sem CD compensa dano baixo",
    prioridade: null,
    analise:
      "Ringmaster é um mago single-target (como Psykeeper), com Queda da Estrela de conjuração rápida que mata qualquer swapado — exceto híbridos (mesma situação do Elementor). O dano bruto é o menor entre as 8 classes (~67K), mas o grande diferencial é o Holy Cross (HC): dobra o dano do próximo ataque do parceiro, sem CD, sem escala, sem precisar swapar — o Ringmaster pode usar sem se expor. Além disso o dano Full INT chega a ~101K com uma animação muito rápida, porém sacrifica bastante vida e morre para qualquer Billposter Full VIG ou Jester buildado — trade-off justo.",
    sugestao:
      "Nenhuma mudança. O dano baixo é intencional — com HC sem CD e sem swap, a classe já tem utility enorme em time (especialmente dual com Jester). Dá para se defender ou até jogar de killer, mas sem ficar OP. Quem quiser mais dano paga o preço em HP e vulnerabilidade.",
  },
]
