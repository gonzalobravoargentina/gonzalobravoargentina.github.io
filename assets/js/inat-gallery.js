(() => {
  const root = document.querySelector('.inat-gallery');
  if (!root) return;
  const es = root.dataset.lang === 'es';
  const grid = root.querySelector('.inat-gallery__grid');
  const status = root.querySelector('.inat-gallery__status');
  const more = root.querySelector('.inat-gallery__more');
  let page = 1;
  let count = 0;
  let busy = false;
  const seen = new Set();
  async function load() {
    if (busy) return;
    busy = true;
    more.disabled = true;
    root.setAttribute('aria-busy', 'true');
    status.textContent = es ? 'Cargando fotografías de iNaturalist…' : 'Loading photographs from iNaturalist…';
    try {
      const params = new URLSearchParams({
        user_login: 'gonzalobravo', photos: 'true', per_page: '100',
        order: 'desc', order_by: 'observed_on', page: String(page)
      });
      const response = await fetch('https://api.inaturalist.org/v1/observations?' + params);
      if (!response.ok) throw new Error('iNaturalist unavailable');
      const data = await response.json();
      if (!Array.isArray(data.results)) throw new Error('Unexpected response');
      const fragment = document.createDocumentFragment();
      for (const observation of data.results) {
        const photo = (observation.photos || []).find(p => !p.hidden && p.url);
        if (!photo || seen.has(observation.id)) continue;
        seen.add(observation.id);
        const taxon = observation.taxon || {};
        const name = taxon.name || observation.species_guess || (es ? 'Sin identificar' : 'Unidentified');
        const card = document.createElement('a');
        card.className = 'inat-gallery__card';
        card.href = 'https://www.inaturalist.org/observations/' + observation.id;
        card.target = '_blank';
        card.rel = 'noopener';
        const img = document.createElement('img');
        const url = new URL(photo.url);
        if (url.protocol !== 'https:') continue;
        img.src = url.href.replace('/square.', '/medium.');
        img.alt = name;
        img.loading = 'lazy';
        img.decoding = 'async';
        img.width = 400;
        img.height = 400;
        const caption = document.createElement('span');
        caption.className = 'inat-gallery__caption';
        const title = document.createElement('strong');
        title.textContent = name;
        const attribution = document.createElement('small');
        attribution.textContent = photo.attribution || 'Gonzalo Bravo · iNaturalist';
        caption.append(title, attribution);
        card.append(img, caption);
        fragment.append(card);
        count++;
      }
      grid.append(fragment);
      page++;
      more.hidden = (page - 1) * 100 >= data.total_results || data.results.length === 0;
      more.textContent = es ? 'Cargar más fotos' : 'Load more photos';
      status.textContent = es ? count + ' fotografías · registros más recientes primero' : count + ' photographs · most recent records first';
    } catch (error) {
      status.textContent = es ? 'No se pudieron cargar las fotos. Podés reintentar o visitar la colección en iNaturalist.' : 'Photos could not be loaded. Please retry or visit the collection on iNaturalist.';
      more.hidden = false;
      more.textContent = es ? 'Reintentar' : 'Retry';
    } finally {
      busy = false;
      more.disabled = false;
      root.setAttribute('aria-busy', 'false');
    }
  }
  more.addEventListener('click', load);
  load();
})();
