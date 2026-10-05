export const siteConfig = {
  name: "Pinciara Imóveis Exclusivos",
  shortName: "Pinciara Imóveis",
  tagline: "Especialista em Alto Padrão, Lojas e Galpões",
  description:
    "Pinciara Imóveis Exclusivos. Especialista em Alto Padrão, Lojas e Galpões. Imóveis comerciais selecionados para locação na Avenida Presidente Roosevelt, Canal de São Francisco, Niterói - RJ.",
  url: "https://www.pinciara.com.br",
  headquarters: {
    name: "Sede São Francisco",
    address: "Av. Rui Barbosa, 506",
    complement: "Loja 104",
    neighborhood: "São Francisco",
    city: "Niterói",
    state: "RJ",
    zip: "24360-440",
    fullAddress: "Av. Rui Barbosa, 506, Loja 104 — São Francisco, Niterói/RJ",
    googleMapsUrl:
      "https://www.google.com.br/maps/place/Pinciara+Im%C3%B3veis+Exclusivos/@-22.9152022,-43.0853769,1166m/data=!3m2!1e3!4b1!4m6!3m5!1s0x998401ee2a3c07:0x9b4060fcd68d66a5!8m2!3d-22.9152072!4d-43.0827966!16s%2Fg%2F11b806vdbd?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
  },
  location: {
    corridor: "Canal de São Francisco",
    avenue: "Avenida Presidente Roosevelt",
    neighborhood: "São Francisco",
    city: "Niterói",
    state: "RJ",
    zip: "24360-066",
    fullAddress: "Av. Pres. Roosevelt, São Francisco — Niterói/RJ, CEP 24360-066",
    coordinates: "-22.9143407, -43.0887021",
    googleMapsUrl:
      "https://www.google.com.br/maps/place/Av.+Pres.+Roosevelt,+Niter%C3%B3i+-+RJ,+24360-066/@-22.9143357,-43.0912824,1166m/data=!3m2!1e3!4b1!4m6!3m5!1s0x99840302f46225:0xae2b7f82fe938598!8m2!3d-22.9143407!4d-43.0887021!16s%2Fg%2F1ptw3768_?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
  },
  contact: {
    phoneDisplay: "(21) 3811-1369",
    phoneRaw: "552138111369",
    email: "imoveis.pinciara@gmail.com",
    hours: {
      commercial: "Todos os dias, das 08:00 às 19:00",
      administrative: "Segunda a sexta-feira, das 09:00 às 18:00",
    },
  },
  broker: {
    name: "Luiz Pinciara",
    role: "Corretor Responsável & Diretor",
    phoneDisplay: "(21) 3811-1369",
    phoneRaw: "552138111369",
    creci: "CRECI/RJ 048.882-J",
  },
  links: {
    agencySite: "https://www.pinciara.com.br",
    whatsapp: "https://wa.me/552138111369",
    // Footer: Pinciara Imóveis Exclusivos headquarters
    googleMaps:
      "https://www.google.com.br/maps/place/Pinciara+Im%C3%B3veis+Exclusivos/@-22.9152022,-43.0853769,1166m/data=!3m2!1e3!4b1!4m6!3m5!1s0x998401ee2a3c07:0x9b4060fcd68d66a5!8m2!3d-22.9152072!4d-43.0827966!16s%2Fg%2F11b806vdbd?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
    // Hero: Av. Pres. Roosevelt corridor location
    corridorGoogleMaps:
      "https://www.google.com.br/maps/place/Av.+Pres.+Roosevelt,+Niter%C3%B3i+-+RJ,+24360-066/@-22.9143357,-43.0912824,1166m/data=!3m2!1e3!4b1!4m6!3m5!1s0x99840302f46225:0xae2b7f82fe938598!8m2!3d-22.9143407!4d-43.0887021!16s%2Fg%2F1ptw3768_?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
    instagram: "https://www.instagram.com/pinciara.imoveis/",
    facebook: "https://www.facebook.com/pinciara.imoveis/",
    linkedin: "https://www.linkedin.com/company/pinciara-im%C3%B3veis-exclusivos/",
    youtube: "https://www.youtube.com/channel/UCQRBTtNaks-Y1mQ4Uh_Sz7Q",
    financial: "https://www.pinciara.com.br/financiei",
    clientArea: "https://adm032851.superlogica.net/clients/areadocliente",
  },
  legal: {
    copyright:
      "Fotos e vídeos de uso exclusivo da Pinciara Imóveis Exclusivos - Propriedade Intelectual Lei (9.610/98)",
  },
} as const;

export type SiteConfig = typeof siteConfig;
