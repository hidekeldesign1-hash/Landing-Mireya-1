import { clinic } from "@/lib/data/bellasmile";
import { wa } from "@/lib/data/whatsapp";

/** Enlaces y CTAs de RM SONRISAS */
export const links = {
  /** WhatsApp — cita general (CTA por defecto) */
  schedule: wa.general(),
  phone: clinic.phoneTel,
  phoneWhatsApp: wa.general(),
  whatsapp: wa,
  directions: clinic.google.directionsUrl,
  googleMaps: clinic.google.mapsUrl,
  googleReviews: clinic.google.reviewsUrl,
  writeReview: clinic.google.writeReviewUrl,
  conocer: "#inicio",
  sonrisa: "#sonrisa",
  tratamientos: "#sonrisa",
  caminos: "#caminos",
  equipo: "#doctores",
  resenas: "#resenas",
  ubicacion: "#ubicacion",
} as const;
