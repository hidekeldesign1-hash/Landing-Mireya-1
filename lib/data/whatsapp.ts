import { clinic } from "@/lib/data/bellasmile";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Mensajes predefinidos según contexto del CTA */
export const wa = {
  general: () =>
    buildWhatsAppUrl(
      "Hola BellaSmile, me gustaría agendar una cita en su clínica de Polanco.",
    ),
  hero: () =>
    buildWhatsAppUrl(
      "Hola BellaSmile, vi su sitio web y me gustaría agendar una cita.",
    ),
  valoracion: () =>
    buildWhatsAppUrl(
      "Hola BellaSmile, me gustaría agendar una valoración dental.",
    ),
  estetica: () =>
    buildWhatsAppUrl(
      "Hola BellaSmile, me interesa conocer opciones de estética dental.",
    ),
  molestia: () =>
    buildWhatsAppUrl(
      "Hola BellaSmile, tengo una molestia dental y me gustaría que un profesional revise mi caso.",
    ),
  prevencion: () =>
    buildWhatsAppUrl(
      "Hola BellaSmile, me gustaría agendar una cita para prevención, limpieza y seguimiento dental.",
    ),
  equipo: () =>
    buildWhatsAppUrl(
      "Hola BellaSmile, me gustaría agendar una cita con su equipo de especialistas.",
    ),
  categoria: (name: string) =>
    buildWhatsAppUrl(
      `Hola BellaSmile, me interesa información sobre ${name}. Me gustaría agendar una valoración.`,
    ),
  tratamiento: (name: string) =>
    buildWhatsAppUrl(
      `Hola BellaSmile, me interesa información sobre el tratamiento de ${name}.`,
    ),
} as const;
