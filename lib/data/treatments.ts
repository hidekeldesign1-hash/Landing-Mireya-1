import { categoryImages, generatedImages } from "@/lib/data/placeholders";

export type Treatment = {
  id: string;
  name: string;
  description: string;
  focus: string;
  image: string;
};

/** Placeholders generales — sustituir cuando se confirme el catálogo real */
export const treatments: Treatment[] = [
  {
    id: "limpieza",
    name: "Limpieza y prevención",
    description:
      "Cuidado periódico para mantener dientes y encías saludables.",
    focus: "Prevención · Higiene · Control",
    image: categoryImages[0],
  },
  {
    id: "estetica",
    name: "Estética dental",
    description:
      "Opciones enfocadas en mejorar la apariencia de tu sonrisa.",
    focus: "Estética · Armonía · Confianza",
    image: categoryImages[1],
  },
  {
    id: "restauracion",
    name: "Restauración",
    description:
      "Atención para recuperar función, salud y estética dental.",
    focus: "Función · Salud · Estética",
    image: categoryImages[2],
  },
  {
    id: "ortodoncia",
    name: "Ortodoncia",
    description:
      "Opciones para mejorar alineación y función dental.",
    focus: "Alineación · Función · Balance",
    image: categoryImages[3],
  },
  {
    id: "endodoncia",
    name: "Endodoncia",
    description:
      "Tratamientos enfocados en conservar piezas dentales cuando requieren atención interna.",
    focus: "Conservación · Salud · Cuidado",
    image: categoryImages[4],
  },
  {
    id: "implantologia",
    name: "Implantología",
    description:
      "Opciones para sustituir piezas dentales ausentes.",
    focus: "Reemplazo · Función · Estética",
    image: categoryImages[5],
  },
  {
    id: "odontopediatria",
    name: "Odontopediatría",
    description: "Atención dental enfocada en niños.",
    focus: "Infantil · Prevención · Cuidado",
    image: categoryImages[6],
  },
  {
    id: "valoracion",
    name: "Valoración",
    description:
      "El primer paso para conocer qué necesita tu sonrisa.",
    focus: "Diagnóstico · Claridad · Primer paso",
    image: generatedImages.dental.valoracion,
  },
];
