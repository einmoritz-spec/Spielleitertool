/* ---------- Kopfzeile: anpassbar (neu, November 2026) ----------
   Jeder Knopf hat eine feste id. Per Rechtsklick lässt er sich ausblenden
   oder seine Beschriftung an-/ausschalten; im ⚙-Fenster (Taste ",") gibt es
   alle Knöpfe als Liste samt "Alles einblenden" / "Standard". Die Auswahl
   liegt in localStorage (TOPBAR_PREFS_KEY) und überlebt Reset/Neustart. */
const TOPBAR_PREFS_KEY = "woto_topbar_v1";
// label = Text hinter dem Symbol; labelDefault = ob er ohne eigene Einstellung angezeigt wird.
const TOPBAR_ITEMS = [
  { id:"profiles",  icon:"🎴", label:"Profile",       labelDefault:true,  fn:"openProfiles()",     title:"Spielerprofile der Gruppe nachschlagen (Taste P)" },
  { id:"chars",     icon:"🆕", label:"Charakter",     labelDefault:true,  fn:"openCustomChars()",  title:"Eigene Charaktere erstellen &amp; verwalten — gleiche Hero Card, gleicher Druck-Export (Taste X)" },
  { id:"npcs",      icon:"🧑", label:"NPCs",          labelDefault:true,  fn:"openCharacters()",   title:"NPC-Verzeichnis aller wichtigen NSCs nachschlagen (Taste N)" },
  { id:"rest",      icon:"🏕", label:"Rasten",        labelDefault:true,  fn:"openRestRules()",    title:"Camping- &amp; Sojourn-Regeln nachschlagen (Taste R)" },
  { id:"rules",     icon:"📖", label:"Glossar",       labelDefault:true,  fn:"openRulesGloss()",   title:"Regelglossar (Core Book, S. 231–233) nachschlagen (Taste G)" },
  { id:"grimoire",  icon:"🛠", label:"Grimoire",      labelDefault:true,  fn:"openGrimoire()",     title:"Action Grimoire (Regel-Ergänzung: Crafting, Battle, Cunning, Exploration, Magic, Social) nachschlagen (Taste A)" },
  { id:"themebook", icon:"🍃", label:"Themenbuch",    labelDefault:true,  fn:"openThemebook()",    title:"Themenbuch-Fragen zur Charaktererstellung (Origin/Adventure/Greatness) nachschlagen (Taste T)" },
  { id:"lore",      icon:"🌰", label:"Lore",          labelDefault:true,  fn:"openLore()",         title:"Alle Lore- &amp; Kern-Enthüllungen im Überblick (Taste L)" },
  { id:"store",     icon:"🛒", label:"Shop",          labelDefault:false, fn:"openStore()",        title:"Allgemeiner Laden — Gegenstands-Vorschläge für Backpack-/Belohnungs-Tags (Taste S)" },
  { id:"challenges",icon:"⚔",  label:"Challenges",    labelDefault:false, fn:"openChallenges()",   title:"Challenge-Bibliothek durchsuchen (Taste C)" },
  { id:"search",    icon:"🔍", label:"Suche",         labelDefault:false, fn:"openSearch()",       title:"Volltextsuche über alle Abenteuer (Taste F)" },
  { id:"favorites", icon:"⭐", label:"Favoriten",     labelDefault:false, fn:"openFavorites()",    title:"Favorisierte Challenges &amp; Glossareinträge (Taste V)", badge:true },
  { id:"dice",      icon:"🎲", label:"Würfel",        labelDefault:false, fn:"openDice()",         title:"Würfel- und Zufallswerkzeuge: 2W6+Power-Wurf, Yes-But-Inspiration, Zufallsnamen (Taste W)" },
  { id:"save",      icon:"📄", label:"Speichern",     labelDefault:true,  fn:"downloadAdventureSummary()", onlyInAdventure:true, title:"Zusammenfassung dieses Abenteuers als PDF (Notizen + angeklickte Limits/Vignetten) — lädt zusätzlich eine komplette Sicherungskopie dieser Tafel mit dem aktuellen Sitzungsstand herunter" },
  { id:"reset",     icon:"↺",  label:"Zurücksetzen",  labelDefault:false, fn:"resetAllProgress()", title:"Gespeicherten Fortschritt (Limits, Vignetten, Notizen, letzte Position) vollständig zurücksetzen" },
];
let topbarPrefs = { hidden:{}, label:{} };
function loadTopbarPrefs(){
  try{
    const p = JSON.parse(localStorage.getItem(TOPBAR_PREFS_KEY) || "null");
    if(p && typeof p==="object") return { hidden:(p.hidden&&typeof p.hidden==="object")?p.hidden:{}, label:(p.label&&typeof p.label==="object")?p.label:{} };
  }catch(e){}
  return { hidden:{}, label:{} };
}
function saveTopbarPrefs(){
  try{ localStorage.setItem(TOPBAR_PREFS_KEY, JSON.stringify(topbarPrefs)); }catch(e){}
}
function tbIsHidden(id){ return !!topbarPrefs.hidden[id]; }
function tbShowsLabel(it){
  const v = topbarPrefs.label[it.id];
  return typeof v==="boolean" ? v : it.labelDefault;
}
function refreshTopbar(){
  const old = document.querySelector(".topbar");
  if(!old) return;
  const tmp = document.createElement("div");
  tmp.innerHTML = renderTopbar().trim();
  old.replaceWith(tmp.firstElementChild);
  updateFavBadge();
}
function setTopbarHidden(id, hide){
  if(hide) topbarPrefs.hidden[id] = true; else delete topbarPrefs.hidden[id];
  saveTopbarPrefs(); refreshTopbar(); refreshTopbarSettings();
}
function setTopbarLabel(id, on){
  topbarPrefs.label[id] = !!on;
  saveTopbarPrefs(); refreshTopbar(); refreshTopbarSettings();
}
function showAllTopbar(){
  topbarPrefs.hidden = {};
  saveTopbarPrefs(); refreshTopbar(); refreshTopbarSettings();
}
function resetTopbarPrefs(){
  topbarPrefs = { hidden:{}, label:{} };
  saveTopbarPrefs(); refreshTopbar(); refreshTopbarSettings();
}

