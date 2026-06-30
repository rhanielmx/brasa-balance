import type { BuildCard, Classe } from "./types"

export const SAMPLE_DATA: Record<Classe, BuildCard[]> = {
  Billposter: [
    {
      build: "Full Vigor",
      entries: [
        { tank: { estrelas: "3★", awakes: "Vigor +28", hp: "280k" }, dano: { estrelas: "3★", awakes: "MP +500", dmg: "220k" }, obs: "sem diamante" },
        { tank: { estrelas: "5★", awakes: "Vigor +44", hp: "380k" }, dano: { estrelas: "5★", awakes: "MP +800", dmg: "350k" }, obs: "" },
      ],
    },
    {
      build: "Full Força",
      entries: [
        { tank: { estrelas: "3★", awakes: "Vigor +28", hp: "260k" }, dano: { estrelas: "5★", awakes: "MP +800", dmg: "410k" }, obs: "" },
        { tank: { estrelas: "5★", awakes: "Vigor +44", hp: "300k" }, dano: { estrelas: "5★", awakes: "MP +650", dmg: "380k" }, obs: "" },
      ],
    },
  ],
  Ringmaster: [
    {
      build: "Full Vigor",
      entries: [
        { tank: { estrelas: "3★", awakes: "Vigor +28", hp: "260k" }, dano: { estrelas: "3★", awakes: "Int +28, Atq +X", dmg: "180k" }, obs: "sem diamante" },
        { tank: { estrelas: "5★", awakes: "Vigor +44", hp: "350k" }, dano: { estrelas: "5★", awakes: "Int +44, Atq +X", dmg: "290k" }, obs: "" },
      ],
    },
  ],
  Elementor: [
    {
      build: "Full Vigor",
      entries: [
        { tank: { estrelas: "3★", awakes: "Vigor +28", hp: "240k" }, dano: { estrelas: "3★", awakes: "Int +28, Atq +X", dmg: "310k" }, obs: "sem diamante" },
        { tank: { estrelas: "5★", awakes: "Vigor +44", hp: "330k" }, dano: { estrelas: "5★", awakes: "Int +44, Atq +X", dmg: "520k" }, obs: "" },
      ],
    },
  ],
  Psykeeper: [
    {
      build: "Full Vigor",
      entries: [
        { tank: { estrelas: "3★", awakes: "Vigor +28", hp: "230k" }, dano: { estrelas: "3★", awakes: "Int +28, Atq +X", dmg: "340k" }, obs: "" },
        { tank: { estrelas: "5★", awakes: "Vigor +44", hp: "310k" }, dano: { estrelas: "5★", awakes: "Int +44, Atq +X", dmg: "580k" }, obs: "" },
      ],
    },
  ],
  Jester: [
    {
      build: "Full Vigor",
      entries: [
        { tank: { estrelas: "3★", awakes: "Vigor +28", hp: "270k" }, dano: { estrelas: "3★", awakes: "For +28, DCr +19, Atq +X", dmg: "200k" }, obs: "sem diamante" },
        { tank: { estrelas: "5★", awakes: "Vigor +44", hp: "370k" }, dano: { estrelas: "5★", awakes: "For +44, DCr +30, Atq +X", dmg: "360k" }, obs: "" },
      ],
    },
  ],
  Ranger: [
    {
      build: "Full Vigor",
      entries: [
        { tank: { estrelas: "3★", awakes: "Vigor +28", hp: "250k" }, dano: { estrelas: "3★", awakes: "Dex +28, DCr +19, Atq +X", dmg: "280k" }, obs: "sem diamante" },
        { tank: { estrelas: "5★", awakes: "Vigor +44", hp: "340k" }, dano: { estrelas: "5★", awakes: "Dex +44, DCr +30, Atq +X", dmg: "460k" }, obs: "" },
      ],
    },
  ],
  Knight: [
    {
      build: "Full Vigor",
      entries: [
        { tank: { estrelas: "3★", awakes: "Vigor +28", hp: "310k" }, dano: { estrelas: "3★", awakes: "For +28, DCr +19, Atq +X", dmg: "170k" }, obs: "sem diamante" },
        { tank: { estrelas: "5★", awakes: "Vigor +44", hp: "450k" }, dano: { estrelas: "5★", awakes: "For +44, DCr +30, Atq +X", dmg: "320k" }, obs: "" },
      ],
    },
  ],
  Blade: [
    {
      build: "Full Vigor",
      entries: [
        { tank: { estrelas: "3★", awakes: "Vigor +28", hp: "290k" }, dano: { estrelas: "3★", awakes: "For +28, DCr +19, Atq +X", dmg: "170k (1º) / 320k (4º)" }, obs: "sem diamante" },
        { tank: { estrelas: "5★", awakes: "Vigor +44", hp: "400k" }, dano: { estrelas: "5★", awakes: "For +44, DCr +30, Atq +X", dmg: "280k (1º) / 510k (4º)" }, obs: "" },
      ],
    },
  ],
}
