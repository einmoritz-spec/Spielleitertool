/* ==================================================================
   ACTION GRIMOIRE — eigenständiges Overlay-Fenster (#grimoireModal),
   analog zu #rulesModal aufgebaut: Kapitel-Gliederung mit ein-/
   ausklappbaren Einträgen, Kapitel-Filter (Chips). Bewusst NICHT über
   state.view geroutet — Overlay über der laufenden Szene, exakt wie
   das Regelglossar. Keine Cross-Links aus Szenen/Challenges (bewusst
   zurückgestellt, siehe DOKUMENTATION.md).
   Kartendesign (neu, diese Sitzung) an das Original-PDF angelehnt:
   jede Action bekommt eine eigene Karte mit klar abgesetzten Feldern
   (Action Examples als Chips, Erklärung, Power in zwei Spalten
   hilft/erschwert, Success, Extra Feats, Consequences) statt eines
   einzigen Fließtext-Blocks. Gruppen ("###"-Ebene mit mehreren
   "####"-Kindern, z. B. "Direct Attacks" in Battle) bekommen einen
   eigenen Zwischenüberschrift-Divider vor der ersten zugehörigen
   Action. Jedes der sechs Action-Kapitel (4–9) hat eine eigene
   Akzentfarbe (--ag-accent), passend zum Thema.
   ================================================================== */
