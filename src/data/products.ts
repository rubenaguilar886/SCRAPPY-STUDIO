/**
 * Catálogo real de Scrappy Studio — solo 2 productos, a propósito:
 * tienda online es la oferta principal (es lo único con caso real probado,
 * Mono Experience), landing page queda como punto de entrada más simple/barato.
 * Se sacaron las variantes con CRM (sin caso real que las respalde todavía).
 */
export interface Product {
  slug: string
  name: string
  tagline: string
  priceLabel: string
  features: string[]
  ctaLabel: string
  deliveryDays: string
  revisionRounds: string
  featured?: boolean
  popular?: boolean
}

export const products: Product[] = [
  {
    slug: 'landing-page',
    name: 'Landing Page',
    tagline: 'Todo el tráfico de tus anuncios, directo a tu WhatsApp.',
    priceLabel: 'S/750',
    features: [
      'Diseño a medida',
      'Responsive (se ve bien en celular y compu)',
      'Inicio, servicios, galería, testimonios, FAQ y contacto',
      'Botón directo a WhatsApp',
      'Contacto directo a tu perfil de Instagram y TikTok',
      'Hosting y dominio a tu nombre (tú los pagas, nosotros los instalamos)',
      'El proyecto es tuyo — te compartimos los archivos si lo quieres',
      '1 sesión de ajustes incluida',
    ],
    ctaLabel: 'Quiero mi landing page',
    deliveryDays: '10 días',
    revisionRounds: '1 sesión de ajustes',
    featured: true,
  },
  {
    slug: 'tienda-online',
    name: 'Tienda Online',
    tagline: 'No es solo una web: es tu canal de venta. Recibe pedidos y automatiza.',
    priceLabel: 'S/2,800',
    features: [
      'Catálogo de hasta 10 productos y sus variantes',
      'Carrito de compras y checkout con pasarela de pago integrada',
      'Píxeles y analíticas instalados',
      'Páginas legales incluidas (políticas, términos, libro de reclamaciones)',
      'Base de datos propia (no plantillas)',
      'Hosting y dominio a tu nombre (tú los pagas, nosotros los instalamos)',
      'El proyecto es tuyo — te compartimos los archivos si lo quieres',
      '4 sesiones de ajustes incluidas',
    ],
    ctaLabel: 'Quiero vender online',
    deliveryDays: '4 semanas',
    revisionRounds: '4 sesiones de ajustes',
    featured: true,
    popular: true,
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}
