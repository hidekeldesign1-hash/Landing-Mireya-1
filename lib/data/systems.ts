export type SystemItem = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export const systems: SystemItem[] = [
  {
    id: "intestino-piel",
    name: "Sistema Intestino–Piel",
    description:
      "Apoya la microbiota y la barrera intestinal como base del equilibrio cutáneo.",
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=400&fit=crop",
  },
  {
    id: "estres-piel",
    name: "Sistema Estrés–Piel",
    description:
      "Acompaña el eje nervioso y la respuesta inflamatoria vinculada al estrés.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=400&fit=crop",
  },
  {
    id: "higado-piel",
    name: "Sistema Hígado–Piel",
    description:
      "Favorece los procesos de depuración y claridad desde una visión integral.",
    image:
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=400&h=400&fit=crop",
  },
  {
    id: "inflamacion-piel",
    name: "Sistema Inflamación–Piel",
    description:
      "Modula la inflamación de bajo grado que se expresa en el rostro.",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=400&fit=crop",
  },
  {
    id: "hormonal-piel",
    name: "Sistema Hormonal/Metabólico–Piel",
    description:
      "Aborda desequilibrios hormonales y metabólicos que impactan la piel.",
    image:
      "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&h=400&fit=crop",
  },
  {
    id: "integral",
    name: "Sistema Integral",
    description:
      "Una visión completa cuando varios ejes influyen al mismo tiempo.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop",
  },
];
