/** Reseñas reales de Google Maps — BellaSmile */

export type GoogleReview = {
  id: string;
  author: string;
  quote: string;
};

export const googleReviews: GoogleReview[] = [
  {
    id: "review-raul-gomez",
    author: "Raúl Gómez Lugo",
    quote:
      "Me gusta mucho cuando tengo mis citas para mi tratamiento, el doctor Jorge y las doctoras son muy agradables y profesionales. Además la clínica está increíble, super limpia y ordenada. 10/10 :)",
  },
  {
    id: "review-ayax-vega",
    author: "Ayax Vega",
    quote:
      "Tuve una muy buena experiencia. Las instalaciones son modernas, muy limpias y agradables. El Dr. Valenzuela y las doctoras brindan un trato cálido, amable y profesional, además de explicar cada procedimiento con claridad.",
  },
  {
    id: "review-nadia-sarabia",
    author: "Nadia Sarabia",
    quote:
      "Excelente servicio de todos, especialmente del doctor Jorge, super recomendado. Buen trato, excelentes insumos y todo super lindo. No da miedo ir a consulta.",
  },
];
