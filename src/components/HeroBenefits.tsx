import { HeartHandshake, Clock, KeyRound, CreditCard } from 'lucide-react'

const items = [
  { icon: HeartHandshake, title: 'Acompañamiento personalizado', text: 'Te atendemos directo por WhatsApp, respuesta en menos de 24 horas' },
  { icon: Clock, title: 'Entrega en 10 días', text: 'Landing en 10 días · Tienda online en 4 semanas' },
  { icon: KeyRound, title: 'Sin mensualidad', text: 'Pago único. El proyecto es tuyo' },
  { icon: CreditCard, title: '30% adelanto, 70% al publicar', text: 'Pagas el resto cuando tu web ya está online' },
]

export default function HeroBenefits() {
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-9">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex flex-col items-center text-center gap-2">
            <Icon size={34} strokeWidth={1.5} className="text-gray-900 mb-1" />
            <h3 className="text-sm sm:text-base font-semibold text-gray-900 leading-snug">{title}</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-snug max-w-[16rem]">{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

