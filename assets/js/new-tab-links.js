// Apply consistently to static links and dynamically loaded gallery cards.
(() => {
  function updateLink(link) {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || link.hasAttribute('download') || link.getAttribute('role') === 'button') return;
    let url;
    try { url = new URL(href, document.baseURI); } catch (_) { return; }
    if (!['http:', 'https:'].includes(url.protocol)) return;
    // Keep all navigation within this website in the current tab.
    if (url.origin === location.origin) {
      link.removeAttribute('target');
      return;
    }
    link.target = '_blank';
    link.relList.add('noopener');
  }
  function updateTree(node) {
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    if (node.matches('a[href]')) updateLink(node);
    node.querySelectorAll('a[href]').forEach(updateLink);
  }
  updateTree(document.documentElement);
  new MutationObserver(records => {
    records.forEach(record => {
      if (record.type === 'attributes') updateLink(record.target);
      else record.addedNodes.forEach(updateTree);
    });
  }).observe(document.body, { subtree: true, childList: true, attributes: true, attributeFilter: ['href'] });
})();
