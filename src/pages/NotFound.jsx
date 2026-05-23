import '../index.css'

export default function NotFound() {
  return (
    <main className="main-container" tabIndex="-1" data-name="NotFound">
      <section className="section-base">
        <div className="section-wrapper p-8">
          <h1 className="text-h1">Página não encontrada</h1>
          <p className="text-p">Desculpe, a página que você procura não existe.</p>
        </div>
      </section>
    </main>
  )
}
