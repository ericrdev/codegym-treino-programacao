# CodeGym

MVP web local de uma academia de programação focada em raciocínio lógico.

## Executar

Requer Node.js 18+ e Python 3 no `PATH`.

```powershell
npm start
```

Abra `http://localhost:3000`.

## Arquitetura

- `public/`: interface sem dependências; fala apenas com a API.
- `data/exercises.js`: catálogo estruturado e independente de interface.
- `services/`: progresso, recomendação adaptativa e contratos de linguagens.
- `runners/`: execução por adaptador de linguagem. O Python é restrito por AST,
  processo isolado, timeout e builtins mínimos.

O executor local é apropriado para desenvolvimento. Em produção, implemente o
mesmo contrato `runner.run()` em um worker efêmero Docker/Firecracker sem rede,
filesystem somente leitura, cgroups e limites de CPU/memória.
