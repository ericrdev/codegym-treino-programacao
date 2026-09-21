# CodeGym

Plataforma web de exercícios de lógica e programação. A versão publicada é um site estático: a interface e os exercícios ficam na pasta `public/`, e o progresso é salvo no `localStorage` do navegador.

## Executar localmente

Requer Node.js 18+.

```powershell
npm start
```

Abra `http://localhost:3000` no navegador.

Para executar apenas a versão estática, sirva a pasta `public/` com qualquer servidor HTTP estático. Por exemplo:

```powershell
npx serve public
```

## Publicação

### GitHub Pages

O workflow em `.github/workflows/deploy-pages.yml` publica automaticamente a pasta `public/` no GitHub Pages após um push na branch `main`. No repositório, ative **Settings > Pages** e selecione **GitHub Actions** como fonte.

### Vercel

Importe `ericrdev/codegym-treino-programacao` na Vercel e mantenha o framework como **Other**. Use `public/` como diretório de publicação.

Mais detalhes estão em [PUBLICAR.md](PUBLICAR.md).

## Estrutura

- `public/`: aplicação estática (HTML, CSS e JavaScript).
- `data/`: catálogo de exercícios usado pelo servidor local.
- `services/` e `runners/`: serviços e executores usados no modo local com Node.js.
- `tests/`: testes automatizados do projeto.

Na versão estática, os exercícios JavaScript rodam no navegador e o histórico não é compartilhado entre dispositivos.
