/** Reseñas públicas de Google que compartió el consultorio. El texto cortado se deja con puntos suspensivos. */

export type GoogleReview = {
  id: string;
  author: string;
  quote: string;
  stars: 5;
};

export const googleReviews: GoogleReview[] = [
  {
    id: "isela-reyes",
    author: "Isela Reyes",
    stars: 5,
    quote:
      "Es una excelente Odontopediatra. Ana Karen muy paciente, y profesional, la conozco hace 10 años, perdí su celular, me gustaría porfavor me lo proporcione, para continuar llevando a mi niño.",
  },
  {
    id: "mimi-vr",
    author: "Mimi VR",
    stars: 5,
    quote: "Excelente atención! Muy profesional y empatica y paciente 10 de 10.",
  },
  {
    id: "andrea-moreno",
    author: "Andrea Moreno Huerta",
    stars: 5,
    quote:
      "La Dra. Ana Karen es excelente, muy profesional y dedicada a la atención de sus pacientes, la recomiendo 100%.",
  },
  {
    id: "lu",
    author: "Lu",
    stars: 5,
    quote:
      "La doctora Ana Karen es excelente, muy profesional, amigable y empática con los pequeños, conecta mucho con ellos para trabajar en equipo. Además, siempre está actualizada y disponible. Los procedimientos los explica a detalle y resuelve…",
  },
  {
    id: "aline-jimenez",
    author: "Aline Jimenez Vega",
    stars: 5,
    quote:
      "Ana Karen es sinónimo de vocación y profesionalismo al 100%. Conoce a la perfección lo que es trabajar con niñas y niños. Explica toooodo con lujo de detalle y crea una conexión importante con sus pacientes. Nunca había conocido una niña…",
  },
  {
    id: "jesus-ruiz",
    author: "Jesús O. Ruíz Ramírez",
    stars: 5,
    quote:
      "Recomiendo ampliamente a la Odontopediatra Ana Karen Ruiz Gómez, por ser una profesional en toda la extensión de la palabra, tiene una gran calidéz, empatía, comprensión y transmite mucha confianza a sus pacientitos.…",
  },
  {
    id: "eduardo-godoy",
    author: "Eduardo Godoy",
    stars: 5,
    quote:
      "La doctora Ana Karen es muy profesional. Tiene una excelente atención con los niños y adolescentes. Hace que la consulta sea agradable para los más pequeños. Al final de la consulta les da un refuerzo positivo (estampas o premios).",
  },
  {
    id: "vane-alvarez",
    author: "Vane Alvarez",
    stars: 5,
    quote:
      "Súper recomendable! La dra es muy linda y empática con los peques, tiene una gran capacidad para contenerlos y convencerlos para que la dejen hacer los procedimientos.…",
  },
  {
    id: "lorena-sanchez",
    author: "Lorena Sánchez Mejía",
    stars: 5,
    quote:
      "La doctora Ana Karen es sumamente paciente y buena en su trabajo. Le hace a mi hija que la experiencia de ir al dentista sea totalmente buena, juega con los niños y siempre cuida de sus sonrisas!",
  },
  {
    id: "lizzy-f",
    author: "Lizzy F",
    stars: 5,
    quote:
      "Excelente atención y servicio, tiene un gran trato con los niños, les hace sentirse cómodos explicándoles todo lo que va a pasar en la consulta, resuelve todas las dudas, todas las veces nos ha dado el tratamiento adecuado, ampliamente recomendada.",
  },
  {
    id: "eduardo-f",
    author: "Eduardo F",
    stars: 5,
    quote:
      "La doctora Ana Karen es una excelente odontopediatra, llevamos 5 años con ella y solo puedo decir puras cosas buenas de ella, muy profesional, pero sobre todo y más importante un gran ser humano, tiene una forma tan bonita de tratar a los…",
  },
  {
    id: "andrea-esparza",
    author: "Andrea Esparza",
    stars: 5,
    quote:
      "Llevo varios años llevando a mi hijo con ella, es una excelente dentista, siempre super linda y atenta. La recomiendo al 100%.",
  },
  {
    id: "jesus-octavio",
    author: "Jesus Octavio Ruiz Gomez",
    stars: 5,
    quote:
      "Desde que nacieron mis hijas las he traído con la Dra, estamos muy contentos y mis hijas más, disfrutan sus citas de revisión. 100% recomendable.",
  },
  {
    id: "helena-castillo",
    author: "Helena Castillo",
    stars: 5,
    quote:
      "Excelente Dra y persona. Muy amable y super profesional. Ya varios años de ser sus pacientes y siempre la atención ha sido excelente.",
  },
  {
    id: "contabilidad-externa",
    author: "contabilidad externa",
    stars: 5,
    quote:
      "La mejor doctora, mi peque lleva desde los 3 años con ella ya tiene 7 y llegamos al mejor sitio, mi hijo siempre va con muchas ganas de ir al dentista, súper profesional, todo te explica, simplemente la mejor odontopediatra.",
  },
  {
    id: "brenda-itzel",
    author: "Castillo Aburto Brenda Itzel",
    stars: 5,
    quote:
      "Excelente atención, mucha paciencia, muy preparada la doctora, siempre atenta, te explica cada procedimiento y le produce mucha confianza a los niños.",
  },
  {
    id: "samantha-velasco",
    author: "samantha velasco",
    stars: 5,
    quote:
      "Me gustaría hacer una cita con la dentista para mi nena. Pero al marcar me manda directamente a buzón.",
  },
  {
    id: "cecilia-roa",
    author: "Cecilia Roa Mora",
    stars: 5,
    quote:
      "El mejor lugar para que los niños tengan cuidados sus dientes, la mejor atención, limpieza, ambiente y seguridad para los chiquitos. Gracias Dr Ana Karen.",
  },
  {
    id: "susy-martinez",
    author: "Susy Martínez-Celis Marín",
    stars: 5,
    quote:
      "Excelente atención de la Doctora Ana Karen. No existe mejor lugar para confiar sus dientes.",
  },
];
