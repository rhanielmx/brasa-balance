import type { BuildCard, BuildEntry } from "./types"

const SHEET_ID = import.meta.env.VITE_SHEET_ID ?? ""
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`

function parseGvizResponse(text: string) {
  const start = "google.visualization.Query.setResponse("
  const idx = text.indexOf(start)
  if (idx === -1) throw new Error("Resposta inválida da planilha")
  const json = text.slice(idx + start.length, text.lastIndexOf(")"));
  const parsed = JSON.parse(json)
  return {
    cols: parsed.table.cols as any[],
    rows: parsed.table.rows as any[],
    parsedNumHeaders: (parsed.table.parsedNumHeaders ?? 0) as number,
  }
}

function cellValue(cell: any): string {
  if (!cell) return ""
  return cell.f ?? String(cell.v ?? "")
}

function parseEntry(row: any, hasExibir: boolean): BuildEntry {
  const c = row.c
  const shift = hasExibir ? 1 : 0
  return {
    tank: {
      estrelas: cellValue(c[1]),
      awakes: cellValue(c[2]),
      hp: cellValue(c[3]),
    },
    dano: {
      estrelas: cellValue(c[4]),
      awakes: cellValue(c[5]),
      dmg: cellValue(c[6]),
    },
    obs: cellValue(c[7 + shift]),
  }
}

export async function fetchClassData(sheetName: string): Promise<BuildCard[]> {
  if (!SHEET_ID) return []
  const url = `${SHEET_URL}&sheet=${encodeURIComponent(sheetName)}`
  const res = await fetch(url)
  const text = await res.text()
  const { cols, rows, parsedNumHeaders } = parseGvizResponse(text)
  const dataRows = parsedNumHeaders >= 1 ? rows : rows.slice(1)

  const hasExibir = cols.some((c: any) => c.label === "Exibir")

  const parsed: { build: string; entry: BuildEntry }[] = dataRows
    .filter((r: any) => r.c[0]?.v)
    .filter((r: any) => !hasExibir || r.c[7]?.v !== false)
    .map((r: any) => ({ build: r.c[0].v, entry: parseEntry(r, hasExibir) }))

  const grouped: Record<string, BuildEntry[]> = {}
  for (const { build, entry } of parsed) {
    if (!grouped[build]) grouped[build] = []
    grouped[build].push(entry)
  }

  return Object.entries(grouped).map(([build, entries]) => ({
    build,
    entries,
  }))
}
