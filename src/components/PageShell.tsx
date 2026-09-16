import type { ReactNode } from 'react'
import Footer from './Footer'

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: '#FFFFFF', paddingTop: 'var(--site-header-h, 112px)' }}
    >
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-10 sm:pt-16 pb-10 sm:pb-14 text-center">
      <h1
        className="font-medium text-gray-900 leading-[1.05] tracking-[-0.03em] mb-4"
        style={{ fontSize: 'clamp(2rem, 7vw, 4rem)' }}
      >
        {title}
      </h1>
      <div className="mx-auto mb-5 rounded-full" style={{ width: '56px', height: '3px', background: '#A78BFA' }} />
      {subtitle && (
        <p className="text-sm sm:text-base text-[#A78BFA] max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}
