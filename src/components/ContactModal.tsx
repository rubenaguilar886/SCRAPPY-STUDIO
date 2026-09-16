import ModalShell from './ModalShell'
import ContactForm from './ContactForm'
import { useModal } from '../context/ModalContext'

export default function ContactModal() {
  const { contactOpen, closeContactModal } = useModal()
  if (!contactOpen) return null

  return (
    <ModalShell onClose={closeContactModal}>
      <h2 className="text-xl font-bold text-gray-900 mb-2">Agendemos una llamada</h2>
      <p className="text-sm text-gray-500 leading-relaxed mb-6">
        Cuéntanos sobre tu negocio y te respondemos por WhatsApp para coordinar.
      </p>
      <ContactForm onSubmitted={closeContactModal} />
    </ModalShell>
  )
}
