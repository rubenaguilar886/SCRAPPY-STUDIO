import { MessageCircle } from 'lucide-react'
import PageShell, { PageHeader } from '../components/PageShell'
import ContactForm from '../components/ContactForm'
import { WHATSAPP_NUMBER, waLink } from '../lib/whatsapp'

export default function Contacto() {
  return (
    <PageShell>
      <PageHeader title="Contacto" />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Información</h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-sm">
              ¿Tienes alguna pregunta? Escríbenos por WhatsApp — todo pasa por ahí, sin formularios que se pierden en
              un correo.
            </p>

            <p className="text-sm font-semibold text-gray-900 mb-1">Teléfono:</p>
            <a
              href={waLink('Hola, quiero cotizar una página web')}
              target="_blank"
              rel="noopener"
              className="text-sm text-gray-500 hover:text-[#A78BFA] transition-colors underline"
            >
              +{WHATSAPP_NUMBER.replace(/(\d{2})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4')}
            </a>

            <p className="text-sm font-semibold text-gray-900 mt-5 mb-1">Ubicación:</p>
            <p className="text-sm text-gray-500">Lima, Perú</p>

            <p className="text-sm font-semibold text-gray-900 mt-5 mb-1">Tiempo de respuesta:</p>
            <p className="text-sm text-gray-500">Menos de 24 horas</p>

            <a
              href={waLink('Hola, quiero cotizar una página web')}
              target="_blank"
              rel="noopener"
              className="mt-6 w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-900 hover:text-gray-900 transition-colors"
              aria-label="Escríbenos por WhatsApp"
            >
              <MessageCircle size={16} />
            </a>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Escríbenos</h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Cuéntanos sobre tu negocio y te respondemos por WhatsApp con una propuesta.
            </p>

            <ContactForm />
          </div>
        </div>
      </div>
    </PageShell>
  )
}
