import { Check } from 'lucide-react'
import { RollBtn } from './ui'
import { products } from '../data/products'
import { useModal } from '../context/ModalContext'

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88zM20.52 3.45A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L0 24l6.34-1.66a11.88 11.88 0 0 0 5.71 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.43-8.45z" />
    </svg>
  )
}

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
              className={`relative flex flex-col bg-white rounded-2xl transition-[transform,box-shadow,border-color] duration-500 ease-out motion-reduce:transition-none ${
                product.popular ? 'order-1 sm:order-2' : 'order-2 sm:order-1'
              } ${
                product.popular
                  ? 'p-7 sm:p-8 border-2 border-[#7C3AED] shadow-[0_16px_40px_rgba(124,58,237,0.25)] lg:-translate-y-2 hover:-translate-y-1.5 lg:hover:-translate-y-4 hover:shadow-[0_28px_60px_rgba(124,58,237,0.38)]'
                  : 'p-6 sm:p-7 border border-gray-200 hover:-translate-y-2 hover:border-[#C4B5FD] hover:shadow-[0_22px_50px_-12px_rgba(124,58,237,0.28)]'
              }`}
            >
              {product.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#7C3AED] text-white text-[10px] font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                  Recomendado
                </span>
              )}

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                {product.name}
                {product.nameNote && (
                  <span className="ml-1.5 text-xs sm:text-sm font-medium text-gray-500">({product.nameNote})</span>
                )}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5 min-h-[2.5em]">{product.tagline}</p>

              <p
                className={`font-bold text-gray-900 tracking-tight mb-1 ${product.popular ? 'text-4xl' : 'text-3xl'}`}
              >
                {product.priceLabel}
                <sup className="text-xs font-medium text-[#7C3AED] ml-0.5">*</sup>
              </p>
              <p className="text-xs text-[#7C3AED] mb-4">*Precio incluye IGV</p>
              <div className="mb-6">
                <span className="inline-block bg-gray-100 text-gray-800 text-xs font-semibold px-3.5 py-1.5 rounded-full">
                  Entrega en {product.deliveryDays}
                </span>
              </div>

              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {product.features.map(f => (
                  <li key={f} className="text-sm text-gray-600 leading-snug flex items-start gap-2">
                    {f.startsWith('Botón directo a WhatsApp') ? (
                      <WhatsAppIcon className="flex-shrink-0 mt-0.5 w-[15px] h-[15px] text-[#25D366]" />
                    ) : (
                      <Check
                        size={15}
                        className={`flex-shrink-0 mt-0.5 ${product.popular ? 'text-[#7C3AED]' : 'text-[#A78BFA]'}`}
                      />
                    )}
                    <div>
                      {f}
                      {product.brandLogos && f.startsWith('Instalación de pasarela') && (
                        <div className="flex items-center gap-4 mt-2.5">
                          <img src="/logos/culqi.svg" alt="Culqi" className="h-4 w-auto" loading="lazy" />
                          <span className="text-[13px] font-bold tracking-tight text-[#0B5FD8] leading-none">niubiz</span>
                          <span className="bg-[#0E1B3D] rounded-md px-2 py-1 flex items-center"><img src="/logos/izipay.png" alt="Izipay" className="h-3.5 w-auto" loading="lazy" /></span>
                        </div>
                      )}
                      {product.brandLogos && f.startsWith('Píxeles y analíticas') && (
                        <div className="flex items-center gap-4 mt-2.5">
                          <img src="/logos/meta.svg" alt="Meta" className="h-4 w-auto" loading="lazy" />
                          <img src="/logos/tiktok.svg" alt="TikTok" className="h-4 w-auto" loading="lazy" />
                        </div>
                      )}
                    </div>
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
