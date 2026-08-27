/** Imágenes generadas de referencia — sustituir con fotos reales de BellaSmile */

export const generatedImages = {
  doctors: [
    "/images/doctor-01.png",
    "/images/doctor-02.png",
    "/images/doctor-03.png",
    "/images/doctor-04.png",
  ],
  dental: {
    limpieza: "/images/dental-limpieza.png",
    estetica: "/images/dental-estetica.png",
    restauracion: "/images/dental-estetica.png",
    ortodoncia: "/images/dental-ortodoncia.png",
    encias: "/images/dental-limpieza.png",
    endodoncia: "/images/dental-valoracion.png",
    implantes: "/images/dental-implantes.png",
    prevencion: "/images/dental-limpieza.png",
    valoracion: "/images/dental-valoracion.png",
    infantil: "/images/dental-infantil.png",
  },
} as const;

export const categoryImages = [
  generatedImages.dental.limpieza,
  generatedImages.dental.estetica,
  generatedImages.dental.restauracion,
  generatedImages.dental.ortodoncia,
  generatedImages.dental.encias,
  generatedImages.dental.endodoncia,
  generatedImages.dental.implantes,
  generatedImages.dental.prevencion,
  generatedImages.dental.valoracion,
  generatedImages.dental.infantil,
] as const;
