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
      "Elige productos sugeridos y comienza tu cuidado desde ahora, sin esperar.",
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
    title: "Quiero entender qué me está pasando",
    description:
      "Realiza la Evaluación Lenguaje de la Piel™ y recibe sistemas sugeridos.",
    steps: [
      { label: "Evaluación" },
      { label: "Resultado" },
      { label: "Sistemas" },
      { label: "Compra o consulta" },
    ],
    cta: "Realizar evaluación",
    href: links.evaluation,
    accent: "lavender",
  },
  {
    id: "camino-3",
    title: "Quiero acompañamiento personalizado",
    description:
      "Agenda una consulta con Mireya Díaz y recibe un plan individualizado.",
    steps: [
      { label: "Agenda consulta" },
      { label: "Consulta Mireya" },
      { label: "Plan individualizado" },
    ],
    cta: "Agendar consulta",
    href: links.consultation,
    accent: "gold",
  },
];
