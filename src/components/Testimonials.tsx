export default function Testimonials() {
  return (
    <section className="bg-white pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <h2
          className="font-medium text-gray-900 leading-[1.08] tracking-[-0.03em] mb-10 sm:mb-14 text-center"
          style={{ fontSize: 'clamp(1.75rem, 6vw, 3.4rem)' }}
        >
          Lo que dicen nuestros clientes
        </h2>

        <div className="max-w-2xl mx-auto bg-[#F5F5F5] rounded-2xl p-8 sm:p-10">
          <p className="text-base sm:text-lg leading-relaxed text-gray-800 mb-6">
            “Antes de ofrecerle esto a otros negocios, lo probé en el mío. Mono Experience vende todos los días con
            esta misma tienda, el mismo checkout y la misma pasarela de pago. Por eso puedo garantizar que no es
            solo una web bonita — es un canal de venta real.”
          </p>
          <div>
            <p className="text-sm font-semibold text-gray-900">Rubén Aguilar</p>
            <p className="text-xs text-gray-500">Fundador, Mono Experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}
