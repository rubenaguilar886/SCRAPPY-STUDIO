export const WHATSAPP_NUMBER = '51987983060'
export const CONTACT_EMAIL = 'ruben.aguilar@scrappy-studio.com'

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
