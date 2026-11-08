/* ---------- general store modal ---------- */
function openStore(){
  renderGeneralStore();
  document.getElementById("storeModal").classList.add("open");
  document.getElementById("storeLibBody").scrollTop = 0;
}
function closeStore(){
  document.getElementById("storeModal").classList.remove("open");
}
function setStoreSearch(val){
  state.storeSearch = val;
  refreshGeneralStore();
}
function toggleStoreCat(key){
  if(state.openStoreCats.has(key)) state.openStoreCats.delete(key);
  else state.openStoreCats.add(key);
  refreshGeneralStore();
}
function refreshGeneralStore(){
  const body = document.getElementById("storeLibBody");
  const scrollTop = body ? body.scrollTop : 0;
  const active = document.activeElement;
  const isSearchInput = active && active.classList && active.classList.contains("store-search");
  const caret = isSearchInput ? active.selectionStart : null;
  renderGeneralStore();
  if(body) body.scrollTop = scrollTop;
  if(isSearchInput){
    const newInput = document.querySelector(".store-search");
    if(newInput){
      newInput.focus();
      if(caret!==null) newInput.setSelectionRange(caret, caret);
    }
  }
}
function renderGeneralStore(){
  const q = (state.storeSearch||"").trim().toLowerCase();
  const searching = !!q;
  let visibleTotal = 0;
  const catsHtml = GENERAL_STORE_LIBRARY.map(cat=>{
    const subsHtml = cat.subs.map(sub=>{
      const items = q ? sub.items.filter(i=>i.toLowerCase().includes(q)) : sub.items;
      visibleTotal += items.length;
      if(searching && items.length===0) return "";
      return `
      <div class="store-sub">
        <div class="store-sub-title">${esc(sub.name)}</div>
        <div class="store-items">${items.map(i=>`<span class="store-item">${esc(i)}</span>`).join("")}</div>
      </div>`;
    }).join("");
    if(searching && !subsHtml.trim()) return "";
    const isOpen = searching || state.openStoreCats.has(cat.key);
    return `
    <div class="ch-cat ${isOpen?'open':''}" data-storecat="${cat.key}">
      <button class="ch-cat-head" onclick="toggleStoreCat('${cat.key}')">
        <span class="ch-cat-title">${esc(cat.label)}</span>
        <svg class="ch-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      <div class="ch-cat-body">${subsHtml}</div>
    </div>`;
  }).join("");

  document.getElementById("storeLibBody").innerHTML = `
  <div class="ch-library">
    <div class="ch-lib-hero">
      <div class="eyebrow">Nachschlagewerk</div>
      <h1>Allgemeiner Laden</h1>
      <p>Gegenstands-Vorschläge für Backpack-/Belohnungs-Tags — aus dem Allgemeinen Laden (CBI 132), dem Laden der Dales (CBII 39, S. 126) sowie regionalen Spezialitäten. Reine Namensliste zum Aussuchen, keine Mechanik-Erklärungen. Suche nach Stichwort oder klapp eine Kategorie auf.</p>
    </div>
    <div class="ch-lib-controls">
      <input type="text" class="store-search" placeholder="Suche nach Gegenstand …" value="${esc(state.storeSearch||"").replace(/"/g,'&quot;')}" oninput="setStoreSearch(this.value)">
    </div>
    ${searching?`<div class="ch-search-status">${visibleTotal} Treffer</div>`:""}
    <div class="ch-cats">${catsHtml}</div>
  </div>`;
}
