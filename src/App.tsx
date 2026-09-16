import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Proyectos from './pages/Proyectos'
import Contacto from './pages/Contacto'
import Terminos from './pages/Terminos'
import ContactModal from './components/ContactModal'
import ProductInquiryModal from './components/ProductInquiryModal'
import { ModalProvider } from './context/ModalContext'
import { useMetaPixel } from './hooks/useMetaPixel'

/** Scrolls to top on a plain route change, or to the matching #id (below the fixed header) when the URL carries a hash. */
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      // wait a frame so the target page has rendered before we measure/scroll
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

export default function App() {
  useMetaPixel()
  return (
    <ModalProvider>
      <div className="overflow-x-hidden">
        <ScrollManager />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/terminos" element={<Terminos />} />
        </Routes>
        <ContactModal />
        <ProductInquiryModal />
      </div>
    </ModalProvider>
  )
}
