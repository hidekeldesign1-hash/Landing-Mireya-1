/** External destinations for CTAs across the landing. */
export const links = {
  shopify: "https://dmceuticals.com/collections/all",
  restore360: "https://dmceuticals.com/pages/restore-360",
  evaluation: "https://dmceuticals.com/pages/reset-360",
  reset360: "https://dmceuticals.com/pages/reset-360",
  sistemasPage: "https://dmceuticals.com/pages/sistemas",
  agendar: "https://dmceuticals.com/pages/agendar-consulta",
  cart: "https://dmceuticals.com/cart",
  consultation: "#consulta",
  products: "#sintomas",
  systems: "#sistemas",
  startNow: "https://dmceuticals.com/pages/restore-360",
} as const;

export function productUrl(handle: string) {
  return `https://dmceuticals.com/products/${handle}`;
}

