import { wa } from "@/lib/data/whatsapp";

export type QuickPath = {
  id: string;
  title: string;
  description: string;
  cta: string;
  href: string;
};

export const quickPaths: QuickPath[] = [
  {
    id: "valoracion",
    title: "Quiero una valoración",
    description: "No sé exactamente qué tratamiento necesito.",
    cta: "Agendar cita",
    href: wa.valoracion(),
  },
  {
    id: "estetica",
    title: "Quiero mejorar mi sonrisa",
    description:
      "Quiero conocer opciones enfocadas en estética dental.",
    cta: "Agendar cita",
    href: wa.estetica(),
  },
  {
    id: "molestia",
    title: "Tengo una molestia",
    description: "Necesito que un profesional revise mi caso.",
    cta: "Agendar cita",
    href: wa.molestia(),
  },
  {
    id: "prevencion",
    title: "Quiero cuidar mi salud dental",
    description: "Busco prevención, limpieza y seguimiento.",
    cta: "Agendar cita",
    href: wa.prevencion(),
  },
];
