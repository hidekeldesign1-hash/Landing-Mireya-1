/** Fotos de referencia de atención infantil. No son fotos del consultorio. */

export const generatedImages = {
  doctors: [
    "/images/doctor-01.png",
    "/images/doctor-02.png",
    "/images/doctor-03.png",
    "/images/doctor-04.png",
  ],
  dental: {
    primera: "/images/pedia-primera.jpg",
    limpieza: "/images/pedia-limpieza.jpg",
    caries: "/images/pedia-caries.jpg",
    ortodoncia: "/images/pedia-ortodoncia.jpg",
    prevencion: "/images/pedia-prevencion.jpg",
    leche: "/images/pedia-leche.jpg",
  },
} as const;

export const categoryImages = [
  generatedImages.dental.primera,
  generatedImages.dental.limpieza,
  generatedImages.dental.caries,
  generatedImages.dental.limpieza,
  generatedImages.dental.prevencion,
  generatedImages.dental.primera,
  generatedImages.dental.ortodoncia,
  generatedImages.dental.leche,
  generatedImages.dental.leche,
  generatedImages.dental.prevencion,
] as const;
