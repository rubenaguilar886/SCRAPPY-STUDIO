import { useState, type FormEvent } from 'react'
import { RollBtn } from './ui'
import { waLink } from '../lib/whatsapp'
import { products } from '../data/products'

export default function ContactForm({ onSubmitted }: { onSubmitted?: () => void }) {
  const [name, setName] = useState('')
  const [business, setBusiness] = useState('')
  const [product, setProduct] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const lines = [
      `Hola, soy ${name || '(sin nombre)'}.`,
      business ? `Mi negocio: ${business}.` : null,
      product ? `Me interesa: ${product}.` : null,
      phone ? `Mi número de contacto: ${phone}.` : null,
      message ? message : 'Quisiera cotizar una página web.',
    ].filter(Boolean)
    window.open(waLink(lines.join(' ')), '_blank', 'noopener')
    onSubmitted?.()
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-900" htmlFor="name">
            Nombre
          </label>
          <input
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gray-900 bg-white"
            placeholder="María Pérez"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-900" htmlFor="business">
            Nombre de tu negocio
          </label>
          <input
            id="business"
            value={business}
            onChange={e => setBusiness(e.target.value)}
            className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gray-900 bg-white"
            placeholder="Ej: Salón de belleza"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-900" htmlFor="product">
            Producto que te interesa
          </label>
          <select
            id="product"
            value={product}
            onChange={e => setProduct(e.target.value)}
            className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gray-900 bg-white"
          >
            <option value="">Aún no estoy seguro</option>
            {products.map(p => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-900" htmlFor="phone">
            Número de contacto
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gray-900 bg-white"
            placeholder="987 654 321"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-gray-900" htmlFor="message">
          Mensaje
        </label>
        <textarea
          id="message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          rows={5}
          className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gray-900 bg-white resize-none"
          placeholder="Ej: quiero una web con catálogo de productos y carrito"
        />
      </div>

      <RollBtn submit className="bg-black hover:bg-gray-900 text-white text-sm pl-5 pr-2 py-2.5 self-start">
        Enviar mensaje
      </RollBtn>
      <p className="text-xs text-gray-400">
        Al enviar se abrirá WhatsApp con tu mensaje ya redactado — solo confirmas y lo mandas.
      </p>
    </form>
  )
}
