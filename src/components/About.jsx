// ============================================================
// components/About.jsx — Sección "Sobre mí".
// Texto centrado, tono maduro y profesional. Destaca la
// transferencia de habilidades del sector sanitario a IT.
// ============================================================

export default function About() {
  return (
    <section id="sobre-mi" className="bg-bg-primary py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">

        {/* Encabezado */}
        <div className="reveal">
          <span className="font-body text-sm font-medium text-accent uppercase
            tracking-widest">
            Mi Historia
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate mt-2">
            Sobre Mí
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 mb-10 rounded-full" />
        </div>

        {/* Bloque de texto — redactar con el tono solicitado */}
        <div className="flex flex-col gap-5 reveal reveal-delay-1">
          <p className="font-body text-base md:text-lg text-slate-mid leading-relaxed">
            Durante más de una década trabajé como profesional sanitario y dediqué 5 años 
            a la operativa de Mercadona. Son dos sectores muy distintos, pero comparten 
            una raíz común: la exigencia máxima y el error cero.
          </p>

          <p className="font-body text-base md:text-lg text-slate-mid leading-relaxed">
            En la sanidad aprendí que la precisión no es opcional y que la toma de decisiones 
            bajo presión es cotidiana. En Mercadona, absorbí la cultura de la eficiencia extrema y 
            la organización por procesos. Esa trayectoria me dotó de una disciplina que aplico a 
            cada proyecto: la de hacer las cosas bien a la primera y la resiliencia para 
            trabajar en entornos de alta intensidad.
          </p>

          <p className="font-body text-base md:text-lg text-slate-mid leading-relaxed">
            Mi transición a la tecnología es una evolución hacia la resolución de problemas 
            desde la creatividad y la técnica. No solo me apasiona construir la lógica detrás 
            de una aplicación con Python y React, sino que he descubierto una fuerte vocación por el 
            diseño web. Me motiva tanto que el código sea limpio y robusto como que la 
            interfaz sea intuitiva, moderna y visualmente atractiva.
          </p>

          <p className="font-body text-base md:text-lg text-slate-mid leading-relaxed">
            Busco un equipo donde pueda aportar desde el primer día: ya sea desarrollando software, 
            diseñando experiencias digitales o gestionando sistemas. Aporto criterio técnico, madurez profesional 
            y una perspectiva diferencial que viene de haber trabajado en los sectores más exigentes del país.
          </p>
        </div>

        {/* Botón de contacto */}
        <div className="mt-10 reveal reveal-delay-2">
          <a
            href="mailto:yeraynavarroyanini@gmail.com"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark
              text-white font-body font-medium px-7 py-3 rounded-md
              transition-all duration-300 ease-in-out shadow-sm
              hover:shadow-md hover:-translate-y-0.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2
                2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Ponerse en contacto
          </a>
        </div>

      </div>
    </section>
  )
}
