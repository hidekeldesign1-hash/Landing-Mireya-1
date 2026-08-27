import { generatedImages } from "@/lib/data/placeholders";

export type TeamArea = {
  id: string;
  title: string;
  description: string;
  image: string;
};

/** Áreas del equipo clínico — sin nombres hasta confirmar perfiles reales */
export const teamAreas: TeamArea[] = [
  {
    id: "general",
    title: "Odontología general y estética",
    description:
      "Valoración, prevención y tratamientos para el cuidado diario de tu sonrisa.",
    image: generatedImages.doctors[0],
  },
  {
    id: "ortodoncia",
    title: "Ortodoncia",
    description:
      "Alineación dental y seguimiento para mejorar función y apariencia.",
    image: generatedImages.doctors[1],
  },
  {
    id: "endodoncia",
    title: "Endodoncia",
    description: "Atención especializada cuando hay molestia o daño en la pieza dental.",
    image: generatedImages.doctors[2],
  },
  {
    id: "implantes",
    title: "Implantología y rehabilitación",
    description:
      "Opciones de rehabilitación oral cuando se requiere reemplazar o reconstruir dientes.",
    image: generatedImages.doctors[3],
  },
];
