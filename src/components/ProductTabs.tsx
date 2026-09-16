import { Check } from 'lucide-react'
import { RollBtn } from './ui'
import { products } from '../data/products'
import { useModal } from '../context/ModalContext'

export default function ProductTabs() {
  const { openProductModal } = useModal()
  return (
    <section
      id="que-frena"
      className="bg-white pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-20 lg:pb-24"
      style={{ scrollMarginTop: 'var(--site-header-h, 76px)' }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="px-5 sm:px-8 lg:px-12 text-center mb-10 sm:mb-14">
          <h2
            className="font-medium text-gray-900 leading-[1.08] tracking-[-0.03em] mb-3"
            style={{ fontSize: 'clamp(1.75rem, 6vw, 3.4rem)' }}
          >
            ¿Qué necesita tu negocio?
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-md mx-auto">
            Elige cómo quieres crecer en digital, según la etapa en la que está tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 px-5 sm:px-8 lg:px-12 max-w-4xl mx-auto">
          {products.map(product => (
            <div
              key={product.slug}
              className={`relative flex flex-col bg-white rounded-2xl ${
                product.popular ? 'order-1 sm:order-2' : 'order-2 sm:order-1'
              } ${
                product.popular
                  ? 'p-7 sm:p-8 border-2 border-[#7C3AED] shadow-[0_16px_40px_rgba(124,58,237,0.25)] lg:-translate-y-2'
                  : 'p-6 sm:p-7 border border-gray-200'
              }`}
            >
              {product.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#7C3AED] text-white text-[10px] font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                  Más pedido
                </span>
              )}

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5 min-h-[2.5em]">{product.tagline}</p>

              <p
                className={`font-bold text-gray-900 tracking-tight mb-1 ${product.popular ? 'text-4xl' : 'text-3xl'}`}
              >
                {product.priceLabel}
                <sup className="text-xs font-medium text-[#A78BFA] ml-0.5">*</sup>
              </p>
              <p className="text-xs text-[#A78BFA] mb-4">*Precio incluye IGV</p>
              <div className="mb-6">
                <span className="inline-block bg-gray-100 text-gray-800 text-xs font-semibold px-3.5 py-1.5 rounded-full">
                  Entrega en {product.deliveryDays}
                </span>
              </div>

              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {product.features.map(f => (
                  <li key={f} className="text-sm text-gray-600 leading-snug flex items-start gap-2">
                    <Check
                      size={15}
                      className={`flex-shrink-0 mt-0.5 ${product.popular ? 'text-[#7C3AED]' : 'text-[#A78BFA]'}`}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <RollBtn
                onClick={() => openProductModal(product.slug)}
                className={`text-sm pl-5 pr-2 py-2 w-full justify-center ${
                  product.popular ? 'bg-[#7C3AED] hover:bg-[#6d28d9] text-white' : 'bg-gray-900 hover:bg-black text-white'
                }`}
              >
                {product.ctaLabel}
              </RollBtn>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
