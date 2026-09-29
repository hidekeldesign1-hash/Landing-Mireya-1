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

/** Textos generales de cada área. Sin cifras ni técnicas no confirmadas del consultorio. */
export const smileCategories: SmileCategory[] = [
  {
    id: "limpieza",
    name: "Limpieza",
    image: categoryImages[0],
    headline: "La limpieza quita lo que el cepillo no alcanza.",
    summary:
      "Retira placa y sarro para cuidar dientes y encías. En la misma cita se ve si hace falta algo más.",
    points: [
      {
        title: "Placa y sarro",
        text: "El sarro no sale con el cepillado. La profilaxis lo retira de los dientes y de la línea de la encía.",
      },
      {
        title: "Encías",
        text: "Menos placa acumulada ayuda a controlar el sangrado y la inflamación gingival.",
      },
      {
        title: "Revisión",
        text: "Si la encía está más afectada, la limpieza sola no alcanza y se indica el siguiente paso.",
      },
    ],
  },
  {
    id: "estetica",
    name: "Estética",
    image: categoryImages[1],
    headline: "La estética se planea sobre el diente real.",
    summary:
      "Color, forma y proporción se revisan antes de proponer aclaramiento, resina o carillas.",
    points: [
      {
        title: "Qué se observa",
        text: "Color, forma, bordes y cómo se relacionan los dientes al sonreír y al morder.",
      },
      {
        title: "Opciones habituales",
        text: "Aclaramiento, resina o carillas. La indicación depende del esmalte, la mordida y el desgaste.",
      },
      {
        title: "Límite",
        text: "El resultado se explica después de revisar el caso. No se promete un cambio sin esa valoración.",
      },
    ],
  },
  {
    id: "restauracion",
    name: "Restauración",
    image: categoryImages[2],
    headline: "Restaurar es devolver forma y función.",
    summary:
      "Repara caries, fracturas o desgaste. El material se elige según cuánto diente queda sano.",
    points: [
      {
        title: "Cuándo",
        text: "Cuando una caries, una fractura o el desgaste ya comprometen el diente.",
      },
      {
        title: "Cómo",
        text: "Resina directa o una restauración hecha en laboratorio, según el tamaño del daño.",
      },
      {
        title: "Para qué",
        text: "Sellar el diente, recuperar la masticación y evitar que la lesión avance.",
      },
    ],
  },
  {
    id: "ortodoncia",
    name: "Ortodoncia",
    image: categoryImages[3],
    headline: "La ortodoncia corrige dientes y mordida.",
    summary:
      "Alinea los dientes y mejora el cierre. El tipo de aparato se decide después del diagnóstico.",
    points: [
      {
        title: "Diagnóstico",
        text: "Se revisan alineación y mordida. Cuando hace falta, se piden radiografías o modelos.",
      },
      {
        title: "Aparato",
        text: "Brackets o alineadores se indican según el movimiento que el caso necesita.",
      },
      {
        title: "Qué se busca",
        text: "Dientes más ordenados y una mordida que cierre mejor, no solo un cambio de frente.",
      },
    ],
  },
  {
    id: "encias",
    name: "Encías",
    image: categoryImages[4],
    headline: "La encía inflamada también se trata.",
    summary:
      "Sangrado, retracción o mal aliento persistente se valoran. No se resuelven solo con enjuague.",
    points: [
      {
        title: "Señales",
        text: "Sangrado al cepillar, retracción, mal aliento que no cede o diente con movilidad.",
      },
      {
        title: "Qué se hace",
        text: "Control de placa y, si hay bolsas, limpieza por debajo de la encía.",
      },
      {
        title: "Por qué importa",
        text: "Una encía inestable pone en riesgo el diente y también las restauraciones.",
      },
    ],
  },
  {
    id: "endodoncia",
    name: "Endodoncia",
    image: categoryImages[5],
    headline: "El conducto se trata para conservar el diente.",
    summary:
      "Se valora cuando hay dolor o infección en la raíz. El fin es conservar la pieza, si el diente lo permite.",
    points: [
      {
        title: "Cuándo",
        text: "Dolor espontáneo, sensibilidad que no cede o infección en la punta de la raíz.",
      },
      {
        title: "En qué consiste",
        text: "Retirar el tejido dañado del conducto, desinfectar y sellar el espacio.",
      },
      {
        title: "Si no se puede",
        text: "Cuando el diente no es conservable, la opción correcta es la extracción.",
      },
    ],
  },
  {
    id: "implantes",
    name: "Implantes",
    image: categoryImages[6],
    headline: "Un implante sustituye la raíz, no solo la corona.",
    summary:
      "Repone un diente ausente si hay hueso y encía suficientes. Eso se confirma con estudios.",
    points: [
      {
        title: "Qué es",
        text: "Un tornillo que se integra al hueso y sostiene una corona, un puente o una prótesis.",
      },
      {
        title: "Requisito",
        text: "Hueso y encía adecuados. Se confirman en la revisión y con imagen cuando hace falta.",
      },
      {
        title: "Tiempo",
        text: "La corona no siempre se coloca el mismo día. El plan sigue la cicatrización.",
      },
    ],
  },
  {
    id: "prevencion",
    name: "Prevención",
    image: categoryImages[7],
    headline: "Prevenir es detectar antes de que duela.",
    summary:
      "Revisiones para encontrar caries y cambios en la encía a tiempo. La frecuencia depende del riesgo.",
    points: [
      {
        title: "Revisión",
        text: "Una caries inicial y la inflamación gingival se ven antes de que haya dolor.",
      },
      {
        title: "Higiene",
        text: "Se ajusta según lo que se encuentra en boca: técnica, zonas que se saltan y dieta.",
      },
      {
        title: "Frecuencia",
        text: "La siguiente cita no es igual para todos. La marca el riesgo de cada persona.",
      },
    ],
  },
  {
    id: "valoracion",
    name: "Valoración",
    image: categoryImages[8],
    headline: "Primero se revisa. Después se propone.",
    summary:
      "Dientes, encías, mordida y el motivo de la consulta. Sirve cuando aún no sabes qué necesitas.",
    points: [
      {
        title: "Qué incluye",
        text: "Revisión de dientes, encías y mordida, más lo que te trajo a consulta.",
      },
      {
        title: "Qué obtienes",
        text: "Una explicación de lo que se ve y de las opciones que aplican a tu caso.",
      },
      {
        title: "Qué no es",
        text: "No es un tratamiento cerrado ni un plan armado sin haberte revisado.",
      },
    ],
  },
  {
    id: "infantil",
    name: "Infantil",
    image: categoryImages[9],
    headline: "La boca del niño se revisa mientras crece.",
    summary:
      "Control de dientes de leche, recambio y caries. La primera visita conviene al salir el primer diente, y a más tardar al año.",
    points: [
      {
        title: "Desarrollo",
        text: "Se vigilan los dientes de leche, el recambio y el espacio para los permanentes.",
      },
      {
        title: "Prevención",
        text: "Caries, higiene y hábitos como el dedo o el chupón si están moviendo la mordida.",
      },
      {
        title: "Primera visita",
        text: "Se recomienda cuando erupciona el primer diente y no después del primer año.",
      },
    ],
  },
];
