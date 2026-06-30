export interface BuildEntry {
  tank: { estrelas: string; awakes: string; hp: string }
  dano: { estrelas: string; awakes: string; dmg: string }
  obs: string
}

export interface BuildCard {
  build: string
  entries: BuildEntry[]
}

export type Classe =
  | "Billposter"
  | "Ringmaster"
  | "Elementor"
  | "Psykeeper"
  | "Jester"
  | "Ranger"
  | "Knight"
  | "Blade"

export const CLASSES: Classe[] = [
  "Billposter",
  "Ringmaster",
  "Elementor",
  "Psykeeper",
  "Jester",
  "Ranger",
  "Knight",
  "Blade",
]
