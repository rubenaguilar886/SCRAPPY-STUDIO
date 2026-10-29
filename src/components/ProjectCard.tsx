import { useEffect, useRef, useState } from 'react'
import { Link } from 'lucide-react'
import type { Project } from '../data/projects'

/** Clip grabado del sitio, en loop y sin sonido. Descarga cuando falta poco para verlo y solo reproduce mientras está a la vista. */
function VideoPreview({ src, poster }: { src: string; poster?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [near, setNear] = useState(false)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setNear(true)
        if (entry.isIntersecting) el.play().catch(() => {})
        else el.pause()
      },
      { rootMargin: '600px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <video
      ref={videoRef}
      src={near ? src : undefined}
      poster={poster}
      muted
      loop
      playsInline
      autoPlay
      preload="none"
      aria-hidden="true"
      tabIndex={-1}
      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      style={{ objectPosition: 'top' }}
    />
  )
}

export default function ProjectCard({ project }: { project: Project }) {
  const { title, description, tag, demoPath, image, dark, video } = project
  const btnLabel = dark ? 'Ver demo' : 'Ver proyecto'
  const bgCard = dark ? 'bg-[#1a1d2e]' : 'bg-[#f0ede8]'

  return (
    <div>
      <a
        href={demoPath}
        target="_blank"
        rel="noopener"
        className={`relative block rounded-2xl overflow-hidden group cursor-pointer transition-[transform,box-shadow] duration-500 ease-out motion-reduce:transition-none hover:-translate-y-2 hover:shadow-[0_22px_50px_-12px_rgba(124,58,237,0.35)] ${bgCard}`}
        style={{ aspectRatio: image ? '16/9' : dark ? '329/246' : '1/1' }}
      >
        {image ? (
          <>
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: 'top' }}
              loading="lazy"
            />
            {video && <VideoPreview src={video} poster={image} />}
          </>
        ) : (
          <div className="absolute inset-0 overflow-hidden">
            <iframe
              src={demoPath}
              className="absolute top-0 left-0 border-none pointer-events-none"
              style={{
                width: '1280px',
                height: dark ? '960px' : '1280px',
                transform: 'scale(0.42)',
                transformOrigin: 'top left',
              }}
              loading="lazy"
              scrolling="no"
              tabIndex={-1}
              aria-hidden="true"
            />
          </div>
        )}

        <div className="absolute bottom-4 left-4">
          <div
            className={`relative flex items-center overflow-hidden rounded-full transition-all duration-300 ease-in-out ${
              dark ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'
            }`}
            style={{ height: '2.25rem', width: '2.25rem' }}
            onMouseEnter={e => {
              ;(e.currentTarget as HTMLElement).style.width = dark ? '148px' : '168px'
            }}
            onMouseLeave={e => {
              ;(e.currentTarget as HTMLElement).style.width = '2.25rem'
            }}
          >
            <span
              className={`absolute left-3 text-xs font-medium whitespace-nowrap transition-opacity duration-200 delay-100 opacity-0 group-hover:opacity-100 ${
                dark ? 'text-gray-900' : 'text-white'
              }`}
            >
              {btnLabel}
            </span>
            <span className="absolute right-2 flex-shrink-0">
              <Link
                size={13}
                className={`transition-transform duration-300 -rotate-45 group-hover:rotate-0 ${dark ? 'text-gray-900' : 'text-white'}`}
                style={{ transitionTimingFunction: 'cubic-bezier(0.25,0.1,0.25,1)' }}
              />
            </span>
          </div>
        </div>
      </a>

      <div className="flex items-center gap-2 mt-4">
        <span className="text-xs sm:text-sm font-semibold text-gray-900">{title}</span>
        <span className="text-[10px] font-medium text-gray-500 border border-gray-200 rounded-full px-2 py-0.5">{tag}</span>
      </div>
      <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">{description}</p>
    </div>
  )
}
