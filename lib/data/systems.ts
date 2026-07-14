export type SystemItem = {
  id: string;
  name: string;
  description: string;
  focus: string;
  image: string;
};

export const systems: SystemItem[] = [
  {
    id: "metabolic-reset",
    name: "Metabolic Reset",
    description:
      "Apoya la sensibilidad a la insulina, modula la inflamación metabólica y favorece una mejor producción de energía celular.",
    focus: "Insulina · Grasa abdominal · Energía",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop",
  },
  {
    id: "hepatic-reset",
    name: "Hepatic Reset",
    description:
      "Brinda apoyo integral a la salud hepática, favorece el metabolismo de las grasas y acompaña la depuración natural del organismo.",
    focus: "Hígado · Grasas · Depuración",
    image:
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=400&h=400&fit=crop",
  },
  {
    id: "hormonal-reset",
    name: "Hormonal Reset",
    description:
      "Acompaña el equilibrio hormonal femenino en perimenopausia y menopausia, apoyando sueño, energía y cambios metabólicos.",
    focus: "Menopausia · Sueño · Bienestar",
    image:
      "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&h=400&fit=crop",
  },
  {
    id: "metabolic-balance-sop",
    name: "Metabolic Balance / SOP",
    description:
      "Apoya el equilibrio hormonal femenino y la sensibilidad a la insulina en contextos como SOP, acné hormonal y ciclos irregulares.",
    focus: "SOP · Acné hormonal · Ciclos",
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=400&fit=crop",
  },
  {
    id: "stress-reset",
    name: "Stress Reset",
    description:
      "Apoya la respuesta al estrés, favorece un sueño reparador y mejora la recuperación física, mental y neuroendocrina.",
    focus: "Estrés · Sueño · Recuperación",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=400&fit=crop",
  },
  {
    id: "gut-balance",
    name: "Gut Balance",
    description:
      "Favorece el equilibrio digestivo y una microbiota saludable, con apoyo adaptable a estreñimiento, disbiosis o carga microbiana.",
    focus: "Microbiota · Digestión · Inflamación",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=400&fit=crop",
  },
  {
    id: "muscle-longevity",
    name: "Muscle Longevity System",
    description:
      "Apoya el desarrollo y la conservación de masa muscular, la recuperación y un cuerpo fuerte, funcional y activo a largo plazo.",
    focus: "Masa muscular · Fuerza · Longevidad",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=400&fit=crop",
  },
  {
    id: "executive-performance",
    name: "Executive Performance System",
    description:
      "Apoya la energía cerebral, la claridad mental y la recuperación para sostener concentración, enfoque y alto rendimiento cognitivo.",
    focus: "Enfoque · Claridad · Rendimiento",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop",
  },
];
