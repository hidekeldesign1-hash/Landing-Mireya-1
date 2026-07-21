import { links } from "./links";

export type PathStep = {
  label: string;
};

export type JourneyPath = {
  id: string;
  title: string;
  description: string;
  steps: PathStep[];
  cta: string;
  href: string;
  accent: "green" | "lavender" | "gold";
};

export const paths: JourneyPath[] = [
  {
    id: "camino-1",
    title: "Quiero empezar hoy",
    description:
      "Elige productos sugeridos y comienza tu cuidado desde ahora.",
    steps: [
      { label: "Productos sugeridos" },
      { label: "Shopify" },
      { label: "Compra" },
    ],
    cta: "Quiero empezar hoy",
    href: links.shopify,
    accent: "green",
  },
  {
    id: "camino-2",
    title: "Quiero entenderlo",
    description:
      "Haz la Evaluación Lenguaje de la Piel™ y recibe protocolos.",
    steps: [
      { label: "Evaluación" },
      { label: "Resultado" },
      { label: "Protocolos" },
    ],
    cta: "Realizar evaluación",
    href: links.restore360,
    accent: "lavender",
  },
  {
    id: "camino-3",
    title: "Quiero Restore 360",
    description:
      "Descubre desde adentro qué influye en tu piel y recibe productos.",
    steps: [
      { label: "Quiz Restore 360" },
      { label: "Resultado" },
      { label: "Productos sugeridos" },
    ],
    cta: "Hacer Restore 360",
    href: links.reset360,
    accent: "green",
  },
  {
    id: "camino-4",
    title: "Quiero una consulta",
    description:
      "Agenda con Mireya Díaz y recibe un plan individualizado.",
    steps: [
      { label: "Agenda consulta" },
      { label: "Consulta Mireya" },
      { label: "Plan personalizado" },
    ],
    cta: "Agendar consulta",
    href: links.consultation,
    accent: "gold",
  },
];
