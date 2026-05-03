import { useState, useEffect } from "react";
import {
  Menu, X, Download, ArrowRight, ExternalLink, GitBranch,
  Mail, MapPin, ChevronDown, Monitor, Zap, Database, Brain,
  ShieldCheck, Clock, Target, Users, Code2, Layers, BarChart3,
  Workflow, Globe, ChevronRight, Phone, Link
} from "lucide-react";

const Github = GitBranch;
const Linkedin = Link;

// ─── RESET GLOBAL Y ANIMACIONES ───────────────────────────────────────────────
const globalStyle = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body, #root {
    width: 100%;
    min-height: 100vh;
    background: #080c10;
    color: white;
    font-family: ui-sans-serif, system-ui, -apple-system, sans-serif;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  /* --- ANIMACIONES DE TECLEO EXACTAS --- */
  /* Cada línea crece solo hasta sus caracteres exactos (ch) */
  @keyframes typeLine1 { 0% { width: 0; opacity: 1; border-right-color: #22d3ee; } 6% { width: 52ch; opacity: 1; border-right-color: #22d3ee; } 7%, 95% { width: 52ch; opacity: 1; border-right-color: transparent; } 100% { width: 0; opacity: 0; border-right-color: transparent; } }
  @keyframes typeLine2 { 0% { width: 0; opacity: 1; border-right-color: #22d3ee; } 6% { width: 54ch; opacity: 1; border-right-color: #22d3ee; } 7%, 95% { width: 54ch; opacity: 1; border-right-color: transparent; } 100% { width: 0; opacity: 0; border-right-color: transparent; } }
  @keyframes typeLine3 { 0% { width: 0; opacity: 1; border-right-color: #22d3ee; } 6% { width: 51ch; opacity: 1; border-right-color: #22d3ee; } 7%, 95% { width: 51ch; opacity: 1; border-right-color: transparent; } 100% { width: 0; opacity: 0; border-right-color: transparent; } }
  @keyframes typeLine4 { 0% { width: 0; opacity: 1; border-right-color: #22d3ee; } 6% { width: 47ch; opacity: 1; border-right-color: #22d3ee; } 7%, 95% { width: 47ch; opacity: 1; border-right-color: transparent; } 100% { width: 0; opacity: 0; border-right-color: transparent; } }
  @keyframes typeLine5 { 0% { width: 0; opacity: 1; border-right-color: #22d3ee; } 6% { width: 24ch; opacity: 1; border-right-color: #22d3ee; } 7%, 95% { width: 24ch; opacity: 1; border-right-color: transparent; } 100% { width: 0; opacity: 0; border-right-color: transparent; } }
  @keyframes typeLine6 { 0% { width: 0; opacity: 1; border-right-color: #22d3ee; } 6% { width: 51ch; opacity: 1; border-right-color: #22d3ee; } 7%, 95% { width: 51ch; opacity: 1; border-right-color: transparent; } 100% { width: 0; opacity: 0; border-right-color: transparent; } }

  .code-line {
    overflow: hidden;
    white-space: nowrap;
    border-right: 2px solid transparent; /* El cursor de escritura */
    opacity: 0;
  }

  /* Secuencia en cascada para que se escriban una detrás de otra */
  .line-1 { animation: typeLine1 15s steps(52, end) infinite 0s; }
  .line-2 { animation: typeLine2 15s steps(54, end) infinite 2s; }
  .line-3 { animation: typeLine3 15s steps(51, end) infinite 4s; }
  .line-4 { animation: typeLine4 15s steps(47, end) infinite 6s; }
  .line-5 { animation: typeLine5 15s steps(24, end) infinite 8s; }
  .line-6 { animation: typeLine6 15s steps(51, end) infinite 10s; }

  /* --- APARICIÓN SUAVE (REVEAL) --- */
  .reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .reveal.active {
    opacity: 1;
    transform: translateY(0);
  }
`;

// ─── DATA ─────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Stack", href: "#stack" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

const DIFFERENTIALS = [
  {
    icon: Target,
    title: "Criterio operativo",
    text: "Antes de construir, analizo el proceso, las prioridades y el problema real que debemos resolver.",
  },
  {
    icon: ShieldCheck,
    title: "Presión y responsabilidad",
    text: "Experiencia demostrable en entornos exigentes donde la organización, la calma y la decisión son vitales.",
  },
  {
    icon: Brain, 
    title: "Desarrollo asistido y eficiente",
    text: "Integro inteligencia artificial y automatización para optimizar tiempos, evitar tareas mecánicas y asegurar resultados robustos.",
  },
  {
    icon: Users,
    title: "Trato directo con usuarios",
    text: "Capacidad demostrada para escuchar, comunicar y adaptar soluciones técnicas a las necesidades de personas reales.",
  },
];

const PROJECTS = [
  {
    type: "Proyecto real · Entidad local",
    typeColor: "#22d3ee",
    title: "Plataforma Protección Civil",
    tagline: "Gestión operativa de voluntarios y recursos en tiempo real.",
    problem: "Los equipos de voluntariado necesitan coordinar personas, turnos, avisos e información operativa de forma clara y accesible.",
    solution: "Una herramienta web centralizada para facilitar la gestión diaria, mejorar la comunicación interna y apoyar la toma de decisiones operativas.",
    features: ["Gestión de voluntarios y roles", "Control de fichajes", "Avisos internos", "Mapa operativo en tiempo real", "Interfaz responsive"],
    stack: ["React", "JavaScript", "Supabase", "SQL", "Auth", "Mapas"],
    links: [
      { label: "Ver caso", href: "#" },
      { label: "Demo", href: "#", icon: ExternalLink },
      { label: "Código", href: "#", icon: Github },
    ],
  },
  {
    type: "App funcional · Producto propio",
    typeColor: "#34d399",
    title: "La Despensa",
    tagline: "Planificación de menús y listas de compra automáticas.",
    problem: "Planificar comidas, recordar ingredientes y organizar compras consume tiempo y suele hacerse de forma poco estructurada.",
    solution: "Una app práctica para guardar recetas, organizar la semana y generar una lista de compra a partir del menú planificado.",
    features: ["Gestión de recetas", "Planificación semanal", "Lista de compra automática", "Organización por ingredientes", "Uso cotidiano"],
    stack: ["React", "JavaScript", "HTML/CSS", "LocalStorage", "Responsive"],
    links: [
      { label: "Ver proyecto", href: "#" },
      { label: "Demo", href: "#", icon: ExternalLink },
      { label: "Código", href: "#", icon: Github },
    ],
  },
  {
    type: "Clientes reales · Presencia digital",
    typeColor: "#a78bfa",
    title: "Webs para negocio local",
    tagline: "Presencia digital efectiva para negocios reales.",
    problem: "Muchos negocios tienen poca presencia online, webs desactualizadas o canales de contacto poco claros.",
    solution: "Webs claras, rápidas y adaptadas a cada negocio, con estructura comercial, diseño responsive y llamadas a la acción visibles.",
    features: ["Diseño responsive", "Landing pages orientadas a conversión", "Contacto directo integrado", "SEO básico", "Adaptación al cliente"],
    stack: ["HTML", "CSS", "JavaScript", "React", "SEO", "Deploy"],
    links: [
      { label: "Ver ejemplos", href: "#" },
      { label: "Contactar", href: "#contacto" },
    ],
  },
];

const STACK_GROUPS = [
  { label: "Frontend", icon: Monitor, items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"] },
  { label: "Backend & Datos", icon: Database, items: ["Python", "Node.js", "SQL", "Supabase", "REST APIs"] },
  { label: "Automatización & IA", icon: Brain, items: ["n8n", "Zapier", "Desarrollo asistido", "Prompting avanzado", "Flujos automatizados"] },
  { label: "Herramientas", icon: Layers, items: ["Git / GitHub", "Power BI", "Figma", "Deploy web", "Diseño responsive"] },
];

const VALUE_AREAS = [
  { icon: Code2, title: "Desarrollo web", text: "Aplicaciones, landing pages, paneles internos y herramientas responsive pensadas para usuarios reales.", accent: "rgba(6,182,212,0.08)" },
  { icon: Workflow, title: "Automatización de procesos", text: "Flujos que reducen tareas repetitivas, conectan herramientas y ahorran tiempo operativo.", accent: "rgba(16,185,129,0.08)" },
  { icon: Globe, title: "Digitalización de entornos reales", text: "Especialmente útil para negocios, asociaciones, entidades locales y contextos sanitarios u operativos.", accent: "rgba(59,130,246,0.08)" },
  { icon: BarChart3, title: "Datos e informes", text: "Organización, consulta y visualización de información para facilitar decisiones y seguimiento.", accent: "rgba(139,92,246,0.08)" },
  { icon: Brain, title: "IA aplicada", text: "Uso práctico de IA para apoyar procesos, generar flujos más eficientes y mejorar herramientas digitales cuando tiene sentido.", accent: "rgba(245,158,11,0.08)" },
  { icon: Target, title: "Resolución de incidencias", text: "Diagnóstico ágil y solución de problemas técnicos, aplicando el rigor y la calma de los entornos críticos.", accent: "rgba(244,63,94,0.08)" },
];

const HERO_CHIPS = ["Desarrollo web", "Automatización", "IA aplicada", "Datos", "Entornos críticos"];

// ─── BACKGROUND CODE ────────────────────────

function BackgroundCode() {
  return (
    <div style={{
      position: "fixed", top: "15%", left: "4%", width: "92%", maxWidth: 1000,
      fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
      fontSize: 15, opacity: 0.35, zIndex: 0, pointerEvents: "none", overflow: "hidden"
    }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <p className="code-line line-1"><span style={{ color: "#c678dd" }}>import</span> <span style={{ color: "#e5c07b" }}>{'{ calma, criterio }'}</span> <span style={{ color: "#c678dd" }}>from</span> <span style={{ color: "#98c379" }}>'@past/emergencias'</span>;</p>
        <p className="code-line line-2"><span style={{ color: "#c678dd" }}>import</span> <span style={{ color: "#e5c07b" }}>{'{ automation, data }'}</span> <span style={{ color: "#c678dd" }}>from</span> <span style={{ color: "#98c379" }}>'@skills/tech-stack'</span>;</p>
        <br/>
        <p className="code-line line-3"><span style={{ color: "#56b6c2" }}>const</span> <span style={{ color: "#e06c75" }}>yeray</span> = <span style={{ color: "#56b6c2" }}>new</span> <span style={{ color: "#61afef" }}>Developer</span>({'{'} mode: <span style={{ color: "#98c379" }}>'Operative'</span> {'}'});</p>
        <p className="code-line line-4"><span style={{ color: "#e06c75" }}>yeray</span>.<span style={{ color: "#61afef" }}>execute</span>({'{'} target: <span style={{ color: "#98c379" }}>'Soluciones Reales'</span> {'}'});</p>
        <br/>
        <p className="code-line line-5"><span style={{ color: "#c678dd" }}>await</span> <span style={{ color: "#e06c75" }}>yeray</span>.<span style={{ color: "#61afef" }}>connectAI</span>();</p>
        <p className="code-line line-6" style={{ color: "rgba(255,255,255,0.4)" }}>// Sistema optimizado. Preparado para nuevos retos.</p>
      </div>
    </div>
  );
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function goTo(href) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function Divider() {
  return (
    <div style={{
      position: "absolute", top: 0, left: 0, right: 0, height: 1,
      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)",
    }} />
  );
}

function SectionLabel({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
      <span style={{ width: 28, height: 1, background: "rgba(6,182,212,0.5)", display: "block" }} />
      <span style={{ fontSize: 11, color: "#22d3ee", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>
        {children}
      </span>
    </div>
  );
}

// ─── NAVBAR ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const close = () => setOpen(false);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      backgroundColor: scrolled ? "rgba(8,12,16,0.93)" : "rgba(8,12,16,0)",
      backdropFilter: scrolled ? "blur(14px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
      transition: "background-color 0.35s ease, backdrop-filter 0.35s ease, border-color 0.35s ease",
    }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        <a href="#inicio" onClick={e => { e.preventDefault(); goTo("#inicio"); }}
          style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <span style={{
            width: 32, height: 32, borderRadius: 8, flexShrink: 0,
            background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 13, fontWeight: 700, color: "white",
            boxShadow: "0 4px 14px rgba(6,182,212,0.28)",
          }}>YN</span>
          <span style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.88)" }}>Yeray Navarro</span>
        </a>

        <nav className="hidden md:flex" style={{ gap: 4 }}>
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href}
              onClick={e => { e.preventDefault(); goTo(l.href); }}
              style={{ padding: "6px 14px", fontSize: 14, color: "rgba(255,255,255,0.48)", borderRadius: 8, textDecoration: "none", transition: "color 0.2s, background 0.2s", cursor: "pointer" }}
              onMouseEnter={e => { e.target.style.color = "rgba(255,255,255,0.88)"; e.target.style.background = "rgba(255,255,255,0.05)"; }}
              onMouseLeave={e => { e.target.style.color = "rgba(255,255,255,0.48)"; e.target.style.background = "transparent"; }}
            >{l.label}</a>
          ))}
        </nav>

        <div className="hidden md:flex" style={{ gap: 8 }}>
          <a href="/cv-yeray.pdf" download
            style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 16px", fontSize: 13, color: "#22d3ee", border: "1px solid rgba(6,182,212,0.3)", borderRadius: 8, textDecoration: "none", transition: "background 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(6,182,212,0.08)"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >
            <Download size={13} /> Descargar CV
          </a>
          <a href="#contacto" onClick={e => { e.preventDefault(); goTo("#contacto"); }}
            style={{ padding: "6px 16px", fontSize: 13, fontWeight: 600, background: "#06b6d4", color: "#080c10", borderRadius: 8, textDecoration: "none", transition: "background 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.background = "#22d3ee"}
            onMouseLeave={e => e.currentTarget.style.background = "#06b6d4"}
          >Contactar</a>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", color: "rgba(255,255,255,0.6)", cursor: "pointer", padding: 4 }}
          aria-label="Menú">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div style={{ background: "rgba(8,12,16,0.98)", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "16px 24px 20px" }}>
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href}
              onClick={e => { e.preventDefault(); goTo(l.href); close(); }}
              style={{ display: "block", padding: "10px 12px", fontSize: 14, color: "rgba(255,255,255,0.55)", borderRadius: 8, textDecoration: "none", marginBottom: 2 }}
            >{l.label}</a>
          ))}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", marginTop: 12, paddingTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
            <a href="/cv-yeray.pdf" download
              style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 12px", fontSize: 13, color: "#22d3ee", border: "1px solid rgba(6,182,212,0.3)", borderRadius: 8, textDecoration: "none" }}>
              <Download size={13} /> Descargar CV
            </a>
            <a href="#contacto" onClick={e => { e.preventDefault(); close(); goTo("#contacto"); }}
              style={{ padding: "8px 12px", fontSize: 13, fontWeight: 600, background: "#06b6d4", color: "#080c10", borderRadius: 8, textDecoration: "none", textAlign: "center" }}>
              Contactar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="inicio" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 64, overflow: "hidden" }}>
      <div style={{ position: "relative", width: "100%", maxWidth: 1152, margin: "0 auto", padding: "80px 24px", zIndex: 2 }}>
        <div className="grid lg:grid-cols-2" style={{ gap: 64, alignItems: "center" }}>

          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 999, border: "1px solid rgba(6,182,212,0.25)", background: "rgba(6,182,212,0.06)", marginBottom: 28 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22d3ee", animation: "pulse 2s infinite" }} />
              <span style={{ fontSize: 11, color: "#22d3ee", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Disponible para nuevos proyectos</span>
            </div>

            <h1 style={{ fontSize: "clamp(2.5rem,5vw,3.5rem)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.02em", color: "white", marginBottom: 20 }}>
              Creo soluciones{" "}
              <span style={{ background: "linear-gradient(90deg,#22d3ee,#60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                digitales
              </span>{" "}
              para problemas reales.
            </h1>

            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.48)", lineHeight: 1.7, marginBottom: 28, maxWidth: 480 }}>
              Vengo del mundo de las emergencias sanitarias, donde aprendí a mantener la calma y tomar decisiones bajo presión. Hoy aplico ese mismo criterio operativo al desarrollo de software y a la automatización, creando herramientas que realmente facilitan el día a día a las personas.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36 }}>
              {HERO_CHIPS.map(c => (
                <span key={c} style={{ padding: "4px 10px", fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.42)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 6, background: "rgba(255,255,255,0.02)" }}>{c}</span>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              <a href="#proyectos" onClick={e => { e.preventDefault(); goTo("#proyectos"); }}
                style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 20px", fontSize: 14, fontWeight: 600, background: "#06b6d4", color: "#080c10", borderRadius: 8, textDecoration: "none", boxShadow: "0 4px 20px rgba(6,182,212,0.28)", transition: "background 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.background = "#22d3ee"}
                onMouseLeave={e => e.currentTarget.style.background = "#06b6d4"}
              >Ver proyectos <ArrowRight size={15} /></a>
              <a href="#contacto" onClick={e => { e.preventDefault(); goTo("#contacto"); }}
                style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 20px", fontSize: 14, color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, textDecoration: "none", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.color = "white"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.6)"; e.currentTarget.style.background = "transparent"; }}
              >Contactar</a>
              <a href="/cv-yeray.pdf" download
                style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 20px", fontSize: 14, color: "#22d3ee", border: "1px solid rgba(6,182,212,0.3)", borderRadius: 8, textDecoration: "none", transition: "background 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(6,182,212,0.08)"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              ><Download size={14} /> CV</a>
            </div>
          </div>

          <div style={{ position: "relative", marginTop: "40px" }}>
            <div style={{ borderRadius: 20, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)", backdropFilter: "blur(12px)", padding: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 20, paddingBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(239,68,68,0.7)" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(245,158,11,0.7)" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(34,197,94,0.7)" }} />
                <span style={{ marginLeft: "auto", fontSize: 11, color: "rgba(255,255,255,0.2)", fontFamily: "monospace" }}>yeray.portfolio</span>
              </div>

              <div style={{ position: "relative", width: "100%", height: 300, display: "flex", justifyContent: "center", alignItems: "flex-end", marginBottom: 24 }}>
                <div style={{ position: "absolute", bottom: 0, width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)" }} />
                <img
                  src="/yeray-profile.png"
                  alt="Yeray Navarro"
                  style={{ 
                    position: "relative", width: "100%", height: "100%", objectFit: "contain", objectPosition: "bottom", display: "block", 
                    filter: "drop-shadow(0 15px 25px rgba(0,0,0,0.6))", transform: "scale(1.25)", transformOrigin: "bottom center" 
                  }}
                />
              </div>

              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.22)", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>Áreas de valor</p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {[
                  { icon: Monitor, label: "Web apps", color: "#22d3ee", bg: "rgba(6,182,212,0.07)" },
                  { icon: Workflow, label: "Automatización", color: "#34d399", bg: "rgba(16,185,129,0.07)" },
                  { icon: Database, label: "Datos", color: "#fbbf24", bg: "rgba(245,158,11,0.07)" },
                  { icon: Brain, label: "IA aplicada", color: "#fb7185", bg: "rgba(244,63,94,0.07)" },
                ].map(item => (
                  <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 10, background: item.bg, border: "1px solid rgba(255,255,255,0.05)" }}>
                    <item.icon size={15} style={{ color: item.color, flexShrink: 0 }} />
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>{item.label}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#34d399" }} />
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.28)" }}>Disponible</span>
                </div>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.18)" }}>Alicante, España</span>
              </div>
            </div>
            
            <div style={{ position: "absolute", bottom: -16, left: -16, background: "#0e1520", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "12px 16px", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", marginBottom: 2 }}>Perfil híbrido</p>
              <p style={{ fontSize: 22, fontWeight: 700, color: "white" }}>Sanidad + IT</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── DIFFERENTIALS ────────────────────────────────────────────────────────────

function Differentials() {
  return (
    <section style={{ position: "relative", padding: "96px 0" }}>
      <Divider />
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
        
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: 48 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ width: 28, height: 1, background: "rgba(6,182,212,0.5)", display: "block" }} />
            <span style={{ fontSize: 11, color: "#22d3ee", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700 }}>Diferencial</span>
            <span style={{ width: 28, height: 1, background: "rgba(6,182,212,0.5)", display: "block" }} />
          </div>

          <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)", fontWeight: 700, color: "white", lineHeight: 1.2, marginBottom: 16, maxWidth: 600 }}>
            No vengo de una trayectoria estándar.{" "}
            <span style={{ color: "rgba(255,255,255,0.3)" }}>Y eso suma.</span>
          </h2>

          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.42)", maxWidth: 680, lineHeight: 1.7 }}>
            Durante años trabajé en emergencias, sanidad y atención al cliente, entornos donde aprendí a priorizar, comunicar con claridad y resolver problemas bajo presión. Ahora aplico esa experiencia al desarrollo de herramientas digitales útiles, pensadas para personas y procesos reales.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 16 }}>
          {DIFFERENTIALS.map(d => (
            <div key={d.title}
              style={{ padding: 20, borderRadius: 14, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.015)", transition: "all 0.25s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.015)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; }}
            >
              <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(6,182,212,0.08)", border: "1px solid rgba(6,182,212,0.18)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <d.icon size={17} style={{ color: "#22d3ee" }} />
              </div>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.88)", marginBottom: 8 }}>{d.title}</h3>
              <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.38)", lineHeight: 1.6 }}>{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PROJECTS ─────────────────────────────────────────────────────────────────

function Projects() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="proyectos" style={{ position: "relative", padding: "96px 0" }}>
      <Divider />
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
        
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: 48 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ width: 28, height: 1, background: "rgba(6,182,212,0.5)", display: "block" }} />
            <span style={{ fontSize: 11, color: "#22d3ee", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700 }}>Proyectos</span>
            <span style={{ width: 28, height: 1, background: "rgba(6,182,212,0.5)", display: "block" }} />
          </div>

          <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)", fontWeight: 700, color: "white", lineHeight: 1.2, marginBottom: 16, maxWidth: 600 }}>
            Proyectos reales y soluciones funcionales
          </h2>

          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.42)", maxWidth: 680, lineHeight: 1.7 }}>
            Casos prácticos donde aplico desarrollo web, automatización e inteligencia artificial para resolver cuellos de botella y mejorar operativas reales.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {PROJECTS.map((p, i) => (
            <div key={p.title} style={{
              borderRadius: 18,
              border: `1px solid ${expanded === i ? "rgba(6,182,212,0.18)" : "rgba(255,255,255,0.06)"}`,
              background: "rgba(255,255,255,0.015)",
              overflow: "hidden",
              transition: "border-color 0.3s",
            }}>
              <div style={{ padding: "24px 28px" }}>
                <div className="flex flex-col sm:flex-row sm:items-start" style={{ justifyContent: "space-between", gap: 12, marginBottom: 16 }}>
                  <div>
                    <span style={{ fontSize: 11, fontWeight: 600, color: p.typeColor, textTransform: "uppercase", letterSpacing: "0.08em" }}>{p.type}</span>
                    <h3 style={{ fontSize: "clamp(1.1rem,2vw,1.4rem)", fontWeight: 700, color: "white", marginTop: 4 }}>{p.title}</h3>
                    <p style={{ fontSize: 14, color: "rgba(255,255,255,0.38)", marginTop: 4 }}>{p.tagline}</p>
                  </div>
                  <button onClick={() => setExpanded(expanded === i ? null : i)}
                    style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "rgba(255,255,255,0.3)", background: "none", border: "none", cursor: "pointer", whiteSpace: "nowrap", paddingTop: 4, flexShrink: 0, transition: "color 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.3)"}
                  >
                    {expanded === i ? "Cerrar" : "Ver detalle"}
                    <ChevronRight size={13} style={{ transition: "transform 0.2s", transform: expanded === i ? "rotate(90deg)" : "rotate(0deg)" }} />
                  </button>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
                  {p.stack.map(s => (
                    <span key={s} style={{ padding: "2px 10px", fontSize: 12, color: "rgba(255,255,255,0.32)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 999 }}>{s}</span>
                  ))}
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {p.links.map(link => (
                    <a key={link.label} href={link.href}
                      style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 14px", fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.52)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 8, textDecoration: "none", transition: "all 0.2s" }}
                      onMouseEnter={e => { e.currentTarget.style.color = "white"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
                      onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.52)"; e.currentTarget.style.background = "transparent"; }}
                    >
                      {link.icon && <link.icon size={11} />}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {expanded === i && (
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.01)", padding: "24px 28px" }}>
                  <div className="grid sm:grid-cols-2" style={{ gap: 24, marginBottom: 24 }}>
                    <div>
                      <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.2)", fontWeight: 600, marginBottom: 8 }}>Problema</p>
                      <p style={{ fontSize: 14, color: "rgba(255,255,255,0.42)", lineHeight: 1.65 }}>{p.problem}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.2)", fontWeight: 600, marginBottom: 8 }}>Solución</p>
                      <p style={{ fontSize: 14, color: "rgba(255,255,255,0.42)", lineHeight: 1.65 }}>{p.solution}</p>
                    </div>
                  </div>
                  <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.2)", fontWeight: 600, marginBottom: 12 }}>Funcionalidades</p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 8 }}>
                    {p.features.map(f => (
                      <div key={f} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#22d3ee", flexShrink: 0 }} />
                        <span style={{ fontSize: 13.5, color: "rgba(255,255,255,0.42)" }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── STACK ────────────────────────────────────────────────────────────────────

function Stack() {
  return (
    <section id="stack" style={{ position: "relative", padding: "96px 0" }}>
      <Divider />
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
        
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: 48 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ width: 28, height: 1, background: "rgba(6,182,212,0.5)", display: "block" }} />
            <span style={{ fontSize: 11, color: "#22d3ee", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700 }}>Stack</span>
            <span style={{ width: 28, height: 1, background: "rgba(6,182,212,0.5)", display: "block" }} />
          </div>

          <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)", fontWeight: 700, color: "white", lineHeight: 1.2, marginBottom: 16, maxWidth: 600 }}>
            Tecnología al servicio del problema
          </h2>

          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.42)", maxWidth: 680, lineHeight: 1.7 }}>
            Utilizo herramientas modernas para construir soluciones web sólidas e implementar automatizaciones prácticas adaptadas a los requerimientos de cada proyecto.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 14, marginBottom: 14 }}>
          {STACK_GROUPS.map(g => (
            <div key={g.label}
              style={{ borderRadius: 14, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.015)", padding: 20, transition: "border-color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(255,255,255,0.04)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <g.icon size={15} style={{ color: "rgba(255,255,255,0.42)" }} />
                </div>
                <h3 style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.72)" }}>{g.label}</h3>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                {g.items.map(item => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13.5, color: "rgba(255,255,255,0.36)" }}>
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(6,182,212,0.5)", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ borderRadius: 14, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.015)", padding: 20, display: "flex", alignItems: "flex-start", gap: 16 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Zap size={15} style={{ color: "#fbbf24" }} />
          </div>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.36)", lineHeight: 1.65 }}>
            <span style={{ color: "rgba(255,255,255,0.58)", fontWeight: 600 }}>La tecnología es el medio, no el fin.</span>{" "}
            El objetivo fundamental siempre es seleccionar y aplicar la herramienta tecnológica que mejor y más eficientemente resuelva el problema operativo.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── VALUE AREAS ──────────────────────────────────────────────────────────────

function ValueAreas() {
  return (
    <section style={{ position: "relative", padding: "96px 0" }}>
      <Divider />
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
        
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: 48 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ width: 28, height: 1, background: "rgba(6,182,212,0.5)", display: "block" }} />
            <span style={{ fontSize: 11, color: "#22d3ee", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700 }}>Valor</span>
            <span style={{ width: 28, height: 1, background: "rgba(6,182,212,0.5)", display: "block" }} />
          </div>

          <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)", fontWeight: 700, color: "white", lineHeight: 1.2, marginBottom: 16, maxWidth: 600 }}>
            Dónde puedo aportar valor
          </h2>

          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.42)", maxWidth: 680, lineHeight: 1.7 }}>
            Áreas clave donde mi combinación de habilidades técnicas y experiencia operativa marcan la diferencia en el resultado final.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 14 }}>
          {VALUE_AREAS.map(a => (
            <div key={a.title}
              style={{ borderRadius: 14, border: "1px solid rgba(255,255,255,0.06)", background: a.accent, padding: 20, transition: "border-color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.11)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"}
            >
              <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(255,255,255,0.04)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <a.icon size={17} style={{ color: "rgba(255,255,255,0.55)" }} />
              </div>
              <h3 style={{ fontSize: 14.5, fontWeight: 600, color: "rgba(255,255,255,0.88)", marginBottom: 8 }}>{a.title}</h3>
              <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.38)", lineHeight: 1.65 }}>{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────

function About() {
  const quickInfo = [
    { icon: MapPin, value: "Alicante (Presencial · Híbrido · Remoto)" },
    { icon: Phone, value: "Carné B · Vehículo propio" },
  ];

  return (
    <section id="sobre-mi" style={{ position: "relative", padding: "96px 0" }}>
      <Divider />
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
        <div className="grid lg:grid-cols-2" style={{ gap: 64, alignItems: "center" }}>
          
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <span style={{ width: 28, height: 1, background: "rgba(6,182,212,0.5)", display: "block" }} />
              <span style={{ fontSize: 11, color: "#22d3ee", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700 }}>Sobre mí</span>
            </div>
            
            <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)", fontWeight: 740, color: "white", lineHeight: 1.2, letterSpacing: "-0.025em", marginBottom: 24 }}>
              Del trato con pacientes al{" "}
              <span style={{ color: "rgba(255,255,255,0.32)" }}>código limpio.</span>
            </h2>
            
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <p style={{ fontSize: 15.5, color: "rgba(255,255,255,0.48)", lineHeight: 1.75 }}>
                Vengo de la sanidad, las emergencias y la atención al cliente. Sectores exigentes donde aprendí a mantener la cabeza fría, escuchar con atención y priorizar lo urgente frente a lo importante cuando hay personas delante, no solo pantallas.
              </p>
              <p style={{ fontSize: 15.5, color: "rgba(255,255,255,0.48)", lineHeight: 1.75 }}>
                Esa es la base que he traído al sector tecnológico. Mi enfoque desarrollando software, aplicando IA o creando automatizaciones no se basa en usar la herramienta más llamativa, sino en construir soluciones pragmáticas que aporten valor real al equipo y al usuario final.
              </p>
              <p style={{ fontSize: 15.5, color: "rgba(255,255,255,0.48)", lineHeight: 1.75 }}>
                Me atraen los proyectos donde puedo seguir creciendo a nivel técnico, pero también donde se valore aportar una perspectiva operativa al ciclo de desarrollo. 
              </p>
              <p style={{ fontSize: 15.5, color: "rgba(255,255,255,0.48)", lineHeight: 1.75 }}>
                Y cuando necesito alejarme del teclado para despejar la mente, lo habitual es encontrarme por Aigües disfrutando de un buen paseo junto a mis tres perros: Congo, Nano y Kiana.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ 
              position: "relative",
              width: "100%", 
              maxWidth: 400,
              aspectRatio: "1/1", 
              borderRadius: 24, 
              overflow: "hidden", 
              border: "1px solid rgba(255,255,255,0.07)",
              background: "linear-gradient(180deg, rgba(34,211,238,0.05), rgba(8,12,16,0.5))",
              boxShadow: "0 24px 60px rgba(0,0,0,0.3)",
              marginBottom: 32
            }}>
              <img 
                src="/yeray-about.png" 
                alt="Yeray Navarro" 
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} 
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%", maxWidth: 400 }}>
              {quickInfo.map(item => (
                <div key={item.value} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", borderRadius: 12, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <item.icon size={16} style={{ color: "#22d3ee", flexShrink: 0 }} />
                  <span style={{ fontSize: 14, color: "rgba(255,255,255,0.6)" }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contacto" style={{ position: "relative", padding: "88px 0 96px" }}>
      <Divider />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 50% 45%,rgba(6,182,212,0.045),transparent)", pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: 820, margin: "0 auto", padding: "0 24px" }}>
        <div style={{
          borderRadius: 28,
          border: "1px solid rgba(255,255,255,0.07)",
          background: "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.012))",
          padding: "clamp(28px, 5vw, 48px)",
          textAlign: "center",
          boxShadow: "0 24px 90px rgba(0,0,0,0.24)",
          overflow: "hidden",
          position: "relative",
        }}>
          <div style={{ position: "absolute", top: -120, left: "50%", transform: "translateX(-50%)", width: 360, height: 240, background: "radial-gradient(circle, rgba(6,182,212,0.12), transparent 68%)", pointerEvents: "none" }} />

          <div style={{ position: "relative" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
              <span style={{ width: 28, height: 1, background: "rgba(6,182,212,0.5)", display: "block" }} />
              <span style={{ fontSize: 11, color: "#22d3ee", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700 }}>Contacto</span>
              <span style={{ width: 28, height: 1, background: "rgba(6,182,212,0.5)", display: "block" }} />
            </div>

            <h2 style={{ fontSize: "clamp(2.15rem,5vw,3.2rem)", fontWeight: 850, color: "white", lineHeight: 1.05, letterSpacing: "-0.04em", marginBottom: 18 }}>
              ¿Hablamos?
            </h2>

            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", maxWidth: 560, margin: "0 auto 30px", lineHeight: 1.75 }}>
              Mi objetivo principal es entrar de lleno en el sector IT. Soy un perfil versátil, con facilidad para aprender y total disposición para encajar en cualquier rol tecnológico donde pueda aportar mi resolución operativa desde el primer día.
            </p>

            <a href="mailto:yeraynavarroyanini@gmail.com"
              style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 9, padding: "13px 22px", fontSize: 14.5, fontWeight: 750, background: "#06b6d4", color: "#080c10", borderRadius: 12, textDecoration: "none", boxShadow: "0 10px 34px rgba(6,182,212,0.25)", transition: "background 0.2s", marginBottom: 18 }}
              onMouseEnter={e => e.currentTarget.style.background = "#22d3ee"}
              onMouseLeave={e => e.currentTarget.style.background = "#06b6d4"}
            >
              <Mail size={16} /> Enviar email
            </a>

            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.34)", marginBottom: 24 }}>
              yeraynavarroyanini@gmail.com
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
              {[
                { href: "https://linkedin.com/in/PLACEHOLDER", icon: Linkedin, label: "LinkedIn" },
                { href: "https://github.com/PLACEHOLDER", icon: Github, label: "GitHub" },
                { href: "/cv-yeray.pdf", icon: Download, label: "Descargar CV", download: true },
              ].map(item => (
                <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} download={item.download}
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 16px", fontSize: 14, color: "rgba(255,255,255,0.58)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 10, textDecoration: "none", transition: "all 0.2s", background: "rgba(255,255,255,0.015)" }}
                  onMouseEnter={e => { e.currentTarget.style.color = "white"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.58)"; e.currentTarget.style.background = "rgba(255,255,255,0.015)"; }}
                >
                  <item.icon size={15} /> {item.label}
                </a>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 28, color: "rgba(255,255,255,0.28)", fontSize: 13.5 }}>
              <MapPin size={13} />
              <span>Alicante · presencial, híbrido o remoto</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "28px 0" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.17)" }}>
          Yeray Navarro · {new Date().getFullYear()}
        </p>
        <div style={{ display: "flex", gap: 16 }}>
          {[
            { href: "https://github.com/PLACEHOLDER", icon: Github, label: "GitHub" },
            { href: "https://linkedin.com/in/PLACEHOLDER", icon: Linkedin, label: "LinkedIn" },
            { href: "mailto:yeraynavarroyanini@gmail.com", icon: Mail, label: "Email" },
          ].map(item => (
            <a key={item.label} href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{ color: "rgba(255,255,255,0.2)", transition: "color 0.2s", textDecoration: "none" }}
              onMouseEnter={e => e.currentTarget.style.color = "rgba(255,255,255,0.55)"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.2)"}
              aria-label={item.label}
            ><item.icon size={17} /></a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────

export default function App() {
  
  useEffect(() => {
    // Restauramos la vigilancia del Scroll, pero le damos tiempo a React a que pinte las cosas en la pantalla
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 }); 

    const timeoutId = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 100); // 100ms de margen para evitar el bug de que se queden invisibles

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style>{globalStyle}</style>
      <div style={{ position: "relative", width: "100%", minHeight: "100vh", background: "#080c10" }}>
        
        {/* FONDO FIJO 1: La cuadrícula (se queda pegada al hacer scroll) */}
        <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, backgroundImage: "linear-gradient(rgba(6,182,212,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(6,182,212,0.04) 1px,transparent 1px)", backgroundSize: "64px 64px" }} />
        
        {/* FONDO FIJO 2: El texto animado puro (se queda pegado al hacer scroll) */}
        <BackgroundCode />

        <Navbar />
        
        {/* CONTENIDO PRINCIPAL: Fluye por encima de los fondos fijos */}
        <main style={{ position: "relative", zIndex: 10 }}>
          <Hero /> 
          <div className="reveal"><Differentials /></div>
          <div className="reveal"><Projects /></div>
          <div className="reveal"><Stack /></div>
          <div className="reveal"><ValueAreas /></div>
          <div className="reveal"><About /></div>
          <div className="reveal"><Contact /></div>
        </main>
        
        <div style={{ position: "relative", zIndex: 10 }}>
          <Footer />
        </div>
      </div>
    </>
  );
}