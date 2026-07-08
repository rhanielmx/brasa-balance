import { PVE_SCENARIOS } from "../pve"

export function PvEView() {
  return (
    <section className="pve-section">
      <h2 className="section-title">Testes PvE</h2>
      <p className="pve-intro">
        DPS medido no totem do jogo com todas as classes lado a lado.
      </p>
      <div className="pve-grid">
        {PVE_SCENARIOS.map((s) => (
          <div key={s.filename} className="pve-card">
            <h3 className="pve-card-title">{s.title}</h3>
            <p className="pve-card-desc">{s.desc}</p>
            <img
              className="pve-img"
              src={`/pve/${s.filename}`}
              alt={s.title}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
