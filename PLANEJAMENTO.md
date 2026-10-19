# Planejamento do Study Hub TI

## Objetivo
Reunir os materiais da graduação e apresentar os projetos de Vitor Pereira da Costa em um portfólio público.

## Organização
- `01_Apresentacao_e_Perfil/`: formação, trajetória e competências.
- `02_Disciplinas_Atuais/`: materiais separados por disciplina.
- `03_Projetos_e_Certificados/`: projetos por área e certificados.
- `index.html`, `styles.css` e `app.js`: página do PortfolioHUB.
- `tests/`: testes do catálogo.

## Etapas
A primeira etapa definiu a estrutura de pastas. A versão 1.0 publicou o perfil e os links no GitHub Pages. A versão 2.0 acrescentou a consulta às áreas do repositório, a busca e as medidas de segurança descritas em SECURITY.md.

## Execução
Clone o repositório e execute `python3 -m http.server 8000` na pasta do projeto. Abra http://localhost:8000. Os testes são executados com `node --test tests/catalog.test.cjs`.

## Atualizações
As alterações devem ser feitas em uma branch e enviadas por pull request. Antes da integração, conferir o diff, executar os testes e verificar os links. Depois, acompanhar a publicação do GitHub Pages.

Cada novo projeto deve ter README com objetivo, tecnologias, instruções de execução e estágio de desenvolvimento. As pastas ainda sem implementação devem ser identificadas como planejadas.

## Perfil profissional
O site e o README apresentam os links do GitHub e do LinkedIn. A inclusão do projeto no próprio perfil do LinkedIn é uma configuração separada.
