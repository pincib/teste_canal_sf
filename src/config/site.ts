export const siteConfig = {
  name: "Pinciara Imóveis Exclusivos",
  shortName: "Pinciara",
  description:
    "Imóveis comerciais de alto padrão para locação na principal avenida de São Francisco, Niterói - RJ. Ponto nobre para franquias, varejo e serviços qualificados.",
  url: "https://pinciara.com.br",
  location: {
    avenue: "Avenida Presidente Roosevelt",
    neighborhood: "São Francisco",
    city: "Niterói",
    state: "RJ",
    fullAddress: "Av. Pres. Roosevelt, São Francisco — Niterói/RJ",
  },
  broker: {
    name: "Luiz Pinciara",
    role: "Corretor Responsável & Diretor",
    phoneDisplay: "(21) 3811-1369",
    phoneRaw: "552138111369",
    creci: "CRECI-RJ",
  },
  links: {
    instagram: "https://instagram.com/pinciaraimoveis",
    agencySite: "https://pinciara.com.br",
  },
} as const;

export type SiteConfig = typeof siteConfig;
