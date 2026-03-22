// ============================================================
// components/TechStack.jsx — Rediseño: grid centrado y compacto.
// Pills con icono SVG + nombre, agrupadas por categoría.
// Sin barras de progreso ni niveles.
// ============================================================

const TECH = {
  Backend: [
    {
      name: 'Python',
      icon: (
        <svg viewBox="0 0 128 128" className="w-5 h-5 shrink-0">
          <path fill="#3776AB" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008z"/>
          <path fill="#FFD43B" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521H91.682z"/>
        </svg>
      ),
    },
    {
      name: 'FastAPI',
      icon: (
        <svg viewBox="0 0 128 128" className="w-5 h-5 shrink-0">
          <circle cx="64" cy="64" r="60" fill="#009688"/>
          <path fill="white" d="M70 30L40 68h28L58 98l42-46H72z"/>
        </svg>
      ),
    },
    {
      name: 'PostgreSQL',
      icon: (
        <svg viewBox="0 0 128 128" className="w-5 h-5 shrink-0">
          <circle cx="64" cy="64" r="60" fill="#336791"/>
          <path fill="white" d="M44 40h40v10H44zm0 18h40v10H44zm0 18h25v10H44z"/>
        </svg>
      ),
    },
    {
      name: 'Docker',
      icon: (
        <svg viewBox="0 0 128 128" className="w-5 h-5 shrink-0">
          <path fill="#2496ED" d="M124.8 52.1c-2.9-2-9.8-2.7-15-1.6-.6-5.2-4-9.7-9.4-13.8l-3.2-2.1-2.1 3.2c-2.7 4.1-3.4 10.8-1.1 15.3-1.6.9-4.7 2.1-8.8 2H3.2c-.8 4.8.3 15.7 6.7 22.8 4.8 5.2 11.9 7.9 21.2 7.9 20.2 0 35.2-9.3 42.2-26.2 2.8.1 8.7 0 11.7-5.8.2-.3.7-1.3 2-3.9l.4-.8-3.6-2zM28 65.3H19v8.8h9V65.3zm11.5 0h-9v8.8h9V65.3zm11.6 0h-9v8.8h9V65.3zm11.5 0h-9v8.8h9V65.3zm-34.6-11.6H19v8.8h9V53.7zm11.5 0h-9v8.8h9V53.7zm11.6 0h-9v8.8h9V53.7zm11.5 0h-9v8.8h9V53.7zm11.5 0h-9v8.8h9V53.7zM51.1 42.2h-9v8.8h9V42.2zm11.5 0h-9v8.8h9V42.2zm11.5 0h-9v8.8h9V42.2z"/>
        </svg>
      ),
    },
  ],
  Frontend: [
    {
      name: 'React',
      icon: (
        <svg viewBox="0 0 128 128" className="w-5 h-5 shrink-0">
          <circle cx="64" cy="64" r="11.4" fill="#61DAFB"/>
          <path fill="none" stroke="#61DAFB" strokeWidth="5" d="M64 18c17.4 0 32 20.5 32 46S81.4 110 64 110 32 89.5 32 64s14.6-46 32-46z"/>
          <path fill="none" stroke="#61DAFB" strokeWidth="5" d="M36.9 31c8.7-15 22.4-23 27.1-20.3 4.7 2.7 3.7 19-5 34S33.3 75.6 28.6 72.9c-4.7-2.7-.4-27 8.3-42z"/>
          <path fill="none" stroke="#61DAFB" strokeWidth="5" d="M36.9 97c-8.7-15-9.7-31.3-5-34 4.7-2.7 18.4 5.3 27.1 20.3s13 39.3 8.3 42c-4.7 2.7-21.7-13.3-30.4-28.3z"/>
        </svg>
      ),
    },
    {
      name: 'TypeScript',
      icon: (
        <svg viewBox="0 0 128 128" className="w-5 h-5 shrink-0">
          <rect width="128" height="128" rx="6" fill="#3178C6"/>
          <path fill="white" d="M22 64.5v-7.1h84V64.5H72V106H56V64.5H22z"/>
          <path fill="white" d="M106 79c0-8.3-5.7-13.2-15.1-13.2-9.8 0-16.2 5.7-16.2 14.8 0 6.7 3.5 10.9 11.2 13.5l5.4 1.8c3.8 1.3 5.4 2.8 5.4 5.2 0 2.7-2.5 4.5-6.5 4.5-4.1 0-7-2-7.5-5.5H72c.5 8.3 6.5 13 16.9 13C99.3 113.1 107 107 107 98c0-6.9-3.9-11-12.2-13.8L90 82.8c-3.8-1.3-5.2-2.7-5.2-5 0-2.5 2.2-4.2 5.7-4.2 3.5 0 5.8 1.8 6.1 5H106z"/>
        </svg>
      ),
    },
    {
      name: 'Tailwind CSS',
      icon: (
        <svg viewBox="0 0 128 128" className="w-5 h-5 shrink-0">
          <path fill="#06B6D4" d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.745-12.207-8.66C55.124 71.371 47.868 64 32.004 64z"/>
        </svg>
      ),
    },
    {
      name: 'HTML / CSS',
      icon: (
        <svg viewBox="0 0 128 128" className="w-5 h-5 shrink-0">
          <path fill="#E34F26" d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387L119.024 2H9.032zm89.126 26.539l-.627 7.172H48.044l1.256 14.137h49.329l-3.745 41.931-31.835 9.025-31.296-8.977-2.196-24.08h13.314l1.162 12.919 19.016 5.25 19.005-5.236 1.987-22.173H30.726L27.006 28.539h71.152z"/>
        </svg>
      ),
    },
  ],
  Herramientas: [
    {
      name: 'Git',
      icon: (
        <svg viewBox="0 0 128 128" className="w-5 h-5 shrink-0">
          <path fill="#F05032" d="M124.742 58.378L69.625 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.685 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.462 6.607 2.293 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.785-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L40.863 19.869 3.256 57.48c-3.172 3.174-3.172 8.32 0 11.497l55.117 55.117c3.174 3.174 8.32 3.174 11.499 0l54.869-54.869c3.175-3.176 3.175-8.316.001-11.847z"/>
        </svg>
      ),
    },
    {
      name: 'VS Code',
      icon: (
        <svg viewBox="0 0 128 128" className="w-5 h-5 shrink-0">
          <path fill="#007ACC" d="M90.767 127.126a10.896 10.896 0 006.715.873 10.885 10.885 0 005.649-2.886L128 103V25L103.131 2.886a10.912 10.912 0 00-12.364-2.013L5.68 43.946A10.762 10.762 0 000 53.736v20.528a10.762 10.762 0 005.68 9.79z"/>
          <path fill="white" d="M95.491 24.44L71.006 48.925 30.68 16.518 12.273 24.53l33.428 39.47-33.428 39.47 18.407 8.012 40.326-32.408 24.485 24.485 16.514-8.248V32.688z"/>
        </svg>
      ),
    },
    {
      name: 'Linux',
      icon: (
        <svg viewBox="0 0 128 128" className="w-5 h-5 shrink-0">
          <circle cx="64" cy="64" r="56" fill="#FCC624"/>
          <circle cx="64" cy="64" r="46" fill="#2B2B2B"/>
          <circle cx="50" cy="58" r="6" fill="#FCC624"/>
          <circle cx="78" cy="58" r="6" fill="#FCC624"/>
          <path fill="#FCC624" d="M46 78c0 0 4 12 18 12s18-12 18-12H46z"/>
        </svg>
      ),
    },
    {
      name: 'Postman',
      icon: (
        <svg viewBox="0 0 128 128" className="w-5 h-5 shrink-0">
          <circle cx="64" cy="64" r="56" fill="#FF6C37"/>
          <path fill="white" d="M87 44.5L59.2 72.3 50.8 63.9c-1.6-1.6-4.1-1.6-5.7 0s-1.6 4.1 0 5.7L55.5 80c.8.8 1.8 1.2 2.8 1.2 1 0 2.1-.4 2.8-1.2L92.7 50.2c1.6-1.6 1.6-4.1 0-5.7-1.5-1.6-4.1-1.6-5.7 0z"/>
        </svg>
      ),
    },
  ],
}

