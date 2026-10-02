import { categoryImages } from "@/lib/data/placeholders";

export type SmilePoint = {
  title: string;
  text: string;
};

export type SmileCategory = {
  id: string;
  name: string;
  image: string;
  headline: string;
  summary: string;
  points: SmilePoint[];
};

/** Orientación de odontopediatría. Sin cifras ni técnicas no confirmadas del consultorio. */
export const smileCategories: SmileCategory[] = [
  {
    id: "primera-visita",
    name: "Primera visita",
    image: categoryImages[0],
    headline: "La primera visita es para conocer, no para asustar.",
    summary:
      "Se revisa la boca del niño y se explica a la familia qué se ve. Conviene al salir el primer diente y, a más tardar, al año.",
    points: [
      {
        title: "Qué se hace",
        text: "Se miran dientes, encías y cómo muerde. También se habla de cepillado y de lo que preocupa en casa.",
      },
      {
        title: "Para quién",
        text: "Bebés, niñas y niños. La cita se adapta a la edad, no a un protocolo de adulto.",
      },
      {
        title: "Qué se aclara",
        text: "Si hace falta un siguiente paso, se dice en esa visita. No se arma un plan sin haberlo visto.",
      },
    ],
  },
  {
    id: "limpieza",
    name: "Limpieza",
    image: categoryImages[1],
    headline: "La limpieza infantil quita lo que el cepillo no alcanza.",
    summary:
      "Retira placa de los dientes de leche y de los permanentes que ya salieron. Se explica cómo seguir en casa.",
    points: [
      {
        title: "Placa",
        text: "En muelas de atrás se acumula aunque el niño se cepille. La profilaxis la retira.",
      },
      {
        title: "Encías",
        text: "Si sangran al cepillar, se revisa si alcanza con higiene o si hay que verlas aparte.",
      },
      {
        title: "En casa",
        text: "Se indica quién debe cepillar, hasta qué edad, y qué zonas se están saltando.",
      },
    ],
  },
  {
    id: "caries",
    name: "Caries",
    image: categoryImages[2],
    headline: "Una caries en diente de leche también se trata.",
    summary:
      "El diente temporal guarda el espacio del permanente. Si hay lesión, se valora si se sella, se restaura o se vigila.",
    points: [
      {
        title: "Por qué importa",
        text: "Una caries no tratada duele, se infecta y puede adelantar la pérdida del diente de leche.",
      },
      {
        title: "Qué se decide",
        text: "Depende del tamaño de la lesión y de cuánto tiempo le queda al diente en boca.",
      },
      {
        title: "Cómo se explica",
        text: "Al niño se le dice qué se va a hacer, con calma, antes de empezar.",
      },
    ],
  },
  {
    id: "selladores",
    name: "Selladores",
    image: categoryImages[3],
    headline: "El sellador protege las muelas nuevas.",
    summary:
      "Cubre los surcos de las muelas permanentes recién salidas, donde el cepillo entra menos.",
    points: [
      {
        title: "Cuándo",
        text: "Cuando erupcionan los primeros molares permanentes, cerca de los 6 años, y los segundos, cerca de los 12.",
      },
      {
        title: "Qué no es",
        text: "No sustituye el cepillado ni el control de azúcar. Suma una barrera en el surco.",
      },
      {
        title: "Revisión",
        text: "En las citas siguientes se ve si el sellador sigue en su lugar.",
      },
    ],
  },
  {
    id: "fluor",
    name: "Flúor",
    image: categoryImages[4],
    headline: "El flúor se indica según el riesgo de caries.",
    summary:
      "No es igual para todos los niños. La cantidad y la frecuencia salen de lo que se ve en boca y de la higiene en casa.",
    points: [
      {
        title: "En consulta",
        text: "Se valora una aplicación profesional cuando el riesgo de caries lo justifica.",
      },
      {
        title: "En casa",
        text: "La pasta se elige por edad: una cantidad mínima en los pequeños y supervisión de un adulto.",
      },
      {
        title: "Límite",
        text: "Más flúor no significa mejor cuidado. Se usa la dosis que corresponde.",
      },
    ],
  },
  {
    id: "golpes",
    name: "Golpes",
    image: categoryImages[5],
    headline: "Un golpe en un diente se revisa pronto.",
    summary:
      "Un diente de leche o permanente que se mueve, se oscurece o se sale necesita valoración. El tiempo cuenta.",
    points: [
      {
        title: "Qué observar",
        text: "Sangrado, diente flojo, cambio de color, dolor al morder o un fragmento que falta.",
      },
      {
        title: "Qué hacer",
        text: "Escribir por WhatsApp y traer al niño. Si el diente permanente salió completo, guardarlo en leche y venir.",
      },
      {
        title: "Después",
        text: "Algunos golpes se vigilan en las semanas siguientes, aunque el día del golpe no duela.",
      },
    ],
  },
  {
    id: "ortodoncia",
    name: "Ortodoncia",
    image: categoryImages[6],
    headline: "La mordida del niño se revisa mientras crece.",
    summary:
      "No toda mordida se corrige con brackets de inmediato. Primero se ve el recambio, el espacio y los hábitos.",
    points: [
      {
        title: "Qué se mira",
        text: "Cómo cierran los dientes, si falta espacio y si un hábito está empujando la mordida.",
      },
      {
        title: "Cuándo",
        text: "Hay casos que conviene ver antes de que salgan todos los permanentes. Otros esperan el recambio.",
      },
      {
        title: "Qué no se promete",
        text: "El aparato, si hace falta, se indica después del diagnóstico. No antes.",
      },
    ],
  },
  {
    id: "leche",
    name: "Dientes de leche",
    image: categoryImages[7],
    headline: "Los dientes de leche guardan el lugar.",
    summary:
      "Se vigilan erupción, caries y el momento en que cambian. Perder uno antes de tiempo mueve a los demás.",
    points: [
      {
        title: "Erupción",
        text: "Se revisa si los dientes salen en tiempo y si el permanente tiene espacio.",
      },
      {
        title: "Si se pierde pronto",
        text: "Se valora si hace falta mantener el espacio hasta que erupcione el definitivo.",
      },
      {
        title: "En casa",
        text: "Un diente de leche cariado no se deja «porque igual se cae».",
      },
    ],
  },
  {
    id: "habitos",
    name: "Hábitos",
    image: categoryImages[8],
    headline: "El chupón y el dedo también mueven la mordida.",
    summary:
      "Se revisa si el hábito está cambiando los dientes o el paladar, y a qué edad conviene dejarlo.",
    points: [
      {
        title: "Cuáles",
        text: "Dedo, chupón, biberón prolongado o respirar por la boca.",
      },
      {
        title: "Qué se ve",
        text: "Mordida abierta, dientes superiores hacia adelante o paladar estrecho.",
      },
      {
        title: "Cómo se aborda",
        text: "Primero se explica a la familia. Un aparato solo se plantea si el hábito ya deformó la mordida.",
      },
    ],
  },
  {
    id: "prevencion",
    name: "Prevención",
    image: categoryImages[9],
    headline: "Prevenir es ver la boca antes de que duela.",
    summary:
      "Controles para encontrar caries y cambios de la mordida a tiempo. La siguiente cita depende del riesgo de ese niño.",
    points: [
      {
        title: "Revisión",
        text: "Una mancha blanca y una encía inflamada se ven antes del dolor.",
      },
      {
        title: "Higiene",
        text: "Se ajusta la técnica, la pasta y lo que come entre comidas.",
      },
      {
        title: "Frecuencia",
        text: "No es la misma para un niño sin caries que para uno que ya las tuvo.",
      },
    ],
  },
];
