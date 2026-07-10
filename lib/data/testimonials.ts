export type BeforeAfter = {
  id: string;
  label: string;
  before: string;
  after: string;
};

export type SocialTestimonial = {
  id: string;
  name: string;
  quote: string;
  avatar: string;
};

export const beforeAfter: BeforeAfter[] = [
  {
    id: "ba-1",
    label: "Acné inflamatorio",
    before:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=300&h=360&fit=crop",
    after:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=300&h=360&fit=crop",
  },
  {
    id: "ba-2",
    label: "Melasma",
    before:
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=300&h=360&fit=crop",
    after:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=300&h=360&fit=crop",
  },
  {
    id: "ba-3",
    label: "Rosácea",
    before:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=300&h=360&fit=crop",
    after:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&h=360&fit=crop",
  },
  {
    id: "ba-4",
    label: "Textura y luminosidad",
    before:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=360&fit=crop",
    after:
      "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=300&h=360&fit=crop",
  },
];

export const socialTestimonials: SocialTestimonial[] = [
  {
    id: "t1",
    name: "Mariana L.",
    quote:
      "Recuperé la confianza de mirarme al espejo sin maquillaje. No fue magia: fue comprensión.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    id: "t2",
    name: "Daniela R.",
    quote:
      "Por primera vez sentí que alguien escuchaba lo que mi piel intentaba decir.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: "t3",
    name: "Fernanda C.",
    quote:
      "El acompañamiento me dio claridad. Hoy mi piel y yo estamos en el mismo equipo.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
  },
];
