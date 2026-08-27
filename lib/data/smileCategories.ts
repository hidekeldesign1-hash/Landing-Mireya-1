import { categoryImages } from "@/lib/data/placeholders";

export type SmileCategory = {
  id: string;
  name: string;
  image: string;
};

/** Placeholders visuales — sustituir cuando se confirme el catálogo real */
export const smileCategories: SmileCategory[] = [
  { id: "limpieza", name: "Limpieza", image: categoryImages[0] },
  { id: "estetica", name: "Estética", image: categoryImages[1] },
  { id: "restauracion", name: "Restauración", image: categoryImages[2] },
  { id: "ortodoncia", name: "Ortodoncia", image: categoryImages[3] },
  { id: "encias", name: "Encías", image: categoryImages[4] },
  { id: "endodoncia", name: "Endodoncia", image: categoryImages[5] },
  { id: "implantes", name: "Implantes", image: categoryImages[6] },
  { id: "prevencion", name: "Prevención", image: categoryImages[7] },
  { id: "valoracion", name: "Valoración", image: categoryImages[8] },
  { id: "infantil", name: "Infantil", image: categoryImages[9] },
];
