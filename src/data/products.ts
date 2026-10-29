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
  /** Texto chico entre paréntesis al lado del nombre. */
  nameNote?: string
  /** Muestra logos de pasarelas de pago y de Meta/TikTok bajo los puntos correspondientes. */
  brandLogos?: boolean
}

export const products: Product[] = [
  {
    slug: 'landing-page',
    name: 'Landing Page',
    tagline: 'Todo el tráfico de tus anuncios, directo a tu WhatsApp.',
    priceLabel: 'S/800',
    features: [
      'Una sola página, diseño a medida',
      'Responsive (se ve bien en celular y compu)',
      'Inicio, servicios, galería, testimonios, FAQ y contacto',
      'Botón directo a WhatsApp',
      'Contacto directo a tu perfil de Instagram y TikTok',
      'Instalamos y configuramos tu dominio y hosting, a tu nombre',
      'El proyecto es tuyo — te compartimos los archivos',
      '1 sesión de ajustes incluida y soporte los primeros 30 días tras publicar',
      'Emitimos boleta o factura',
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
    priceLabel: 'S/2,600',
    features: [
      'Catálogo de hasta 10 productos y sus variantes (¿más? lo cotizamos)',
      'Carrito de compras y checkout',
      'Píxeles y analíticas instalados',
      'Páginas legales incluidas (políticas, términos, libro de reclamaciones)',
      'Instalación de pasarela de pago',
      'Instalamos y configuramos tu dominio y hosting, a tu nombre',
      'El proyecto es tuyo — te compartimos los archivos',
      '4 sesiones de ajustes incluidas y soporte los primeros 30 días tras publicar',
      'Emitimos boleta o factura',
    ],
    ctaLabel: 'Quiero vender online',
    deliveryDays: '4 semanas',
    revisionRounds: '4 sesiones de ajustes',
    featured: true,
    popular: true,
    nameNote: 'Ecommerce',
    brandLogos: true,
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}
