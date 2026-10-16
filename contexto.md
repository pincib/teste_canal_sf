# Rotas genéricas na Vercel

Este guia explica como publicar uma rota de um projeto Vercel que encaminha para outro projeto ou serviço. Troque os valores entre `<...>` pelos dados reais do seu caso.

## Escolha o comportamento esperado

Use **rewrite** quando o conteúdo de outro projeto deve aparecer dentro do seu domínio, sem alterar a URL exibida no navegador.

Exemplo: a pessoa acessa `https://<dominio-principal>/<prefixo>/produtos` e continua vendo essa mesma URL, embora a resposta venha de `https://<origem-destino>/produtos`.

Use **redirect** quando a pessoa deve ser enviada para outra URL e enxergá-la no navegador.

Exemplo: a pessoa acessa `https://<dominio-principal>/<prefixo>` e passa a ver `https://<origem-destino>`.

## Rewrite para uma rota genérica

No projeto que recebe o domínio principal, crie ou edite o arquivo `vercel.json` na raiz:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [
    {
      "source": "/<prefixo>/:path*",
      "destination": "https://<origem-destino>/:path*"
    }
  ]
}
```

Substituições:

| Campo | Exemplo | Função |
| --- | --- | --- |
| `<prefixo>` | `loja` | Caminho público no domínio principal. |
| `<origem-destino>` | `loja-exemplo.vercel.app` | Domínio do projeto ou serviço que receberá a requisição. |
| `:path*` | `produtos/item-1` | Preserva todos os subcaminhos, inclusive nenhum subcaminho. |

Com a configuração acima, estas requisições são encaminhadas sem mudar a URL do navegador:

| URL acessada | URL chamada internamente |
| --- | --- |
| `https://<dominio-principal>/<prefixo>` | `https://<origem-destino>/` |
| `https://<dominio-principal>/<prefixo>/produtos` | `https://<origem-destino>/produtos` |
| `https://<dominio-principal>/<prefixo>/api/status` | `https://<origem-destino>/api/status` |

Parâmetros de consulta, como `?pagina=2`, seguem com a requisição.

## Redirect para uma rota genérica

Se a intenção for trocar a URL no navegador, use isto no lugar de `rewrites`:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "redirects": [
    {
      "source": "/<prefixo>/:path*",
      "destination": "https://<origem-destino>/:path*",
      "permanent": false
    }
  ]
}
```

Mantenha `permanent: false` (HTTP 307) enquanto testa. Depois de validar, altere para `true` (HTTP 308) apenas se a mudança for definitiva.

## Caso especial: outro projeto Next.js dentro de uma subpasta

Se o destino for uma aplicação Next.js inteira, o rewrite simples pode carregar o HTML, mas quebrar scripts, estilos, imagens ou navegação. Isso ocorre porque uma aplicação Next costuma gerar caminhos absolutos como `/_next/...`, que não têm o prefixo público.

Nesse caso, configure o projeto de destino com o mesmo prefixo em `next.config.ts`:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/<prefixo>",
};

export default nextConfig;
```

Também preserve o prefixo no destino do projeto principal:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [
    {
      "source": "/<prefixo>/:path*",
      "destination": "https://<origem-destino>/<prefixo>/:path*"
    }
  ]
}
```

O `basePath` é definido durante o build. Portanto, depois de alterá-lo, é obrigatório fazer um novo deploy do projeto de destino. Revise também referências manuais a arquivos públicos ou imagens que começam com `/`, pois elas podem precisar incluir `/<prefixo>`.

## Publicação e validação

1. Salve o `vercel.json` na raiz do repositório do projeto principal.
2. Confirme, no painel da Vercel, que o domínio principal está ligado a esse projeto.
3. Faça commit e push para a branch conectada à Vercel, ou execute um novo deploy pelo painel.
4. Confirme que a origem de destino está publicada e acessível publicamente. Deployment Protection no projeto de destino pode impedir o proxy para visitantes.
5. Abra `https://<dominio-principal>/<prefixo>` e teste uma página interna, uma imagem e uma navegação pelo site.

## Checklist de diagnóstico

- **A rota retorna 404:** confirme que o deploy mais recente incluiu o `vercel.json` e que o domínio aponta para o projeto principal correto.
- **A página abre sem estilo ou sem JavaScript:** se o destino é Next.js, aplique `basePath` no projeto de destino e preserve o prefixo no `destination`.
- **A URL mudou, mas não deveria:** foi usado `redirects`; troque por `rewrites`.
- **A URL não mudou, mas deveria:** foi usado `rewrites`; troque por `redirects`.
- **O destino pede autenticação:** remova ou ajuste a proteção de deployment da aplicação de destino para permitir as chamadas feitas pela Vercel.

## Referências

- [Rewrites na Vercel](https://vercel.com/docs/routing/rewrites)
- [Configuração `vercel.json`](https://vercel.com/docs/project-configuration/vercel-json)
- [Configuração `basePath` do Next.js](https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath)
