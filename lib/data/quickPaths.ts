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
    id: "primera-visita",
    title: "Es su primera visita",
    description: "Quiero llevar a mi hijo o hija con una odontopediatra.",
    cta: "Agendar cita",
    href: wa.valoracion(),
  },
  {
    id: "golpe",
    title: "Se golpeó o le duele",
    description: "Un diente se movió, se oscureció o le molesta al comer.",
    cta: "Agendar cita",
    href: wa.molestia(),
  },
  {
    id: "leche",
    title: "Quiero revisar sus dientes de leche",
    description: "Caries, cambio de dientes o cómo está cerrando la mordida.",
    cta: "Agendar cita",
    href: wa.estetica(),
  },
  {
    id: "prevencion",
    title: "Quiero un control de prevención",
    description: "Limpieza, flúor y seguimiento según su edad.",
    cta: "Agendar cita",
    href: wa.prevencion(),
  },
];
