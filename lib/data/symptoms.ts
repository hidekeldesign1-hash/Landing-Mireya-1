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

export const symptoms: Symptom[] = [
  {
    id: "acne",
    name: "Acné",
    shortDescription: "Brotes, inflamación y marcas que no terminan de irse.",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=400&fit=crop",
    whatIs:
      "El acné es una respuesta inflamatoria de la piel que puede estar vinculada a desequilibrios internos, estrés, microbiota o factores hormonales — no solo a una limpieza insuficiente.",
    emotionalImpact:
      "Mirarte al espejo y ver un brote nuevo puede generar vergüenza, ansiedad social y la sensación de que nada funciona, por más que lo intentes.",
    superficialRisk:
      "Tratar solo la superficie puede resecar, sensibilizar y cicatrizar la piel sin resolver la causa que sigue enviando el mensaje.",
    products: [
      { name: "Sérum calmante", description: "Apoyo tópico para piel inflamada." },
      { name: "Apoyo sistémico", description: "Acompañamiento desde adentro hacia afuera." },
    ],
    testimonials: [
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
    ],
  },
  {
    id: "melasma",
    name: "Melasma",
    shortDescription: "Manchas que persisten pese a cremas y protectores.",
    image:
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=400&fit=crop",
    whatIs:
      "El melasma es una hiperpigmentación compleja, a menudo influida por hormonas, inflamación y exposición solar acumulada.",
    emotionalImpact:
      "Las manchas pueden hacer que sientas que tu rostro ya no te representa, afectando cómo te presentas ante el mundo.",
    superficialRisk:
      "Blanqueadores agresivos pueden irritar y, al suspenderse, devolver las manchas con más intensidad.",
    products: [
      { name: "Protocolo pigmentario", description: "Cuidado tópico respetuoso." },
      { name: "Apoyo hormonal-piel", description: "Visión integral del desequilibrio." },
    ],
    testimonials: [
      {
        name: "María G.",
        quote: "Mis manchas dejaron de definir cómo me veo.",
        avatar:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
      },
      {
        name: "Elena V.",
        quote: "Aprendí a acompañar mi piel, no a pelear con ella.",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
      },
      {
        name: "Carla N.",
        quote: "El cambio fue gradual y real.",
        avatar:
          "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    id: "rosacea",
    name: "Rosácea",
    shortDescription: "Enrojecimiento, calor y sensibilidad constante.",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=400&fit=crop",
    whatIs:
      "La rosácea es una condición inflamatoria vascular que puede relacionarse con el sistema nervioso, la barrera cutánea y factores internos.",
    emotionalImpact:
      "El enrojecimiento impredecible puede generar inseguridad y la necesidad constante de ocultar el rostro.",
    superficialRisk:
      "Productos agresivos o exfoliaciones intensas suelen empeorar la inflamación y la sensibilidad.",
    products: [
      { name: "Barrera reparadora", description: "Calma y protege la piel reactiva." },
      { name: "Apoyo estrés–piel", description: "Aborda el eje inflamatorio interno." },
    ],
    testimonials: [
      {
        name: "Patricia L.",
        quote: "Mi rostro dejó de arder cada mañana.",
        avatar:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
      },
      {
        name: "Diana S.",
        quote: "Por fin una rutina que no me irrita.",
        avatar:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop",
      },
      {
        name: "Irene C.",
        quote: "Me siento cómoda sin maquillaje.",
        avatar:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    id: "fotoenvejecimiento",
    name: "Fotoenvejecimiento",
    shortDescription: "Daño solar visible: textura, manchas y pérdida de firmeza.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=400&fit=crop",
    whatIs:
      "El fotoenvejecimiento es el resultado acumulado de la exposición UV sobre colágeno, elastina y pigmentación.",
    emotionalImpact:
      "Ver el paso del sol en tu piel puede hacerte sentir que el tiempo se aceleró sin que pudieras evitarlo.",
    superficialRisk:
      "Tratamientos intensivos sin protección y sin apoyo interno pueden sensibilizar sin resultados sostenibles.",
    products: [
      { name: "Renovación suave", description: "Textura y luminosidad sin agredir." },
      { name: "Antioxidantes", description: "Apoyo frente al estrés oxidativo." },
    ],
    testimonials: [
      {
        name: "Rosa M.",
        quote: "Mi piel se ve más uniforme y descansada.",
        avatar:
          "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=100&h=100&fit=crop",
      },
      {
        name: "Lucía T.",
        quote: "Recuperé luminosidad sin procedimientos agresivos.",
        avatar:
          "https://images.unsplash.com/photo-1548142813-c348350df52b?w=100&h=100&fit=crop",
      },
      {
        name: "Valeria H.",
        quote: "Entendí que proteger también es cuidar.",
        avatar:
          "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    id: "envejecimiento",
    name: "Envejecimiento",
    shortDescription: "Pérdida de firmeza, sequedad y vitalidad.",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&h=400&fit=crop",
    whatIs:
      "El envejecimiento cutáneo es un proceso natural influido por inflamación, hormonas, estrés oxidativo y hábitos de vida.",
    emotionalImpact:
      "Puede generar la sensación de no reconocerse, o de que el cuidado ya no alcanza para sentirse bien.",
    superficialRisk:
      "Promesas anti-edad agresivas pueden dañar la barrera sin acompañar lo que ocurre por dentro.",
    products: [
      { name: "Nutrición profunda", description: "Hidratación y soporte de barrera." },
      { name: "Sistema integral", description: "Visión completa del envejecimiento." },
    ],
    testimonials: [
      {
        name: "Beatriz A.",
        quote: "Me siento más yo, no más joven a la fuerza.",
        avatar:
          "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=100&h=100&fit=crop",
      },
      {
        name: "Gloria F.",
        quote: "Mi piel se siente nutrida y calmada.",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      },
      {
        name: "Natalia D.",
        quote: "El enfoque integral marcó la diferencia.",
        avatar:
          "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    id: "piel-grasa",
    name: "Piel grasa",
    shortDescription: "Brillo, poros y desequilibrio que no se controla.",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
    whatIs:
      "La piel grasa refleja un desequilibrio en la producción de sebo, a menudo ligado a hormonas, inflamación o una barrera alterada.",
    emotionalImpact:
      "El brillo constante y los poros visibles pueden hacerte sentir descuidada aunque inviertas tiempo en tu rutina.",
    superficialRisk:
      "Productos matificantes agresivos pueden resecar y provocar más sebo como respuesta compensatoria.",
    products: [
      { name: "Equilibrio seborreico", description: "Regula sin resecar." },
      { name: "Apoyo metabólico–piel", description: "Aborda el desequilibrio interno." },
    ],
    testimonials: [
      {
        name: "Camila J.",
        quote: "Mi piel dejó de brillar a media mañana.",
        avatar:
          "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop",
      },
      {
        name: "Andrea B.",
        quote: "Por fin una rutina que equilibra de verdad.",
        avatar:
          "https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=100&h=100&fit=crop",
      },
      {
        name: "Mónica R.",
        quote: "Menos productos, mejores resultados.",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    id: "eczema",
    name: "Eczema / Dermatitis",
    shortDescription: "Picor, sequedad y brotes que interrumpen tu día.",
    image:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
    whatIs:
      "El eczema y la dermatitis reflejan una barrera cutánea comprometida y una respuesta inflamatoria que puede tener raíces internas.",
    emotionalImpact:
      "El picor y la incomodidad constantes afectan el sueño, el ánimo y la relación con tu propio cuerpo.",
    superficialRisk:
      "Corticoides o productos irritantes a largo plazo pueden debilitar aún más la barrera cutánea.",
    products: [
      { name: "Reparación de barrera", description: "Calma y sella la piel sensible." },
      { name: "Apoyo inflamación–piel", description: "Reduce la carga inflamatoria." },
    ],
    testimonials: [
      {
        name: "Paula K.",
        quote: "Por primera vez dormí sin rascarme.",
        avatar:
          "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&h=100&fit=crop",
      },
      {
        name: "Jimena O.",
        quote: "Mi piel se siente protegida, no atacada.",
        avatar:
          "https://images.unsplash.com/photo-1524638431109-93d95c968f03?w=100&h=100&fit=crop",
      },
      {
        name: "Teresa W.",
        quote: "Entendí el mensaje detrás del picor.",
        avatar:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
      },
    ],
  },
];
