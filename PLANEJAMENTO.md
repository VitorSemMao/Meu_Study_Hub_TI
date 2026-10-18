# Planejamento do Study Hub TI

## Objetivo e público
Centralizar os materiais acadêmicos e apresentar a evolução profissional de Vitor Pereira da Costa a colegas, professores e recrutadores.

## Estrutura
- `01_Apresentacao_e_Perfil/`: biografia, formação e competências.
- `02_Disciplinas_Atuais/`: uma pasta por disciplina; Bootcamp I separa anotações e entregas.
- `03_Projetos_e_Certificados/`: projetos por tema e certificados. As áreas sem implementação permanecem identificadas como planejamento.
- `index.html`: página pública do portfólio, versão 1.0.
- `README.md`: índice e instruções gerais.
- `CONTRIBUTING.md`: fluxo de colaboração e revisão.

## Projeto inicial: página Study Hub
Tecnologias: HTML5 e CSS3, sem dependências de execução, banco de dados ou coleta de dados. Layout responsivo, navegação por âncoras e links para o GitHub e LinkedIn.

### Execução local
Clone o repositório com `git clone https://github.com/VitorSemMao/Meu_Study_Hub_TI.git`, entre no diretório e abra `index.html` no navegador. Opcionalmente execute `python3 -m http.server 8000` e visite `http://localhost:8000`.

### Publicação
Em Settings > Pages, selecionar Deploy from a branch, branch `main`, pasta `/ (root)`. O endereço esperado é https://vitorsemmao.github.io/Meu_Study_Hub_TI/ . A publicação só está concluída após o build do Pages e a verificação do site.

## Versionamento
- A estrutura inicial e a atualização dos links já possuem commits próprios.
- A primeira versão da página é identificada como v1.0.
- Mudanças posteriores devem usar commits pequenos com mensagens descritivas: `feat:`, `fix:` e `docs:`.
- Alterações colaborativas passam por branch, pull request e revisão antes do merge.
- Nunca reescrever o histórico para simular datas ou contribuições.

## Critérios de revisão
Verificar navegação, links, contraste, leitura em dispositivos móveis, identificação de projetos planejados e ausência de credenciais/dados de clientes.

## Integração profissional
O site e o README apontam para o LinkedIn informado no perfil. Para a integração no sentido LinkedIn → GitHub, adicionar o projeto Study Hub TI em Projetos ou Destaques do LinkedIn, com o endereço do repositório e do site publicado. Essa edição de perfil deve ser confirmada na própria plataforma; o link de saída sozinho não comprova a inclusão no LinkedIn.
# Como contribuir

1. Abra uma issue descrevendo o problema ou a melhoria, com o resultado esperado.
2. Crie uma branch a partir de `main`: `git switch -c docs/descricao-curta` (ou `feat/` e `fix/`).
3. Faça mudanças pequenas e revise com `git diff`.
4. Verifique o site no navegador em uma janela larga e em uma estreita; teste links e navegação por teclado.
5. Registre um commit descritivo e envie a branch.
6. Abra um pull request explicando a mudança e a validação. Aguarde revisão antes do merge.

Documente cada novo projeto com objetivo, tecnologias, como executar, entradas/saídas, testes e limitações. Não publique senhas, tokens, dados de clientes ou materiais sem autorização. Use exemplos fictícios em laboratórios e respeite o escopo autorizado.
