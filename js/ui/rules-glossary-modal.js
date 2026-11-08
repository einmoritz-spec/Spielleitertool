/* ---------- rules glossary modal ---------- */
// Kategorien fürs Regelglossar (neu, Juli 2026) — rein zur übersichtlicheren
// Gliederung/Filterung, ändert nichts an der zugrunde liegenden, weiterhin
// alphabetisch sortierten RULES_GLOSSARY-Datenliste. A=Spielablauf & Aktionen,
// B=Tags, Status & Power, C=Themes & Wachstum, D=Struktur & Fellowship.
const RG_CATS = ["A","B","C","D"];
const RG_CAT_LABEL = {
  A:"Spielablauf & Aktionen", B:"Tags, Status & Power",
  C:"Themes & Wachstum", D:"Struktur & Fellowship",
};
// Eigenständiges Overlay-Fenster (wie #mapModal), NICHT über state.view
// geroutet — ein Klick während einer laufenden Adventure-Szene darf
// nicht aus dieser herauswerfen. Das Suchfeld filtert per direkter
// DOM-Manipulation (style.display), OHNE render()/innerHTML auf dem
// Input selbst — das Eingabefeld wird dadurch nie neu erzeugt und
// verliert beim Tippen nie den Fokus (siehe Bugfix-Changelog zum
// Challenge-Suchfeld: dort war genau das die Ursache für den
// "nach jedem Buchstaben rausgeworfen"-Fehler).
function renderRuleItem(g, i){
  const isOpen = state.openRules.has(i);
  return `
    <div class="rg-item ${isOpen?'open':''}" id="rg_item_${i}" data-cat="${g.cat}" data-search="${esc(g.term).toLowerCase()+' '+esc(g.en).toLowerCase()}">
      <button class="rg-head" onclick="toggleRuleItem(${i})">
        <span class="rg-head-text">
          <div class="rg-term">${esc(g.term)}</div>
          ${g.page?`<div class="rg-page">${esc(g.page)}</div>`:""}
        </span>
        <svg class="rg-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      <div class="rg-body-wrap"><div class="rg-body">${g.body.map(p=>{const t=p.trim(); return (t.startsWith("<ul>")||t.startsWith("<table")||t.startsWith('<span class="section-heading"'))?p:`<p>${p}</p>`;}).join("")}</div></div>
    </div>`;
}
// Gruppiert die (weiterhin alphabetisch geführte) RULES_GLOSSARY-Liste zur
// Anzeige nach vier fachlichen Kategorien (RG_CATS), innerhalb jeder Gruppe
// alphabetisch nach dem deutschen Begriff sortiert — reine Anzeige-Ebene
// über einem Original-Index (i), der weiterhin für openRules/toggleRuleItem/
// den Sprung aus der Volltextsuche verwendet wird (neu, Juli 2026).
function renderRulesGlossaryList(){
  const withIdx = RULES_GLOSSARY.map((g,i)=>({g,i}));
  return RG_CATS.map(cat=>{
    const items = withIdx.filter(x=>x.g.cat===cat).sort((a,b)=>a.g.term.localeCompare(b.g.term,"de"));
    if(!items.length) return "";
    return `
    <div class="rg-cat-group" id="rg_cat_${cat}">
      <div class="rg-cat-heading">${RG_CAT_LABEL[cat]}<span class="ag-chapter-count">${items.length} Begriffe</span></div>
      ${items.map(x=>renderRuleItem(x.g, x.i)).join("")}
    </div>`;
  }).join("");
}
function renderRulesCatChips(){
  const allChip = `<button class="ch-role-chip ${!state.rgCatFilter?'active':''}" onclick="setRgCatFilter(null)">Alle</button>`;
  const chips = RG_CATS.map(cat=>
    `<button class="ch-role-chip ${state.rgCatFilter===cat?'active':''}" onclick="setRgCatFilter('${cat}')">${RG_CAT_LABEL[cat]}</button>`
  ).join("");
  return `<div class="ch-role-chips">${allChip}${chips}</div>`;
}
function setRgCatFilter(cat){
  state.rgCatFilter = cat;
  document.getElementById("rgCatChips").innerHTML = renderRulesCatChips();
  document.getElementById("rgSearch").value = "";
  filterRulesGloss("");
}
// Klappt einen einzelnen Regelglossar-Eintrag auf/zu (analog zu
// toggleChallenge) — direkt am DOM, damit Scrollposition und Suchfilter
// unangetastet bleiben (neu, Juli 2026).
function toggleRuleItem(i){
  const el = document.getElementById("rg_item_"+i);
  if(!el) return;
  const nowOpen = el.classList.toggle("open");
  if(nowOpen) state.openRules.add(i);
  else state.openRules.delete(i);
}
// Klappt alle offenen Regelglossar-Einträge wieder ein (analog zu
// collapseAllChallenges) — neu, Juli 2026.
function collapseAllRules(){
  document.querySelectorAll("#rgList .rg-item.open").forEach(el=>{
    el.classList.remove("open");
  });
  state.openRules.clear();
}
function openRulesGloss(){
  state.rgCatFilter = null;
  document.getElementById("rgCatChips").innerHTML = renderRulesCatChips();
  document.getElementById("rgList").innerHTML = renderRulesGlossaryList();
  document.getElementById("rgSearch").value = "";
  updateRgCount(RULES_GLOSSARY.length, RULES_GLOSSARY.length);
  document.getElementById("rulesModal").classList.add("open");
}
// Öffnet das Regelglossar direkt am gefundenen Begriff (aus der
// Volltextsuche, siehe jumpToSearchRule) — Liste ungefiltert, Sprung samt
// kurzem Aufblitz-Highlight, damit der Treffer in der langen Liste auffällt.
function openRuleTerm(ruleIdx){
  state.rgCatFilter = null;
  state.openRules.add(ruleIdx);
  document.getElementById("rgCatChips").innerHTML = renderRulesCatChips();
  document.getElementById("rgList").innerHTML = renderRulesGlossaryList();
  document.getElementById("rgSearch").value = "";
  updateRgCount(RULES_GLOSSARY.length, RULES_GLOSSARY.length);
  document.getElementById("rulesModal").classList.add("open");
  requestAnimationFrame(()=>{
    const el = document.getElementById("rg_item_"+ruleIdx);
    if(el){
      el.scrollIntoView({behavior:"instant", block:"center"});
      el.classList.add("rg-flash");
      setTimeout(()=> el.classList.remove("rg-flash"), 1600);
    }
  });
}
function closeRulesGloss(){
  document.getElementById("rulesModal").classList.remove("open");
}
function updateRgCount(shown, total){
  document.getElementById("rgCount").textContent =
    shown===total ? `${total} Begriffe` : `${shown} von ${total} Begriffen`;
}
function filterRulesGloss(val){
  const q = val.trim().toLowerCase();
  const items = document.querySelectorAll("#rgList .rg-item");
  let shown = 0, total = 0;
  items.forEach(el=>{
    const catOk = !state.rgCatFilter || el.dataset.cat===state.rgCatFilter;
    if(catOk) total++;
    const match = catOk && (!q || el.dataset.search.includes(q));
    el.style.display = match ? "" : "none";
    if(match) shown++;
  });
  document.querySelectorAll("#rgList .rg-cat-group").forEach(groupEl=>{
    const anyVisible = !!groupEl.querySelector(".rg-item:not([style*='display: none'])");
    groupEl.style.display = anyVisible ? "" : "none";
  });
  updateRgCount(shown, total);
}
