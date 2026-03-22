// ============================================================
// tailwind.config.js — Extiende Tailwind con el sistema de diseño
// del portfolio: colores, tipografías y fuentes personalizadas.
// ============================================================

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta principal del portfolio
        'bg-primary':   '#FFFFFF',          // Fondo blanco
        'bg-secondary': '#F4F7F6',          // Gris azulado muy pálido
        'slate':        '#2D3748',          // Texto principal
        'slate-mid':    '#4A5568',          // Texto secundario
        'slate-light':  '#718096',          // Texto auxiliar / subtítulos
        'accent':       '#3182CE',          // Azul corporativo
        'accent-dark':  '#2B6CB0',          // Azul corporativo (hover)
        'accent-light': '#EBF4FF',          // Fondo suave de tags
        'dark-footer':  '#1A202C',          // Footer oscuro
      },
      fontFamily: {
        // Inter para títulos (700), Roboto para cuerpo (400)
        heading: ['"Inter"', 'sans-serif'],
        body:    ['"Roboto"', 'sans-serif'],
      },
      boxShadow: {
        'card':      '0 2px 8px rgba(0,0,0,0.07)',
        'card-hover':'0 12px 28px rgba(49,130,206,0.15)',
        'navbar':    '0 1px 12px rgba(0,0,0,0.08)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
