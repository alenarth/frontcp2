import Card from './components/Card'
import Botao from './components/Botao'

function App() {
  return (
    <main className="min-h-screen bg-slate-100 flex flex-col items-center justify-center gap-8 p-6">
      <h1 className="text-3xl font-bold text-slate-800">CP2 - React</h1>

      <div className="flex flex-wrap justify-center gap-6">
        <Card
          titulo="React"
          descricao="Biblioteca JavaScript para construir interfaces com componentes."
          imagem="https://picsum.photos/seed/react/400/200"
        >
          <Botao texto="Saiba mais" onClick={() => alert('Card React')} />
        </Card>

        <Card
          titulo="Tailwind CSS"
          descricao="Framework CSS utilitário para estilizar direto nas classes."
          imagem="https://picsum.photos/seed/tailwind/400/200"
        >
          <Botao texto="Saiba mais" variante="secundario" onClick={() => alert('Card Tailwind')} />
        </Card>
      </div>
    </main>
  )
}

export default App
