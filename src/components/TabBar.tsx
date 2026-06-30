import type { Classe } from "../types"

interface TabBarProps {
  active: Classe
  classes: readonly Classe[]
  onChange: (c: Classe) => void
}

export function TabBar({ active, classes, onChange }: TabBarProps) {
  return (
    <nav className="tab-bar">
      {classes.map((c) => (
        <button
          key={c}
          className={`tab ${c === active ? "active" : ""}`}
          onClick={() => onChange(c)}
        >
          {c}
        </button>
      ))}
    </nav>
  )
}
