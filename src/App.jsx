// ============================================================
// App.jsx — Componente raíz. Importa y orquesta todas las secciones.
// ============================================================
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import TechStack from './components/TechStack'
import Footer from './components/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'

function App() {
  // Inicializa el hook global de scroll reveal
  useScrollReveal()

  return (
    <div className="font-body text-slate antialiased">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <TechStack />
      </main>
      <Footer />
    </div>
  )
}

export default App
