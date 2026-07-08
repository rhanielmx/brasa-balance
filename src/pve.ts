export interface PvEScenario {
  title: string
  desc: string
  filename: string
}

export const PVE_SCENARIOS: PvEScenario[] = [
  {
    title: "Totem sem elemento",
    desc: "DPS de todas as classes contra totem sem elemento (neutro).",
    filename: "neutro.png",
  },
  {
    title: "Totem com vantagem elemental",
    desc: "DPS contra totem com elemento que a classe tem vantagem.",
    filename: "vantagem.png",
  },
  {
    title: "Totem com vantagem + bônus elemental da arma",
    desc: "DPS contra totem com elemento + bônus elemental da arma equipada.",
    filename: "vantagem-arma.png",
  },
]