const AG_CHAPTER_ACCENT = {
  "1":"var(--gold)", "2":"var(--gold)", "3":"var(--gold)",
  "4":"#c9a24b",   // Crafting — Bronze/Gold
  "5":"#c1543a",   // Battle — Rost/Rot
  "6":"#8d78c9",   // Cunning — Violett
  "7":"#6f9163",   // Exploration & Survival — Moos
  "8":"#5f92c4",   // Magic — Azur
  "9":"#c17a9e",   // Social Interaction — Altrosa
};
function renderGrimoireActionCard(it, uid, chapterNum){
  const isOpen = state.openGrimoire.has(uid);
  const searchTxt = [it.term, it.group||"", it.examples.join(" "), it.explanation.join(" "),
    it.powerHelps.join(" "), it.powerHinders.join(" "), it.success, it.extraFeats.join(" "), it.consequences.join(" ")]
    .join(" ").replace(/<[^>]+>/g," ").toLowerCase();
  const examplesHtml = it.examples.length
    ? `<div class="ag-examples">${it.examples.map(x=>`<span class="ag-example-chip">${x}</span>`).join("")}</div>` : "";
  const explHtml = it.explanation.map(p=>`<p>${p}</p>`).join("");
  const powerHtml = (it.powerHelps.length||it.powerHinders.length) ? `
    <div class="ag-power-grid">
      <div class="ag-power-col ag-power-helps">
        <div class="ag-section-label">Power <span class="ag-section-sub">— hilft</span></div>
        <ul class="ag-plain-list">${it.powerHelps.map(x=>`<li>${x}</li>`).join("")}</ul>
      </div>
      <div class="ag-power-col ag-power-hinders">
        <div class="ag-section-label ag-label-rust">Power <span class="ag-section-sub">— erschwert</span></div>
        <ul class="ag-plain-list">${it.powerHinders.map(x=>`<li>${x}</li>`).join("")}</ul>
      </div>
    </div>` : "";
  const successHtml = it.success ? `
    <div class="ag-section">
      <div class="ag-section-label">Success</div>
      <p class="ag-success-text">${it.success}</p>
    </div>` : "";
  const featsHtml = it.extraFeats.length ? `
    <div class="ag-section">
      <div class="ag-section-label">Extra Feats</div>
      <ul class="ag-plain-list">${it.extraFeats.map(x=>`<li>${x}</li>`).join("")}</ul>
    </div>` : "";
  const conseqHtml = it.consequences.length ? `
    <div class="ag-section ag-consequences">
      <div class="ag-section-label ag-label-rust">Consequences</div>
      <ul class="ag-plain-list">${it.consequences.map(x=>`<li>${x}</li>`).join("")}</ul>
    </div>` : "";
  return `
    <div class="ag-action-card ${isOpen?'open':''}" id="ag_item_${uid}" data-search="${esc(searchTxt)}" data-chapter="${chapterNum}">
      <button class="ag-action-head" onclick="toggleGrimoireItem('${uid}')">
        <div class="ag-action-term">${esc(it.term)}</div>
        <svg class="rg-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      <div class="ag-action-body-wrap"><div class="ag-action-body">
        ${examplesHtml}
        ${explHtml}
        ${powerHtml}
        ${successHtml}
        ${featsHtml}
        ${conseqHtml}
      </div></div>
    </div>`;
}
function renderGrimoireInfoCard(it, uid, chapterNum){
  const isOpen = state.openGrimoire.has(uid);
  const searchTxt = (it.term+" "+it.body.join(" ")).replace(/<[^>]+>/g," ").toLowerCase();
  return `
    <div class="rg-item ag-info-item ${isOpen?'open':''}" id="ag_item_${uid}" data-search="${esc(searchTxt)}" data-chapter="${chapterNum}">
      <button class="rg-head" onclick="toggleGrimoireItem('${uid}')">
        <span class="rg-head-text"><div class="rg-term">${esc(it.term)}</div></span>
        <svg class="rg-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      <div class="rg-body-wrap"><div class="rg-body">${it.body.map(p=>{const t=p.trim(); return (t.startsWith("<ul>")||t.startsWith("<table"))?p:`<p>${p}</p>`;}).join("")}</div></div>
    </div>`;
}
function renderGrimoireList(){
  return ACTION_GRIMOIRE.map(ch=>{
    if(state.agChapterFilter && state.agChapterFilter!==ch.num) return "";
    const introHtml = ch.intro.map(p=>{
      const t=p.trim();
      return (t.startsWith("<ul>")||t.startsWith("<table")||t.startsWith("<p>"))?p:`<p>${p}</p>`;
    }).join("");
    let lastGroup = null;
    const itemsHtml = ch.items.map((it,i)=>{
      const uid = ch.num+"_"+i;
      let groupHtml = "";
      if(it.kind==="action" && it.group && it.group!==lastGroup){
        groupHtml = `<div class="ag-group-divider">${esc(it.group)}</div>`;
        lastGroup = it.group;
      } else if(it.kind==="action" && !it.group){
        lastGroup = null;
      }
      const cardHtml = it.kind==="action" ? renderGrimoireActionCard(it, uid, ch.num) : renderGrimoireInfoCard(it, uid, ch.num);
      return groupHtml + cardHtml;
    }).join("");
    const actionCount = grimoireActionCount(ch);
    return `
    <div class="ag-chapter" id="ag_chapter_${ch.num}" style="--ag-accent:${AG_CHAPTER_ACCENT[ch.num]||"var(--gold)"}">
      <div class="ag-chapter-heading">${ch.num}. ${esc(ch.title)}${actionCount?`<span class="ag-chapter-count">${actionCount} Actions</span>`:""}</div>
      ${introHtml?`<div class="ag-chapter-intro">${introHtml}</div>`:""}
      ${itemsHtml}
    </div>`;
  }).join("");
}
function grimoireActionCount(ch){
  return ch.items.filter(it=>it.kind==="action").length;
}
const AG_CHAPTER_SHORT = {
  "1":"Einleitung", "2":"Consequences", "3":"Allgemein",
  "4":"Crafting", "5":"Battle", "6":"Cunning",
  "7":"Exploration", "8":"Magic", "9":"Social",
};
function renderGrimoireChips(){
  const allChip = `<button class="ch-role-chip ${!state.agChapterFilter?'active':''}" onclick="setAgChapterFilter(null)">Alle</button>`;
  const chips = ACTION_GRIMOIRE.map(ch=>
    `<button class="ch-role-chip ${state.agChapterFilter===ch.num?'active':''}" onclick="setAgChapterFilter('${ch.num}')" title="${esc(ch.title)}">${ch.num}. ${esc(AG_CHAPTER_SHORT[ch.num]||ch.title)}</button>`
  ).join("");
  return `<div class="ch-role-chips">${allChip}${chips}</div>`;
}
function setAgChapterFilter(num){
  state.agChapterFilter = num;
  document.getElementById("agChapterChips").innerHTML = renderGrimoireChips();
  document.getElementById("agList").innerHTML = renderGrimoireList();
  document.getElementById("agSearch").value = "";
  const total = ACTION_GRIMOIRE.reduce((n,c)=>n+c.items.length,0);
  const shown = num ? (ACTION_GRIMOIRE.find(c=>c.num===num)||{items:[]}).items.length : total;
  updateAgCount(shown, total);
}
function toggleGrimoireItem(uid){
  const el = document.getElementById("ag_item_"+uid);
  if(!el) return;
  const nowOpen = el.classList.toggle("open");
  if(nowOpen) state.openGrimoire.add(uid);
  else state.openGrimoire.delete(uid);
}
function collapseAllGrimoire(){
  document.querySelectorAll("#agList .ag-action-card.open, #agList .rg-item.open").forEach(el=> el.classList.remove("open"));
  state.openGrimoire.clear();
}
function openGrimoire(){
  document.getElementById("agChapterChips").innerHTML = renderGrimoireChips();
  document.getElementById("agList").innerHTML = renderGrimoireList();
  document.getElementById("agSearch").value = "";
  const total = ACTION_GRIMOIRE.reduce((n,c)=>n+c.items.length,0);
  updateAgCount(total, total);
  document.getElementById("grimoireModal").classList.add("open");
}
function closeGrimoire(){
  document.getElementById("grimoireModal").classList.remove("open");
}
// Öffnet das Action Grimoire direkt am gefundenen Eintrag (aus der
// Volltextsuche, siehe jumpToSearchAction) — Kapitel-Filter zurückgesetzt,
// Sprung samt kurzem Aufblitz-Highlight (rg-flash, wie beim Regelglossar).
function openGrimoireTerm(uid){
  state.agChapterFilter = null;
  state.openGrimoire.add(uid);
  document.getElementById("agChapterChips").innerHTML = renderGrimoireChips();
  document.getElementById("agList").innerHTML = renderGrimoireList();
  document.getElementById("agSearch").value = "";
  const total = ACTION_GRIMOIRE.reduce((n,c)=>n+c.items.length,0);
  updateAgCount(total, total);
  document.getElementById("grimoireModal").classList.add("open");
  requestAnimationFrame(()=>{
    const el = document.getElementById("ag_item_"+uid);
    if(el){
      el.scrollIntoView({behavior:"instant", block:"center"});
      el.classList.add("rg-flash");
      setTimeout(()=> el.classList.remove("rg-flash"), 1600);
    }
  });
}
function updateAgCount(shown, total){
  document.getElementById("agCount").textContent =
    shown===total ? `${total} Einträge` : `${shown} von ${total} Einträgen`;
}
function filterGrimoire(val){
  const q = val.trim().toLowerCase();
  if(q && state.agChapterFilter){
    // Suche wirkt kapitelübergreifend — Kapitel-Filter beim Tippen zurücksetzen
    state.agChapterFilter = null;
    document.getElementById("agChapterChips").innerHTML = renderGrimoireChips();
    document.getElementById("agList").innerHTML = renderGrimoireList();
  }
  const items = document.querySelectorAll("#agList .rg-item, #agList .ag-action-card");
  let shown = 0;
  items.forEach(el=>{
    const match = !q || el.dataset.search.includes(q);
    el.style.display = match ? "" : "none";
    if(match) shown++;
  });
  document.querySelectorAll("#agList .ag-group-divider").forEach(divEl=>{
    // Divider ausblenden, wenn alle Actions der zugehörigen Gruppe gefiltert sind
    let sib = divEl.nextElementSibling;
    let anyVisible = false;
    while(sib && !sib.classList.contains("ag-group-divider")){
      if(sib.classList.contains("ag-action-card") && sib.style.display !== "none"){ anyVisible = true; break; }
      sib = sib.nextElementSibling;
    }
    divEl.style.display = (!q || anyVisible) ? "" : "none";
  });
  document.querySelectorAll("#agList .ag-chapter").forEach(chEl=>{
    const anyVisible = !!chEl.querySelector(".rg-item:not([style*='display: none']), .ag-action-card:not([style*='display: none'])");
    chEl.style.display = (!q || anyVisible) ? "" : "none";
  });
  const total = items.length;
  updateAgCount(shown, total);
}
