/* PortfolioHUB 2.0 - consulta pública; edição e autenticação permanecem no GitHub. */
(function (root) {
  'use strict';
  const REPO = 'VitorSemMao/Meu_Study_Hub_TI';
  const FOLDER = '03_Projetos_e_Certificados';
  const API = `https://api.github.com/repos/${REPO}/contents/${FOLDER}?ref=main`;
  const TITLES = {API_REST_Academica:'API REST acadêmica', Automacao_e_OSINT_Defensivo:'Automação e OSINT defensivo', Laboratorios_Seguranca_Web:'Laboratórios de segurança Web', Certificados:'Certificados'};
  function normalizeEntries(data) {
    if (!Array.isArray(data) || data.length > 1000) throw new Error('invalid-data');
    return data.filter(item => item && item.type === 'dir' && typeof item.name === 'string' &&
      /^[A-Za-z0-9][A-Za-z0-9_-]{0,99}$/.test(item.name) && item.path === `${FOLDER}/${item.name}`)
      .map(item => ({name:item.name, title:TITLES[item.name] || item.name.replaceAll('_',' '),
        url:`https://github.com/${REPO}/tree/main/${FOLDER}/${encodeURIComponent(item.name)}`}))
      .sort((a,b) => a.title.localeCompare(b.title,'pt-BR'));
  }
  async function fetchProjects(fetcher, timeoutMs = 8000) {
    const controller = new AbortController();
    let timer;
    const timeout = new Promise((_,reject) => {timer = setTimeout(() => {
      controller.abort(); reject(new Error('timeout'));
    },timeoutMs);});
    try {
      const data = await Promise.race([(async () => {
        const response = await fetcher(API,{signal:controller.signal,credentials:'omit',headers:{Accept:'application/vnd.github+json'}});
        if (!response.ok) throw new Error(response.status === 403 || response.status === 429 ? 'rate-limit' : 'unavailable');
        return await response.json();
      })(),timeout]);
      return normalizeEntries(data);
    } finally {clearTimeout(timer);}
  }
  function renderProjects(doc, container, entries, query) {
    const term = query.trim().toLocaleLowerCase('pt-BR');
    const filtered = entries.filter(item => item.title.toLocaleLowerCase('pt-BR').includes(term));
    const nodes = filtered.map(item => {
      const article = doc.createElement('article'); article.className = 'card';
      const status = doc.createElement('span'); status.className = 'status'; status.textContent = 'Área do repositório';
      const title = doc.createElement('h3'); title.textContent = item.title;
      const description = doc.createElement('p'); description.textContent = 'Consulte o README da área para conhecer o objetivo e o estágio atual.';
      const link = doc.createElement('a'); link.textContent = 'Abrir no GitHub ↗'; link.href = item.url;
      article.append(status,title,description,link); return article;
    });
    if (!nodes.length) {const empty = doc.createElement('p'); empty.textContent = 'Nenhuma área encontrada para esta busca.'; nodes.push(empty);}
    container.replaceChildren(...nodes); return filtered.length;
  }
  async function initialize(doc, fetcher) {
    const container = doc.getElementById('catalogo');
    if (!container) return;
    const status = doc.getElementById('catalogo-status');
    const search = doc.getElementById('buscar-projeto');
    try {
      const entries = await fetchProjects(fetcher);
      const update = () => {const count = renderProjects(doc,container,entries,search.value);status.textContent = `${count} área(s) encontrada(s). Fonte: GitHub, consulta desta visita.`;};
      search.disabled = false; search.addEventListener('input',update); update();
    } catch {
      status.textContent = 'Não foi possível atualizar o catálogo agora. Os links fixos abaixo continuam disponíveis.';
      container.replaceChildren();
    } finally {container.setAttribute('aria-busy','false');}
  }
  const api = {normalizeEntries,fetchProjects,renderProjects,initialize,API};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (root.document) initialize(root.document,root.fetch.bind(root));
})(typeof globalThis === 'undefined' ? this : globalThis);
