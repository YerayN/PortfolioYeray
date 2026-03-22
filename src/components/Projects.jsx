// ============================================================
// components/Projects.jsx — Sección de proyectos destacados.
// Grid de tarjetas con imagen, descripción, tags y botones.
// ============================================================

// ── Datos de proyectos — edita aquí tu contenido real ──────
const PROJECTS = [
  {
    id: 1,
    title: 'HealthTracker API',
    description:
      'API REST para gestión de registros de pacientes. Autenticación JWT, endpoints CRUD y documentación automática con Swagger. Proyecto inspirado en mi experiencia sanitaria.',
    image: '/assets/images/proyecto-1.png',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/yeray-navarro',
    demo: '#',
  },
  {
    id: 2,
    title: 'Dashboard de Turnos',
    description:
      'Aplicación web para visualización y gestión de turnos sanitarios. Interfaz intuitiva construida con React y consumo de API externa con gráficas en tiempo real.',
    image: '/assets/images/proyecto-2.png',
    tags: ['React', 'Tailwind CSS', 'Chart.js', 'REST API'],
    github: 'https://github.com/yeray-navarro',
    demo: '#',
  },
  {
    id: 3,
    title: 'Generador de Presupuestos',
    description:
      'Herramienta web 100% cliente para crear y exportar presupuestos profesionales en PDF. Sin backend, sin instalación — abre el archivo y listo. Reduce tiempo de proceso en un 90%.',
    image: '/assets/images/proyecto-3.png',
    tags: ['JavaScript', 'jsPDF', 'Tailwind', 'SPA'],
    github: 'https://github.com/yeray-navarro',
    demo: '#',
  },
  {
    id: 4,
    title: 'Portfolio Web Personal',
    description:
      'Este mismo portfolio. Diseñado desde cero con React + Vite y Tailwind CSS. Foco en rendimiento, accesibilidad y experiencia de usuario limpia.',
    image: '/assets/images/proyecto-4.png',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Responsive'],
    github: 'https://github.com/yeray-navarro',
    demo: '#',
  },
]

// ── Componente tarjeta de proyecto ──────────────────────────
function ProjectCard({ project, delay }) {
  return (
    <article
      className={`reveal reveal-delay-${delay} bg-bg-primary rounded-xl overflow-hidden
        shadow-card hover:shadow-card-hover hover:-translate-y-1
        transition-all duration-300 ease-in-out flex flex-col`}
    >
      {/* Imagen 16:9 */}
      <div className="w-full aspect-video overflow-hidden bg-gray-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105
            transition-transform duration-500 ease-in-out"
          loading="lazy"
        />
      </div>

      {/* Contenido */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="font-heading font-bold text-lg text-slate">
          {project.title}
        </h3>
        <p className="font-body text-sm text-slate-light leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tags de tecnología */}
        <div className="flex flex-wrap gap-2 mt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-accent-light text-accent text-xs font-body
                font-medium px-2.5 py-0.5 rounded-full border border-accent/15"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Botones */}
        <div className="flex gap-3 mt-2 pt-3 border-t border-gray-100">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-mid hover:text-accent
              text-sm font-body font-medium border border-gray-200
              hover:border-accent px-3 py-1.5 rounded-md
              transition-all duration-300 ease-in-out"
          >
            {/* Icono GitHub SVG inline */}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18
                6.839 9.504.5.092.682-.217.682-.483
                0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608
                1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088
                2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951
                0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65
                0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59
                0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546
                1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688
                0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678
                1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019
                10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-accent hover:bg-accent-dark
              text-white text-sm font-body font-medium px-3 py-1.5 rounded-md
              transition-all duration-300 ease-in-out"
          >
            {/* Icono enlace externo SVG inline */}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0
                002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Demo Live
          </a>
        </div>
      </div>
    </article>
  )
}

// ── Componente principal de sección ─────────────────────────
export default function Projects() {
  return (
    <section id="proyectos" className="bg-bg-secondary py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Encabezado de sección */}
        <div className="text-center mb-14 reveal">
          <span className="font-body text-sm font-medium text-accent uppercase
            tracking-widest">
            Trabajo Reciente
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate mt-2">
            Proyectos Destacados
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={Math.min(i + 1, 4)}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
