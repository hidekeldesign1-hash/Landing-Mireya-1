/** Reseñas publicadas en Google Maps — RM SONRISAS */

export type GoogleReview = {
  id: string;
  author: string;
  quote: string;
};

export const googleReviews: GoogleReview[] = [
  {
    id: "review-rodolfo-hernandez",
    author: "Rodolfo Hernández",
    quote:
      "Doctores super calificados, muy atentos, puntuales, amables, me explicaron cada paso de los tratamientos y me sentí muy cómodo durante la consulta totalmente recomendable!",
  },
  {
    id: "review-giovanni-lopez",
    author: "Giovanni López",
    quote:
      "Excelente trato, siempre amables, pacientes ante dudas, actitud tranquila. Un buen trabajo se diferencia por los pequeños detalles, ellos los tienen!",
  },
  {
    id: "review-andres-hernandez",
    author: "Andres Hernandez",
    quote:
      "Excelente servicio. El Dr Ricardo y la Dra Montserrat son Excelentes",
  },
  {
    id: "review-alejandra-ballesteros",
    author: "Alejandra Ballesteros",
    quote: "Exelente atención, muy profesionales",
  },
];