function renderTopbar(){
  const advOpen = state.view==="adventure" && state.advId;
  const btns = TOPBAR_ITEMS
    .filter(it => !tbIsHidden(it.id) && (!it.onlyInAdventure || advOpen))
    .map(it => `<button class="rest-btn" data-tb="${it.id}" onclick="${it.fn}" title="${it.title}${tbShowsLabel(it)?'':' — '+it.label}">${it.icon}${tbShowsLabel(it)?`<span class="tb-label">${it.label}</span>`:''}${it.badge?'<span class="fav-badge" id="favBadgeCount"></span>':''}</button>`)
    .join("");
  return `
  <div class="topbar">
    <button class="brand" onclick="goOverview()"><span class="raven-icon">${RAVEN_SVG}</span>${CAMPAIGN_TITLE}</button>
    <div class="topbar-spacer"></div>
    <div class="topbar-actions">
      ${btns}
      <button class="rest-btn tb-settings" onclick="openTopbarSettings()" title="Kopfzeile anpassen (Taste ,) — Rechtsklick auf einen Knopf: ausblenden / Beschriftung">⚙</button>
    </div>
  </div>`;
}

/* Rechtsklick-Menü */
function closeTopbarMenu(){
  const m = document.getElementById("tbMenu");
  if(m) m.remove();
}
function showTopbarMenu(x, y, id){
  closeTopbarMenu();
  const it = TOPBAR_ITEMS.find(i=>i.id===id);
  const m = document.createElement("div");
  m.id = "tbMenu"; m.className = "tb-menu";
  m.innerHTML = (it ? `
      <div class="tb-menu-head">${it.icon} ${it.label}</div>
      <button onclick="setTopbarLabel('${it.id}', ${!tbShowsLabel(it)}); closeTopbarMenu();">${tbShowsLabel(it)?'Beschriftung ausblenden':'Beschriftung einblenden'}</button>
      <button onclick="setTopbarHidden('${it.id}', true); closeTopbarMenu();">Knopf ausblenden</button>
      <hr>` : `<div class="tb-menu-head">Kopfzeile</div>`) + `
      <button onclick="closeTopbarMenu(); openTopbarSettings();">⚙ Kopfzeilen-Einstellungen …</button>`;
  document.body.appendChild(m);
  const r = m.getBoundingClientRect();
  m.style.left = Math.max(6, Math.min(x, window.innerWidth - r.width - 6)) + "px";
  m.style.top  = Math.max(6, Math.min(y, window.innerHeight - r.height - 6)) + "px";
}
document.addEventListener("contextmenu", (e)=>{
  const bar = e.target.closest && e.target.closest(".topbar");
  if(!bar) return;
  e.preventDefault();
  const btn = e.target.closest("[data-tb]");
  showTopbarMenu(e.clientX, e.clientY, btn ? btn.getAttribute("data-tb") : null);
});
document.addEventListener("click", (e)=>{
  if(!(e.target.closest && e.target.closest("#tbMenu"))) closeTopbarMenu();
});
window.addEventListener("scroll", closeTopbarMenu, true);
window.addEventListener("resize", closeTopbarMenu);

