# Segurança do PortfolioHUB

## Limites e perfis
O site é uma vitrine pública. Não possui login próprio, backend, cookies de sessão ou armazenamento de tokens. A gestão de arquivos e usuários é delegada ao GitHub autenticado; links de edição não concedem permissão de escrita.

| Perfil | Permissão | Fluxo |
|---|---|---|
| Proprietário VitorSemMao | Administração e escrita | Sessão autenticada no GitHub |
| Visitante | Leitura pública | Pages e API de conteúdos |
| Contribuinte externo | Sem escrita no repositório original | Fork e pull request |
| Editor Google Docs | Acesso específico ao documento | Compartilhamento explícito, independente do GitHub |

## Controles no código
- API e repositório fixos; requisição GET com `credentials: omit`, sem Authorization.
- Nomes limitados a letras ASCII, números, hífen e sublinhado; caminho precisa corresponder à pasta esperada.
- Links construídos no código; `html_url` da API é ignorado.
- Dados remotos entram por `textContent`, nunca por `innerHTML`.
- CSP por meta: scripts/estilos locais e conexão somente com api.github.com; objetos, formulários e base URL bloqueados.
- Referrer policy `no-referrer`; nenhuma biblioteca, analytics ou script de terceiros.
- Timeout de 8 segundos; sem repetição automática; erro não exibe detalhes internos e preserva links fixos.

## Políticas operacionais
Revisar diff e testes antes de integrar. Não subir credenciais, dados de clientes ou documentos privados. Recomenda-se 2FA e revisão periódica de acessos; esta recomendação não comprova que 2FA esteja habilitado. Não adicionar colaboradores sem necessidade e autorização.

## Limitações
A CSP em meta não oferece `frame-ancestors` e não substitui cabeçalhos HTTP. Não há controle de leitura confidencial: tudo que for publicado neste repositório é público. O limite da API pública pode ser compartilhado por IP e pode causar fallback. A API de conteúdos tem limite de 1.000 entradas por diretório; este projeto é um catálogo pequeno. Ausência de token no cliente reduz a exposição de credenciais, mas não protege uma conta GitHub comprometida. Nenhum teste deve esgotar cotas reais ou criar payloads maliciosos em produção.

## Reporte
Relate falhas sem publicar credenciais ou payloads com dados reais. Use o contato profissional informado no perfil do repositório para detalhes sensíveis. Se um segredo for exposto, revogue-o imediatamente; apagar o arquivo não remove o segredo do histórico.
