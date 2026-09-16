import PageShell, { PageHeader } from '../components/PageShell'
import { RollBtn } from '../components/ui'
import { products } from '../data/products'
import { waLink } from '../lib/whatsapp'
import { usePageTitle } from '../hooks/usePageTitle'

const paymentSplits: Record<string, { adelanto: string; saldo: string }> = {
  'landing-page': { adelanto: 'S/225', saldo: 'S/525' },
  'tienda-online': { adelanto: 'S/840', saldo: 'S/1,960' },
}

interface Section {
  title: string
  body: React.ReactNode
}

const sections: Section[] = [
  {
    title: '1. Servicios que ofrecemos',
    body: (
      <>
        <p className="mb-4">Trabajamos solo con 2 paquetes, para que la elección sea simple:</p>
        <ul className="flex flex-col gap-2 list-disc pl-5">
          {products.map(p => (
            <li key={p.slug}>
              <span className="font-semibold text-gray-900">{p.name}</span> — {p.priceLabel} (precio final,
              incluye IGV), entrega en {p.deliveryDays}, {p.revisionRounds}.
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: '2. Forma de pago',
    body: (
      <>
        <p className="mb-4">
          Todos los precios publicados incluyen IGV — el monto que ves es el que pagas, sin cargos adicionales
          por ese concepto. Trabajamos con un esquema de <span className="font-semibold text-gray-900">30% de
          adelanto y 70% de saldo</span>, así:
        </p>
        <ul className="flex flex-col gap-2 list-disc pl-5">
          {products.map(p => (
            <li key={p.slug}>
              <span className="font-semibold text-gray-900">{p.name}:</span> {paymentSplits[p.slug]?.adelanto}{' '}
              (30%) de adelanto para confirmar el pedido e iniciar el proyecto, {paymentSplits[p.slug]?.saldo}{' '}
              (70%) de saldo al momento de publicarlo.
            </li>
          ))}
        </ul>
        <p className="mt-4">
          El proyecto (archivos y accesos) se entrega una vez que el saldo queda pagado en su totalidad.
        </p>
      </>
    ),
  },
  {
    title: '3. Plazos de entrega',
    body: (
      <p>
        Una vez confirmado el adelanto, esperamos que nos envíes toda la información de tu negocio (textos,
        fotos, logo, accesos si aplican) — desde que la recibimos completa empieza a contar el plazo de entrega
        (10 días para Landing Page, 4 semanas para Tienda Online). Con ese plazo armamos la primera versión
        completa del proyecto, que te mostramos antes de publicarla.
      </p>
    ),
  },
  {
    title: '4. Sesiones de ajustes',
    body: (
      <p>
        Con la primera versión ya armada, tienes sesiones de ajustes antes de publicar el proyecto (1 sesión en
        Landing Page, 4 sesiones en Tienda Online). Para aprovechar cada sesión, te pedimos juntar todos los
        cambios que quieras hacer y enviárnoslos en un solo mensaje, en vez de mandarlos uno por uno. Ajustes
        fuera de estas sesiones o del alcance original se cotizan aparte antes de hacerlos — nunca se cobra nada
        sin que lo sepas primero.
      </p>
    ),
  },
  {
    title: '5. Hosting y dominio',
    body: (
      <p>
        El hosting y el dominio quedan a tu nombre — tú los pagas directamente al proveedor, nosotros nos
        encargamos de configurarlos e instalar tu proyecto ahí sin costo adicional por ese trabajo.
      </p>
    ),
  },
  {
    title: '6. Propiedad del proyecto',
    body: (
      <p>
        El proyecto es tuyo. Una vez pagado el saldo final, te compartimos los archivos si los quieres — no te
        dejamos amarrado a nosotros para poder moverlo, editarlo o llevarlo a otro proveedor en el futuro.
      </p>
    ),
  },
  {
    title: '7. Cancelación',
    body: (
      <p>
        Si decides cancelar el proyecto después de haberlo iniciado, el adelanto no es reembolsable — cubre el
        tiempo y trabajo ya invertidos hasta ese punto.
      </p>
    ),
  },
  {
    title: '8. Soporte después de la entrega',
    body: (
      <p>
        Durante los primeros 30 días después de publicado el proyecto, tienes una sesión adicional sin costo para
        cambios de texto o foto — igual que las sesiones de ajustes, junta todos los cambios y envíalos en un solo
        mensaje. Pasado ese periodo, o para cambios de mayor alcance, lo coordinamos y cotizamos aparte.
      </p>
    ),
  },
]

export default function Terminos() {
  usePageTitle('Términos y Condiciones')
  return (
    <PageShell>
      <PageHeader
        title="Términos y Condiciones"
        subtitle="El detalle claro de cómo trabajamos, qué incluye cada plan y qué pasa en los casos importantes. Cualquier duda puntual, la resolvemos directo por WhatsApp."
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pb-16 sm:pb-24">
        <div className="max-w-3xl mx-auto flex flex-col gap-10">
          {sections.map(section => (
            <div key={section.title}>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{section.title}</h2>
              <div className="text-sm sm:text-base text-gray-600 leading-relaxed">{section.body}</div>
            </div>
          ))}

          <div className="border border-gray-200 rounded-2xl p-6 sm:p-8 bg-gray-50 text-center">
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              ¿Tienes una duda puntual que no queda clara aquí? Escríbenos directamente.
            </p>
            <RollBtn
              href={waLink('Hola, tengo una duda sobre los términos y condiciones')}
              className="bg-gray-900 text-white text-sm pl-5 pr-2 py-2"
            >
              Preguntar por WhatsApp
            </RollBtn>
          </div>
        </div>
      </div>
    </PageShell>
  )
}
