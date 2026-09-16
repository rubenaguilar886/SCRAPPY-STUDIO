/**
 * Testimonios placeholder — reemplazar con reseñas reales de clientes
 * antes de publicar el sitio. Sin nombres de negocio específicos a propósito,
 * para no atribuir una cita a un cliente real sin su reseña de verdad.
 */
export interface Testimonial {
  quote: string
  author: string
  location: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'En menos de dos semanas tuvimos una web que se ve mucho más profesional que antes. Los clientes nuevos ya nos encuentran solos.',
    author: 'Dueña de salón de belleza',
    location: 'Miraflores, Lima',
  },
  {
    quote:
      'Lo que más valoro es que no tuvimos que preocuparnos por nada técnico — solo dimos el contenido y ellos armaron todo.',
    author: 'Encargado de estudio de tatuajes',
    location: 'Lima',
  },
  {
    quote:
      'El botón de WhatsApp cambió todo: ahora las citas llegan directo al celular, sin intermediarios ni citas perdidas.',
    author: 'Especialista en estética',
    location: 'Lima',
  },
]