// ── Pill individual ──────────────────────────────────────────
function TechPill({ tech }) {
  return (
    <div className="flex items-center gap-2.5 bg-bg-primary border border-gray-100
      hover:border-accent/30 hover:bg-accent-light
      px-4 py-2.5 rounded-full shadow-sm
      transition-all duration-300 ease-in-out cursor-default">
      {tech.icon}
      <span className="font-body text-sm font-medium text-slate-mid whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  )
}

// ── Componente principal ─────────────────────────────────────
export default function TechStack() {
  return (
    <section id="tecnologias" className="bg-bg-secondary py-20">
      <div className="max-w-3xl mx-auto px-6">

        {/* Encabezado centrado */}
        <div className="text-center mb-14 reveal">
          <span className="font-body text-sm font-medium text-accent uppercase tracking-widest">
            Stack Técnico
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate mt-2">
            Herramientas y Tecnologías
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Grupos centrados */}
        <div className="flex flex-col gap-10">
          {Object.entries(TECH).map(([category, items], i) => (
            <div key={category} className={`flex flex-col items-center gap-4 reveal reveal-delay-${i + 1}`}>

              {/* Etiqueta de categoría */}
              <span className="font-body text-xs font-semibold text-slate-light uppercase tracking-widest">
                {category}
              </span>

              {/* Pills centradas con wrap */}
              <div className="flex flex-wrap justify-center gap-3">
                {items.map((tech) => (
                  <TechPill key={tech.name} tech={tech} />
                ))}
              </div>

              {/* Separador entre grupos (excepto el último) */}
              {i < Object.keys(TECH).length - 1 && (
                <div className="w-16 h-px bg-gray-200 mt-2" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
