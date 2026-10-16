# Contexto da implementação das rotas

Atualizado em 16/10/2026. Complementa `contexto.md`, que explica rewrites e redirects genéricos. O objetivo definido foi servir duas aplicações publicadas na Vercel sob subcaminhos do projeto principal **sem trocar a URL exibida no navegador**.

## Projetos e caminhos confirmados

| Projeto local | Papel | Caminho público pretendido | Origem publicada | Status de Build Local |
| --- | --- | --- | --- | --- |
| `C:\Users\berna\Desktop\projetos imob\.teste_canal_sf` | Recebe o domínio principal e faz os rewrites externos. | `/projeto-predio-01` e `/lo0222` | Repositório `pincib/teste_canal_sf` | Build validado (`next build` OK) |
| `C:\Users\berna\Desktop\projetos imob\projeto-predio-01` | Aplicação do prédio; Next.js com exportação estática. | `/projeto-predio-01` | `https://projeto-predio-01.vercel.app/` | Build validado (`next build` OK) |
| `C:\Users\berna\Desktop\projetos imob\LO0222 - teste` | Aplicação da loja; Next.js. | `/lo0222` | `https://lo0222-teste.vercel.app/` | Build validado (`next build` OK) |

## Como as requisições circulam

No `vercel.json` do projeto principal (`.teste_canal_sf`), tanto as rotas exatas da raiz de cada subprojeto quanto os subcaminhos (`:path*`) estão mapeados explicitamente para evitar redirecionamentos 308 de barra final (`trailingSlash`):

| Requisição ao domínio principal | Destino interno |
| --- | --- |
| `/projeto-predio-01` | `https://projeto-predio-01.vercel.app/projeto-predio-01/` |
| `/projeto-predio-01/:path*` | `https://projeto-predio-01.vercel.app/projeto-predio-01/:path*` |
| `/lo0222` | `https://lo0222-teste.vercel.app/lo0222` |
| `/lo0222/:path*` | `https://lo0222-teste.vercel.app/lo0222/:path*` |

## Alterações realizadas por projeto

### 1. Projeto principal: `.teste_canal_sf`
- `vercel.json`: adicionou regras exatas para `/projeto-predio-01` e `/lo0222` antes das regras curinga `/:path*`, prevenindo loops de redirecionamento 308 no Next.js. Arquivo devidamente adicionado ao índice do Git (`git add`).
- `src/app/layout.tsx` e `src/app/fonts/`: migrou a fonte `Montserrat` de `next/font/google` para `next/font/local` com os arquivos `.woff2` locais (`300` a `800`), eliminando falhas de build por dependência de rede externa.
- `src/app/sitemap.ts`: incluiu as rotas `/projeto-predio-01`, `/projeto-predio-01/en` e `/lo0222`.

### 2. Destino do prédio: `projeto-predio-01`
- `node_modules`: reparadas todas as 1.171 junções (`Junctions`) do `pnpm` e scripts `.bin` que apontavam para o caminho antigo fora de `projetos imob`.
- `next.config.ts`: configurado `basePath: "/projeto-predio-01"` mantendo `output: "export"`, `images.unoptimized` e `trailingSlash: true`.
- `components/LandingPage.tsx`: 13 referências de imagens atualizadas com o prefixo `/projeto-predio-01`.
- `app/layout.tsx`, `app/sitemap.ts` e `app/robots.ts`: atualizados canonical, idiomas (`pt-BR` e `en`), imagem Open Graph, sitemap e robots para refletir o prefixo `/projeto-predio-01`.
- `vercel.json`: configurados rewrites explícitos para `/projeto-predio-01`, `/projeto-predio-01/`, `/projeto-predio-01/en`, `/projeto-predio-01/en/` e `/projeto-predio-01/:path*` apontando para os arquivos da exportação estática.

### 3. Destino da loja: `LO0222 - teste`
- `node_modules`: vinculada a instalação completa de dependências para permitir validação e build local.
- `next.config.mjs`: configurado `basePath: "/lo0222"`.
- `app/globals.css`, `components/BlueprintViewer.tsx`, `components/HeaderNav.tsx`, `components/LeadContactForm.tsx`, `components/LightboxModal.tsx` e `components/MaterialsGallery.tsx`: 10 referências manuais de assets públicos atualizadas com `/lo0222`.
- `vercel.json`: redirect temporário (`permanent: false`) de `/` para `/lo0222` caso o domínio da Vercel da loja seja aberto diretamente na raiz.

## Sequência para publicação na Vercel

1. **Publicar primeiro os dois projetos de destino** (`projeto-predio-01` e `LO0222 - teste`) na Vercel.
2. Testar os endereços diretos após o deploy:
   - `https://projeto-predio-01.vercel.app/projeto-predio-01/`
   - `https://lo0222-teste.vercel.app/lo0222`
3. **Publicar o projeto principal** (`.teste_canal_sf`) na Vercel.
4. Acessar `<dominio-principal>/projeto-predio-01` e `<dominio-principal>/lo0222` e validar carregamento de estilos, imagens e navegação.
