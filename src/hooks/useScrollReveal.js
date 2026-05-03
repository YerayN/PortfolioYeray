// ============================================================
// hooks/useScrollReveal.js — Hook personalizado que utiliza
// IntersectionObserver para añadir la clase 'visible' a todos
// los elementos con clase 'reveal' cuando entran en el viewport.
// ============================================================
import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            // Una vez visible, dejar de observar para mejor performance
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,    // Activar cuando el 10% del elemento es visible
        rootMargin: '0px 0px -40px 0px', // Ligero offset inferior
      }
    )

    // Observar todos los elementos con clase 'reveal'
    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
