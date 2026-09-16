export interface Category {
  slug: string
  name: string
  description: string
}

export const categories: Category[] = [
  { slug: 'ecommerce', name: 'Tiendas Online', description: 'E-commerce y catálogos con checkout' },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug)
}
