/* ==========================================================================
   Apple Keynotes — application
   ========================================================================== */

(function () {
  "use strict";

  /* ---------------------------------------------------------------- état */

  const state = {
    q: "",
    types: new Set(),
    products: new Set(),
    years: new Set(),
    view: "timeline",
    order: "desc"
  };

  const YEARS = [...new Set(EVENTS.map(e => e.date.slice(0, 4)))].sort();

  const el = {
    view:        document.getElementById("view"),
    stats:       document.getElementById("stats"),
    search:      document.getElementById("search"),
    searchClear: document.getElementById("search-clear"),
    chipsType:   document.getElementById("chips-type"),
    chipsProd:   document.getElementById("chips-product"),
    chipsYear:   document.getElementById("chips-year"),
    count:       document.getElementById("result-count"),
    reset:       document.getElementById("reset"),
    theme:       document.getElementById("theme-toggle")
  };

  /* -------------------------------------------------------------- outils */

  const MONTHS = ["janvier", "février", "mars", "avril", "mai", "juin",
                  "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
  const MONTHS_SHORT = ["janv.", "févr.", "mars", "avr.", "mai", "juin",
                        "juil.", "août", "sept.", "oct.", "nov.", "déc."];

  function parts(iso) {
    const [y, m, d] = iso.split("-").map(Number);
    return { y, m: m - 1, d };
  }
  const fullDate  = iso => { const p = parts(iso); return `${p.d} ${MONTHS[p.m]} ${p.y}`; };
  const shortDate = iso => { const p = parts(iso); return `${p.d} ${MONTHS_SHORT[p.m]}`; };

  const esc = s => String(s).replace(/[&<>"']/g, c => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
  ));

  const fold = s => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  /** Échappe puis surligne les occurrences de la recherche. */
  function hl(text) {
    const safe = esc(text);
    const q = state.q.trim();
    if (!q) return safe;
    const needle = fold(q);
    const hay = fold(safe);
    let out = "", i = 0;
    for (;;) {
      const at = hay.indexOf(needle, i);
      if (at === -1 || needle.length === 0) break;
      // Ne pas surligner à l'intérieur d'une entité HTML.
      if (safe.lastIndexOf("&", at) > safe.lastIndexOf(";", at)) { i = at + 1; continue; }
      out += safe.slice(i, at) + "<mark>" + safe.slice(at, at + needle.length) + "</mark>";
      i = at + needle.length;
    }
    return out + safe.slice(i);
  }

  /** Texte indexé pour la recherche plein texte. */
  function haystack(ev) {
    return fold([
      ev.title, ev.tagline, ev.summary, ev.venue, ev.host,
      ev.date.slice(0, 4),
      TYPES[ev.type].label,
      ev.announcements.join(" "),
      ev.products.map(p => PRODUCTS[p]).join(" ")
    ].join(" "));
  }
  const INDEX = new Map(EVENTS.map(ev => [ev.id, haystack(ev)]));

  /* ------------------------------------------------------------- filtres */

  function matches(ev, skip) {
    if (skip !== "type" && state.types.size && !state.types.has(ev.type)) return false;
    if (skip !== "year" && state.years.size && !state.years.has(ev.date.slice(0, 4))) return false;
    if (skip !== "product" && state.products.size &&
        !ev.products.some(p => state.products.has(p))) return false;
    if (state.q.trim() && !INDEX.get(ev.id).includes(fold(state.q.trim()))) return false;
    return true;
  }

  function filtered() {
    const list = EVENTS.filter(ev => matches(ev, null));
    return state.order === "desc" ? list.slice().reverse() : list;
  }

  /** Nombre de résultats si l'on ajoutait `key` au groupe `group`. */
  function facetCount(group, key) {
    return EVENTS.reduce((n, ev) => {
      if (!matches(ev, group)) return n;
      if (group === "type")    return n + (ev.type === key ? 1 : 0);
      if (group === "year")    return n + (ev.date.slice(0, 4) === key ? 1 : 0);
      if (group === "product") return n + (ev.products.includes(key) ? 1 : 0);
      return n;
    }, 0);
  }

  const anyFilter = () =>
    state.q.trim() || state.types.size || state.products.size || state.years.size;

  /* --------------------------------------------------------------- chips */

  function buildChips() {
    el.chipsType.innerHTML = Object.entries(TYPES).map(([key, t]) => `
      <button class="chip" type="button" data-group="type" data-key="${key}"
              aria-pressed="false" style="--chip-color:${t.color}">
        <span class="chip__dot"></span>${esc(t.label)}
        <span class="chip__count" data-count></span>
      </button>`).join("");

    el.chipsProd.innerHTML = Object.entries(PRODUCTS).map(([key, label]) => `
      <button class="chip" type="button" data-group="product" data-key="${key}"
              aria-pressed="false" style="--chip-color:var(--accent)">
        ${esc(label)}<span class="chip__count" data-count></span>
      </button>`).join("");

    el.chipsYear.innerHTML = YEARS.map(y => `
      <button class="chip" type="button" data-group="year" data-key="${y}"
              aria-pressed="false" style="--chip-color:var(--accent)">
        ${y}<span class="chip__count" data-count></span>
      </button>`).join("");

    document.querySelectorAll(".chip").forEach(chip => {
      chip.addEventListener("click", () => {
        const set = state[chip.dataset.group === "product" ? "products"
                   : chip.dataset.group === "type" ? "types" : "years"];
        set.has(chip.dataset.key) ? set.delete(chip.dataset.key) : set.add(chip.dataset.key);
        render();
      });
    });
  }

  function syncChips() {
    document.querySelectorAll(".chip").forEach(chip => {
      const group = chip.dataset.group, key = chip.dataset.key;
      const set = state[group === "product" ? "products" : group === "type" ? "types" : "years"];
      const on = set.has(key);
      chip.setAttribute("aria-pressed", on ? "true" : "false");

      const n = facetCount(group, key);
      chip.querySelector("[data-count]").textContent = n ? n : "";
      chip.style.opacity = n === 0 && !on ? ".38" : "";
    });
  }

  /* -------------------------------------------------------------- stats */

  function renderStats(list) {
    const years = new Set(list.map(e => e.date.slice(0, 4)));
    const cells = [
      [list.length,                                          list.length > 1 ? "événements" : "événement"],
      [years.size,                                           years.size > 1 ? "années couvertes" : "année"],
      [list.filter(e => e.type === "wwdc").length,           "keynotes WWDC"],
      [list.filter(e => e.type === "iphone").length,         "keynotes iPhone"],
      [list.reduce((n, e) => n + e.announcements.length, 0), "annonces"]
    ];
    el.stats.innerHTML = cells.map(([v, label]) => `
      <div class="stat">
        <div class="stat__value">${v}</div>
        <div class="stat__label">${label}</div>
      </div>`).join("");
  }

  /* --------------------------------------------------------------- carte */

  function cardHTML(ev, withDate) {
    const t = TYPES[ev.type];
    const tags = ev.products.map(p => `<span class="tag">${hl(PRODUCTS[p])}</span>`).join("");
    const play = ev.video
      ? `<span class="card__play" aria-hidden="true">▶</span>`
      : `<span class="card__play is-missing" aria-hidden="true" title="Pas de vidéo">▶</span>`;

    return `
      <article class="card" role="button" tabindex="0" data-id="${ev.id}"
               aria-label="${esc(ev.title)} — ${fullDate(ev.date)}">
        ${withDate ? `<span class="card__date">${fullDate(ev.date)}</span>` : ""}
        <span class="card__mobile-date">${fullDate(ev.date)}</span>
        <div class="card__head">
          <div>
            <h3 class="card__title">${hl(ev.title)}</h3>
            ${ev.tagline ? `<p class="card__tagline">${hl(ev.tagline)}</p>` : ""}
          </div>
          ${play}
        </div>
        <p class="card__desc">${hl(ev.summary)}</p>
        <div class="card__foot">
          <span class="badge" style="--badge-color:${t.color}">${esc(t.label)}</span>
          ${ev.upcoming ? `<span class="badge" style="--badge-color:var(--c-iphone)">À venir</span>` : ""}
          ${ev.rumor ? `<span class="badge" style="--badge-color:var(--c-macworld)">Non officiel</span>` : ""}
          ${tags}
        </div>
      </article>`;
  }

  /* --------------------------------------------------------------- vues */

  function groupByYear(list) {
    const map = new Map();
    list.forEach(ev => {
      const y = ev.date.slice(0, 4);
      if (!map.has(y)) map.set(y, []);
      map.get(y).push(ev);
    });
    return [...map];
  }

  function renderTimeline(list) {
    return `<div class="timeline">` + groupByYear(list).map(([year, evs]) => `
      <section class="year-block">
        <div class="year-head">
          <div class="year-head__num">${year}</div>
          <div class="year-head__meta">${evs.length} ${evs.length > 1 ? "événements" : "événement"}</div>
        </div>
        ${evs.map(ev => `
          <div class="tl-item">
            <div class="tl-item__rail" style="--dot:${TYPES[ev.type].color}">
              <div class="tl-item__date">${shortDate(ev.date)}</div>
            </div>
            <div class="tl-item__body">${cardHTML(ev, false)}</div>
          </div>`).join("")}
      </section>`).join("") + `</div>`;
  }

  function renderGrid(list) {
    return `<div class="grid">` + groupByYear(list).map(([year, evs]) => `
      <div class="grid__year"><b>${year}</b><span>${evs.length} ${evs.length > 1 ? "événements" : "événement"}</span></div>
      ${evs.map(ev => cardHTML(ev, true)).join("")}`).join("") + `</div>`;
  }

  function render() {
    const list = filtered();

    syncChips();
    renderStats(list);
    el.count.textContent = `${list.length} sur ${EVENTS.length}`;
    el.reset.hidden = !anyFilter();
    el.searchClear.classList.toggle("is-visible", !!state.q);

    el.view.innerHTML = list.length
      ? (state.view === "timeline" ? renderTimeline(list) : renderGrid(list))
      : `<div class="empty">
           <div class="empty__glyph">🔍</div>
           <h3>Aucun événement</h3>
           <p>Aucun keynote ne correspond à ces filtres.</p>
         </div>`;

    el.view.querySelectorAll(".card").forEach(card => {
      card.addEventListener("click", () => openModal(card.dataset.id));
      card.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(card.dataset.id); }
      });
    });
  }

  /* -------------------------------------------------------------- modale */

  let modalEl = null, lastFocus = null;

  function mediaHTML(ev) {
    if (!ev.video) {
      const url = "https://www.youtube.com/results?search_query=" +
                  encodeURIComponent("Apple " + ev.title + " " + ev.date.slice(0, 4));
      return `
        <div class="modal__novideo">
          <div class="g">${ev.upcoming ? "🗓" : "📄"}</div>
          <p>${ev.upcoming
            ? (ev.rumor ? "Pas encore de vidéo — Apple n’a pas confirmé s’il y aura un keynote."
                        : "Événement confirmé, mais Apple n’a annoncé aucune diffusion en direct pour l’instant.")
            : "Annoncé par communiqué de presse — il n’existe pas de keynote filmé pour cet événement."}</p>
          <a class="linkbtn" href="${url}" target="_blank" rel="noopener noreferrer">
            ${ev.upcoming ? "Voir les vidéos d’avant-première ↗" : "Chercher des vidéos ↗"}</a>
        </div>`;
    }
    return `<iframe
        src="https://www.youtube-nocookie.com/embed/${ev.video}?rel=0&modestbranding=1"
        title="${esc(ev.title)}"
        loading="lazy"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
  }

  function openModal(id) {
    const list = filtered();
    let idx = list.findIndex(e => e.id === id);
    let ev = idx >= 0 ? list[idx] : EVENTS.find(e => e.id === id);
    if (!ev) return;

    closeModal(true);
    lastFocus = document.activeElement;

    const prev = idx > 0 ? list[idx - 1] : null;
    const next = idx >= 0 && idx < list.length - 1 ? list[idx + 1] : null;
    const t = TYPES[ev.type];

    modalEl = document.createElement("div");
    modalEl.className = "modal-backdrop";
    modalEl.innerHTML = `
      <div class="modal" role="dialog" aria-modal="true" aria-label="${esc(ev.title)}">
        <div class="modal__media">
          <button class="modal__close" type="button" aria-label="Fermer">✕</button>
          ${mediaHTML(ev)}
        </div>
        <div class="modal__body">
          <div class="modal__eyebrow">
            <span class="badge" style="--badge-color:${t.color}">${esc(t.label)}</span>
            ${ev.upcoming ? `<span class="badge" style="--badge-color:var(--c-iphone)">À venir</span>` : ""}
          ${ev.rumor ? `<span class="badge" style="--badge-color:var(--c-macworld)">Non officiel</span>` : ""}
            <span class="modal__date">${fullDate(ev.date)}</span>
          </div>

          <h2>${esc(ev.title)}</h2>
          ${ev.tagline ? `<p class="modal__tagline">${esc(ev.tagline)}</p>` : ""}
          <p class="modal__desc">${esc(ev.summary)}</p>

          <div class="modal__section">
            <h3>${ev.rumor ? "Ce qui est rapporté" : ev.upcoming ? "Ce qui est attendu" : "Annonces"}</h3>
            <ul class="announce">
              ${ev.announcements.map(a => `<li>${esc(a)}</li>`).join("")}
            </ul>
          </div>

          <div class="modal__section">
            <h3>Détails</h3>
            <div class="card__foot" style="margin-top:0">
              ${ev.venue ? `<span class="tag">📍 ${esc(ev.venue)}</span>` : ""}
              ${ev.host && ev.host !== "—" ? `<span class="tag">🎤 ${esc(ev.host)}</span>` : ""}
              ${ev.products.map(p => `<span class="tag">${esc(PRODUCTS[p])}</span>`).join("")}
            </div>
            ${ev.video ? `<p style="margin:12px 0 0;font-size:12.5px;color:var(--text-faint)">
                ${esc(ev.videoLabel || (ev.videoSource ? "Vidéo : " + ev.videoSource
                                                       : "Vidéo : chaîne YouTube officielle Apple"))}</p>` : ""}
          </div>

          <div class="modal__links">
            ${ev.video ? `<a class="linkbtn linkbtn--primary" target="_blank" rel="noopener noreferrer"
                 href="https://www.youtube.com/watch?v=${ev.video}">Ouvrir sur YouTube ↗</a>` : ""}
            ${ev.link ? `<a class="linkbtn" target="_blank" rel="noopener noreferrer"
                 href="${esc(ev.link)}">${esc(ev.linkLabel || "Page Apple")} ↗</a>` : ""}
          </div>

          <div class="modal__nav">
            <button class="navbtn" type="button" ${prev ? `data-go="${prev.id}"` : "disabled"}>
              <span>← Précédent</span><strong>${prev ? esc(prev.title) : "—"}</strong>
            </button>
            <button class="navbtn navbtn--next" type="button" ${next ? `data-go="${next.id}"` : "disabled"}>
              <span>Suivant →</span><strong>${next ? esc(next.title) : "—"}</strong>
            </button>
          </div>
        </div>
      </div>`;

    document.body.appendChild(modalEl);
    document.body.style.overflow = "hidden";

    modalEl.addEventListener("click", e => { if (e.target === modalEl) closeModal(); });
    modalEl.querySelector(".modal__close").addEventListener("click", () => closeModal());
    modalEl.querySelectorAll("[data-go]").forEach(b =>
      b.addEventListener("click", () => openModal(b.dataset.go)));
    modalEl.querySelector(".modal__close").focus();

    try { history.replaceState(null, "", "#" + ev.id); } catch (e) {}
  }

  function closeModal(silent) {
    if (!modalEl) return;
    modalEl.remove();
    modalEl = null;
    document.body.style.overflow = "";
    if (!silent) {
      if (lastFocus && lastFocus.focus) lastFocus.focus();
      try { history.replaceState(null, "", location.pathname + location.search); } catch (e) {}
    }
  }

  /* ------------------------------------------------------------ écoutes */

  el.search.addEventListener("input", () => { state.q = el.search.value; render(); });
  el.searchClear.addEventListener("click", () => {
    state.q = ""; el.search.value = ""; el.search.focus(); render();
  });

  el.reset.addEventListener("click", () => {
    state.q = ""; el.search.value = "";
    state.types.clear(); state.products.clear(); state.years.clear();
    render();
  });

  document.querySelectorAll("[data-view]").forEach(b => b.addEventListener("click", () => {
    state.view = b.dataset.view;
    document.querySelectorAll("[data-view]").forEach(x =>
      x.setAttribute("aria-pressed", x === b ? "true" : "false"));
    render();
  }));

  document.querySelectorAll("[data-order]").forEach(b => b.addEventListener("click", () => {
    state.order = b.dataset.order;
    document.querySelectorAll("[data-order]").forEach(x =>
      x.setAttribute("aria-pressed", x === b ? "true" : "false"));
    render();
  }));

  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && modalEl) { closeModal(); return; }
    if (modalEl && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
      const btn = modalEl.querySelector(e.key === "ArrowLeft" ? ".navbtn" : ".navbtn--next");
      if (btn && !btn.disabled) btn.click();
      return;
    }
    if (!modalEl && e.key === "/" && document.activeElement !== el.search) {
      e.preventDefault(); el.search.focus();
    }
  });

  el.theme.addEventListener("click", () => {
    const root = document.documentElement;
    const current = root.getAttribute("data-theme");
    const isDark = current
      ? current === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    const next = isDark ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("ak-theme", next); } catch (e) {}
  });

  /* ------------------------------------------------------------ démarrage */

  buildChips();
  render();

  const hash = decodeURIComponent(location.hash.slice(1));
  if (hash && EVENTS.some(e => e.id === hash)) openModal(hash);
})();
