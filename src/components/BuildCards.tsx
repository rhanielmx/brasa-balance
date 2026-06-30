import type { BuildCard as BuildCardType } from "../types"

interface Props {
  cards: BuildCardType[]
}

export function BuildCards({ cards }: Props) {
  if (cards.length === 0) {
    return <p className="empty-state">Nenhum dado disponível para esta classe ainda.</p>
  }

  return (
    <div className="cards-container">
      {cards.map((card, ci) => (
        <div key={ci} className="build-card">
          <div className="card-header">
            <span className="card-build-name">{card.build}</span>
          </div>
          <div className="card-entries">
            {card.entries.map((entry, ei) => (
              <div key={ei} className="card-entry">
                <span className="entry-side">
                  <span className="entry-side-label tank">TANK</span>
                  <span className="entry-stars tank">{entry.tank.estrelas}</span>
                  <span className="entry-awakes">{entry.tank.awakes}</span>
                  <span className="entry-arrow">→</span>
                  <span className="entry-value hp">{entry.tank.hp}</span>
                  <span className="entry-label">HP</span>
                </span>
                <span className="entry-sep">│</span>
                <span className="entry-side">
                  <span className="entry-side-label dano">DANO</span>
                  <span className="entry-stars dano">{entry.dano.estrelas}</span>
                  <span className="entry-awakes">{entry.dano.awakes}</span>
                  <span className="entry-arrow">→</span>
                  <span className="entry-value dmg">{entry.dano.dmg}</span>
                  <span className="entry-label">DMG</span>
                </span>
                {entry.obs && <span className="entry-obs">{entry.obs}</span>}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
