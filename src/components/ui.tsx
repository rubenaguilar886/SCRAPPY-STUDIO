import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

/* ─────────────────────────────────────────────
   Shared brand + interaction primitives
───────────────────────────────────────────── */

export function Logo({ size = 36, circleBg = 'bg-gray-900' }: { size?: number; circleBg?: string }) {
  const svgW = Math.round(size * 0.6)
  const svgH = Math.round(size * 0.71)
  return (
    <div
      className={`rounded-full ${circleBg} flex items-center justify-center flex-shrink-0`}
      style={{ width: size, height: size }}
    >
      <svg width={svgW} height={svgH} viewBox="-8 -8 76 96" fill="none">
        <defs>
          <linearGradient id="sg-grad" x1="60" y1="0" x2="0" y2="70" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="48%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
        <path
          d="M48,18 C52,7 48,3 36,4 C22,5 10,15 14,28 C17,38 30,42 38,44 C47,46 56,52 53,64 C50,74 38,77 27,75 C16,73 11,64 14,55"
          stroke="url(#sg-grad)"
          strokeWidth="13"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  )
}

/** Stacked "Scrappy / STUDIO" wordmark, matching the horizontal lockup in Branding/logo-preview.html. */
export function Wordmark({
  dark = false,
  nameClassName = '',
  tagClassName = '',
}: {
  dark?: boolean
  nameClassName?: string
  tagClassName?: string
}) {
  return (
    <div className="flex flex-col leading-none">
      <span className={`font-extrabold tracking-tight ${dark ? 'text-white' : 'text-gray-900'} ${nameClassName}`}>
        Scrappy
      </span>
      <span
        className={`font-semibold uppercase tracking-[0.25em] mt-0.5 ${
          tagClassName || (dark ? 'text-[9px] text-white/40' : 'text-[9px] text-gray-400')
        }`}
      >
        Studio
      </span>
    </div>
  )
}

export const StarburstSVG = ({ className = 'w-5 h-5 sm:w-6 sm:h-6 text-[#A78BFA]' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={`fill-current ${className}`}>
    <path d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z" />
  </svg>
)

const EASE = { transitionTimingFunction: 'cubic-bezier(0.25,0.1,0.25,1)' }

/** Pill button with roll-up text and a rotating arrow, used for every CTA. */
export function RollBtn({
  children,
  href,
  onClick,
  className = '',
  arrowBg = 'bg-white',
  arrowColor = 'text-[#A78BFA]',
  external = true,
  submit = false,
}: {
  children: string
  href?: string
  onClick?: () => void
  className?: string
  arrowBg?: string
  arrowColor?: string
  external?: boolean
  submit?: boolean
}) {
  const content = (
    <>
      <span className="inline-flex flex-col overflow-hidden" style={{ height: '1.25em' }}>
        <span className="flex flex-col transition-transform duration-500 group-hover:-translate-y-1/2" style={EASE}>
          <span>{children}</span>
          <span aria-hidden>{children}</span>
        </span>
      </span>
      <span
        className={`inline-flex items-center justify-center rounded-full transition-transform duration-500 ${arrowBg} ${arrowColor}`}
        style={{ width: '1.75rem', height: '1.75rem', flexShrink: 0, ...EASE }}
      >
        <ArrowRight size={14} className="transition-transform duration-500 -rotate-45 group-hover:rotate-0" style={EASE} />
      </span>
    </>
  )

  const cls = `group inline-flex items-center gap-2 rounded-full font-medium select-none ${className}`

  if (submit || (onClick && !href)) {
    return (
      <button type={submit ? 'submit' : 'button'} onClick={onClick} className={cls} style={EASE}>
        {content}
      </button>
    )
  }

  if (!external) {
    return (
      <Link to={href ?? '/'} onClick={onClick} className={cls} style={EASE}>
        {content}
      </Link>
    )
  }

  return (
    <a href={href ?? '#'} onClick={onClick} target="_blank" rel="noopener" className={cls} style={EASE}>
      {content}
    </a>
  )
}

export function SectionBadge({ step, label }: { step: number; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6 sm:mb-8">
      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white flex items-center justify-center text-[11px] sm:text-xs font-semibold flex-shrink-0">
        {step}
      </div>
      <span className="text-xs sm:text-sm font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-700">
        {label}
      </span>
    </div>
  )
}
