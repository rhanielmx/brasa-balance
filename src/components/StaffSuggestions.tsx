import { useState, useEffect } from "react"
import { STAFF_SUGESTOES } from "../staffData"

export function StaffSuggestions() {
  return (
    <div className="staff-page">
      <section className="staff-table-section">
        <h2 className="section-title">Resumo das Sugestões</h2>
        <div className="staff-table-wrapper">
          <table className="staff-table">
            <thead>
              <tr>
                <th>Classe</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {STAFF_SUGESTOES.map((s) => (
                <tr key={s.classe}>
                  <td className="staff-td-classe">{s.classe}</td>
                  <td className="staff-td-acao">{s.acao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="staff-accordion-section">
        <h2 className="section-title">Detalhamento por Classe</h2>
        <StaffAccordion />
      </section>
    </div>
  )
}

function StaffAccordion() {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set())

  useEffect(() => {
    const hash = window.location.hash.replace("#", "").toLowerCase()
    if (hash && STAFF_SUGESTOES.some((s) => s.classe.toLowerCase() === hash)) {
      setOpenIds(new Set([hash]))
    }
  }, [])

  function toggle(id: string) {
    setOpenIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
        if (window.location.hash === `#${id}`) {
          window.history.replaceState(null, "", window.location.pathname)
        }
      } else {
        next.add(id)
        window.location.hash = id
      }
      return next
    })
  }

  return (
    <div className="accordion">
      {STAFF_SUGESTOES.map((s) => {
        const id = s.classe.toLowerCase()
        const isOpen = openIds.has(id)

        return (
          <div
            key={id}
            id={id}
            className={`accordion-item${isOpen ? " open" : ""}`}
          >
            <button className="accordion-header" onClick={() => toggle(id)}>
              <span className="accordion-header-title">{s.classe}</span>
              <span className={`accordion-arrow${isOpen ? " open" : ""}`}>
                ▶
              </span>
            </button>
            {isOpen && (
              <div className="accordion-body">
                <div className="staff-field">
                  <h4 className="staff-field-title">Análise</h4>
                  <p>{s.analise}</p>
                </div>
                <div className="staff-field">
                  <h4 className="staff-field-title">Sugestão</h4>
                  <p>{s.sugestao}</p>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
