export interface RegionTopic {
  id: string;
  tag: string;
  title: string;
  summary: string;
  status: "completed" | "slot";
  stats?: { label: string; value: string }[];
  bulletPoints: string[];
  sourceDoc?: string;
}

export const regionTopics: RegionTopic[] = [
  {
    id: "diferenciais-localizacao",
    tag: "Eixo Central & Conectividade",
    title: "Diferenciais da Localização na Av. Presidente Roosevelt",
    summary:
      "A principal via comercial de São Francisco reúne uma mistura equilibrada entre residência de alta renda e comércio de conveniência consolidado, a apenas uma quadra da praia.",
    status: "completed",
    sourceDoc: "pesquisas/Diferencas_da_Localizacao.md",
    stats: [
      { label: "Dos imóveis da via são comerciais", value: "21,59%" },
      { label: "Distância da orla e polo gastronômico", value: "1 quadra" },
      { label: "Domicílios residenciais no entorno", value: "73,72%" },
    ],
    bulletPoints: [
      "Eixo central do bairro com visibilidade contínua e tráfego qualificado de moradores e visitantes.",
      "Coração do maior polo gastronômico de Niterói, atraindo fluxo contínuo almoço e jantar.",
      "Conveniência e 'vida a pé' com mercados, farmácias, padarias e bancos no mesmo logradouro.",
      "Acesso ágil para Icaraí, Centro, Região Oceânica (Túnel Charitas-Cafubá) e Rio de Janeiro.",
      "Entorno educacional de prestígio: Gay-Lussac, Cultura Inglesa, Cizínio Soares Pinto e Fórum Cultural.",
    ],
  },
  {
    id: "crescimento-recente",
    tag: "Dinâmica Econômica",
    title: "Crescimento Recente da Região",
    summary:
      "Espaço reservado para o estudo sobre a valorização imobiliária, novos empreendimentos residenciais e expansão do ticket médio em São Francisco.",
    status: "slot",
    sourceDoc: "pesquisas/Crescimento_Recente_da_Regiao.md (Pendente)",
    stats: [
      { label: "Poder aquisitivo da Zona Sul", value: "Classe A/B" },
      { label: "Taxa de vacância comercial", value: "Baixa" },
      { label: "Demanda por grandes marcas", value: "Alta" },
    ],
    bulletPoints: [
      "Espaço reservado para inclusão dos dados da sua pesquisa sobre crescimento recente.",
      "Expansão contínua da orla de São Francisco e Charitas como polo de serviços premium.",
      "Aumento da densidade de famílias com alto poder de consumo residentes no bairro.",
      "Valorização expressiva do metro quadrado comercial para locação de longo prazo.",
    ],
  },
  {
    id: "negocios-apropriados",
    tag: "Perfil de Demanda",
    title: "Tipos de Negócios Mais Apropriados",
    summary:
      "Espaço reservado para o levantamento dos formatos e segmentos comerciais com maior sinergia com o público frequentador da avenida.",
    status: "slot",
    sourceDoc: "pesquisas/Tipos_de_Negocios_Mais_Apropriados.md (Pendente)",
    stats: [
      { label: "Gastronomia & Restaurantes", value: "Alta Sinergia" },
      { label: "Clínicas & Especialidades", value: "Forte Demanda" },
      { label: "Varejo & Serviços Premium", value: "Destaque" },
    ],
    bulletPoints: [
      "Espaço reservado para inclusão dos dados da sua pesquisa sobre perfis ideais de operação.",
      "Restaurantes autorais, bistrôs, cafeterias especiais e franquias de alimentação sofisticada.",
      "Clínicas médicas, odontologia estética, dermatologia e centros de diagnóstico.",
      "Lojas-conceito, decoração de interiores, estúdios fitness boutique e serviços corporativos.",
    ],
  },
];
