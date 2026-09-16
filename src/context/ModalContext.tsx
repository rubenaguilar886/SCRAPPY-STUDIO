import { createContext, useContext, useState, type ReactNode } from 'react'

interface ModalContextValue {
  contactOpen: boolean
  openContactModal: () => void
  closeContactModal: () => void
  productSlug: string | null
  openProductModal: (slug: string) => void
  closeProductModal: () => void
}

const ModalContext = createContext<ModalContextValue | null>(null)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [contactOpen, setContactOpen] = useState(false)
  const [productSlug, setProductSlug] = useState<string | null>(null)

  return (
    <ModalContext.Provider
      value={{
        contactOpen,
        openContactModal: () => setContactOpen(true),
        closeContactModal: () => setContactOpen(false),
        productSlug,
        openProductModal: slug => setProductSlug(slug),
        closeProductModal: () => setProductSlug(null),
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const ctx = useContext(ModalContext)
  if (!ctx) throw new Error('useModal must be used within ModalProvider')
  return ctx
}
