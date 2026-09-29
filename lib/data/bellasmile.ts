/** Datos confirmados en Google Maps — RM SONRISAS, Colonia del Valle, CDMX */

export const clinic = {
  name: "RM SONRISAS",
  tagline: "Consultorio dental",
  doctor: "Dr. Ricardo Mayo",
  specialty: "Ortodoncista",
  phone: "55 7907 6408",
  phoneTel: "tel:+525579076408",
  /** WhatsApp México: 52 + 10 dígitos, sin el 1 intermedio */
  whatsapp: "525579076408",
  address: {
    street: "Adolfo Prieto 1462",
    neighborhood: "Col del Valle Centro",
    municipality: "Benito Juárez",
    zip: "03104",
    city: "Ciudad de México, CDMX",
    full: "Adolfo Prieto 1462, Col del Valle Centro, Benito Juárez, 03104 Ciudad de México, CDMX",
  },
  coordinates: {
    lat: 19.3730969,
    lng: -99.1723203,
  },
  google: {
    rating: 5.0,
    reviewCount: 4,
    placeId: "ChIJP-l71DT_0YURFOPgwFFNHRA",
    placeUrl:
      "https://www.google.com/maps/place/RM+SONRISAS/@19.3730969,-99.1723203,17z/data=!4m6!3m5!1s0x85d1ff34d47be93f:0x101d4d51c0e0e314!8m2!3d19.3730969!4d-99.1723203!16s%2Fg%2F11yvykhj12",
    mapsUrl:
      "https://www.google.com/maps/place/RM+SONRISAS/@19.3730969,-99.1723203,17z/data=!4m6!3m5!1s0x85d1ff34d47be93f:0x101d4d51c0e0e314!8m2!3d19.3730969!4d-99.1723203!16s%2Fg%2F11yvykhj12",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=19.3730969,-99.1723203&destination_place_id=ChIJP-l71DT_0YURFOPgwFFNHRA",
    reviewsUrl:
      "https://www.google.com/maps/place/RM+SONRISAS/@19.3730969,-99.1723203,17z/data=!4m6!3m5!1s0x85d1ff34d47be93f:0x101d4d51c0e0e314!8m2!3d19.3730969!4d-99.1723203!16s%2Fg%2F11yvykhj12",
    writeReviewUrl:
      "https://search.google.com/local/writereview?placeid=ChIJP-l71DT_0YURFOPgwFFNHRA&hl=es",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.9088999206933!2d-99.1723203!3d19.3730969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff34d47be93f%3A0x101d4d51c0e0e314!2sRM%20SONRISAS!5e0!3m2!1ses!2smx!4v1790696491573!5m2!1ses!2smx",
  },
  hours: [
    { days: "Lunes — Viernes", time: "10:00–21:00" },
    { days: "Sábado", time: "10:00–16:00" },
    { days: "Domingo", time: "11:00–16:00" },
  ],
} as const;
