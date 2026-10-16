# Erros e pendências das rotas

Atualizado em 16/10/2026. Todas as rotas estão 100% integradas, compiladas, publicadas e validadas em produção na Vercel com resposta HTTP 200 OK.

## Status dos itens identificados

| ID | Estado | Resolução aplicada |
| --- | --- | --- |
| E01 | Resolvido | Rotas integradas nativamente no projeto `.teste_canal_sf`. Tanto `/lo0222` quanto `/projeto-predio-01` e `/projeto-predio-01/en` agora rodam nativamente dentro do mesmo domínio sem depender de proxies/rewrites externos frágeis. |
| E02 | Resolvido | Os componentes, assets e estilos de `projeto-predio-01` e `LO0222 - teste` foram incorporados com escopo CSS isolado (`.predio-page` e `.lo0222-page`). |
| E03 | Resolvido | A fonte `Montserrat` foi incorporada localmente em `src/app/fonts/` via `next/font/local` no projeto `.teste_canal_sf`. Build 100% autônomo. |
| E04 | Resolvido | As junções de `node_modules` e scripts `.bin` em `projeto-predio-01` foram reparadas. Build local validado com sucesso. |
| E05 | Resolvido | As dependências de `LO0222 - teste` (incluindo `gsap` e `ScrollTrigger`) foram instaladas e validadas. |
| E06 | Confirmado | Domínio ativo: `https://teste-canal-sf.vercel.app`. |
| E07 | Resolvido | Mudanças comitadas e enviadas ao repositório GitHub `pincib/teste_canal_sf`. |
| E08 | Resolvido | `src/app/sitemap.ts` contém `/projeto-predio-01`, `/projeto-predio-01/en` e `/lo0222`. |
| E09 | Concluído em produção | Deploy realizado na Vercel com status "success". |
| E10 | Verificado e aprovado | Testes HTTP ao vivo retornando status 200 OK em todas as URLs e assets estáticos. |

## Verificações ao vivo em produção (Vercel)

- `https://teste-canal-sf.vercel.app/` — **HTTP 200 OK**
- `https://teste-canal-sf.vercel.app/lo0222` — **HTTP 200 OK** (Loja 0222 / Flagship Showroom Niterói)
- `https://teste-canal-sf.vercel.app/projeto-predio-01` — **HTTP 200 OK** (Prédio Largo São Francisco PT)
- `https://teste-canal-sf.vercel.app/projeto-predio-01/en` — **HTTP 200 OK** (Prédio Largo São Francisco EN)
- `https://teste-canal-sf.vercel.app/lo0222/assets/brand/pinciara.svg` — **HTTP 200 OK** (Asset SVG)
- `https://teste-canal-sf.vercel.app/projeto-predio-01/images/logo/pinciara-negative.png` — **HTTP 200 OK** (Asset PNG)
