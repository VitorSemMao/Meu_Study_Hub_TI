# PortfolioHUB 2.0 - Implantação

## Escopo
Portfólio estático com catálogo integrado à API pública de conteúdos do GitHub. O GitHub armazena projetos e controla escrita; o Pages publica a interface. O Google Docs mantém o plano; o Gemini apoia a análise. Não há backend próprio nem autenticação OAuth no site.

## Arquitetura
Visitante → GitHub Pages (index.html, styles.css, app.js) → GET da API de conteúdos → nomes e links validados → cartões pesquisáveis.
Mantenedor → sessão GitHub → arquivos e commits → publicação Pages.
Documentação: Google Docs com acesso separado. O PDF reúne as evidências para avaliação sem depender de acesso ao documento restrito.

## Plano e aceite
1. Inventariar a versão inicial e preservar diretórios existentes.
2. Consultar o Gemini sobre riscos e registrar decisões no diário de IA.
3. Implementar catálogo e busca, com CSP, validação e fallback.
4. Registrar perfis e configurar/verificar controles do repositório.
5. Executar testes locais e revisar a interface publicada.
6. Consolidar relatório PDF e solicitar confirmação antes do envio acadêmico.

## Execução local e testes
Requer Node.js 18+ para testes e Python 3 para servir o site. Sem instalação de dependências.

```sh
node --check app.js
node --test tests/catalog.test.cjs
python3 -m http.server 8000
```
Visite http://localhost:8000. Abrir diretamente por file:// pode impedir a execução devido à política de origem/CSP; prefira o servidor HTTP local.

## Integração
Endpoint fixo: https://api.github.com/repos/VitorSemMao/Meu_Study_Hub_TI/contents/03_Projetos_e_Certificados?ref=main
Uma consulta por visita, sem token e sem polling. Retornos 403/429, erros de rede, HTTP inválido, JSON malformado e timeout levam a um aviso com links estáticos disponíveis. A busca funciona localmente sobre os diretórios já carregados, sem chamadas adicionais.

Para adicionar uma área ao catálogo, crie uma pasta em 03_Projetos_e_Certificados com README e nome compatível com `[A-Za-z0-9][A-Za-z0-9_-]{0,99}`. Não é necessário editar o JavaScript. Uma área pode ser planejamento; o README deve informar claramente o estágio real. O catálogo não lê arquivos privados.

## Publicação e rollback
Produção: branch main, GitHub Pages / (root), HTTPS. Confira a execução pages build and deployment e o site antes de considerar a publicação concluída.
Para desfazer uma alteração defeituosa: `git revert <commit>` em branch de correção, revisar, integrar e acompanhar novo deploy. Evite reset/force push no histórico compartilhado. Base anterior à etapa final: b216dd27ef490e92cdfeb77960e9b94b0ecdb1b9.

## Google Workspace e IA
Plano: https://docs.google.com/document/d/1zrEGSeCVADGMdx7wILnB9LIeF8Bndz2O2YPLFJth63M/edit
O acesso é restrito às permissões do documento. Não há OAuth Workspace ou sincronização bidirecional: a integração é documental, com link no portal e histórico próprio.
Gemini: https://gemini.google.com/app/0b1286ec97baede1 (conta proprietária). A IA foi apoio consultivo, não mecanismo que concede permissões ou comprova conformidade. Consulte DIARIO_IA.md para decisões aceitas e rejeitadas.

## Segurança e colaboração
Consulte SECURITY.md e CONTRIBUTING.md. O relatório final distingue controles verificados, recomendações e limitações. O vídeo de cinco minutos permanece pendente; um roteiro não equivale ao vídeo solicitado no enunciado.
