export interface Project {
  slug: string
  title: string
  categorySlug: string
  description: string
  tag: string
  demoPath: string
  /** Imagen estática de la tarjeta (también sirve de poster del video mientras carga). */
  image?: string
  dark?: boolean
  /** Clip del sitio (mp4, sin sonido) que se reproduce en loop sobre la imagen, que queda de poster. */
  video?: string
}

/**
 * Solo proyectos reales entregados — nada de demos/mockups.
 * Pendiente: agregar el CRM cuando el usuario mande las capturas.
 */
export const projects: Project[] = [
  {
    slug: 'mono-experience',
    title: 'Mono Experience',
    categorySlug: 'ecommerce',
    description: 'Tienda online real de ropa premium para hombre — catálogo completo, checkout y pasarela de pago integrada.',
    tag: 'E-commerce · Lima',
    demoPath: 'https://monoexperience.com.pe',
    image: '/proyectos/mono-experience-poster.jpg',
    video: '/proyectos/mono-experience-preview.mp4',
  },
  {
    slug: 'bocao',
    title: 'Bocao',
    categorySlug: 'ecommerce',
    description: 'Tienda online de arepas y pan de bono colombianos congelados — catálogo, packs, carrito y pago seguro con Culqi.',
    tag: 'E-commerce · Lima',
    demoPath: 'https://bocao.com.pe',
    image: '/proyectos/bocao-poster.jpg',
    video: '/proyectos/bocao-preview.mp4',
  },
]

export function getProjectsByCategory(categorySlug: string | null): Project[] {
  if (!categorySlug) return projects
  return projects.filter(p => p.categorySlug === categorySlug)
}
