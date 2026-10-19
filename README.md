# PortfolioHUB | Meu Study Hub TI

Portfólio acadêmico e profissional de **Vitor Pereira da Costa**, estudante de Ciência da Computação no UniCEUB.

**[Abrir o PortfolioHUB](https://vitorsemmao.github.io/Meu_Study_Hub_TI/)**

## Versão 2.0 - Etapa final de Bootcamp I
Página responsiva com catálogo ligado à API pública do GitHub, busca local, links de gestão no GitHub e documentação no Google Workspace. O GitHub controla autenticação, arquivos e escrita. Não há login próprio, backend ou token no navegador.

## Organização
- [Perfil e apresentação](01_Apresentacao_e_Perfil/)
- [Disciplinas atuais](02_Disciplinas_Atuais/)
- [Projetos e certificados](03_Projetos_e_Certificados/)
- [Plano de implantação](IMPLANTACAO.md)
- [Segurança e matriz de acesso](SECURITY.md)
- [Diário de apoio do Gemini](DIARIO_IA.md)
- [Colaboração](CONTRIBUTING.md)

O projeto implementado é o próprio PortfolioHUB. As áreas de API REST, segurança e automação continuam planejadas; consulte os READMEs de cada pasta. A existência no catálogo não indica conclusão.

## Executar e testar
Sem dependências externas. Para execução, use `python3 -m http.server 8000` e abra http://localhost:8000. Para os testes, com Node.js 18+: `node --test tests/catalog.test.cjs`.

## Integração GitHub
O catálogo consulta somente os diretórios de `03_Projetos_e_Certificados` na branch main. Nomes/caminhos são validados e URLs são construídas localmente. A busca não faz novas consultas. Erros, limites de API e timeout mantêm a navegação estática disponível. JavaScript desativado também preserva os links básicos.

## Implantação
GitHub Pages: branch main, raiz, HTTPS. Acompanhe Actions/Pages após alterações. Detalhes, aceite e rollback estão em IMPLANTACAO.md. O histórico conserva a versão 1.0 e a estrutura acadêmica inicial.

## Google Workspace
[Plano de implantação no Google Docs](https://docs.google.com/document/d/1zrEGSeCVADGMdx7wILnB9LIeF8Bndz2O2YPLFJth63M/edit). Documento com permissões próprias: o link não concede acesso. A integração é documental, sem OAuth ou sincronização bidirecional.

## Perfil e contato
- [LinkedIn](https://www.linkedin.com/in/vitorpereiracosta)
- [Documento-base da etapa inicial](https://docs.google.com/document/d/1kRJKFP9xPF8Sesa6ZB-fYoq79UTG-1btljUp3Auig9Q/edit?usp=sharing)
- E-mail: [vitor.pcosta04@gmail.com](mailto:vitor.pcosta04@gmail.com)

A apresentação em vídeo exigida no enunciado permanece pendente. O envio acadêmico será realizado somente após confirmação do estudante.
