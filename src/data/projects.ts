export interface Project {
  slug: string
  title: string
  categorySlug: string
  description: string
  tag: string
  demoPath: string
  /** Static preview image (preferred over an iframe — no risk of catching a live popup mid-load). */
  image?: string
  dark?: boolean
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
    demoPath: 'https://www.monoexperience.com.pe',
    image: '/proyectos/mono-experience-home.png',
  },
]

export function getProjectsByCategory(categorySlug: string | null): Project[] {
  if (!categorySlug) return projects
  return projects.filter(p => p.categorySlug === categorySlug)
}
