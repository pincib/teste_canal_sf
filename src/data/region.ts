export interface RegionMetric {
  value: string;
  label: string;
  source?: string;
}

export interface RegionTopic {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  summary: string;
  status: "completed";
  sourceDoc: string;
  stats: RegionMetric[];
  insights: { title: string; description: string }[];
  bulletPoints: string[];
}

export const regionTopics: RegionTopic[] = [
  {
    id: "diferenciais-localizacao",
    tag: "Eixo Central & Localização",
    title: "Avenida Presidente Roosevelt: O Eixo Estruturante de São Francisco",
    subtitle: "Conexão estratégica entre residência de alto padrão, praia e comércio de conveniência",
    summary:
      "Avenida comercial de maior relevância de São Francisco. Dados do logradouro apontam que 21,59% dos imóveis são estabelecimentos comerciais ativos convivendo com 73,72% de domicílios residenciais de alta renda, garantindo fluxo diário de moradores e clientes locais.",
    status: "completed",
    sourceDoc: "pesquisas/Diferencas_da_Localizacao.md",
    stats: [
      { value: "21,6%", label: "Dos imóveis da avenida são comerciais", source: "Dados do Logradouro" },
      { value: "1 Quadra", label: "Da Praia de São Francisco e polo gastronômico", source: "Proximidade Imediata" },
      { value: "73,7%", label: "Domicílios residenciais no entorno imediato", source: "Perfil Misto" },
    ],
    insights: [
      {
        title: "Polo Gastronômico Consolidado",
        description:
          "Inserida no maior polo gastronômico de Niterói, atraindo fluxo contínuo de moradores da Zona Sul, turistas e visitantes para almoço, jantar e finais de semana.",
      },
      {
        title: "Vida a Pé & Conveniência Diária",
        description:
          "Padarias, farmácias, mercados, agências bancárias e feira livre bisemanal no mesmo logradouro, sustentando fluxo contínuo de pedestres durante todo o dia.",
      },
      {
        title: "Entorno Escolar de Prestígio",
        description:
          "Cercada por instituições educacionais de referência como Gay-Lussac, Cultura Inglesa, Cizínio Soares Pinto e Assunção, gerando picos diários de tráfego de famílias.",
      },
      {
        title: "Conexão Viária Imediata",
        description:
          "Acesso direto para Icaraí, Charitas (catamarã), Região Oceânica (Túnel Charitas-Cafubá) e ligação expressa para o Rio de Janeiro.",
      },
    ],
    bulletPoints: [
      "21,59% de imóveis comerciais com testadas amplas e recuos frontais para estacionamento.",
      "A apenas um quarteirão da Praia de São Francisco e do calçadão.",
      "Mais de 15 instituições de ensino no bairro alimentando tráfego qualificado de famílias.",
      "Canal natural de ligação entre os diferentes setores residenciais de São Francisco.",
    ],
  },
  {
    id: "crescimento-recente",
    tag: "Infraestrutura & Valorização",
    title: "Ciclo de Crescimento e R$ 13,1M em Obras Viárias",
    subtitle: "Requalificação do Túnel Roberto Silveira, novos lançamentos e alta de 8,3% no m²",
    summary:
      "São Francisco vive um ciclo de forte valorização. A requalificação do Túnel Roberto Silveira (investimento de R$ 13,1 milhões) eliminou o gargalo viário histórico com Icaraí, abrindo 4 faixas de rolamento com 2 faixas desembocando diretamente na Av. Presidente Roosevelt.",
    status: "completed",
    sourceDoc: "pesquisas/Crescimento_Recente.md",
    stats: [
      { value: "R$ 13,1M", label: "Investidos no acesso viário do Túnel Roberto Silveira", source: "Prefeitura de Niterói" },
      { value: "+8,3%", label: "Valorização do m² nos últimos 12 meses", source: "Secovi Rio (Fev/2026)" },
      { value: "280", label: "Unidades residenciais lançadas no bairro", source: "Spin Lançamentos 2025" },
      { value: "5.599", label: "Novas empresas abertas em Niterói no período", source: "Jucerja 2026" },
    ],
    insights: [
      {
        title: "Fluidez Viária Direta",
        description:
          "Quatro pistas de rolamento no Túnel Roberto Silveira direcionam o fluxo de Icaraí e Centro diretamente para a Av. Presidente Roosevelt e orla de Charitas, com ciclovia e calçadas urbanizadas.",
      },
      {
        title: "M² Residencial a R$ 10.235",
        description:
          "Segundo o Secovi Rio, São Francisco registrou alta de 8,3% no m², com preço médio em torno de R$ 10.235/m², atraindo famílias do Rio de Janeiro em busca de espaço e segurança.",
      },
      {
        title: "Percepção de Segurança Superior",
        description:
          "67% dos moradores consideram o bairro seguro. O valor médio dos imóveis para aquisição gira em R$ 2 milhões e aluguéis médios de R$ 4 mil, confirmando poder aquisitivo Classe A/B.",
      },
      {
        title: "Retomada dos Lançamentos Imobiliários",
        description:
          "Com 15,4% dos lançamentos imobiliários da cidade, São Francisco foi o 2º bairro com mais unidades lançadas em 2025, impulsionando a demanda por comércio local.",
      },
    ],
    bulletPoints: [
      "R$ 13,1 milhões investidos em mobilidade com 2 faixas exclusivas em direção à Av. Presidente Roosevelt.",
      "Valorização de 8,3% no preço do metro quadrado residencial (Secovi Rio).",
      "73% de aumento nos lançamentos e 45% nas vendas no mercado imobiliário municipal.",
      "67% de aprovação em segurança pelos moradores do bairro.",
    ],
  },
  {
    id: "negocios-apropriados",
    tag: "Vocação Comercial",
    title: "Segmentos com Maior Afinidade e Demanda Comprovada",
    subtitle: "Comércio representa 55,7% e Saúde 9,1% da matriz econômica do bairro",
    summary:
      "A estrutura física dos imóveis da Av. Presidente Roosevelt (testadas de 8 a 15 metros, recuo para vagas e metragens de 225m² a 500m²) atende com precisão os segmentos de maior rentabilidade identificados no estudo de mercado.",
    status: "completed",
    sourceDoc: "pesquisas/Negocios_mais_apropriados.md",
    stats: [
      { value: "55,7%", label: "Do mercado local é comércio e varejo", source: "Estudo Setorial" },
      { value: "9,1%", label: "Dos estabelecimentos são voltados à saúde", source: "2º Maior Segmento" },
      { value: "225 a 500m²", label: "Metragem dos imóveis disponíveis", source: "Portfólio Pinciara" },
    ],
    insights: [
      {
        title: "Saúde & Bem-Estar (Clínicas e Diagnóstico)",
        description:
          "Segundo maior setor de São Francisco. Imóveis com múltiplas salas, recuo frontal para embarque/desembarque e banheiros adaptados para clínicas médicas, odontologia e consultórios.",
      },
      {
        title: "Gastronomia & Varejo de Experiência",
        description:
          "A uma quadra da praia e inserida no polo gastronômico, a avenida comporta restaurantes autorais, bistrôs, cafeterias premium e padarias artesanais com consumo contínuo.",
      },
      {
        title: "Decoração, Móveis & Arquitetura",
        description:
          "A avenida já abriga marcas consolidadas como Portobello Shop, Lacca Móveis e Casablanca Revestimentos, confirmando a sinergia com o público de reformas e alto padrão.",
      },
      {
        title: "Serviços Corporativos & Sedes de Empresas",
        description:
          "Escritórios de advocacia, consultoria financeira, coworkings boutique e empresas de tecnologia que demandam endereço institucional de prestígio e acesso ágil.",
      },
    ],
    bulletPoints: [
      "Saúde: clínicas integradas, consultórios de especialistas, estética e fisioterapia.",
      "Gastronomia: bistrôs, cafeterias, rotisserias e operações de alta gastronomia.",
      "Varejo nobre: decoração, iluminação, óticas, ateliês e moda especializada.",
      "Serviços: sedes corporativas, escritórios de advocacia e gestão financeira.",
    ],
  },
];

