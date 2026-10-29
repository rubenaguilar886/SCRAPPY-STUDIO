import { useEffect, useRef, useState } from 'react'
import { Search, PenTool, Rocket, TrendingUp } from 'lucide-react'

const steps = [
  { number: '01', icon: Search, title: 'Entender', description: 'Tu negocio y sus procesos.' },
  { number: '02', icon: PenTool, title: 'Diseñar', description: 'La solución que realmente necesitas.' },
  { number: '03', icon: Rocket, title: 'Construir', description: 'Tu landing page o tienda online, lista para vender.' },
  { number: '04', icon: TrendingUp, title: 'Mejorar', description: 'Medimos, aprendemos y evolucionamos.' },
]

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)'

// Con la sección fija, cada paso aparece cuando el scroll pasa su umbral (0–1 del recorrido fijo).
const FIRST_STEP_AT = 0.1
const STEP_GAP = 0.22
const PIN_SCREENS = 2.4 // pantallas extra de scroll mientras la sección está fija

const clamp = (n: number, min = 0, max = 1) => Math.min(max, Math.max(min, n))

/** Se fija en cualquier pantalla con altura mínima y animaciones permitidas; si el contenido no cabe, se reduce (ver fit). */
function usePinnedLayout() {
  const query = '(prefers-reduced-motion: no-preference) and (min-height: 480px)'
  const [pinned, setPinned] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches)

  useEffect(() => {
    const mq = window.matchMedia(query)
    const update = () => setPinned(mq.matches)
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return pinned
}

export default function ProcesoSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const pinned = usePinnedLayout()
  const [seen, setSeen] = useState(false)
  const [progress, setProgress] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)
  const [fit, setFit] = useState(1)
  const [avail, setAvail] = useState(0)

  // Cuando no está fija: todo aparece una sola vez al entrar en pantalla.
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { threshold: pinned ? 0.1 : 0.2 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [pinned])

  // Cuando está fija: el scroll dentro de la sección controla qué pasos se ven.
  useEffect(() => {
    if (!pinned) return
    const calc = () => {
      const el = sectionRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      const p = total > 0 ? clamp(-rect.top / total) : 0
      setProgress(Math.round(p * 200) / 200)
    }
    calc()
    window.addEventListener('scroll', calc, { passive: true })
    window.addEventListener('resize', calc)
    return () => {
      window.removeEventListener('scroll', calc)
      window.removeEventListener('resize', calc)
    }
  }, [pinned])

  // Si el contenido es más alto que la pantalla (celulares chicos), se escala para que quepa fijo.
  useEffect(() => {
    if (!pinned) {
      setFit(1)
      return
    }
    const calc = () => {
      const el = contentRef.current
      if (!el) return
      const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--site-header-h')) || 64
      const avail = window.innerHeight - header - 24
      const natural = el.offsetHeight
      setAvail(avail)
      setFit(natural > avail ? Math.max(0.6, avail / natural) : 1)
    }
    calc()
    window.addEventListener('resize', calc)
    return () => window.removeEventListener('resize', calc)
  }, [pinned])

  const stepVisible = (i: number) => (pinned ? progress >= FIRST_STEP_AT + i * STEP_GAP : seen)
  const lineFill = pinned
    ? clamp((progress - FIRST_STEP_AT) / (STEP_GAP * (steps.length - 1)))
    : seen
      ? 1
      : 0

  const reveal = (delayMs: number): React.CSSProperties => ({
    opacity: seen ? 1 : 0,
    transform: seen ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 900ms ${EASE} ${delayMs}ms, transform 900ms ${EASE} ${delayMs}ms`,
  })

  return (
    <section
      ref={sectionRef}
      className="relative bg-white border-t border-gray-100"
      style={pinned ? { height: `${100 + PIN_SCREENS * 100}svh` } : undefined}
    >
      <div
        className={
          pinned
            ? 'sticky top-0 h-[100svh] box-border pt-[var(--site-header-h,64px)] flex items-center'
            : 'pt-14 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-32'
        }
      >
        <div
          ref={contentRef}
          className={`w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 ${pinned ? 'max-lg:min-h-[var(--avail)] max-lg:flex max-lg:flex-col' : ''}`}
          style={{
            ...(pinned && avail ? ({ '--avail': `${avail}px` } as React.CSSProperties) : {}),
            ...(fit < 1 ? { transform: `scale(${fit})`, transformOrigin: 'center' } : {}),
          }}
        >
          <div className={`max-w-3xl mx-auto text-center ${pinned ? 'mb-8 sm:mb-14 lg:mb-20' : 'mb-14 sm:mb-20'}`}>
            <h2
              className="font-medium text-gray-900 leading-[1.08] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(1.75rem, 6vw, 3.4rem)', ...reveal(0) }}
            >
              No empezamos por el software.
            </h2>
            <h2
              className="text-gradient-flow font-semibold leading-[1.08] tracking-[-0.03em] mb-6 pb-1"
              style={{ fontSize: 'clamp(1.75rem, 6vw, 3.4rem)', ...reveal(180) }}
            >
              Empezamos por tu negocio.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto" style={reveal(360)}>
              Antes de construir, entendemos tu negocio, a quién le vendes y qué necesitas para captar más clientes.
              Con eso definimos si te conviene una landing page o una tienda online, y la diseñamos a tu medida.
            </p>
          </div>

          <div className={`relative ${pinned ? 'max-lg:flex-1 max-lg:flex max-lg:flex-col' : ''}`}>
            <div aria-hidden className="hidden lg:block absolute left-[12.5%] right-[12.5%] top-7 h-px bg-gray-200">
              <div
                className="h-full origin-left"
                style={{
                  background: 'linear-gradient(90deg, #7C3AED, #22D3EE, #EC4899)',
                  transform: `scaleX(${lineFill})`,
                  transition: pinned ? 'transform 150ms linear' : `transform 1800ms ${EASE} 600ms`,
                }}
              />
            </div>

            <div className={`grid grid-cols-1 lg:grid-cols-4 gap-y-3 sm:gap-y-4 lg:gap-y-10 lg:gap-x-6 ${pinned ? 'max-lg:flex-1 max-lg:content-evenly' : ''}`}>
              {steps.map(({ number, icon: Icon, title, description }, i) => {
                const visible = stepVisible(i)
                const delay = pinned ? 0 : 600 + i * 450
                return (
                  <div key={number} className="flex flex-row lg:flex-col items-center gap-4 lg:gap-0 lg:text-center">
                    <div
                      className="relative"
                      style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'scale(1)' : 'scale(0.4)',
                        transition: `opacity 500ms ${EASE} ${delay}ms, transform 650ms cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`,
                      }}
                    >
                      <div
                        className="proceso-node w-12 h-12 lg:w-14 lg:h-14 rounded-full p-[2px]"
                        style={{
                          background: 'linear-gradient(135deg, #7C3AED, #22D3EE 55%, #EC4899)',
                          animation: visible ? `node-pulse 2.6s ease-out ${delay + 500}ms 2` : 'none',
                        }}
                      >
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                          <Icon size={22} strokeWidth={1.75} className="text-[#7C3AED]" />
                        </div>
                      </div>
                      <span className="absolute -top-2 -right-3 text-[10px] font-bold text-white bg-gray-900 rounded-full px-1.5 py-0.5 tracking-wide">
                        {number}
                      </span>
                    </div>

                    <div
                      className="flex-1 lg:flex-none lg:mt-6 lg:w-full rounded-2xl border border-gray-200/80 bg-white px-4 py-4 lg:px-5 lg:py-6 shadow-[0_1px_2px_rgba(16,24,40,0.04)] hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-12px_rgba(124,58,237,0.28)] hover:border-[#C4B5FD]"
                      style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? undefined : 'translateY(24px)',
                        transition: `opacity 600ms ${EASE} ${delay + 150}ms, transform 500ms ${EASE}, box-shadow 500ms ${EASE}, border-color 500ms ${EASE}`,
                      }}
                    >
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-0.5 lg:mb-1.5">{title}</h3>
                      <p className="text-sm text-gray-500 leading-snug lg:leading-relaxed">{description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
