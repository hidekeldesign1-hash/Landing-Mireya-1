/** Datos confirmados de BellaSmile — Clínica Dental, Polanco CDMX */

export const clinic = {
  name: "BellaSmile",
  tagline: "Clínica Dental",
  phone: "55 4925 1163",
  phoneTel: "tel:+525549251163",
  /** Número WhatsApp México — sin + ni espacios */
  whatsapp: "525549251163",
  address: {
    street: "Hegel 228",
    neighborhood: "Chapultepec Morales, Polanco V Secc",
    municipality: "Miguel Hidalgo",
    zip: "11560",
    city: "Ciudad de México, CDMX",
    full: "Hegel 228, Chapultepec Morales, Polanco V Secc, Miguel Hidalgo, 11560 Ciudad de México, CDMX",
  },
  coordinates: {
    lat: 19.4345562,
    lng: -99.1878968,
  },
  google: {
    rating: 5.0,
    reviewCount: 46,
    placeUrl:
      "https://www.google.com/maps/place/BellaSmile+-+Cl%C3%ADnica+Dental/@19.4345562,-99.1904717,17z/data=!4m6!3m5!1s0x85d1f900671d0df7:0xe7eee9a855da017c!8m2!3d19.4345562!4d-99.1878968!16s%2Fg%2F11ymb3tc4w?entry=ttu",
    mapsUrl:
      "https://www.google.com/maps/place/BellaSmile+-+Cl%C3%ADnica+Dental/@19.4345562,-99.1904717,17z/data=!4m6!3m5!1s0x85d1f900671d0df7:0xe7eee9a855da017c!8m2!3d19.4345562!4d-99.1878968!16s%2Fg%2F11ymb3tc4w?entry=ttu",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=19.4345562,-99.1878968&destination_place_id=ChIJ33ANZ5D_1oURcQHaVajp7uc",
    reviewsUrl:
      "https://www.google.com/maps/place/BellaSmile+-+Cl%C3%ADnica+Dental/@19.4345562,-99.1904717,17z/data=!4m6!3m5!1s0x85d1f900671d0df7:0xe7eee9a855da017c!8m2!3d19.4345562!4d-99.1878968!16s%2Fg%2F11ymb3tc4w?entry=ttu",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.4870647825296!2d-99.19047172065429!3d19.434556200000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f900671d0df7%3A0xe7eee9a855da017c!2sBellaSmile%20-%20Cl%C3%ADnica%20Dental!5e0!3m2!1ses!2smx!4v1787861126412!5m2!1ses!2smx",
  },
  hours: [
    { days: "Lunes — Viernes", time: "10:00–14:00 / 15:00–19:00" },
    { days: "Sábado", time: "08:00–14:00" },
  ],
} as const;
