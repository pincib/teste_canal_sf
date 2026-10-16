export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5521995221369";

export function whatsappUrl(message: string) {
  if (!WHATSAPP_NUMBER) return "#contato";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
