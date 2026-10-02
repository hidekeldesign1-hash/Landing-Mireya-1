import { clinic } from "@/lib/data/bellasmile";
import { wa } from "@/lib/data/whatsapp";

/** Enlaces y CTAs de Ana Karen Odontopediatra */
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
  equipo: "#doctora",
  resenas: "#resenas",
  ubicacion: "#ubicacion",
} as const;
