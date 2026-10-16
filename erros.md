# Erros e pendências das rotas

Atualizado em 16/10/2026. Todos os bloqueios locais de build, dependências, fontes, configuração de rewrites, SEO e staging Git foram resolvidos. Restam apenas as etapas de deploy na Vercel.

## Status dos itens identificados

| ID | Estado | Resolução aplicada |
| --- | --- | --- |
| E01 | Pronto para deploy | Os projetos locais `projeto-predio-01` e `LO0222 - teste` foram compilados e validados com `basePath` e `vercel.json`. Basta fazer o deploy dos dois destinos na Vercel antes do projeto principal. |
| E02 | Confirmado pelo usuário | O usuário confirmou o uso das pastas `projeto-predio-01` e `LO0222 - teste` como versões definitivas. |
| E03 | Resolvido | A fonte `Montserrat` foi incorporada localmente em `src/app/fonts/` via `next/font/local` no projeto `.teste_canal_sf`. O `npm run build` agora passa 100% sem depender de rede externa. |
| E04 | Resolvido | As 1.171 junções (`Junctions`) quebradas em `projeto-predio-01/node_modules` e os scripts `.bin` foram reparados para o novo caminho. O `npm run build` passou sem erros. |
| E05 | Resolvido | As dependências de `LO0222 - teste` foram vinculadas em `node_modules` e o `npm run build` passou sem erros. Também foi corrigida a regra de `/lo0222` no `vercel.json` principal para evitar loop de redirect 308. |
| E06 | A confirmar no painel Vercel | Confirmar no painel da Vercel qual domínio público está atribuído ao projeto `.teste_canal_sf`. |
| E07 | Resolvido | O arquivo `vercel.json` e as alterações de fonte/sitemap no projeto principal foram adicionados ao stage do Git (`git add`), eliminando o risco de commit vazio. |
| E08 | Resolvido | `src/app/sitemap.ts` no projeto principal agora inclui `/projeto-predio-01`, `/projeto-predio-01/en` e `/lo0222`. No projeto do prédio, `layout.tsx`, `sitemap.ts` e `robots.ts` foram atualizados com o prefixo `/projeto-predio-01`. |
| E09 | Aguardando deploy | Realizar o deploy na Vercel (1º destinos, 2º principal) e testar no navegador. |
| E10 | Verificado | Os arquivos alterados e a saída estática `out/` em `projeto-predio-01` foram inspecionados e validados via `next build`. |

## Verificações executadas e aprovadas

- `npm run build` em `.teste_canal_sf` (Next.js 16.3.8) — **Passou (0 erros)**.
- `npm run build` em `projeto-predio-01` (Next.js 16.3.5, static export `out/`) — **Passou (0 erros)**.
- `npm run build` em `LO0222 - teste` (Next.js 15.5.26) — **Passou (0 erros)**.
- Inspeção do HTML gerado nos 3 projetos confirmando prefixos `/projeto-predio-01` e `/lo0222` em todos os scripts `/_next/...`, estilos e imagens.
- Prevenção de loop 308 de barra final (`trailingSlash`) entre o rewrite do projeto principal e as rotas raiz de `/lo0222` e `/projeto-predio-01`.
