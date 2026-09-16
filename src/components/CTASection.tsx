import { RollBtn } from './ui'
import { useModal } from '../context/ModalContext'

export default function CTASection() {
  const { openContactModal } = useModal()
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{
        background:
          'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.35), transparent 42%), ' +
          'radial-gradient(circle at 88% 82%, rgba(236,72,153,0.5), transparent 45%), ' +
          'linear-gradient(140deg, #22D3EE 0%, #4F46E5 35%, #7C3AED 60%, #6D28D9 80%, #4C1D95 100%)',
      }}
    >
      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col items-center text-center gap-8">
        <h2
          className="font-medium text-white leading-[1.08] tracking-[-0.03em] max-w-2xl"
          style={{ fontSize: 'clamp(1.75rem, 6vw, 3.4rem)' }}
        >
          Tu próximo paso digital empieza aquí.
        </h2>
        <RollBtn
          onClick={openContactModal}
          className="bg-white hover:bg-gray-100 text-gray-900 text-sm pl-5 sm:pl-6 pr-2 py-2"
          arrowBg="bg-[#7C3AED]"
          arrowColor="text-white"
        >
          Agendar una llamada
        </RollBtn>
      </div>
    </section>
  )
}
