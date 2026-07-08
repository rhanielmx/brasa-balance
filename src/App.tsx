import { useState, useEffect } from "react"
import type { BuildCard, Classe } from "./types"
import { CLASSES } from "./types"
import { fetchClassData } from "./api"
import { SAMPLE_DATA } from "./sampleData"
import { TabBar } from "./components/TabBar"
import { BuildCards } from "./components/BuildCards"
import { PvEView } from "./components/PvEView"
import { CLASS_VIDEOS, CLASS_OBS } from "./videos"
import "./index.css"

function App() {
  const [activeClass, setActiveClass] = useState<Classe>("Billposter")
  const [mode, setMode] = useState<"pvp" | "pve">("pvp")
  const [data, setData] = useState<Record<Classe, BuildCard[]> | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const sheetId = import.meta.env.VITE_SHEET_ID ?? ""

  useEffect(() => {
    if (!sheetId) {
      setData(null)
      return
    }
    setLoading(true)
    setError("")
    Promise.all(
      CLASSES.map(async (c) => {
        const cards = await fetchClassData(c)
        return [c, cards] as const
      })
    )
      .then((results) => {
        setData(Object.fromEntries(results) as Record<Classe, BuildCard[]>)
      })
      .catch((e) => {
        setError("Erro ao carregar dados da planilha. Usando dados de exemplo.")
        console.error(e)
      })
      .finally(() => setLoading(false))
  }, [sheetId])

  const cards = data ? data[activeClass] : SAMPLE_DATA[activeClass]

  return (
    <div className="page">
      <header className="header">
        <div className="header-text">
          <h1 className="title">Brasa Balance</h1>
          <p className="subtitle">Dados de Balanceamento</p>
        </div>
        {sheetId ? (
          <span className="badge live">AO VIVO</span>
        ) : (
          <span className="badge">EM CONSTRUÇÃO</span>
        )}
      </header>

      <nav className="mode-toggle">
        <button
          className={`mode-btn ${mode === "pvp" ? "active" : ""}`}
          onClick={() => setMode("pvp")}
        >
          PvP
        </button>
        <button
          className={`mode-btn ${mode === "pve" ? "active" : ""}`}
          onClick={() => setMode("pve")}
        >
          PvE
        </button>
      </nav>

      {mode === "pvp" ? (
        <>
          <section className="observations">
            <h2 className="section-title">Observações</h2>
            <ul>
              <li>Os dados exibidos abaixo refletem testes realizados no servidor de testes com itens padronizados.</li>
              <li>Foram utilizados os itens com upgrades máximos para os testes: Armas +10 10/10 e jóias +20. O nível de estrela das armas é apresentado junto dos dados.</li>
              <li>Qualquer dúvida podem conferir nos vídeos. A troca de equipamentos é mantida aberta para saberem qual swap está atualmente ativa.</li>
              <li>Caso não fique claro qual build ativa no hover, é possível conferir pelo nome na janela de troca de equipamentos.</li>
              <li>Os valores de HP e Dano podem ser atualizados conforme novos dados forem coletados. Qualquer suspeita de erro pode entrar em contato para conferir.</li>
            </ul>
          </section>

        <TabBar active={activeClass} classes={CLASSES} onChange={setActiveClass} />

        {CLASS_OBS[activeClass] && (
          <section className="class-obs">
            <p>{CLASS_OBS[activeClass]}</p>
          </section>
        )}

        {loading && <p className="empty-state">Carregando dados da planilha...</p>}
        {error && <p className="empty-state error">{error}</p>}
        {!loading && <BuildCards cards={cards} />}

        {CLASS_VIDEOS[activeClass].length > 0 && (
          <section className="videos">
            <h2 className="section-title">Vídeos</h2>
            <div className="video-grid">
              {CLASS_VIDEOS[activeClass].map((id, i) => (
                <div key={i} className="video-wrapper">
                  <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    title={`Teste ${i + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </>
    ) : (
      <PvEView />
    )}
    </div>
  )
}

export default App
