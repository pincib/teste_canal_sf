import json

with open("scripts/clean_top5_photos.json", "r", encoding="utf-8") as f:
    photos_data = json.load(f)

p_map = {item["code"]: item for item in photos_data}

properties_ts = f'''import {{ CommercialProperty }} from "@/types/property";

export const commercialProperties: CommercialProperty[] = [
  {{
    id: "LO0222-PINC",
    slug: "loja-comercial-225m-roosevelt",
    title: "Loja Comercial de 225 m² em Ponto Nobre",
    category: "Loja Comercial",
    badge: "225 m² • Vitrine Ativa",
    shortDescription:
      "Loja comercial espaçosa em trecho nobre da Avenida Presidente Roosevelt, com ampla fachada em vão livre, ideal para redes e operações de alto padrão.",
    fullDescription: [
      "Excelente ponto comercial com 225 m² de área útil no eixo principal de São Francisco. O imóvel oferece salão amplo em vão livre com piso de fácil manutenção, instalações sanitárias adaptadas e grande visibilidade para pedestres e veículos.",
      "A localização estratégica na Av. Presidente Roosevelt garante fluxo contínuo de moradores da Zona Sul de Niterói e rápida conexão com os bairros de Icaraí, Charitas e Região Oceânica.",
      "Espaço perfeito para drogarias de rede, franquias de alimentação sofisticada, clínicas médicas, estúdios ou comércio especializado."
    ],
    address: "Av. Presidente Roosevelt — São Francisco, Niterói/RJ",
    specs: {{
      totalArea: 225,
      builtArea: 225,
      frontage: "12 metros de vitrine",
      parkingSpaces: 3,
      floors: 1,
      bathrooms: 2,
      electrical: "Trifásica comercial instalada",
    }},
    pricing: {{
      rent: "R$ 22.000 / mês",
      note: "Condições e carência para adaptação sob consulta",
    }},
    highlights: [
      "Salão amplo em vão livre de 225 m²",
      "Fachada com alta visibilidade na avenida",
      "Próximo ao polo gastronômico e orla",
      "Fácil embarque e desembarque frontal",
    ],
    idealFor: [
      "Franquias Gastronômicas & Cafés Premium",
      "Farmácias & Cosméticos de Rede",
      "Clínicas Médicas & Odontologia",
      "Boutiques de Moda & Decoração",
    ],
    externalUrl: "https://www.pinciara.com.br/imovel/loja-niteroi-225-m/LO0222-PINC?from=rent",
    images: [
      {{
        src: "{p_map['LO0222-PINC']['photos'][0]}",
        alt: "Fachada e salão comercial de 225m² em São Francisco",
        label: "Foto 1 de 5 — Fachada Comercial",
      }},
      {{
        src: "{p_map['LO0222-PINC']['photos'][1]}",
        alt: "Salão principal amplo em vão livre",
        label: "Foto 2 de 5 — Salão Principal",
      }},
      {{
        src: "{p_map['LO0222-PINC']['photos'][2]}",
        alt: "Perspectiva do salão e acabamentos",
        label: "Foto 3 de 5 — Ambiente Interno",
      }},
      {{
        src: "{p_map['LO0222-PINC']['photos'][3]}",
        alt: "Área de apoio e sanitários",
        label: "Foto 4 de 5 — Área de Apoio",
      }},
      {{
        src: "{p_map['LO0222-PINC']['photos'][4]}",
        alt: "Acesso frontal e calçadão comercial",
        label: "Foto 5 de 5 — Acesso & Entorno",
      }},
    ],
    isAvailable: true,
  }},
  {{
    id: "CA0318-PINC",
    slug: "casa-comercial-370m-roosevelt-1027",
    title: "Casa Comercial de 370 m² — Av. Pres. Roosevelt, 1027",
    category: "Casa Comercial Corporativa",
    badge: "370 m² • 1027 Roosevelt",
    shortDescription:
      "Imóvel comercial de grande porte com 370 m² de área construída, múltiplos ambientes e recuo frontal no melhor trecho da avenida.",
    fullDescription: [
      "Casa comercial imponente na Avenida Presidente Roosevelt, 1027. Com 370 m² de área construída, a propriedade oferece ambientes amplos, salas privativas, recepção estruturada e versatilidade total para sedes de empresas e franquias.",
      "Dispõe de excelente recuo frontal para estacionamento privativo, facilitando o acesso de clientes e diretoria. A infraestrutura atende com facilidade normas de acessibilidade e circulação.",
      "Localização privilegiada no coração de São Francisco, cercada por escolas renomadas, consultórios e serviços consolidados."
    ],
    address: "Av. Presidente Roosevelt, 1027 — São Francisco, Niterói/RJ",
    specs: {{
      totalArea: 370,
      builtArea: 370,
      frontage: "15 metros de testada",
      parkingSpaces: 5,
      floors: 2,
      bathrooms: 4,
      electrical: "Trifásica de alta capacidade",
    }},
    pricing: {{
      rent: "R$ 20.000 / mês",
      note: "Contrato comercial com possibilidade de carência para reformas",
    }},
    highlights: [
      "370 m² com distribuição inteligente em 2 pavimentos",
      "5 vagas de estacionamento privativas no recuo",
      "Endereço nobre: Av. Presidente Roosevelt, 1027",
      "Ideal para sedes corporativas, clínicas ou cursos",
    ],
    idealFor: [
      "Centros Médicos & Diagnósticos por Imagem",
      "Sedes Administrativas & Empresas de Engenharia/TI",
      "Colégios, Cursos Preparatórios & Idiomas",
      "Escritórios de Advocacia & Consultorias",
    ],
    externalUrl: "https://www.pinciara.com.br/imovel/casa-niteroi-370-m/CA0318-PINC?from=rent",
    images: [
      {{
        src: "{p_map['CA0318-PINC']['photos'][0]}",
        alt: "Fachada da Casa Comercial na Av. Presidente Roosevelt, 1027",
        label: "Foto 1 de 5 — Fachada Principal 1027",
      }},
      {{
        src: "{p_map['CA0318-PINC']['photos'][1]}",
        alt: "Salão nobre e recepção",
        label: "Foto 2 de 5 — Recepção & Hall",
      }},
      {{
        src: "{p_map['CA0318-PINC']['photos'][2]}",
        alt: "Salas privativas e consultórios",
        label: "Foto 3 de 5 — Salas Corporativas",
      }},
      {{
        src: "{p_map['CA0318-PINC']['photos'][3]}",
        alt: "Pavimento superior estruturado",
        label: "Foto 4 de 5 — Segundo Pavimento",
      }},
      {{
        src: "{p_map['CA0318-PINC']['photos'][4]}",
        alt: "Estacionamento e pátio interno",
        label: "Foto 5 de 5 — Pátio & Vagas",
      }},
    ],
    isAvailable: true,
  }},
  {{
    id: "CA0324-PINC",
    slug: "casa-comercial-terreno-360m-roosevelt-133",
    title: "Casa Comercial com Terreno de 360 m² — Av. Pres. Roosevelt, 133",
    category: "Casa Comercial / Terreno",
    badge: "Terreno 360 m² • 4 Salas",
    shortDescription:
      "Excelente imóvel com 360 m² de terreno e 170 m² de área construída, 4 salas/quartos e ampla área livre, a apenas 1 quadra da praia.",
    fullDescription: [
      "Propriedade comercial localizada na Av. Presidente Roosevelt, 133, a cerca de um quarteirão da Praia de São Francisco e em pleno polo gastronômico.",
      "Com 360 m² de terreno e 170 m² construídos, possui 4 amplas salas privativas, sanitários reformados, copa e grande área externa com potencial para expansão, deck gastronômico ou pátio de estacionamento.",
      "IPTU reduzido (R$ 424,99/mês) e excelente posicionamento para negócios do setor de alimentação, bem-estar ou serviços especializados."
    ],
    address: "Av. Presidente Roosevelt, 133 — São Francisco, Niterói/RJ",
    specs: {{
      totalArea: 360,
      builtArea: 170,
      frontage: "12 metros",
      parkingSpaces: 4,
      floors: 1,
      bathrooms: 3,
      electrical: "Trifásica padrão comercial",
    }},
    pricing: {{
      rent: "R$ 16.000 / mês",
      iptu: "R$ 424,99 / mês",
      note: "Excelente custo-benefício e baixo custo fixo de IPTU",
    }},
    highlights: [
      "Terreno amplo de 360 m² a uma quadra da orla",
      "4 salas privativas com ótima iluminação natural",
      "Pátio e área externa adaptável para deck ou eventos",
      "IPTU acessível: apenas R$ 424,99/mês",
    ],
    idealFor: [
      "Restaurantes, Bares & Cafés com Espaço Externo",
      "Clínicas de Estética & Dermatologia",
      "Estúdios Criativos, Arquitetura & Coworking",
      "Pet Centers & Clínicas Veterinárias Boutique",
    ],
    externalUrl: "https://www.pinciara.com.br/imovel/casa-niteroi-4-quartos-170-m/CA0324-PINC?from=rent",
    images: [
      {{
        src: "{p_map['CA0324-PINC']['photos'][0]}",
        alt: "Fachada da Casa Comercial na Av. Presidente Roosevelt, 133",
        label: "Foto 1 de 5 — Fachada & Entrada Roosevelt 133",
      }},
      {{
        src: "{p_map['CA0324-PINC']['photos'][1]}",
        alt: "Salas privativas amplas",
        label: "Foto 2 de 5 — Salão Interno",
      }},
      {{
        src: "{p_map['CA0324-PINC']['photos'][2]}",
        alt: "Ambiente para consultórios ou escritórios",
        label: "Foto 3 de 5 — Gabinetes Privativos",
      }},
      {{
        src: "{p_map['CA0324-PINC']['photos'][3]}",
        alt: "Copa e instalações de apoio",
        label: "Foto 4 de 5 — Estrutura de Apoio",
      }},
      {{
        src: "{p_map['CA0324-PINC']['photos'][4]}",
        alt: "Área externa e pátio nos fundos",
        label: "Foto 5 de 5 — Terreno & Pátio Aberto",
      }},
    ],
    isAvailable: true,
  }},
  {{
    id: "CA0339-PINC",
    slug: "casa-comercial-500m-roosevelt-102",
    title: "Casa Comercial de 500 m² — Av. Pres. Roosevelt, 102",
    category: "Casa Comercial de Grande Porte",
    badge: "500 m² • Oportunidade R$ 10k",
    shortDescription:
      "Amplo espaço comercial com 500 m² no início da Avenida Presidente Roosevelt, 3 quartos/salas (1 suíte) e vasta área livre para adaptação.",
    fullDescription: [
      "Localizada no número 102 da Avenida Presidente Roosevelt, esta casa comercial de 500 m² destaca-se pelo excelente custo por metro quadrado e pelas múltiplas possibilidades de zoneamento e adaptação.",
      "Conta com 3 salas amplas no piso principal, suíte/gabinete privativo para diretoria, edícula nos fundos, jardim frontal e pátio para circulação interna de pessoas e veículos.",
      "Valor de locação extremamente competitivo de R$ 10.000/mês para 500 m² de terreno na avenida principal."
    ],
    address: "Av. Presidente Roosevelt, 102 — São Francisco, Niterói/RJ",
    specs: {{
      totalArea: 500,
      builtArea: 280,
      frontage: "14 metros",
      parkingSpaces: 6,
      floors: 2,
      bathrooms: 3,
      electrical: "Trifásica comercial",
    }},
    pricing: {{
      rent: "R$ 10.000 / mês",
      note: "Excelente oportunidade: apenas R$ 20/m² em plena avenida",
    }},
    highlights: [
      "500 m² de terreno com amplo potencial de layout",
      "Valor altamente atrativo: R$ 10.000 / mês",
      "Pátio com capacidade para mais de 6 veículos",
      "Próximo ao acesso de Icaraí e da Praia",
    ],
    idealFor: [
      "Centros Terapêuticos & Clínicas de Reabilitação",
      "Escolas Infantis, Creches & Cursos de Arte",
      "Sedes Operacionais & Empresas de Logística Leve",
      "Showrooms com Pátio & Comércio de Variedades",
    ],
    externalUrl: "https://www.pinciara.com.br/imovel/casa-niteroi-3-quartos-500-m/CA0339-PINC?from=rent",
    images: [
      {{
        src: "{p_map['CA0339-PINC']['photos'][0]}",
        alt: "Entrada e fachada da Casa Comercial de 500m² Roosevelt 102",
        label: "Foto 1 de 5 — Entrada & Fachada 102",
      }},
      {{
        src: "{p_map['CA0339-PINC']['photos'][1]}",
        alt: "Salas principais com vista para o jardim",
        label: "Foto 2 de 5 — Salão Térreo",
      }},
      {{
        src: "{p_map['CA0339-PINC']['photos'][2]}",
        alt: "Ambientes reservados e escritórios",
        label: "Foto 3 de 5 — Salas Privativas",
      }},
      {{
        src: "{p_map['CA0339-PINC']['photos'][3]}",
        alt: "Cozinha e copa comercial",
        label: "Foto 4 de 5 — Copa & Serviços",
      }},
      {{
        src: "{p_map['CA0339-PINC']['photos'][4]}",
        alt: "Pátio externo e quintal arborizado",
        label: "Foto 5 de 5 — Pátio & Vagas Internas",
      }},
    ],
    isAvailable: true,
  }},
  {{
    id: "CA0176-PINC",
    slug: "casa-comercial-250m-roosevelt-132",
    title: "Casa Comercial de 250 m² — Av. Pres. Roosevelt, 132",
    category: "Casa Comercial Nobre",
    badge: "250 m² • Frente Ativa",
    shortDescription:
      "Ponto comercial de 250 m² na Av. Pres. Roosevelt, 132, defronte ao trecho de maior efervescência comercial e gastronômica de São Francisco.",
    fullDescription: [
      "Situada em frente ao número 133 na Av. Presidente Roosevelt, a propriedade de número 132 reúne visibilidade de vitrine, excelente padrão de construção e localização consagrada.",
      "Com 250 m² de área bem distribuída, o imóvel oferece fachada comercial atraente, salas climatizadas, recepção acolhedora e estrutura completa para receber clientes exigentes.",
      "Disponível para locação comercial imediata com flexibilidade para ajustes arquitetônicos personalizados."
    ],
    address: "Av. Presidente Roosevelt, 132 — São Francisco, Niterói/RJ",
    specs: {{
      totalArea: 250,
      builtArea: 220,
      frontage: "11 metros",
      parkingSpaces: 3,
      floors: 1,
      bathrooms: 3,
      electrical: "Trifásica comercial",
    }},
    pricing: {{
      rent: "R$ 15.000 / mês",
      iptu: "R$ 600 / mês",
      note: "Condições especiais para contratos de 3 a 5 anos",
    }},
    highlights: [
      "Localização privilegiada na Av. Presidente Roosevelt, 132",
      "Ponto comercial consolidado em polo gastronômico",
      "Frente envidraçada e acabamentos refinados",
      "A menos de 2 minutos de caminhada da Praia",
    ],
    idealFor: [
      "Bistrôs, Cafés Especiais & Confeitarias",
      "Consultórios Médicos & Clínicas de Harmonização",
      "Salões de Beleza & Estúdios de Bem-Estar",
      "Lojas de Artigos Finos, Joalherias & Óticas",
    ],
    externalUrl: "https://www.pinciara.com.br/imovel/casa-niteroi-250-m/CA0176-PINC?from=rent",
    images: [
      {{
        src: "{p_map['CA0176-PINC']['photos'][0]}",
        alt: "Fachada comercial nobre na Av. Presidente Roosevelt, 132",
        label: "Foto 1 de 5 — Fachada Comercial Roosevelt 132",
      }},
      {{
        src: "{p_map['CA0176-PINC']['photos'][1]}",
        alt: "Recepção e salão de atendimento",
        label: "Foto 2 de 5 — Recepção & Hall",
      }},
      {{
        src: "{p_map['CA0176-PINC']['photos'][2]}",
        alt: "Salas de atendimento privativo",
        label: "Foto 3 de 5 — Consultórios & Salas",
      }},
      {{
        src: "{p_map['CA0176-PINC']['photos'][3]}",
        alt: "Acabamentos internos e iluminação",
        label: "Foto 4 de 5 — Detalhes Internos",
      }},
      {{
        src: "{p_map['CA0176-PINC']['photos'][4]}",
        alt: "Entorno e proximidade com a praia",
        label: "Foto 5 de 5 — Entorno Imediato",
      }},
    ],
    isAvailable: true,
  }},
];
'''

with open("src/data/properties.ts", "w", encoding="utf-8") as f:
    f.write(properties_ts)

print("Updated src/data/properties.ts successfully!")
