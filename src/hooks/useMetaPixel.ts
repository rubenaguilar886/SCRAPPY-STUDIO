import { useEffect } from 'react'

/**
 * Loads the Meta Pixel only if VITE_META_PIXEL_ID is set (Vercel env var) —
 * no-ops otherwise, so the site stays clean until the real ID is plugged in.
 */
export function useMetaPixel() {
  useEffect(() => {
    const pixelId = import.meta.env.VITE_META_PIXEL_ID
    if (!pixelId) return
    if (window.fbq) return

    const fbq: any = function (...args: unknown[]) {
      fbq.callMethod ? fbq.callMethod(...args) : fbq.queue.push(args)
    }
    fbq.push = fbq
    fbq.loaded = true
    fbq.version = '2.0'
    fbq.queue = []
    window.fbq = fbq
    window._fbq = fbq

    const script = document.createElement('script')
    script.async = true
    script.src = 'https://connect.facebook.net/en_US/fbevents.js'
    document.head.appendChild(script)

    fbq('init', pixelId)
    fbq('track', 'PageView')
  }, [])
}

declare global {
  interface Window {
    fbq?: any
    _fbq?: any
  }
}
