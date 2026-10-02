import { clinic } from "@/lib/data/bellasmile";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const wa = {
  general: () =>
    buildWhatsAppUrl(
      "Hola Ana Karen, me gustaría agendar una cita de odontopediatría en San José Insurgentes.",
    ),
  hero: () =>
    buildWhatsAppUrl(
      "Hola Ana Karen, vi su sitio y me gustaría agendar una cita para mi hijo o hija.",
    ),
  valoracion: () =>
    buildWhatsAppUrl(
      "Hola Ana Karen, me gustaría agendar la primera visita de odontopediatría para mi hijo o hija.",
    ),
  estetica: () =>
    buildWhatsAppUrl(
      "Hola Ana Karen, me gustaría revisar los dientes de leche de mi hijo o hija.",
    ),
  molestia: () =>
    buildWhatsAppUrl(
      "Hola Ana Karen, un niño se golpeó un diente o tiene una molestia. Me gustaría agendar una revisión.",
    ),
  prevencion: () =>
    buildWhatsAppUrl(
      "Hola Ana Karen, me gustaría agendar un control de prevención y limpieza de odontopediatría.",
    ),
  equipo: () =>
    buildWhatsAppUrl(
      "Hola Ana Karen, me gustaría agendar una cita de odontopediatría.",
    ),
  categoria: (name: string) =>
    buildWhatsAppUrl(
      `Hola Ana Karen, me interesa información sobre ${name} para un niño. Me gustaría agendar una cita.`,
    ),
  tratamiento: (name: string) =>
    buildWhatsAppUrl(
      `Hola Ana Karen, me interesa información sobre ${name} en odontopediatría.`,
    ),
} as const;
