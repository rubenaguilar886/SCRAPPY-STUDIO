import { useState, type FormEvent } from 'react'
import ModalShell from './ModalShell'
import { RollBtn } from './ui'
import { waLink } from '../lib/whatsapp'
import { getProductBySlug, type Product } from '../data/products'
import { useModal } from '../context/ModalContext'

function ProductInquiryForm({ product, onSubmitted }: { product: Product; onSubmitted: () => void }) {
  const [name, setName] = useState('')
  const [business, setBusiness] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const lines = [
      `Hola, ${product.ctaLabel.toLowerCase()}.`,
      `Soy ${name || '(sin nombre)'}.`,
      business ? `Mi negocio: ${business}.` : null,
      phone ? `Mi número de contacto: ${phone}.` : null,
    ].filter(Boolean)
    window.open(waLink(lines.join(' ')), '_blank', 'noopener')
    onSubmitted()
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-gray-900" htmlFor="pi-name">
          Nombre
        </label>
        <input
          id="pi-name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gray-900 bg-white"
          placeholder="María Pérez"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-gray-900" htmlFor="pi-business">
          Nombre de tu negocio
        </label>
        <input
          id="pi-business"
          value={business}
          onChange={e => setBusiness(e.target.value)}
          className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gray-900 bg-white"
          placeholder="Ej: Salón de belleza"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-gray-900" htmlFor="pi-phone">
          Número de contacto
        </label>
        <input
          id="pi-phone"
          type="tel"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gray-900 bg-white"
          placeholder="987 654 321"
        />
      </div>
      <RollBtn submit className="bg-black hover:bg-gray-900 text-white text-sm pl-5 pr-2 py-2.5 self-start">
        Enviar
      </RollBtn>
      <p className="text-xs text-gray-400">Al enviar se abrirá WhatsApp con tu mensaje ya redactado.</p>
    </form>
  )
}

export default function ProductInquiryModal() {
  const { productSlug, closeProductModal } = useModal()
  if (!productSlug) return null

  const product = getProductBySlug(productSlug)
  if (!product) return null

  return (
    <ModalShell onClose={closeProductModal}>
      <h2 className="text-xl font-bold text-gray-900 mb-2">{product.ctaLabel}</h2>
      <p className="text-sm text-gray-500 leading-relaxed mb-6">
        Déjanos tus datos y te escribimos por WhatsApp para coordinar los siguientes pasos.
      </p>
      <ProductInquiryForm key={product.slug} product={product} onSubmitted={closeProductModal} />
    </ModalShell>
  )
}
