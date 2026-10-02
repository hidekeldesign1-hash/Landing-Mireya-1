export type DoctorProfile = {
  id: string;
  name: string;
  specialty: string;
  area: string;
  image: string;
  /** Número de muestra. Sustituir por la cédula real. */
  licenseExample: string;
};

export const doctors: DoctorProfile[] = [
  {
    id: "ana-karen",
    name: "Ana Karen Ruiz Gómez",
    specialty: "Odontopediatra",
    area: "San José Insurgentes, Benito Juárez",
    image: "/images/doctor-03.png",
    licenseExample: "0000000",
  },
];
