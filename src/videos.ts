import type { Classe } from "./types"

export const CLASS_VIDEOS: Record<Classe, string[]> = {
  Billposter: ["xLB-hGWDvtE", "rGedjDnQ9cw"],
  Ringmaster: [],
  Elementor: [],
  Psykeeper: [],
  Jester: [],
  Ranger: [],
  Knight: [],
  Blade: [],
}

export const CLASS_OBS: Record<Classe, string> = {
  Billposter: "Billposter e Jester tiveram os itens statados manualmente com pergaminho de status pois foram as primeiras testadas. Demais classes usaram awake de 2 de status em todos os itens para simular.",
  Ringmaster: "Todos os itens que são possíveis statar tem 1 linha extra de awake +2 INT ou +2 VIG para simular os pergaminhos de status. Demoraria muito ficar statando todos os itens manualmente.",
  Elementor: "Todos os itens que são possíveis statar tem 1 linha extra de awake +2 INT ou +2 VIG para simular os pergaminhos de status. Demoraria muito ficar statando todos os itens manualmente.",
  Psykeeper: "Todos os itens que são possíveis statar tem 1 linha extra de awake +2 INT ou +2 VIG para simular os pergaminhos de status. Demoraria muito ficar statando todos os itens manualmente.",
  Jester: "Jester e Billposter tiveram os itens statados manualmente com pergaminho de status pois foram as primeiras testadas. Demais classes usaram awake de 2 de status em todos os itens para simular.",
  Ranger: "Todos os itens que são possíveis statar tem 1 linha extra de awake +2 DEX ou +2 VIG para simular os pergaminhos de status. Demoraria muito ficar statando todos os itens manualmente.",
  Knight: "Todos os itens que são possíveis statar tem 1 linha extra de awake +2 FOR ou +2 VIG para simular os pergaminhos de status. Demoraria muito ficar statando todos os itens manualmente.",
  Blade: "Todos os itens que são possíveis statar tem 1 linha extra de awake +2 FOR ou +2 VIG para simular os pergaminhos de status. Demoraria muito ficar statando todos os itens manualmente.",
}
