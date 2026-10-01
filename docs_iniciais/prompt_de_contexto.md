# Briefing — Site Institucional de Locação Comercial
**Imobiliária | Avenida principal de São Francisco – Niterói/RJ**

> **Contexto de execução:** você (IA) tem **acesso total à pasta do projeto**.
> Todos os documentos, imagens, identidade visual, fotos e dados dos imóveis
> já estão disponíveis no diretório. **Leia a pasta antes de qualquer coisa.**

---

## Sumário
1. [Objetivo](#1-objetivo)
2. [Contexto do negócio](#2-contexto-do-negócio)
3. [Etapa 0 — Inventário obrigatório da pasta](#3-etapa-0--inventário-obrigatório-da-pasta-fazer-antes-de-tudo)
4. [Estrutura do site](#4-estrutura-do-site)
5. [Público-alvo](#5-público-alvo)
6. [Identidade visual](#6-identidade-visual)
7. [Referências de UI/UX e inspiração](#7-referências-de-uiux-e-inspiração)
8. [Stack técnica](#8-stack-técnica)
9. [Requisitos não funcionais](#9-requisitos-não-funcionais)
10. [Carrossel de imagens](#10-carrossel-de-imagens-por-imóvel)
11. [Fluxo de conversão](#11-fluxo-de-conversão--duas-escolhas-por-imóvel)
12. [CTAs de WhatsApp](#12-comportamento-geral-dos-ctas-de-whatsapp)
13. [Como a IA deve trabalhar](#13-como-quero-que-você-ia-trabalhe)
14. [Regras rígidas](#14-regras-rígidas)

---

## 1. Objetivo
Criar um site institucional para **captar novos locatários** de casas comerciais
na principal avenida de São Francisco, Niterói – RJ.

A comunicação deve transmitir:
- **Oportunidade** de estar em uma área em plena expansão.
- **Potencial financeiro** elevado para quem locar ali.
- **Credibilidade** da imobiliária e do corretor responsável.

## 2. Contexto do negócio
- Sou de uma **imobiliária**.
- Tenho **5 imóveis comerciais** disponíveis para locação.
- Todos ficam na avenida principal de São Francisco – Niterói.
- **Não haverá banco de dados, backend, nem qualquer forma de persistência.**
- Cada imóvel tem **5 imagens** para exibir em **carrossel**.
- Toda conversão passa por **dois caminhos** (ver seção 11):
  1. **Ver anúncio completo** → link externo no site da imobiliária.
  2. **Falar no WhatsApp** → abre pop-up de captura → redireciona pro corretor.

## 3. Etapa 0 — Inventário obrigatório da pasta (fazer ANTES de tudo)
Antes de propor layout, código ou estrutura:

1. **Liste a árvore de arquivos** da pasta do projeto (máx. 3 níveis).
2. **Leia os documentos** de identidade visual e extraia:
   - Paleta de cores (com hex/rgb exatos).
   - Tipografia (famílias, pesos, uso).
   - Logo (formatos disponíveis, versões claro/escuro).
   - Tom de voz / diretrizes de marca, se houver.
3. **Localize e catalogue**:
   - As **5 imagens de cada um dos 5 imóveis** (pastas, nomes, formatos).
   - Dados de cada imóvel (metragem, valor, características, diferenciais).
   - **URL do anúncio de cada imóvel** no site da imobiliária.
   - Estudos/argumentos sobre o potencial da região.
   - Imagem de referência do layout a ser seguido.
   - Número de WhatsApp do corretor responsável.
4. **Apresente um resumo** em checklist e **aponte o que estiver faltando ou ambíguo**
   antes de prosseguir.

> Não avance para a Etapa 1 sem meu OK sobre esse inventário.

## 4. Estrutura do site
> A estrutura visual/UX deve seguir o exemplo da **imagem de referência** que está na pasta.
> Abaixo, a estrutura de conteúdo sugerida — **valide antes de codar**.

Páginas / seções previstas:
1. **Hero** — chamada forte sobre a avenida em crescimento + CTA principal (WhatsApp).
2. **Sobre a região** — por que São Francisco está em expansão (usar os estudos da pasta).
3. **Lista dos 5 imóveis** — cards com **carrossel de 5 imagens** + 2 CTAs (ver seção 11).
4. **Página individual de cada imóvel** — carrossel grande, descrição, características, CTAs duplos.
5. **Diferenciais da imobiliária** — por que fechar com a gente.
6. **Prova social / depoimentos** (se houver material na pasta).
7. **FAQ** — dúvidas comuns de locação comercial.
8. **Footer** — contato, endereço, redes, aviso legal.

## 5. Público-alvo
*(Confirmar comigo na Etapa 0 — isso muda o tom de voz)*
- Lojistas / comerciantes que querem ponto na avenida?
- Franquias em expansão?
- Investidores que vão sublocar?

## 6. Identidade visual
- **Já está na pasta do projeto** — leia e aplique.
- Use **tokens semânticos** (`primary`, `secondary`, `accent`, `surface`, `on-surface`)
  no Tailwind, mapeados para os valores reais extraídos dos documentos.
- **Não invente** cores ou fontes fora do que estiver nos arquivos.

## 7. Referências de UI/UX e inspiração
Use os links abaixo para pesquisar **layouts, padrões de navegação, hierarquia visual
e componentes de UI** antes de propor qualquer wireframe ou código:

### 7.1 — Referências de sites (layouts e inspiração)
- **Best Promotional websites | Web Design Inspiration**
  → https://www.awwwards.com/websites/promotional/
  *Sites promocionais premiados — úteis para hero, CTAs e storytelling visual.*
- **Business / Corporate Websites | Best Web Design**
  → https://www.awwwards.com/websites/business-corporate/
  *Sites corporativos premiados — úteis para credibilidade institucional,
  seções "sobre" e apresentação de serviços.*

### 7.2 — Referências de componentes e design systems
- **Discover community-made UI components | 21st**
  → https://21st.dev/community/components
  *Catálogo de componentes de UI feitos pela comunidade — útil para
  inspirar Button, Card, Dialog, Carousel e demais peças.*
- **Website Styles & DESIGN.md Library | Refero Styles**
  → https://styles.refero.design/
  *Biblioteca de design systems legíveis por IA (cores, tipografia,
  espaçamento, componentes) — útil para calibrar tokens e consistência visual.*

> **Como usar:**
> - Pesquise nesses sites antes de propor wireframes e antes de codar componentes.
> - Use-os para **inspiração de padrões**, **não para copiar** identidade de terceiros.
> - Sempre **cite a referência específica** (link + o que inspirou) na sua proposta
>   quando um padrão vier desses sites.
> - A identidade visual final continua sendo **a da pasta do projeto** — essas
>   referências são apoio de UI/UX, não fonte de cores ou fontes.

## 8. Stack técnica
- **TypeScript** (strict)
- **React**
- **Next.js** (App Router)
- **Tailwind CSS**
- **shadcn/ui** (ou equivalente headless) para consistência.
- Carrossel: **Embla Carousel** (`embla-carousel-react`) — leve, headless,
  combina com shadcn/ui. Não usar libs pesadas.
- Ícones: `lucide-react`.
- **Sem backend, sem banco, sem persistência.**

## 9. Requisitos não funcionais
- **Responsivo** (mobile-first; maioria do tráfego virá do Instagram/WhatsApp).
- **SEO básico**: `metadata`, Open Graph, títulos/descrições por página, `sitemap.xml`, `robots.txt`.
- **Acessibilidade**: contraste, foco visível, `alt` em imagens, navegação por teclado,
  carrossel navegável por teclado e leitor de tela.
- **Performance**: `next/image`, `next/font`, lazy load de imagens do carrossel, Lighthouse ≥ 90.
- **Animações discretas** (fade/slide on scroll). Sem exageros.
- **Modo escuro**: decidir depois da aprovação do layout.

## 10. Carrossel de imagens (por imóvel)
- **5 imagens por imóvel**, exibidas em carrossel.
- Recursos obrigatórios:
  - Navegação por **setas** (desktop) e **swipe** (mobile).
  - **Indicadores** (dots) clicáveis.
  - **Contador** opcional (ex.: `2 / 5`).
  - Suporte a **teclado** (`←` / `→`).
  - Imagens com `alt` descritivo e `next/image` (lazy).
- O carrossel aparece:
  - Em **card reduzido** na listagem de imóveis (home).
  - Em **versão ampliada** na página individual do imóvel.
- **Abaixo do carrossel** ficam os dois CTAs (ver seção 11), lado a lado,
  com o de WhatsApp como **primário** (mais destacado) e o de anúncio como
  **secundário** (outline/ghost).

## 11. Fluxo de conversão — duas escolhas por imóvel
Para cada imóvel, o usuário tem **duas ações**:

### 11.1 — "Ver anúncio completo" (link externo)
- Abre em **nova aba** (`target="_blank"` + `rel="noopener noreferrer"`).
- Destino: **URL do anúncio do imóvel no site da imobiliária** (lida da pasta
  em `data/properties.ts`).
- Sem pop-up, sem captura.

### 11.2 — "Falar no WhatsApp" (com captura)
Ao clicar, **NÃO redireciona direto**. Abre um **pop-up (modal)** solicitando:
- **Nome** (obrigatório, mín. 2 caracteres).
- **Telefone** (obrigatório, com máscara BR: `(XX) XXXXX-XXXX`, validação de DDD).
- Texto curto de consentimento (LGPD): *"Ao enviar, você será redirecionado ao WhatsApp
  do corretor com seus dados preenchidos."*

Comportamento do modal:
- Validação em tempo real; botão "Continuar para o WhatsApp" só habilita com dados válidos.
- Ao confirmar, os dados (nome + telefone) são **injetados na mensagem pré-preenchida**
  do WhatsApp — ver formato abaixo — e o usuário é redirecionado.
- **Nada é salvo em nenhum lugar.** Nem em `localStorage`, nem em cookies, nem em backend.
  Os dados existem apenas em memória durante o preenchimento e vão embora junto
  com a navegação para o WhatsApp.
- Fechável por `Esc`, clique no backdrop e botão "X".
- **Foco travado** dentro do modal enquanto aberto (focus trap).
- Acessível: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`.

**Formato da mensagem pré-preenchida no WhatsApp:**
```
Olá! Meu nome é {nome}, meu telefone é {telefone}.
Tenho interesse no imóvel "{título/ID}" na avenida principal de São Francisco.
```

> ⚠️ **Importante:** como o site **não tem backend nem persistência**, os dados
> preenchidos no modal **não ficam salvos em lugar nenhum**. Eles viajam apenas
> dentro da mensagem do WhatsApp — que passa a ser o **único canal de registro do lead**.
> O corretor recebe nome, telefone e imóvel de interesse já formatados na conversa.

## 12. Comportamento geral dos CTAs de WhatsApp
- **Botão flutuante** de WhatsApp em **todas as páginas**.
- Também passa pelo **modal de captura** (mesmo fluxo da seção 11.2), por consistência:
  - Se o usuário estiver numa página de imóvel, o modal já carrega o imóvel em contexto.
  - Se estiver na home ou em página genérica, o modal abre **sem imóvel específico**
    (mensagem menciona apenas interesse em imóveis na avenida).
- Número do corretor **centralizado em um único arquivo de config**
  (ex.: `src/config/site.ts`), lido da pasta — não hardcoded em componentes.

## 13. Como quero que você (IA) trabalhe
**Construção robusta, limpa e incremental. NÃO gere tudo em um único prompt.**

Sugestão de etapas — confirme cada uma antes de avançar:
- **Etapa 0 — Inventário da pasta** (obrigatória, ver seção 3).
- **Etapa 1 — Wireframe textual**: estrutura de cada seção com hierarquia de conteúdo.
  - Antes de escrever, **pesquise nas referências da seção 7** (awwwards promo/corporate,
    21st, Refero) para embasar decisões de layout.
- **Etapa 2 — Design tokens**: variáveis de cor, tipografia, espaçamento e raio,
  extraídas dos documentos da pasta. Use o **Refero Styles** como apoio para
  calibrar consistência.
- **Etapa 3 — Setup do projeto**: Next.js + TS + Tailwind + shadcn/ui + Embla + estrutura de pastas.
- **Etapa 4 — Componentes base**: Button, Card, Container, Section, Badge,
  WhatsAppFloat, **Modal (shadcn `Dialog`)**.
  - Consulte o **21st.dev** para inspiração de implementação dos componentes.
- **Etapa 5 — Componente `PropertyCarousel`**: isolado, testável, com props tipadas.
- **Etapa 6 — Componente `LeadModal`**: captura de nome + telefone, validação,
  geração do link `wa.me` com mensagem pré-preenchida. **Sem persistência.**
- **Etapa 7 — Seções da home**: uma por vez, na ordem definida.
- **Etapa 8 — Páginas dos imóveis**: template dinâmico + dados lidos da pasta
  (ex.: `data/properties.ts` populado a partir dos arquivos reais).
- **Etapa 9 — Refinos**: SEO, acessibilidade, performance, animações.

Em cada etapa:
- Explique **o que vai fazer e por quê** antes de gerar código.
- Gere **código completo dos arquivos alterados**, não trechos soltos.
- **Sinalize suposições** que precisem da minha validação.
- Aguarde meu OK antes de ir para a próxima etapa.

## 14. Regras rígidas
- ❌ Nada de banco de dados, backend, autenticação, `localStorage`, cookies
  ou qualquer forma de persistência.
- ❌ **Não inventar dados** de imóveis, cores, fontes, textos ou URLs de anúncio —
  usar exclusivamente o que está na pasta. Se faltar algo, **perguntar**.
- ❌ Não copiar identidade visual de sites de referência.
- ❌ Não redirecionar para o WhatsApp **sem** passar pelo modal de captura.
- ✅ TypeScript estrito (`strict: true`).
- ✅ Componentes reutilizáveis, sem duplicação.
- ✅ Código comentado apenas onde agrega.