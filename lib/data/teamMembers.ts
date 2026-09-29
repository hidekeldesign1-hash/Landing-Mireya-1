export type DoctorProfile = {
  id: string;
  name: string;
  specialty: string;
  /** Número provisional hasta confirmar la cédula real */
  license: string;
  area: string;
  image: string;
};

/** Datos de apoyo. Especialidad de la Dra. Montserrat y ambas cédulas son temporales. */
export const doctors: DoctorProfile[] = [
  {
    id: "dr-ricardo-mayo",
    name: "Dr. Ricardo Mayo",
    specialty: "Ortodoncia",
    license: "Cédula Prof. 8392741",
    area: "Colonia del Valle, Benito Juárez",
    image: "/images/doctor-04.png",
  },
  {
    id: "dra-montserrat",
    name: "Dra. Montserrat",
    specialty: "Odontología general",
    license: "Cédula Prof. 7621845",
    area: "Colonia del Valle, Benito Juárez",
    image: "/images/doctor-03.png",
  },
];
