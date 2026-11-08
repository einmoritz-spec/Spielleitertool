/* ---------- lore library modal ---------- */
/* ---------- Orte-Bibliothek (neu, Juli 2026) ---------- */
// Sammelt alle GLOSSARY-Einträge mit place:true an einem durchsuchbaren
// Ort — analog zur Challenge-/Laden-Bibliothek: in aufklappbare
// Kategorien gruppiert (statt alle ~20 Karten gleichzeitig zu rendern,
// was bei so vielen "wide"-Einträgen spürbar laggte). Ein Klick auf eine
// Karte schließt dieses Fenster und öffnet den eigentlichen (ggf. "wide")
// Glossareintrag über openGloss(), statt den Inhalt hier zu duplizieren.
const PLACE_CATEGORIES = [
  { key:"major-dales", label:"Die großen Dales", ids:[
    "ravensdale","barleytown","highglade","milkrest","pasture",
    "cedargate","woodend","soddenmore-ref","hartland","ashstone",
  ]},
  { key:"smaller-dales", label:"Kleinere Dales & Dörfer", ids:[
    "fairpoint","lastford","salthill","underbough","upper-hartland","south-crossing",
  ]},
  { key:"beyond-dales", label:"Jenseits der Dales", ids:[
    "wanderlands","craggen-highlands","stormhelm","gwyrdolin","dolmen-knolls",
  ]},
  { key:"landmarks", label:"Wälder, Wege & Festungen", ids:[
    "aldenweald","peddlers-path","fort-gherdorn",
  ]},
];
function openPlaces(){
  renderPlacesLibrary();
  document.getElementById("placesModal").classList.add("open");
  document.getElementById("placesLibBody").scrollTop = 0;
}
function closePlaces(){
  document.getElementById("placesModal").classList.remove("open");
}
function setPlaceSearch(val){
  state.placeSearch = val;
  refreshPlacesLibrary();
}
function togglePlaceCat(key){
  if(state.openPlaceCats.has(key)) state.openPlaceCats.delete(key);
  else state.openPlaceCats.add(key);
  refreshPlacesLibrary();
}
function jumpToPlace(id){
  closePlaces();
  openGloss(id);
  glossOrigin = "places";
}
function refreshPlacesLibrary(){
  const body = document.getElementById("placesLibBody");
  const scrollTop = body ? body.scrollTop : 0;
  const active = document.activeElement;
  const isSearchInput = active && active.classList && active.classList.contains("place-search");
  const caret = isSearchInput ? active.selectionStart : null;
  renderPlacesLibrary();
  if(body) body.scrollTop = scrollTop;
  if(isSearchInput){
    const newInput = document.querySelector(".place-search");
    if(newInput){
      newInput.focus();
      if(caret!==null) newInput.setSelectionRange(caret, caret);
    }
  }
}
function renderPlacesLibrary(){
  const q = (state.placeSearch||"").trim().toLowerCase();
  const searching = !!q;
  const stripped = html => html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  const catalogued = new Set();
  let visibleTotal = 0, grandTotal = 0;

  const catsHtml = PLACE_CATEGORIES.map(cat=>{
    const places = cat.ids
      .map(id=>GLOSSARY[id] ? {id, ...GLOSSARY[id]} : null)
      .filter(Boolean);
    places.forEach(p=>catalogued.add(p.id));
    grandTotal += places.length;
    const filtered = q ? places.filter(p=>{
      const hay = (p.term + " " + p.page + " " + p.body.map(stripped).join(" ")).toLowerCase();
      return hay.includes(q);
    }) : places;
    visibleTotal += filtered.length;
    if(searching && filtered.length===0) return "";
    const isOpen = searching || state.openPlaceCats.has(cat.key);
    const cardsHtml = filtered
      .sort((a,b)=>a.term.localeCompare(b.term, "de"))
      .map(p=>{
        const teaserRaw = stripped(p.body[0]||"");
        const teaser = teaserRaw.length>160 ? teaserRaw.slice(0,160)+"…" : teaserRaw;
        return `
        <button class="place-card" onclick="jumpToPlace('${p.id}')">
          ${portraitHtml(p.img, "place-portrait")}
          <div class="place-card-body">
            <div class="place-card-head"><span class="place-name">${esc(p.term)}</span><span class="place-page">${esc(p.page)}</span></div>
            <p class="place-teaser">${esc(teaser)}</p>
          </div>
        </button>`;
      }).join("");
    return `
    <div class="ch-cat ${isOpen?'open':''}" data-placecat="${cat.key}">
      <button class="ch-cat-head" onclick="togglePlaceCat('${cat.key}')">
        <span class="ch-cat-title">${esc(cat.label)}</span>
        <span class="ch-cat-count">${filtered.length}${filtered.length!==places.length?' / '+places.length:''}</span>
        <svg class="ch-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      <div class="ch-cat-body"><div class="place-grid">${cardsHtml}</div></div>
    </div>`;
  }).join("");

  // Sicherheitsnetz: GLOSSARY-Einträge mit place:true, die (noch) in keiner
  // PLACE_CATEGORIES-Liste stehen, landen automatisch in einer eigenen
  // Restkategorie, statt stillschweigend zu verschwinden.
  const uncatalogued = Object.keys(GLOSSARY)
    .filter(id=>GLOSSARY[id].place && !catalogued.has(id))
    .map(id=>({id, ...GLOSSARY[id]}));
  let extraHtml = "";
  if(uncatalogued.length){
    grandTotal += uncatalogued.length;
    const filtered = q ? uncatalogued.filter(p=>{
      const hay = (p.term + " " + p.page + " " + p.body.map(stripped).join(" ")).toLowerCase();
      return hay.includes(q);
    }) : uncatalogued;
    visibleTotal += filtered.length;
    if(!searching || filtered.length>0){
      const isOpen = searching || state.openPlaceCats.has("uncatalogued");
      const cardsHtml = filtered
        .sort((a,b)=>a.term.localeCompare(b.term, "de"))
        .map(p=>{
          const teaserRaw = stripped(p.body[0]||"");
          const teaser = teaserRaw.length>160 ? teaserRaw.slice(0,160)+"…" : teaserRaw;
          return `
          <button class="place-card" onclick="jumpToPlace('${p.id}')">
            ${portraitHtml(p.img, "place-portrait")}
            <div class="place-card-body">
              <div class="place-card-head"><span class="place-name">${esc(p.term)}</span><span class="place-page">${esc(p.page)}</span></div>
              <p class="place-teaser">${esc(teaser)}</p>
            </div>
          </button>`;
        }).join("");
      extraHtml = `
      <div class="ch-cat ${isOpen?'open':''}" data-placecat="uncatalogued">
        <button class="ch-cat-head" onclick="togglePlaceCat('uncatalogued')">
          <span class="ch-cat-title">Weitere Orte</span>
          <span class="ch-cat-count">${filtered.length}${filtered.length!==uncatalogued.length?' / '+uncatalogued.length:''}</span>
          <svg class="ch-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        <div class="ch-cat-body"><div class="place-grid">${cardsHtml}</div></div>
      </div>`;
    }
  }

  document.getElementById("placesLibBody").innerHTML = `
  <div class="ch-library place-library">
    <div class="ch-lib-hero">
      <div class="eyebrow">Nachschlagewerk</div>
      <h1 class="lore-h1">Orte der Dales</h1>
      <p>${grandTotal} Orte, gruppiert nach Region — durchsuchbar über alle Kategorien hinweg. Suche nach einem Ortsnamen oder klapp eine Kategorie auf.</p>
    </div>
    <div class="ch-lib-controls">
      <input type="text" class="ch-search place-search" placeholder="Suche nach Ortsnamen …" value="${esc(state.placeSearch||"").replace(/"/g,'&quot;')}" oninput="setPlaceSearch(this.value)">
    </div>
    ${searching?`<div class="ch-search-status">${visibleTotal} Treffer</div>`:""}
    <div class="ch-cats">${catsHtml}${extraHtml}</div>
  </div>`;
}
