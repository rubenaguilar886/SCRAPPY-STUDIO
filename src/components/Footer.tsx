import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { Logo, Wordmark } from './ui'
import { WHATSAPP_NUMBER, waLink } from '../lib/whatsapp'

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/#que-frena', label: 'Productos' },
  { to: '/#proyectos', label: 'Proyectos' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-black px-5 sm:px-8 lg:px-12 pt-14 sm:pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 pb-10 sm:pb-14">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <Logo size={44} circleBg="bg-white/10" />
              <Wordmark dark nameClassName="text-2xl" tagClassName="text-[11px] text-white/50" />
            </Link>
            <p className="text-sm text-white/50 leading-relaxed mb-5 max-w-xs">
              Tu socio estratégico digital — diseñamos y construimos la parte online de tu negocio.
            </p>
            <a
              href={waLink('Hola, quiero cotizar una página web')}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-2 w-fit"
            >
              <Phone size={14} />
              +{WHATSAPP_NUMBER.replace(/(\d{2})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4')}
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">Navegación</p>
            <ul className="flex flex-col gap-3">
              {navLinks.map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">Legales</p>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="/terminos" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-xs text-white/40 text-center">© 2026 Scrappy Studio · Lima, Perú. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
