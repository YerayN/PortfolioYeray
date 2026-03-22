// ============================================================
// components/Navbar.jsx — Barra de navegación sticky.
// Nombre a la izquierda, enlaces centrados/derecha, botón CV.
// ============================================================
import { useState, useEffect } from 'react'

export default function Navbar() {
  // Sombra dinámica al hacer scroll
  const [scrolled, setScrolled] = useState(false)
  // Menú hamburguesa para móvil
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Proyectos',    href: '#proyectos' },
    { label: 'Sobre mí',    href: '#sobre-mi' },
    { label: 'Tecnologías', href: '#tecnologias' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-bg-primary transition-all duration-300
        ${scrolled ? 'shadow-navbar' : 'shadow-none'}`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* ── Logo / Nombre ── */}
        <a
          href="#"
          className="font-heading font-700 text-lg tracking-tight text-slate
            hover:text-accent transition-all duration-300 ease-in-out"
        >
          Yeray Navarro<span className="text-accent">.</span>
        </a>

        {/* ── Links Desktop ── */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm text-slate-mid hover:text-accent
                  relative after:absolute after:left-0 after:-bottom-0.5
                  after:w-0 after:h-0.5 after:bg-accent after:transition-all
                  after:duration-300 hover:after:w-full transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Botón Descargar CV ── */}
        <a
          href="/assets/docs/cv-yeray-navarro.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 bg-accent hover:bg-accent-dark
            text-white text-sm font-body font-medium px-4 py-2 rounded-md
            transition-all duration-300 ease-in-out shadow-sm hover:shadow-md"
        >
          {/* Icono de descarga SVG inline */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
          </svg>
          Descargar CV
        </a>

        {/* ── Hamburguesa Móvil ── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-slate hover:text-accent transition-colors duration-300"
          aria-label="Abrir menú"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* ── Menú Móvil Desplegable ── */}
      {menuOpen && (
        <div className="md:hidden bg-bg-primary border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-slate-mid hover:text-accent transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/assets/docs/cv-yeray-navarro.pdf"
            download
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark
              text-white text-sm font-body font-medium px-4 py-2 rounded-md
              transition-all duration-300 w-fit"
          >
            Descargar CV
          </a>
        </div>
      )}
    </header>
  )
}
