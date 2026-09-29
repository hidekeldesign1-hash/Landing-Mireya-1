import { clinic } from "@/lib/data/bellasmile";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Mensajes predefinidos según contexto del CTA */
export const wa = {
  general: () =>
    buildWhatsAppUrl(
      "Hola RM SONRISAS, me gustaría agendar una cita en su consultorio de la Colonia del Valle.",
    ),
  hero: () =>
    buildWhatsAppUrl(
      "Hola RM SONRISAS, vi su sitio web y me gustaría agendar una cita.",
    ),
  valoracion: () =>
    buildWhatsAppUrl(
      "Hola RM SONRISAS, me gustaría agendar una valoración dental.",
    ),
  estetica: () =>
    buildWhatsAppUrl(
      "Hola RM SONRISAS, me interesa conocer opciones de estética dental.",
    ),
  molestia: () =>
    buildWhatsAppUrl(
      "Hola RM SONRISAS, tengo una molestia dental y me gustaría que el doctor revise mi caso.",
    ),
  prevencion: () =>
    buildWhatsAppUrl(
      "Hola RM SONRISAS, me gustaría agendar una cita para prevención, limpieza y seguimiento dental.",
    ),
  equipo: () =>
    buildWhatsAppUrl(
      "Hola RM SONRISAS, me gustaría agendar una cita con el Dr. Ricardo Mayo o la Dra. Montserrat.",
    ),
  categoria: (name: string) =>
    buildWhatsAppUrl(
      `Hola RM SONRISAS, me interesa información sobre ${name}. Me gustaría agendar una valoración.`,
    ),
  tratamiento: (name: string) =>
    buildWhatsAppUrl(
      `Hola RM SONRISAS, me interesa información sobre el tratamiento de ${name}.`,
    ),
} as const;
