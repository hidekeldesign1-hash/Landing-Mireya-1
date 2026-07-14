export type Symptom = {
  id: string;
  name: string;
  shortDescription: string;
  image: string;
  whatIs: string;
  emotionalImpact: string;
  superficialRisk: string;
  products: { name: string; description: string }[];
  testimonials: { name: string; quote: string; avatar: string }[];
};

const sharedTestimonials = [
  {
    name: "Laura M.",
    quote: "Por fin entendí que mi piel no era el problema.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    name: "Ana R.",
    quote: "Dejé de esconderme detrás del maquillaje.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "Sofía P.",
    quote: "Recuperé la confianza en mi propio rostro.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
  },
];

export const symptoms: Symptom[] = [
  {
    id: "acne",
    name: "Acné",
    shortDescription: "Brotes, inflamación y marcas que no terminan de irse.",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=400&fit=crop",
    whatIs:
      "El acné es una respuesta inflamatoria que puede vincularse a desequilibrios internos, estrés, microbiota o factores hormonales.",
    emotionalImpact:
      "Ver un brote nuevo puede generar vergüenza, ansiedad social y la sensación de que nada funciona.",
    superficialRisk:
      "Tratar solo la superficie puede resecar y sensibilizar sin resolver la causa que sigue enviando el mensaje.",
    products: [
      { name: "Sérum calmante", description: "Apoyo tópico para piel inflamada." },
      { name: "Apoyo sistémico", description: "Acompañamiento de adentro hacia afuera." },
    ],
    testimonials: sharedTestimonials,
  },
  {
    id: "rosacea",
    name: "Rosácea",
    shortDescription: "Enrojecimiento, calor y sensibilidad constante.",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=400&fit=crop",
    whatIs:
      "La rosácea es una condición inflamatoria vascular relacionada con barrera cutánea, sistema nervioso y factores internos.",
    emotionalImpact:
      "El enrojecimiento impredecible puede generar inseguridad y la necesidad de ocultar el rostro.",
    superficialRisk:
      "Productos agresivos o exfoliaciones intensas suelen empeorar la inflamación y la sensibilidad.",
    products: [
      { name: "Barrera reparadora", description: "Calma y protege la piel reactiva." },
      { name: "Apoyo estrés–piel", description: "Aborda el eje inflamatorio interno." },
    ],
    testimonials: sharedTestimonials,
  },
  {
    id: "melasma",
    name: "Melasma",
    shortDescription: "Manchas hormonales que persisten pese a cremas.",
    image:
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=400&fit=crop",
    whatIs:
      "El melasma es una hiperpigmentación compleja, a menudo influida por hormonas, inflamación y sol acumulado.",
    emotionalImpact:
      "Las manchas pueden hacer que sientas que tu rostro ya no te representa.",
    superficialRisk:
      "Blanqueadores agresivos pueden irritar y, al suspenderse, intensificar las manchas.",
    products: [
      { name: "Protocolo pigmentario", description: "Cuidado tópico respetuoso." },
      { name: "Apoyo hormonal", description: "Visión integral del desequilibrio." },
    ],
    testimonials: sharedTestimonials,
  },
  {
    id: "manchas",
    name: "Manchas",
    shortDescription: "Pigmentación irregular que resta uniformidad al rostro.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=400&fit=crop",
    whatIs:
      "Las manchas reflejan un desequilibrio pigmentario por sol, inflamación, edad o residuales de brotes previos.",
    emotionalImpact:
      "La falta de uniformidad puede afectar cómo te ves y cómo te presentas ante los demás.",
    superficialRisk:
      "Tratamientos intensivos sin protección pueden sensibilizar sin resultados sostenibles.",
    products: [
      { name: "Uniformidad suave", description: "Aclara con respeto a la barrera." },
      { name: "Antioxidantes", description: "Apoyo frente al estrés oxidativo." },
    ],
    testimonials: sharedTestimonials,
  },
  {
    id: "piel-sensible",
    name: "Piel Sensible",
    shortDescription: "Ardor, tirantez y reacción ante casi cualquier producto.",
    image:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
    whatIs:
      "La piel sensible refleja una barrera comprometida y una respuesta inflamatoria exagerada a estímulos cotidianos.",
    emotionalImpact:
      "Vivir con incomodidad constante genera miedo a probar rutinas y frustración al cuidado diario.",
    superficialRisk:
      "Productos “activos” o perfumados pueden debilitar aún más la barrera cutánea.",
    products: [
      { name: "Reparación de barrera", description: "Calma y sella la piel reactiva." },
      { name: "Rutina mínima", description: "Menos irritantes, más tolerancia." },
    ],
    testimonials: sharedTestimonials,
  },
  {
    id: "fotoenvejecimiento",
    name: "Fotoenvejecimiento",
    shortDescription: "Daño solar: textura, manchas y pérdida de firmeza.",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&h=400&fit=crop",
    whatIs:
      "El fotoenvejecimiento es el resultado acumulado de la exposición UV sobre colágeno, elastina y pigmentación.",
    emotionalImpact:
      "Ver el paso del sol en tu piel puede hacerte sentir que el tiempo se aceleró sin que pudieras evitarlo.",
    superficialRisk:
      "Tratamientos agresivos sin protección y sin apoyo interno sensibilizan sin resultados duraderos.",
    products: [
      { name: "Renovación suave", description: "Textura y luminosidad sin agredir." },
      { name: "Protección diaria", description: "Base indispensable del protocolo." },
    ],
    testimonials: sharedTestimonials,
  },
  {
    id: "piel-grasa",
    name: "Piel Grasa",
    shortDescription: "Brillo, poros y desequilibrio que no se controla.",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
    whatIs:
      "La piel grasa refleja un desequilibrio en la producción de sebo, a menudo ligado a hormonas o barrera alterada.",
    emotionalImpact:
      "El brillo constante puede hacerte sentir descuidada aunque inviertas tiempo en tu rutina.",
    superficialRisk:
      "Productos matificantes agresivos pueden resecar y provocar más sebo como compensación.",
    products: [
      { name: "Equilibrio seborreico", description: "Regula sin resecar." },
      { name: "Apoyo metabólico", description: "Aborda el desequilibrio interno." },
    ],
    testimonials: sharedTestimonials,
  },
  {
    id: "piel-seca",
    name: "Piel Seca",
    shortDescription: "Tirantez, descamación y falta de confort diario.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=400&fit=crop&sat=-20",
    whatIs:
      "La piel seca indica déficit de lípidos y agua en la barrera, a menudo agravado por clima, hábitos o inflamación.",
    emotionalImpact:
      "La incomodidad constante y el aspecto apagado afectan bienestar y confianza.",
    superficialRisk:
      "Limpiadores fuertes o ácidos sin nutrición pueden agravar la sequedad.",
    products: [
      { name: "Nutrición profunda", description: "Restaura lípidos y confort." },
      { name: "Hidratación sostenida", description: "Sella y retiene humedad." },
    ],
    testimonials: sharedTestimonials,
  },
  {
    id: "poros",
    name: "Poros",
    shortDescription: "Poros dilatados y textura irregular visibles de cerca.",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=400&fit=crop&sat=-10",
    whatIs:
      "Los poros dilatados suelen relacionarse con exceso de sebo, pérdida de firmeza y acumulación de residuos.",
    emotionalImpact:
      "La textura irregular puede generar la sensación de que la piel “nunca se ve limpia”.",
    superficialRisk:
      "Extracciones agresivas o ácidos mal dosificados pueden ensanchar e irritar más.",
    products: [
      { name: "Refinamiento suave", description: "Mejora textura sin resecar." },
      { name: "Equilibrio sebáceo", description: "Menos obstrucción, mejor aspecto." },
    ],
    testimonials: sharedTestimonials,
  },
  {
    id: "ojeras",
    name: "Ojeras",
    shortDescription: "Oscuridad, hinchazón o cansancio bajo los ojos.",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&h=400&fit=crop&bri=-10",
    whatIs:
      "Las ojeras pueden deberse a vascularización, pigmento, falta de sueño, estrés o adelgazamiento cutáneo.",
    emotionalImpact:
      "Transmitir cansancio constante puede afectar cómo te percibes y cómo te perciben.",
    superficialRisk:
      "Correctores o activos potentes en el contorno pueden irritar sin tratar la causa.",
    products: [
      { name: "Contorno calmante", description: "Descongestiona y suaviza." },
      { name: "Apoyo integral", description: "Descanso, circulación y nutrición." },
    ],
    testimonials: sharedTestimonials,
  },
  {
    id: "caida-cabello",
    name: "Caída de Cabello",
    shortDescription: "Pérdida de densidad y fuerza del cabello.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop",
    whatIs:
      "La caída puede vincularse a estrés, hormonas, nutrición, inflamación o ciclos de recuperación alterados.",
    emotionalImpact:
      "Perder cabello impacta la identidad y la confianza de forma muy personal.",
    superficialRisk:
      "Tratamientos agresivos o prometedores sin enfoque integral pueden frustrar sin resultados reales.",
    products: [
      { name: "Fortalecimiento capilar", description: "Apoyo tópico del cuero cabelludo." },
      { name: "Apoyo sistémico", description: "Nutrición y equilibrio interno." },
    ],
    testimonials: sharedTestimonials,
  },
];
