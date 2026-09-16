const steps = [
  { number: '01', title: 'Entender', description: 'Tu negocio y sus procesos.' },
  { number: '02', title: 'Diseñar', description: 'La solución que realmente necesitas.' },
  { number: '03', title: 'Construir', description: 'Tu landing page o tienda online, lista para vender.' },
  { number: '04', title: 'Mejorar', description: 'Medimos, aprendemos y evolucionamos.' },
]

export default function ProcesoSection() {
  return (
    <section className="bg-white pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          <h2
            className="font-medium text-gray-900 leading-[1.08] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(1.75rem, 6vw, 3.4rem)' }}
          >
            No empezamos por el software.
          </h2>
          <h2
            className="font-medium text-[#A78BFA] leading-[1.08] tracking-[-0.03em] mb-6"
            style={{ fontSize: 'clamp(1.75rem, 6vw, 3.4rem)' }}
          >
            Empezamos por tu negocio.
          </h2>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
            Antes de construir, entendemos tu negocio, a quién le vendes y qué necesitas para captar más clientes.
            Con eso definimos si te conviene una landing page o una tienda online, y la diseñamos a tu medida.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-6">
          {steps.map(step => (
            <div
              key={step.number}
              className="border border-gray-200 rounded-xl p-4 text-center sm:border-0 sm:border-t-2 sm:border-gray-200 sm:rounded-none sm:p-0 sm:pt-5 sm:text-left"
            >
              <span className="text-sm font-semibold text-[#A78BFA]">{step.number}</span>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-2 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
