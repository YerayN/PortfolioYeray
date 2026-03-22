// ============================================================
// components/Hero.jsx — Sección principal (above the fold).
// Layout de dos columnas: texto a la izquierda, foto a la derecha.
// ============================================================

export default function Hero() {
  return (
    <section
      id="inicio"
      className="bg-bg-primary min-h-screen flex items-center pt-16"
    >
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* ══ Columna Izquierda — Texto ══ */}
          <div className="flex flex-col gap-6 reveal">

            {/* Título principal */}
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl
              leading-tight text-slate">
              Hola, soy{' '}
              <span className="text-accent">Yeray</span>
              <br />
              <span className="text-accent">Desarrollador</span>
              <br />
              <span className="text-accent">Full Stack</span>
            </h1>

            {/* Subtítulo — transición de sanidad a IT */}
            <p className="font-body text-base md:text-lg text-slate-light leading-relaxed max-w-lg">
              Profesional en transición del sector sanitario a la tecnología.
              Combino la precisión clínica y la gestión de entornos de alta
              presión con el desarrollo de software robusto y orientado a
              soluciones reales.
            </p>

            {/* Botones de acción */}
            <div className="flex flex-wrap gap-4 mt-2">
              <a
                href="#proyectos"
                className="bg-accent hover:bg-accent-dark text-white font-body
                  font-medium px-6 py-3 rounded-md transition-all duration-300
                  ease-in-out shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                Ver Proyectos
              </a>
              <a
                href="#sobre-mi"
                className="border border-accent text-accent hover:bg-accent-light
                  font-body font-medium px-6 py-3 rounded-md transition-all
                  duration-300 ease-in-out hover:-translate-y-0.5"
              >
                Contactar
              </a>
            </div>

            {/* Stats rápidos */}
            <div className="flex gap-8 mt-4 pt-6 border-t border-gray-100">
              {[
                { value: '10+', label: 'Años en sanidad' },
                { value: '8+',  label: 'Proyectos IT' },
                { value: '5+',  label: 'Tecnologías' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-heading font-bold text-2xl text-accent">
                    {stat.value}
                  </span>
                  <span className="font-body text-xs text-slate-light mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ══ Columna Derecha — Foto ══ */}
          <div className="flex justify-center md:justify-end reveal reveal-delay-2">
            {/* Imagen PNG recortada sin fondo — integrada directamente sobre el blanco */}
            <img
              src="/assets/images/perfil-yeray-recortado.png"
              alt="Yeray Navarro — Desarrollador Full Stack"
              className="w-72 md:w-80 lg:w-96 h-auto object-contain"
              loading="eager"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