/* Einstellungs-Fenster */
function renderTopbarSettingsBody(){
  const rows = TOPBAR_ITEMS.map(it=>{
    const hid = tbIsHidden(it.id);
    return `<div class="tb-set-row ${hid?'is-hidden':''}">
      <span class="tb-set-name">${it.icon} ${it.label}${it.onlyInAdventure?' <span style="color:var(--text-faint);font-size:11px;">(nur im Abenteuer)</span>':''}</span>
      <label><input type="checkbox" ${hid?'':'checked'} onchange="setTopbarHidden('${it.id}', !this.checked)"> Sichtbar</label>
      <label><input type="checkbox" ${tbShowsLabel(it)?'checked':''} ${hid?'disabled':''} onchange="setTopbarLabel('${it.id}', this.checked)"> Beschriftung</label>
    </div>`;
  }).join("");
  const nHidden = Object.keys(topbarPrefs.hidden).filter(id=>topbarPrefs.hidden[id]).length;
  return `
    <div class="gm-eyebrow">Einstellungen</div>
    <div class="gm-title">Kopfzeile anpassen</div>
    <div class="gm-body">
      <p style="font-size:13px;">Tipp: Rechtsklick auf einen Knopf in der Kopfzeile blendet ihn aus oder schaltet seine Beschriftung um. Dieses Fenster öffnest du auch mit der Taste <b>,</b></p>
      <div class="tb-set-head"><span>Knopf</span><span>Anzeige</span><span>Text</span></div>
      <div class="tb-set-list">${rows}</div>
      <div class="tb-set-actions">
        <button class="collapse-all-btn" onclick="showAllTopbar()" ${nHidden?'':'disabled'}>Alle einblenden</button>
        <button class="collapse-all-btn" onclick="resetTopbarPrefs()">↺ Auf Standard zurücksetzen</button>
      </div>
      <div class="tb-set-section">Gruppenprofile</div>
      <div class="tb-set-actions">
        <button class="collapse-all-btn" onclick="restorePartyProfiles()" ${HIDDEN_PARTY.size?'':'disabled'}>↺ Gelöschte Gruppenprofile wiederherstellen${HIDDEN_PARTY.size?` (${HIDDEN_PARTY.size})`:''}</button>
      </div>
    </div>`;
}
function refreshTopbarSettings(){
  const modal = document.getElementById("topbarSettingsModal");
  if(modal && modal.classList.contains("open")){
    document.getElementById("topbarSettingsBody").innerHTML = renderTopbarSettingsBody();
  }
}
function openTopbarSettings(){
  document.getElementById("topbarSettingsBody").innerHTML = renderTopbarSettingsBody();
  document.getElementById("topbarSettingsModal").classList.add("open");
}
function closeTopbarSettings(){
  const m = document.getElementById("topbarSettingsModal");
  if(m) m.classList.remove("open");
}
