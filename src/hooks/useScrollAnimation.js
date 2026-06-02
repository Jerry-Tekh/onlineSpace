import { useEffect } from 'react'

export default function useScrollAnimation() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-animate]')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
          // optional: unobserve for one-time animation
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}
