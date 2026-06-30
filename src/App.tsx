import { useState, useEffect } from "react"
import type { BuildCard, Classe } from "./types"
import { CLASSES } from "./types"
import { fetchClassData } from "./api"
import { SAMPLE_DATA } from "./sampleData"
import { TabBar } from "./components/TabBar"
import { BuildCards } from "./components/BuildCards"
import { CLASS_VIDEOS, CLASS_OBS } from "./videos"
import "./index.css"

function App() {
  const [activeClass, setActiveClass] = useState<Classe>("Billposter")
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
          <p className="subtitle">Vitrine de Balanceamento</p>
        </div>
        {sheetId ? (
          <span className="badge live">AO VIVO</span>
        ) : (
          <span className="badge">EM CONSTRUÇÃO</span>
        )}
      </header>

      <section className="observations">
        <h2 className="section-title">Observações</h2>
        <ul>
          <li>Os dados exibidos abaixo refletem testes realizados no servidor e podem não representar o balanceamento final.</li>
          <li>Foram utilizados os itens com upgrades máximos para os testes: Armas +10 10/10 e jóias +20. O nível de estrela das armas é apresentado junto dos dados.</li>
          <li>Apenas os itens de Tank possuem diamantes nas armas, pois a inserção manual de diamantes nos itens de Dano é inviável em larga escala.</li>
          <li>Nos itens de Dano, cada linha de awake pode ser utilizada individualmente como se fosse um awake. Já nos itens de Tank, o awake de HP não permite essa flexibilidade.</li>
          <li>Os valores de HP e Dano serão atualizados conforme novos dados forem coletados. Novos níveis de awake e estrelas serão adicionados futuramente.</li>
          <li>As builds consideram a distribuição de pontos de status do personagem: Tank (Full Vigor), Híbrido, Dano (Full status ofensivo).</li>
        </ul>
      </section>

      <TabBar active={activeClass} classes={CLASSES} onChange={setActiveClass} />

      {CLASS_OBS[activeClass] && (
        <section className="class-obs">
          <p>{CLASS_OBS[activeClass]}</p>
        </section>
      )}

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

      {loading && <p className="empty-state">Carregando dados da planilha...</p>}
      {error && <p className="empty-state error">{error}</p>}
      {!loading && <BuildCards cards={cards} />}
    </div>
  )
}

export default App
