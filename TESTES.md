# Validação da implantação - 19/10/2026

## Testes automatizados
Comando: `node --test tests/catalog.test.cjs` (Node.js 24.19.0 no ambiente de revisão).
Resultado observado: **16 aprovados, 0 falhas**.

Casos: diretórios válidos, nomes/caminhos adversariais, URLs remotas ignoradas, JSON inválido/excessivo, endpoint fixo/credenciais omitidas, HTTP 403/429/500/404, erro de rede/JSON malformado, timeout, renderização textual, busca sem resultado, inicialização normal/falha e página sem catálogo.

Os testes de DOM usam uma implementação mínima simulada para validar texto, eventos e estados. Não substituem navegador real. Falhas de rede e cotas foram simuladas; não houve esgotamento deliberado da API em produção.

## Verificação estática
`node --check app.js`: sem erro de sintaxe. IDs HTML únicos, âncoras internas válidas, JS/CSS externos e CSP sem unsafe-inline. Nenhum innerHTML, eval, localStorage ou sessionStorage no app.js revisado.

## Site real
https://vitorsemmao.github.io/Meu_Study_Hub_TI/
- Carregamento do catálogo: quatro áreas retornadas pelo GitHub.
- Busca “segurança”: uma área.
- Busca “inexistente-123”: zero áreas e mensagem clara.
- Limpar busca: quatro áreas novamente.
- Console observado: sem erros ou avisos.
- Largura normal: clientWidth = scrollWidth = 1905 px.
- Viewport móvel configurado para 390 px: área útil medida de 375 px, com scrollWidth = clientWidth; sem overflow horizontal.
- CSP encontrada no DOM publicado; não foram injetados scripts via console em produção.
- Deploy Pages verificado como success: https://github.com/VitorSemMao/Meu_Study_Hub_TI/actions/runs/39268373922

## Limites e pendências
Não é um pentest completo, auditoria de conta ou teste em todos os dispositivos. A gestão de colaboradores e o salvamento da proteção de branch exigiram reautenticação do proprietário; não são declarados concluídos. Não foram testadas escritas não autorizadas usando contas de terceiros. O vídeo exigido permanece pendente e o envio acadêmico aguarda confirmação.
