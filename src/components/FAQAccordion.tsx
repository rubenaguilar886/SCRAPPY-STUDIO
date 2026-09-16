import { useState } from 'react'
import { Plus } from 'lucide-react'
import { faq } from '../data/faq'

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 bg-white border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto">
        <h2
          className="font-medium text-gray-900 leading-[1.08] tracking-[-0.03em] mb-10 sm:mb-14 px-5 sm:px-8 lg:px-12 text-center"
          style={{ fontSize: 'clamp(1.75rem, 6vw, 3.4rem)' }}
        >
          Preguntas frecuentes
        </h2>

        <div className="px-5 sm:px-8 lg:px-12 max-w-3xl mx-auto">
          {faq.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} className="border-b border-gray-200">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-sm sm:text-base font-medium text-gray-900">{item.q}</span>
                  <Plus
                    size={18}
                    className={`flex-shrink-0 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? '200px' : '0px' }}
                >
                  <p className="text-sm text-gray-600 leading-relaxed pb-5 pr-8">{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
