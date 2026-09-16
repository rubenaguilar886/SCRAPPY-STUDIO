import { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Clock, Menu, X } from 'lucide-react'
import { Logo, Wordmark, RollBtn } from './ui'
import { useModal } from '../context/ModalContext'

/** "route" links get active-state styling; "scroll" links just jump to a section on the home page. */
const navLinks = [
  { to: '/', label: 'Inicio', kind: 'route' as const },
  { to: '/#que-frena', label: 'Productos', kind: 'scroll' as const },
  { to: '/#proyectos', label: 'Proyectos', kind: 'scroll' as const },
  { to: '/contacto', label: 'Contacto', kind: 'route' as const },
]

/** Hides the header on scroll-down, reveals it on scroll-up. */
function useHeaderHidden() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY

    const onScroll = () => {
      const currentY = window.scrollY
      const delta = currentY - lastY
      if (Math.abs(delta) < 8) return

      if (currentY > 100 && delta > 0) setHidden(true)
      else setHidden(false)

      lastY = currentY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return hidden
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [limaTime, setLimaTime] = useState('')
  const scrollHidden = useHeaderHidden()
  const headerRef = useRef<HTMLElement>(null)
  const { openContactModal } = useModal()

  const hidden = scrollHidden && !menuOpen

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      setLimaTime(
        now.toLocaleTimeString('es-PE', {
          timeZone: 'America/Lima',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }),
      )
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const setHeaderHeightVar = () => {
      if (headerRef.current) {
        document.documentElement.style.setProperty('--site-header-h', `${headerRef.current.offsetHeight}px`)
      }
    }
    setHeaderHeightVar()
    window.addEventListener('resize', setHeaderHeightVar)
    return () => window.removeEventListener('resize', setHeaderHeightVar)
  }, [])

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 inset-x-0 z-40 transition-transform duration-300"
        style={{ transform: hidden ? 'translateY(-100%)' : 'translateY(0)', transitionTimingFunction: 'cubic-bezier(0.25,0.1,0.25,1)' }}
      >
        <nav
          className="border-b border-white/25"
          style={{
            background: 'rgba(255,255,255,0.45)',
            backdropFilter: 'blur(18px) saturate(160%)',
            WebkitBackdropFilter: 'blur(18px) saturate(160%)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
          }}
        >
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="relative flex items-center justify-between py-3">
              <NavLink to="/" className="flex items-center gap-2.5 flex-shrink-0 order-2 md:order-1">
                <Logo size={36} />
                <span className="hidden sm:block">
                  <Wordmark nameClassName="text-base" tagClassName="text-[9px] text-black" />
                </span>
              </NavLink>

              <div className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
                {navLinks.map(l =>
                  l.kind === 'scroll' ? (
                    <Link
                      key={l.to}
                      to={l.to}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
                    >
                      {l.label}
                    </Link>
                  ) : (
                    <NavLink
                      key={l.to}
                      to={l.to}
                      end={l.to === '/'}
                      className={({ isActive }) =>
                        `text-sm transition-colors duration-300 ${
                          isActive ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-gray-900'
                        }`
                      }
                    >
                      {l.label}
                    </NavLink>
                  ),
                )}
              </div>

              <div className="flex items-center gap-4 order-1 md:order-2">
                <button
                  onClick={openContactModal}
                  className="hidden md:inline-flex group items-center gap-2 bg-black text-white text-xs font-medium rounded-full pl-4 pr-1.5 py-2"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.25,0.1,0.25,1)' }}
                >
                  <span className="inline-flex flex-col overflow-hidden" style={{ height: '1.2em' }}>
                    <span
                      className="flex flex-col transition-transform duration-500 group-hover:-translate-y-1/2"
                      style={{ transitionTimingFunction: 'cubic-bezier(0.25,0.1,0.25,1)' }}
                    >
                      <span>Agendar una llamada</span>
                      <span aria-hidden>Agendar una llamada</span>
                    </span>
                  </span>
                  <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-black -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
                <button
                  onClick={() => setMenuOpen(o => !o)}
                  className="md:hidden flex items-center justify-center text-gray-900"
                  aria-label="Toggle menu"
                >
                  {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setMenuOpen(false)} />
          <div
            className="absolute bottom-3 left-3 right-3 bg-white rounded-2xl p-6 flex flex-col gap-6"
            style={{ animation: 'slideUp 0.4s cubic-bezier(0.32,0.72,0,1) forwards' }}
          >
            <style>{`@keyframes slideUp{from{transform:translateY(100%);opacity:0}to{transform:translateY(0);opacity:1}}`}</style>
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <Clock size={12} />
              <span>{limaTime} Lima</span>
            </div>
            <nav className="flex flex-col gap-4">
              {navLinks.map(l =>
                l.kind === 'scroll' ? (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl font-medium text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    {l.label}
                  </Link>
                ) : (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    end={l.to === '/'}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-2xl font-medium transition-colors ${isActive ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}`
                    }
                  >
                    {l.label}
                  </NavLink>
                ),
              )}
            </nav>
            <RollBtn
              onClick={() => {
                setMenuOpen(false)
                openContactModal()
              }}
              className="bg-black text-white text-sm pl-5 pr-2 py-2.5 self-start"
            >
              Agendar una llamada
            </RollBtn>
          </div>
        </div>
      )}
    </>
  )
}
