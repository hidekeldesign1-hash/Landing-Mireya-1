import { clinic } from "@/lib/data/bellasmile";
import { wa } from "@/lib/data/whatsapp";

/** Enlaces y CTAs de BellaSmile */
export const links = {
  /** WhatsApp — cita general (CTA por defecto) */
  schedule: wa.general(),
  phone: clinic.phoneTel,
  phoneWhatsApp: wa.general(),
  whatsapp: wa,
  directions: clinic.google.directionsUrl,
  googleMaps: clinic.google.mapsUrl,
  googleReviews: clinic.google.reviewsUrl,
  conocer: "#inicio",
  sonrisa: "#sonrisa",
  tratamientos: "#sonrisa",
  caminos: "#caminos",
  equipo: "#equipo",
  resenas: "#resenas",
  ubicacion: "#ubicacion",
} as const;
