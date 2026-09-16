import { useEffect } from 'react'

/** Sets the document title for a route; restores the default on unmount. */
export function usePageTitle(title: string) {
  useEffect(() => {
    const previous = document.title
    document.title = `${title} — Scrappy Studio`
    return () => {
      document.title = previous
    }
  }, [title])
}
